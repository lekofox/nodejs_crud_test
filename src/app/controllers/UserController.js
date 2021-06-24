import User from '../models/user';
import * as Yup from 'yup';
import { Op, where } from 'sequelize';

class UserController {
  async store(req, res) {

    const schema = await Yup.object().shape({
      id: Yup.number(),
      name: Yup.string().required(),
      lastName: Yup.string().required(),
      nickname: Yup.string().required(),
      address: Yup.string().required(),


    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({
        message: 'Falha ao cadastrar usuário; Por favor corrija os dados para alteração',
      });
    }

    const userExist = await User.findOne({
      where: { nickname: req.body.nickname }
    });

    if (userExist) {
      return res.status(400).json({ error: 'Usuário já existe no sistema' });
    }

    const {  name, lastName, nickname, address, bio } =
      await User.create(req.body);

    return res.json({
      
      name,
      lastName,
      nickname,
      address,
      bio,
    });
  }

  async UserByRef(req, res) {
    const { name_surname } = req.params;
    const selectedUser = await User.findAll({

      where: {

        [Op.or]: [
          { name: name_surname },
          { lastName: name_surname }
        ]

      }
    });
    if (selectedUser == '') {
      return res.status(404).json({ error: 'Nenhum usuário encontrado com esse nome e/ou sobrenome' });
    }
    return res.status(200).json([selectedUser]);
  }

  async UserByNickname(req, res) {
    const { nickname } = req.params;

    const selectedUser = await User.findOne({
      attributes: ['name', 'lastName', 'nickname'],
      where: { nickname: nickname }

    })

    if (!selectedUser) {
      return res.status(404).json({ error: 'Nenhum usuário encontrado com esse apelido' });
    }
    return res.status(200).json([selectedUser]);
  }

  async update(req, res) {
    const { id } = req.params;
    const idUser = await User.findByPk(id);

    const schema = await Yup.object().shape({
      lastName: Yup.string().required(),
      address: Yup.string().required(),


    });

    if (!idUser)
      return res.status(404).json({
        message: 'Erro ao atualizar usuário; ID selecionado não existe em nossa base',
      });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({
        message: 'Falha na validação; Cheque os dados, por favor.',
      });
    }
    else {
      const { name, lastName, nickname, address, bio } =
        await idUser.update(req.body);

      return res.json({
        id,
        name,
        lastName,
        nickname,
        address,
        bio,
      });
    }
  }

  async updateNickname(req, res) {
    const { id } = req.params;
    const { nickname} = req.body
    const idUser = await User.findByPk(id);
    const uniqueNickname = await User.findAndCountAll({
      where: {nickname:nickname}}
    )
    
    
    const schema = await Yup.object().shape({
      nickname: Yup.string().required(),
    });
    if (!idUser)
    return res.status(404).json({
      message: 'Erro ao atualizar usuário; ID selecionado não existe em nossa base',
    });

    if (uniqueNickname.count > 0){
      return res.status(400).json({
        message: 'Apelido já existe.'
      })

    

    }else if (!(await schema.isValid(req.body))) {
      return res.status(400).json({
        message: 'Falha na validação; Altere seu apelido, por favor.',
      });


      
    }
    else {
      const { name, lastName, nickname, address, bio } =
        await idUser.update(req.body);

      return res.json({

        name,
        lastName,
        nickname,
        address,
        bio,
      });
    }
  }

  async delete(req, res) {
    const { id } = req.params;

    const idUser = await User.findByPk(id);
    if (!idUser)
      return res.status(404).json({
        message: 'Erro ao remover; ID selecionado não existe na base',
      });
    await User.destroy({ where: { id } });
    return res.json({
      message: 'Usuário removido com sucesso',
    });
  }



}

export default new UserController();
