﻿using Microsoft.EntityFrameworkCore;
using webapi.event_.Domains;

namespace webapi.event_.Contexts
{
    /// <summary>
    /// Classe de contexto que faz referências as tabelas e define string de conexão
    /// </summary>
    public class Event_Context : DbContext
    {
        public DbSet<TiposUsuario> TiposUsuario { get; set; }

        public DbSet<Usuario> Usuario { get; set; }

        public DbSet<TiposEvento> TiposEvento { get; set; }

        public DbSet<Evento> Evento { get; set; }

        public DbSet<ComentariosEvento> ComentariosEvento{ get; set; }

        public DbSet<Instituicao> Instituicao { get; set; }

        public DbSet<PresencasEvento> PresencasEvento { get; set; }

        /// <summary>
        /// Define as opções de construção do banco
        /// </summary>
        /// <param name="optionsBuilder">Objeto com as configurações definidas</param>
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            //string de conexao local SSMS
            //optionsBuilder.UseSqlServer("Server=NOTE20-S15; Database=event+; user id= sa; pwd= Senai@134; TrustServerCertificate=True;");
            //base.OnConfiguring(optionsBuilder);
            
            //string de conexao nuvem AZURE
            optionsBuilder.UseSqlServer("Server=tcp:eventmanhapedro-server.database.windows.net,1433;Initial Catalog=eventmanhadatabasepedro;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30; User Id = eventmanhapedro-server; Pwd = Senai@134;");
            base.OnConfiguring(optionsBuilder);
        }
    }
}
