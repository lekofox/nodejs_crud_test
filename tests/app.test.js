import { test } from "media-typer";
import supertest from "supertest";
import app from '../src/app'


test('É possível retornar o usuário filtrado por nome e/ou sobrenome')