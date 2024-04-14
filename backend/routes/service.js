import express from "express";
import {
  get,
  getWithQuery,
  AddService,
  EditService,
  deleteService

} from "../controllers/service.js";
const router = express.Router();

//router.post("/create", CreateService);
router.get("/", get);
router.post("/add", AddService);
router.post("/edit", EditService);
router.post("/delete", deleteService);
router.post("/query", getWithQuery);
//router.get("/get/byId", ReadServiceById);
// router.get("/get/byPersonalId", ReadCustomerByPersonalId);
// router.get("/get/byPhoneNumber", ReadCustomerByPhoneNumber);
// router.get("/get/totalSpent", ReadCustomerTotalSpent);
// router.post("/update", UpdateServive);
// router.post("/delete", DeleteService);

export default router;