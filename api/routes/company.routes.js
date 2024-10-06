module.exports = app => {
    const company = require("../controllers/company.controller.js");
  
    var router = require("express").Router();
  
    router.post("/companies", company.create);
  
    router.get("/companies", company.findAll);
  
    router.get("/companies/:companyId", company.findOne);
  
    router.put("/companies/:companyId", company.update);
  
    router.delete("/companies/:companyId", company.delete);
  
    app.use('/api', router);
};