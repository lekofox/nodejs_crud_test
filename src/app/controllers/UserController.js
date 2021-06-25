import User from '../models/user'
import * as Yup from 'yup'
import sequelize, { Op } from 'sequelize'
import { v4 as uuidv4 } from 'uuid'

class UserController {
  async store (req, res) {
    const schema = await Yup.object().shape({
      id: Yup.string(),
      name: Yup.string().required(),
      lastName: Yup.string().required(),
      nickname: Yup.string().required(),
      address: Yup.string().required(),
      bio: Yup.string()

    })

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({
        message: 'Falha ao cadastrar usuário; Por favor corrija os dados para alteração'
      })
    }

    const userExist = await User.findOne({
      where: { nickname: req.body.nickname }
    })

    if (userExist) {
      return res.status(400).json({ error: 'Usuário já existe no sistema' })
    }

    const id = uuidv4()

    const { name, lastName, nickname, address, bio } = req.body
    if (nickname.length > 30) {
      return res.status(400).json({
        message: 'O apelido não pode conter mais que 30 caracteres.'
      })
    } else if (bio !== undefined && bio.length > 100) {
      return res.status(400).json({
        message: 'A biografia não pode conter mais que 100 caracteres'
      })
    } else {
      await User.create({ id, name, lastName, nickname, address, bio })

      return res.json({
        id,
        name,
        lastName,
        nickname,
        address,
        bio
      })
    }
  }

  async userByRef (req, res) {
    const { nameSurname } = req.params
    const selectedUsers = await User.findAll({

      where: {

        [Op.or]: {

          [Op.or]: [
            { name: nameSurname },
            { lastName: nameSurname }

          ],
          [Op.and]: {
            query: sequelize.where(
              sequelize.fn(
                'concat',
                sequelize.col('name'),
                ' ',
                sequelize.col('lastName')
              ),
              {
                [sequelize.Op.like]: nameSurname
              }
            )

          }

        }
      }
    })

    // eslint-disable-next-line eqeqeq
    if (selectedUsers == '') {
      return res.status(404).json({ message: 'Nenhum usuário encontrado com esse nome e/ou sobrenome' })
    }
    return res.status(200).json(selectedUsers)
  }

  async userByNickname (req, res) {
    const { nickname } = req.params

    const selectedUser = await User.findOne({
      attributes: ['name', 'lastName', 'nickname'],
      where: { nickname: nickname }

    })

    if (!selectedUser) {
      return res.status(404).json({ error: 'Nenhum usuário encontrado com esse apelido' })
    }
    return res.status(200).json([selectedUser])
  }

  async update (req, res) {
    const { id } = req.params
    const idUser = await User.findByPk(id)

    const schema = await Yup.object().shape({
      lastName: Yup.string().required(),
      address: Yup.string().required()

    })

    if (!idUser) {
      return res.status(404).json({
        message: 'Erro ao atualizar usuário; ID selecionado não existe em nossa base'
      })
    }

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({
        message: 'Falha na validação; Cheque os dados, por favor.'
      })
    } else {
      const { name, lastName, nickname, address, bio } =
        await idUser.update(req.body)

      return res.json({
        id,
        name,
        lastName,
        nickname,
        address,
        bio
      })
    }
  }

  async updateNickname (req, res) {
    const { id } = req.params
    const { nickname } = req.body
    const idUser = await User.findByPk(id)
    const uniqueNickname = await User.findAndCountAll({
      where: { nickname: nickname }
    }
    )

    const schema = await Yup.object().shape({
      nickname: Yup.string().required()
    })
    if (!idUser) {
      return res.status(404).json({
        message: 'Erro ao atualizar usuário; ID selecionado não existe em nossa base'
      })
    }

    if (uniqueNickname.count > 0) {
      return res.status(400).json({
        message: 'Apelido já existe.'
      })
    } else if (!(await schema.isValid(req.body))) {
      return res.status(400).json({
        message: 'Falha na validação; Insira seu apelido, por favor.'
      })
    } else if (nickname.length > 30) {
      return res.status(400).json({
        message: 'O apelido não pode conter mais que 30 caracteres.'
      })
    } else {
      const { name, lastName, nickname, address, bio } =
        await idUser.update(req.body)

      return res.json({

        name,
        lastName,
        nickname,
        address,
        bio
      })
    }
  }

  async delete (req, res) {
    const { id } = req.params

    const idUser = await User.findByPk(id)
    if (!idUser) {
      return res.status(404).json({
        message: 'Erro ao remover; ID selecionado não existe na base'
      })
    }
    await User.destroy({ where: { id } })
    return res.status(200).json({
      message: 'Usuário removido com sucesso'
    })
  }
}

export default new UserController()
