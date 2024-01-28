/* eslint-disable no-undef */

const { delay } = require('../utils');
module.exports = (app) => {
  const teams_all = require('../data/teams.json')


  app.get('/master/get-teams', async (req, res) => {
      await delay(2000);
      res.setHeader('Items-Offset', 0);
      res.setHeader('Items-Limit', 10);
      res.setHeader('Items-Total', 24);
      res.json(teams_all);
  });
  app.post('/master/create-team', async (req, res) => {
    await delay(2000);
    res.json({
      "is_success": true,
      "code": "201",
      "message": "Created",
      "data": {
          "id": 30,
          "company_id": {
              "id": 1,
              "company_code": "1000",
              "name_th": "บริษัท แผ่นดินทอง พร็อพเพอร์ตี้ ดีเวลลอปเม้นท์ จำกัด (มหาชน)",
              "name_en": "Golden Land Property Development PLC.",
              "taxpayer_id_number": "0107537002273",
              "address_th": "944 มิตรทาวน์ ออฟฟิศ ทาวเวอร์ ชั้นที่ 20 ถนนพระราม 4 แขวงวังใหม่ เขตปทุมวัน กรุงเทพมหานคร 10330",
              "address_en": "20th Floor, Mitrtown Office Tower 944 Rama 4 Road, Wangmai, Pathumwan, Bangkok 10330",
              "business_unit": {
                  "id": 1,
                  "name_th": "Commercial",
                  "name_en": "Commercial",
                  "purchasing_organization": "GL00"
              },
              "is_active": true,
              "created_at": "2023-09-25T16:45:06Z",
              "created_user_id": 1,
              "updated_at": "2023-09-25T16:45:06Z",
              "updated_user_id": 1
          },
          "name_th": "ทดสอบ1",
          "name_en": "ทดสอบ1",
          "is_active": true,
          "created_at": "2024-01-28T09:52:59.415Z",
          "created_user_id": 1,
          "updated_at": "2024-01-28T09:52:59.415Z",
          "updated_user_id": 30
      }
  });
});

}

