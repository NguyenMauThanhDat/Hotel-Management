import db from "../db.js";

export const get = async (req, res) => {
    try {
      const data = await db("SELECT * FROM Service");
      res.send(data);
    } catch (err) {
      console.log(err);
    }
  };

  export const getWithQuery = async (req, res) =>{
    let {serviceid} = req.query
    let FinalQuery = 'SELECT * FROM Service WHERE NOT(Service.ServiceId IS NULL)'

    if (serviceid) {
        FinalQuery += ` AND ServiceId = ${serviceid}`;
    }
    
    FinalQuery += `;`;
    console.table(FinalQuery);
    
    try {
        const data = await db(FinalQuery);
        
        res.json(data);
      } catch (err) {
        console.log(err);
      }
}


  //Thêm dịch vụ
  export const AddService = async (req, res) => {
    let {item} = req.body;

    let FinalQuery = `INSERT INTO Service
    ( ServiceId, Name, Price, Description)
    VALUES
        (   
            '${item.ServiceId}',
            '${item.Name}',
            '${item.Price}',
            '${item.Description}' 
        );
        SELECT * FROM Service WHERE ServiceId = '${item.ServiceId}' `;
    try
    {
        const data = await db(FinalQuery);
        res.json(data);
    }
    catch (err) {
        console.log(err);
    }
}

//Sửa dịch vụ
export const EditService = async (req, res) => {
    let item = req.body.item;
    let finalQ = `UPDATE Service
      SET 
          ServiceId = ${item.ServiceId},
          Name = ${item.Name},
          Price = '${item.Price}',
          Description = '${item.Description}',
      WHERE ServiceId ='${item.ServiceId}';`;
    console.log(finalQ);
    try {
      const data = await db(finalQ);
      res.json(`Update item: ${item.ServiceId} success!!! `);
    } catch (err) {
      console.log(err);
    }
  };

  //Xóa dịch vụ
  export const deleteService = async (req,res)=>{
    let {ServiceId} = item.query
    let finalQ = `DELETE FROM Service WHERE ServiceId = ${ServiceId}`
    try {
      const data = await db(finalQ);
      res.json("Delete Service success");
    } catch (err) {
      console.log("err", err);
    }

  

}