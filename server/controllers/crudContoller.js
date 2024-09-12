const CrudModel = require("../model/CRUD");

//create

const Create = async (req, res) => {
  const { username, email, age } = req.body;

  try {
    const create = await CrudModel.create({ username, email, age });
    if (create) {
      res.json({
        Message: "created Successfully",
      });
    }
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};
//read

const read = async (req, res) => {
  try {
    const data = await CrudModel.find();
    if (data) {
      res.json(data);
    }
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

//update read
const UpdateRead = async (req, res) => {
  //geting id from frontEnd
  const { id } = req.params;
  try {
    const findData = await CrudModel.findById(id);

    if (findData) {
      res.json({
        findData,
      });
    }
  } catch (error) {
    res.json({
      messgae: error.message,
    });
  }
};
//update

const Update = async (req, res) => {
  const id = req.params.id;

  const { username, email, age } = req.body;

  try {
    const update = await CrudModel.updateOne(
      { _id: id },
      {
        $set: { username: username, email: email, age: age },
      }
    );

    if (update) {
      res.json("Updates successfully");
    }
  } catch (error) {
    res.json({
      messgae: error.message,
    });
  }
};

//delete
const Delete = async (req, res) => {
  const id = req.params.id;

  try {
    const remove = await CrudModel.deleteOne({ _id: id });
    if (remove) {
      res.json({
        message: "Deleted successfully",
      });
    }
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};
module.exports = {
  Create,
  read,
  Update,
  UpdateRead,
  Delete,
};
