import Record from "../models/record.model";
import { getPagination } from "../utils/pagination";

export const createRecord = async (data: any, userId: string) => {
  return Record.create({ ...data, createdBy: userId });
};

export const getRecords = async (query: any) => {
  const {
    page = 1,
    limit = 10,
    type,
    category,
    startDate,
    endDate
  } = query;

  const filter: any = {};

  if (type) filter.type = type;
  if (category) filter.category = category;

  if (startDate || endDate) {
    filter.date = {};
    if (startDate) filter.date.$gte = new Date(startDate);
    if (endDate) filter.date.$lte = new Date(endDate);
  }

  const { skip } = getPagination(page, limit);

  const data = await Record.find(filter)
    .skip(skip)
    .limit(limit)
    .sort({ date: -1 });

  const total = await Record.countDocuments(filter);

  return {
    data,
    total,
    page: Number(page),
    limit: Number(limit)
  };
};
// services/record.service.ts

export const updateRecord = async (id: string, data: any) => {
  return Record.findByIdAndUpdate(id, data, { new: true });
};

export const deleteRecord = async (id: string) => {
  return Record.findByIdAndUpdate(id, { isDeleted: true });
};