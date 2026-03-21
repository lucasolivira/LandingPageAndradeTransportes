export const CONTACT = {
  company: {
    name: "Andrade Trasportes Araguari",
  },
  phone: {
    display: "(34) 98893-9793",
    href: "tel:+5534988939793",
  },
  phoneFixo: {
    display: "(34) 9999-9999",
    href: "tel:+553499999999",
  },
  whatsapp: {
    number: "5534988939793",
    defaultMessage: "Olá, gostaria de solicitar um orçamento de transporte.",
    get href() {
      return `https://wa.me/${this.number}?text=${encodeURIComponent(this.defaultMessage)}`;
    },
  },
  email: {
    address: "email@gadetransportesaraguari.com",
    href: "mailto:email@gadetransportesaraguari.com",
  },
  local: {
    state: "Minas Gerais - MG",
    city: "Araguari",
    street: "Rua Guarani, 480-490-500 - Bairro Amorim",
    zipCode: "38446-132",
  },
} as const;
