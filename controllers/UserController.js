"use strict";

const db = require("../models");

exports.post = (req, res, next) => {
  const user = {
    nome: req.body.nome,
    email: req.body.email,
  };
  db.user
    .create(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Não foi possível criar o usuário",
      });
    });
};

exports.get = (req, res, next) => {
  db.user
    .findAll({ where: null })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Não foi possível recuperar usuários",
      });
    });
};

exports.put = (req, res, next) => {
  const id = req.params.id;

  db.user
    .update(req.body, {
      where: { id: id },
    })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Usuário atualizado com sucesso",
        });
      } else {
        res.send({
          message: `Não foi possível atualizar id=${id}. Usuário não atualizado. body empty`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Não foi possível atualiza id=" + id,
      });
    });
};

exports.delete = (req, res, next) => {
  const id = req.params.id;

  db.user
    .destroy({
      where: { id: id },
    })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Usuário deletado com sucesso",
        });
      } else {
        res.send({
          message: `Não foi possível deletar id=${id}. Usuário não encontrado`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Não foi possível deletar id=" + id,
      });
    });
};

exports.findId = (req, res, next) => {
  const id = req.params.id;
  var condition = id ? { id: id } : null;
  db.user
    .findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};
