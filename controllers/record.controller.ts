import * as recordService from "../services/record.service";

export const createRecord = async (req: any, res: any) => {
  try {
    const record = await recordService.createRecord(
      req.body,
      req.user.id
    );
    res.status(201).json(record);
  } catch (err: any) {
    res.status(400).json({
      message: err.message || "Failed to create record"
    });
  }
};

export const getRecords = async (req: any, res: any) => {
  try {
    const data = await recordService.getRecords(req.query);
    res.status(200).json(data);
  } catch (err: any) {
    res.status(500).json({
      message: err.message || "Failed to fetch records"
    });
  }
};

export const updateRecord = async (req: any, res: any) => {
  try {
    const record = await recordService.updateRecord(
      req.params.id,
      req.body
    );

    if (!record) {
      return res.status(404).json({ message: "Record not found" });
    }

    res.status(200).json(record);
  } catch (err: any) {
    res.status(400).json({
      message: err.message || "Failed to update record"
    });
  }
};

export const deleteRecord = async (req: any, res: any) => {
  try {
    const record = await recordService.deleteRecord(req.params.id);

    if (!record) {
      return res.status(404).json({ message: "Record not found" });
    }

    res.status(200).json({ message: "Record deleted" });
  } catch (err: any) {
    res.status(500).json({
      message: err.message || "Failed to delete record"
    });
  }
};