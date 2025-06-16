using System.ComponentModel.DataAnnotations;

namespace TiendaMVC.Models
{
    public class User
    {
        [Required(ErrorMessage = "El nombre de usuario es obligatorio")]
        [StringLength(
            50,
            MinimumLength = 3,
            ErrorMessage = "El username debe tener entre 3 y 50 caracteres."
        )]
        [Display(Name = "Usuario")]
        public string Username { get; set; } = string.Empty;

        [Required(ErrorMessage = "La contraseña es obligatorio")]
        [StringLength(
            50,
            MinimumLength = 6,
            ErrorMessage = "La contraseña debe tener entre 6 y 50 caracteres."
        )]
        [DataType(DataType.Password)]
        [Display(Name = "Contraseña")]
        public string Password { get; set; } = string.Empty;
    }
}
