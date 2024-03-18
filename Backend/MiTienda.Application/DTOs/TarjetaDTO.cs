using MiTienda.Domain.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MiTienda.Application.DTOs
{
    #region TarjetaDTO
    public class TarjetaDTO
    {
        public string card_number { get; set; }
        public string card_expiration_month { get; set; }
        public string card_expiration_year { get; set; }
        public string security_code { get; set; }
        public string card_holder_name { get; set; }
        public TarjetaHolderIdentificationDTO card_holder_identification { get; set; }
    }

    public class TarjetaHolderIdentificationDTO
    {
        public string type { get; set; }
        public string number { get; set; }
    }

    public class TarjetaWithTokenDTO
    {
        public string id { get; set; }
        public string status { get; set; }
        public int card_number_length { get; set; }
        public DateTime date_created { get; set; }
        public string bin { get; set; }
        public string last_four_digits { get; set; }
        public int security_code_length { get; set; }
        public int expiration_month { get; set; }
        public int expiration_year { get; set; }
        public DateTime date_due { get; set; }
        public CardholderDTO cardholder { get; set; }
    }

    public class CardholderDTO
    {
        public TarjetaHolderIdentificationDTO identification { get; set; }
        public string name { get; set; }
    }
    #endregion

    #region PagoTarjetaDTO

    public class PagoTarjetaDTO
    {
        public string site_transaction_id { get; set; }
        public int payment_method_id { get; set; }
        public string token { get; set; }
        public string bin { get; set; }
        public decimal amount { get; set; }
        public string currency { get; set; }
        public int? installments { get; set; }
        public string description { get; set; }
        public string payment_type { get; set; }
        public string establishment_name { get; set; }
        public List<SubPaymentDTO> sub_payments { get; set; }
    }

    public class SubPaymentDTO
    {
        public string site_id { get; set; }
        public decimal amount { get; set; }
        public int? installments { get; set; }
    }

    public class PagoTarjetaRespuestaDTO
    {
        public string card_brand { get; set; }
        public string status { get; set; }
    }

    #endregion


}
