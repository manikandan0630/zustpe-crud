const CrudModel = require("../model/CRUD");

// Create a new record
const createRecord = async (req, res) => {
    const { rollnumber, name, dob,file } = req.body;
  
    try {
        const newRecord = await CrudModel.create({ rollnumber, name, dob, file });
        res.status(201).json({ message: 'Record created successfully', newRecord });
    } catch (error) {
        res.status(400).json({ message: 'Error creating record', error: error.message });
    }
};

// Get all records
const getAllRecords = async (req, res) => {
    try {
        const records = await CrudModel.find();
        res.status(200).json(records);
    } catch (error) {
        res.status(400).json({ message: 'Error fetching records', error: error.message });
    }
};

// Get a single record by ID
const getRecordById = async (req, res) => {
    try {
        const { id } = req.params;
        const record = await CrudModel.findById(id);
        if (!record) {
            return res.status(404).json({ message: 'Record not found' });
        }
        res.status(200).json(record);
    } catch (error) {
        res.status(400).json({ message: 'Error fetching record', error: error.message });
    }
};

// Update a record by ID
const updateRecord = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = { ...req.body };

        
        if (req.file) {
            updatedData.file = req.file.path; 
        }

        const updatedRecord = await CrudModel.findByIdAndUpdate(id, updatedData, { new: true, runValidators: true });
        if (!updatedRecord) {
            return res.status(404).json({ message: 'Record not found' });
        }
        res.status(200).json({ message: 'Record updated successfully', updatedRecord });
    } catch (error) {
        res.status(400).json({ message: 'Error updating record', error: error.message });
    }
};

// Delete a record by ID
const deleteRecord = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedRecord = await CrudModel.findByIdAndDelete(id);
        if (!deletedRecord) {
            return res.status(404).json({ message: 'Record not found' });
        }
        res.status(200).json({ message: 'Record deleted successfully', deletedRecord });
    } catch (error) {
        res.status(400).json({ message: 'Error deleting record', error: error.message });
    }
};

module.exports = {
    createRecord,
    getAllRecords,
    getRecordById,
    updateRecord,
    deleteRecord,
};
