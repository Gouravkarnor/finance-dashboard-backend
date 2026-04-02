import * as recordService from "../services/record.service";

// CREATE
export const createRecord = async (req: any, res: any) => {
  try {
    const record = await recordService.createRecord(
      req.body,
      req.user.id
    );

    res.status(201).json({
      success: true,
      message: "Record created successfully",
      data: record
    });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      message: err.message || "Failed to create record"
    });
  }
};

// GET ALL
export const getRecords = async (req: any, res: any) => {
  try {
    const data = await recordService.getRecords(req.query);

    res.status(200).json({
      success: true,
      message: "Records fetched successfully",
      data
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "Failed to fetch records"
    });
  }
};

// UPDATE
export const updateRecord = async (req: any, res: any) => {
  try {
    const record = await recordService.updateRecord(
      req.params.id,
      req.body
    );

    if (!record) {
      return res.status(404).json({
        success: false,
        message: "Record not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Record updated successfully",
      data: record
    });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      message: err.message || "Failed to update record"
    });
  }
};

// DELETE
export const deleteRecord = async (req: any, res: any) => {
  try {
    const record = await recordService.deleteRecord(req.params.id);

    if (!record) {
      return res.status(404).json({
        success: false,
        message: "Record not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Record deleted successfully"
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "Failed to delete record"
    });
  }
};