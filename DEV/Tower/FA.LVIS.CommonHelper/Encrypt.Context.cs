﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace FA.LVIS.CommonHelper
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    using System.Data.Entity.Core.Objects;
    using System.Linq;
    
    public partial class TerminalEncryptEntities : DbContext
    {
        public TerminalEncryptEntities()
            : base("name=TerminalEncryptEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
    
        public virtual ObjectResult<GetEnvironmentKey_Result> GetEnvironmentKey()
        {
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<GetEnvironmentKey_Result>("GetEnvironmentKey");
        }
    }
}
