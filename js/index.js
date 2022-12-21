//select language needs to display spanish by default. on change, replace spanish text on page with with value lang
const data = {
  en_fb:
    "Save $$$ by bundling! Send an email to <a href='mailto:TaniaLucely143@gmail.com'>TaniaLucely143@gmail.com</a> with the subject 'Coaching Bundle' and let us know what you want to bundle",
  es_fb:
    "¡Ahorre $$$ al combinar! Envíe un correo electrónico a <a href='mailto:TaniaLucely143@gmail.com'>TaniaLucely143@gmail.com</a> con el asunto 'Coaching Bundle' y díganos qué desea empaquetar.",
  en_hero: {
    title: "Lucely Love Coach",
    heading: "Love Yourself First",
    subheading: "Life advice that puts you first",
    cta: "Schedule Now",
  },
  en_testimonials: {
    heading: "What People Are Saying",
    reviews: [
      {
        reviewer: "Irene",
        excerpt: "My relationship is a thousand times better...",
        review:
          " Your advice has helped me to change my lifestyle in general, for the better of course. I have removed from my life the friendships that hurt me, my friendship is very valuable, so I will not consent to anyone trampling it. I have also learned to love myself more. My relationship is a thousand times better than it was before, and all thanks to your advice. Making him the one who 'chases' me makes me happier, and I, being happier, also make him happier. I've learned that my company is valuable in every way, so, I'm not going to settle for little.",
      },
      {
        reviewer: "Meli",
        excerpt: "Your advice has opened my eyes...",
        review:
          "I used to think like many of those who criticize you, until I started watching your videos and I saw that you are right on everything, and now I advise my friends and my daughter about what really matters when choosing a partner. I have made so many mistakes in the past for falling in love with men who never showed me their love, and not only with details, gifts, or expensive things, they simply did not try anything in the relationship and I gave more than I received and thought by doing that they were going to value me more and in the end I ended up with a broken and regretful heart of having given my love and attention to someone who didn't deserve it. So thank you very much and I hope you continue helping us more women.",
      },
      {
        reviewer: "Zaira",
        excerpt: "They have even told me that I look much brighter than before.",
        review:
          "Hello Tania. Your advice has helped me a lot, before I felt ugly and I had so many problems with my partner and I was satisfied with that, I thought 'at least I have someone' since I started watching your videos I get “ready” every day, I feel I have higher self-esteem, In fact I wanted to start studying for a career and I signed up yesterday :) I also left my ex boyfriend, decided to see for myself and I understood that I was giving more than him. They have even told me that I look much brighter than before. Thank you very much, Tania. Success in all.",
      },
    ],
  },
  en_services: {
    service_heading: "Schedule Some Time With Me",
    package_heading: "New Bundles!",
    service_cta: "Schedule Now",
    packages: [
      {
        name: "4 Chat Sessions",
        description: "Receive 4, 20 minute coaching sessions",
        price: "$160",
        hosted: "Chat through Zoom",
        savings: "Save $20",
      },
      {
        name: "3 Phone Calls",
        description: "Receive 3, 45 minute coaching sessions",
        price: "$299",
        hosted: "Chat through Zoom",
        savings: "Save $60",
      },
      {
        name: "3 Video Calls",
        description: "Receive 3, 45 minute coaching sessions",
        price: "$499",
        hosted: "Video Call through Zoom",
        savings: "Save $75",
      },
    ],
    services: [
      {
        name: "Chat",
        description: "20/45 Minute Text Chat",
        price: "$45/$85",
        hosted: "Hosted Through Zoom",
      },
      {
        name: "Phone",
        description: "45 Minute Call",
        price: "$299",
        hosted: "Hosted Through Zoom",
      },
      {
        name: "Video",
        description: "50 Minute Video Call",
        price: "$499",
        hosted: "Hosted Through Zoom",
      },
      {
        name: "In Person",
        description: "1 hour and 45 minute in person coaching.",
        price: "$999",
        hosted: "For women only in OC, LA, & Riverside, CA",
      },
    ],
  },
  es_hero: {
    title: "Consejera De Amor",
    heading: "Amate A Ti Misma Primero",
    subheading: "Consejos de vida que te ponen primero",
    cta: "Programar ahora",
  },
  es_testimonials: {
    heading: "Lo que la gente esta diciendo",
    reviews: [
      {
        reviewer: "Irene",
        excerpt: "Mi relacion de pareja es mil veces mejor...",
        review:
          "Tue consejos me han servido para cambiar mi estilo de vida en general, para mejor por supuesto. He alejado de mi vida a las amistades que me hacian daño, mi amistad es muy valiosa, asi que no voy a consentir que nadie la pisotee. Tambien he aprendido a quererme más a mi misma. Mi relacion de pareja es mil veces mejor de lo que era antes, y todo gracias a tus consejos. Hacer que él sea el que me 'persiga' a mí me hace mas feliz, y yo al estar más feliz también lo hago más feliz a él. He aprendido que mi compañía es valiosa en todos los sentidos, así que, no me voy a conformar con poco.",
      },
      {
        reviewer: "Meli",
        excerpt: "Tus consejos me abrieron los ojos...",
        review:
          "Antes pensaba como muchos de los que te critican, hasta que comencé a ver tus videos y vi que tienes razón en todo, además ahora aconsejo a mis amigas y a mi hija sobre lo que verdaderamente importa a la hora de elegir pareja. He cometido tantos errores en el pasado por enamorarme de hombres que nunca me demostraron su amor, y no solo con detalles, obsequios, ni cosas caras, simplemente no se esforzaban nada en la relación y yo daba más de lo que recibía y pensaba qué haciendo eso y ellos me iban a valorar más y al final terminaba con el corazón roto y arrepentida de haberle dado mi amor y atención a alguien que no lo merecía. Así que muchas gracias y espero sigas ayudándonos a más mujeres.",
      },
      {
        reviewer: "Zaira",
        excerpt: "me han dicho que me veo con mucho más brillo que antes.",
        review:
          "Hola, Tania. Tus consejos me han ayudado muchísimo, antes me sentia fea y tenia tantos problemas con mi pareja y yo me conformaba con eso, pensaba 'al menos tengo a alguien' desde que empecé a ver tus vídeos me arreglo todos los días, me siento con mucha más autoestima. De echo, quise empezar a estudiar una carrera y me inscribí ayer :) también deje a mi ex novio, decidí ver por mi misma y entendí que estaba dando mas yo que el. Incluso me han dicho que me veo con mucho más brillo que antes. Muchas gracias, Tania. Éxito en todo.",
      },
    ],
  },
  es_services: {
    service_heading: "Programa un tiempo conmigo",
    package_heading: "Paquetes Nuevos!",
    service_cta: "Programar Ahora",
    packages: [
      {
        name: "4 Sesiones de Chat",
        description: "Reciba 4 sesiónes de 20 minutos",
        price: "$160",
        hosted: "Chatear a través de Zoom",
        savings: "Ahorra $20",
      },
      {
        name: "3 Llamadas Telefónicas",
        description: "Reciba 3 sesiónes de 45 minutos",
        price: "$299",
        hosted: "Llamada a través de Zoom",
        savings: "Ahorra $60",
      },
      {
        name: "3 Video Llamadas",
        description: "Reciba 3 sesiónes de 45 minutos",
        price: "$499",
        hosted: "Video llamadas a través de Zoom",
        savings: "Ahorra $75",
      },
    ],
    services: [
      {
        name: "Chat De Texto",
        description: "20/45 Minutos chat de texto",
        price: "$45/$85",
        hosted: "Alojado a través de Zoom",
      },
      {
        name: "Teléfono",
        description: "45 Minutos de llamada",
        price: "$299",
        hosted: "Alojado a través de Zoom",
      },
      {
        name: "Video",
        description: "50 Minutos de llamada en video",
        price: "$499",
        hosted: "Alojado a través de Zoom",
      },
      {
        // description and duration are switched because of spanish syntax
        name: "En Persona",
        description: "Sesión presencial de 1 hora y 45 minutos.",
        price: "$999",
        hosted: "Solo para mujeres en OC, LA y Riverside, CA",
      },
    ],
  },
};
const main_content = document.getElementById("main");
const language_select = document.getElementById("language_pref");
const reference_html = `<section class="hero">
<div class="hero__container hero__container_text">
  <div class="hero__banner_mobile">
    <span class="hero__title">{{title}}</span>
    <h1 class="hero__heading">{{heading}}</h1>
    <p class="hero__subheading">{{subheading}}</p>
    <a href="#scheduler" class="button hero__cta">{{cta}}</a>
  </div>
</div>
<div class="hero__container hero__container_img"></div>
</section>
<section class="testimonial">
<h2 class="heading testimonial__heading">{{testimonial_heading}}</h2>
<details open="" class="testimonial__detail">
  <summary class="testimonial__detail_summary">{{excerpt_0}}</summary>
  <p class="testimonial__review">{{review_0}}</p>
  <p class="testimonial_reviewer">- {{reviewer_0}}</p>
</details>
<details open="" class="testimonial__detail">
  <summary class="testimonial__detail_summary">{{excerpt_1}}</summary>
  <p class="testimonial__review">{{review_1}}</p>
  <p class="testimonial_reviewer">- {{reviewer_1}}</p>
</details>
<details open="" class="testimonial__detail">
  <summary class="testimonial__detail_summary">{{excerpt_2}}</summary>
  <p class="testimonial__review">{{review_2}}</p>
  <p class="testimonial_reviewer">- {{reviewer_2}}</p>
</details>
</section>
<section class="service">
<h2 class="heading service__heading">{{service_heading}}</h2>
<div class="service__container">
  <!-- <div class="card">
    <p class="service__name">{{service_name_0}}</p>
    <img src="./assets/icons/message-square.svg" alt="chat" class="service__icon" />
    <p class="service__price">{{service_price_0}}</p>
    <p class="service__description">{{service_description_0}}</p>
    <p class="service__description card__text_secondary">{{service_hosted_0}}</p>
    <a href="#scheduler" class="button service__cta">{{service_cta}}</a>
  </div> -->
  <div class="card">
    <p class="service__name">{{service_name_1}}</p>
    <img src="./assets/icons/phone-call.svg" alt="phone" class="service__icon">
    <p class="service__price">{{service_price_1}}</p>
    <p class="service__description">{{service_description_1}}</p>
    <p class="service__description card__text_secondary">{{service_hosted_1}}</p>
    <a href="#scheduler" class="button service__cta">{{service_cta}}</a>
  </div>
  <div class="card">
    <p class="service__name">{{service_name_2}}</p>
    <img src="./assets/icons/video.svg" alt="video" class="service__icon">
    <p class="service__price">{{service_price_2}}</p>
    <p class="service__description">{{service_description_2}}</p>
    <p class="service__description card__text_secondary">{{service_hosted_2}}</p>
    <a href="#scheduler" class="button service__cta">{{service_cta}}</a>
  </div>
  <div class="card">
    <p class="service__name">{{service_name_3}}</p>
    <img src="./assets/icons/meeting.svg" alt="meeting" class="service__icon">
    <p class="service__price">{{service_price_3}}</p>
    <p class="service__description">{{service_description_3}}</p>
    <p class="service__description card__text_secondary">{{service_hosted_3}}</p>
    <a href="#scheduler" class="button service__cta">{{service_cta}}</a>
  </div>
</div>
<!-- <h2 class="heading service__heading service__heading_package">{{package_heading}}</h2>
<div class="service__container">
  <div class="card package__card">
    <p class="service__name package__name">{{package_name_0}}</p>
    <p class="service__price">{{package_price_0}}</p>
    <p class="service__description package__description">{{package_description_0}}</p>
    <p class="service__description card__text_secondary package__description">{{package_hosted_0}}</p>
    <h3 class="service__savings package__savings">{{package_savings_0}}</h3>
  </div>

  <div class="card package__card">
    <p class="service__name package__name">{{package_name_1}}</p>
    <p class="service__price">{{package_price_1}}</p>
    <p class="service__description package__description">{{package_description_1}}</p>
    <p class="service__description card__text_secondary package__description">{{package_hosted_1}}</p>
    <h3 class="service__savings package__savings">{{package_savings_1}}</h3>
  </div>
  <div class="card package__card">
    <p class="service__name package__name">{{package_name_2}}</p>
    <p class="service__price">{{package_price_2}}</p>
    <p class="service__description package__description">{{package_description_2}}</p>
    <p class="service__description card__text_secondary package__description">{{package_hosted_2}}</p>
    <h3 class="service__savings package__savings">{{package_savings_2}}</h3>
  </div>
</div> -->
<div class="card card__fb"><p>{{fb_message}}</p></div>
</section>`;
let html = null;

function popullate_data() {
  html = reference_html;
  //services
  data[language_select.value + "_services"].services.forEach((obj, i) => {
    for (let [key, val] of Object.entries(obj)) {
      html = html.replace("{{service_" + key + "_" + i + "}}", val);
    }
  });
  data[language_select.value + "_services"].packages.forEach((obj, i) => {
    for (let [key, val] of Object.entries(obj)) {
      html = html.replace("{{package_" + key + "_" + i + "}}", val);
    }
  });
  //hero
  for (let [key, val] of Object.entries(data[language_select.value + "_hero"])) {
    html = html.replace("{{" + key + "}}", val);
  }
  //subheadings
  html = html.replace("{{testimonial_heading}}", data[language_select.value + "_testimonials"].heading);
  html = html.replace("{{service_heading}}", data[language_select.value + "_services"].service_heading);
  html = html.replace("{{package_heading}}", data[language_select.value + "_services"].package_heading);
  //service cta
  html = html.replaceAll("{{service_cta}}", data[language_select.value + "_services"].service_cta);
  //fb message
  html = html.replace("{{fb_message}}", data[language_select.value + "_fb"]);

  //testimonials
  data[language_select.value + "_testimonials"].reviews.forEach((obj, i) => {
    for (let [key, val] of Object.entries(obj)) {
      html = html.replace("{{" + key + "_" + i + "}}", val);
    }
  });

  main_content.innerHTML = html;
}

popullate_data();
language_select.addEventListener("change", popullate_data);
