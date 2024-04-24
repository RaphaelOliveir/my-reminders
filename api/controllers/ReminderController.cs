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
      string query = "SELECT * FROM dbo.reminders ORDER BY data ASC";
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

    [HttpPost]
    [Route("AddReminder")]

    public JsonResult AddReminder([FromForm] string name, [FromForm] DateTime date)
    {
      if (date <= DateTime.Now)
      {
          return new JsonResult("Data deve ser futura.");
      }

      string query = "INSERT INTO dbo.reminders (nome, data) VALUES (@name, @date)";
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
            myCommand.Parameters.AddWithValue("@name", name);
            myCommand.Parameters.AddWithValue("@date", date);
            myReader = myCommand.ExecuteReader();
            table.Load(myReader);
            myReader.Close();
            myConnection.Close();
          }
        }

        return new JsonResult("Lembrete adicionado com sucesso.");
      }
    }

    [HttpDelete]
    [Route("DeleteReminder")]

    public JsonResult DeleteReminder(int id)
    {
      string query = "DELETE FROM dbo.reminders WHERE id = @id";
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
            myCommand.Parameters.AddWithValue("@id", id);
            myReader = myCommand.ExecuteReader();
            table.Load(myReader);
            myReader.Close();
            myConnection.Close();
          }
        }

        return new JsonResult("Lembrete deletado com sucesso.");
      }
    }
  }
}