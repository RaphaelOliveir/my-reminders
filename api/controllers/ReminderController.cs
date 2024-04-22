using System.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;

namespace reminderApi.Controllers
{
  [Route("api/[controller]")]
  [ApiController]

  public class ReminderController : ControllerBase
  {
    private IConfiguration _configuration;

    public ReminderController(IConfiguration configuration)
    {
      _configuration = configuration;
    }

    [HttpGet]
    [Route("GetReminders")]

    public JsonResult GetReminders()
    {
      string query = "SELECT * FROM dbo.reminders";
      DataTable table = new DataTable();
      string sqlDataSource = _configuration?.GetConnectionString("reminderDBCon") ?? string.Empty;
      SqlDataReader myReader;
      using (SqlConnection myCon = new SqlConnection(sqlDataSource))
      {
        myCon.Open();
        using (SqlConnection myConnection = new SqlConnection(sqlDataSource))
        {
          myConnection.Open();
          using (SqlCommand myCommand = new SqlCommand(query, myConnection))
          {
            myReader = myCommand.ExecuteReader();
            table.Load(myReader);
            myReader.Close();
            myConnection.Close();
          }
        }

        return new JsonResult(table);
      }
    }
  }
}