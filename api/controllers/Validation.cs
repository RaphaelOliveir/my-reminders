// public class LembreteDto
// {
//     public string Nome { get; set; }
//     public DateTime Data { get; set; }
// }

// [HttpPost]
// public IActionResult CreateLembrete([FromBody] LembreteDto lembrete)
// {
//     if (string.IsNullOrEmpty(lembrete.Nome))
//     {
//         return BadRequest("O campo nome é obrigatório.");
//     }

//     if (lembrete.Data <= DateTime.Now)
//     {
//         return BadRequest("A data deve ser futura.");
//     }

//     Código para salvar o lembrete no banco de dados

//     return Ok();
// }
