document.addEventListener('DOMContentLoaded', () => {
    // Objeto de tradução
    const translations = {
        pt: {
            // index.html
            'home': 'Início',
            'futsal-m': 'Futsal Masculino',
            'futsal-f': 'Futsal Feminino',
            'basketball': 'Basquete Masculino',
            'handball-m': 'Handebol Masculino',
            'handball-f': 'Handebol Feminino',
            'volleyball-m': 'Vôlei Masculino',
            'volleyball-f': 'Vôlei Feminino',
            'cheerleading': 'Cheerleading',
            'esports': 'E-Sports',
            'chess': 'Xadrez',
            'toggle-theme': 'Alternar Tema',
            'about-us-title': 'Sobre Nós',
            'about-us-text': 'A Atlética Kapiva é a atlética do Senac Santo Amaro, fundada em 21 de junho de 2017, com o intuito de proporcionar uma experiência acadêmica enriquecedora para os alunos. Nosso objetivo é promover o esporte e a integração entre os estudantes, além de representar o Senac em diversas competições universitárias. Desde nossa fundação, buscamos continuamente aprimorar nossa estrutura e oferecer o melhor suporte aos nossos atletas. Atualmente, a Atlética Kapiva se dedica a fortalecer o espírito esportivo e a camaradagem, sendo um pilar fundamental na vida universitária dos nossos membros.',
            'kapiva-founded-text': 'A Kapiva foi fundada com',
            'old-logo-title': 'Antiga Logo',
            'kapiva-old-logo-duration': 'Essa versão durou da fundação (21/06/2017) até o dia 03 de Setembro de 2018, quando a atlética passou por uma renovação e aproveitou seu <a href="https://www.instagram.com/p/BnR4bplFzU8/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="><span data-translate-key="post-number-100">post de número 100</span></a>, para divulgar a nova e também atual logo.',
            'post-number-100': 'post de número 100', // Mantido para caso de necessidade de tradução interna
            'to-divulge-new-logo': 'para divulgar a nova e também atual logo.',
            'contact': 'Contato',
            'contact-info': 'Para mais informações entrar em contato via instagram: <a href="https://www.instagram.com/atleticakapiva/"><span>@atleticakapiva</span></a>.',
            'all-rights-reserved': '&copy; 2025 Atlética Kapiva. Todos os direitos reservados.',
            'athletica-instagram': 'Instagram da Atlética',
            'senac-instagram': 'Instagram Senac Santo Amaro',


            // Basquete.html
            'basketball-title': 'Basquete Masculino Kapiva',
            'about-basketball-title': 'Sobre o Basquete Masculino',
            'about-basketball-text': 'A equipe de Basquete Masculino é um dos nossos times mais promissores. Com treinos intensos e foco na estratégia, buscamos sempre a excelência em quadra. Acreditamos no trabalho em equipe e na dedicação de cada jogador para alcançar nossos objetivos nas competições. Venha fazer parte do nosso time e viva a emoção do basquete universitário com a Kapiva!',
            'trainings-title': 'Treinos',
            'trainings-location': 'Local do Treino:',
            'trainings-location-name': 'Quadra do Senac Santo Amaro',
            'trainings-schedule': 'Horário do Treino:',
            'monday': 'Segunda-feira',
            'wednesday': 'Quarta-feira',
            'competitions': 'Competições',
            'basketball-status-text': 'O time no momento está:',
            'basketball-status-ndu': 'Na Quartas de Final da Série B na NDU e jogam no Sábado 07/06/2025 (Sete de Junho de Dois Mil e Vinte e Cinco) buscando garantir uma vaga na Semi-Final.',
            'basketball-status-interatleticas': 'Em Segundo Lugar do grupo A com 8 Pontos em 5 jogos na InterAtléticas.',
            'basketball-contact': 'Para mais informações entrar em contato via instagram: <a href="https://www.instagram.com/basquetekapiva/"><span>basquetekapiva</span></a>.',


            // Cheer.html
            'cheerleading-title': 'Cheerleading Kapiva',
            'about-cheer-title': 'Sobre o Cheerleading',
            'about-cheer-text': 'O time de Cheerleading da Atlética Kapiva é responsável por levar energia e paixão para todos os eventos! Com coreografias elaboradas e acrobacias impressionantes, nossas animadoras de torcida são a alma da nossa atlética, incentivando nossos times e contagiando a todos com seu espírito vibrante. Venha fazer parte dessa equipe que une força, ritmo e muito entusiasmo!',
            'cheer-status-text': 'A equipe no momento está:',
            'cheer-status-revival': 'A equipe está sendo reestruturada para o 1º Semestre de 2025. Esperamos que durante o 1° Semestre de 2025 a equipe volte a ativa e recomece a treinar e participar de competições.',
            'cheer-competitions-title': 'Competições',
            'cheer-competitions-text': 'A equipe no momento não está inscrita em nenhuma competição universitária.',
            'cheer-contact': 'Para mais informações entrar em contato via instagram: <a href="https://www.instagram.com/kapivacheer/"><span>Kapiva Cheerleading</span></a>.',


            // esports.html
            'esports-title': 'E-Sports Kapiva',
            'about-esports-title': 'Sobre o E-Sports',
            'about-esports-text': 'A seção de E-Sports da Atlética Kapiva reúne os melhores jogadores em diversas modalidades. Nosso objetivo é promover a competitividade saudável e a integração entre os gamers, oferecendo suporte e estrutura para que nossos atletas se destaquem nos cenários de jogos eletrônicos universitários. Se você é apaixonado por jogos e busca um time para representar sua paixão, venha para a Kapiva E-Sports!',
            'games-list-title': 'Jogos que a Kapiva tem times:',
            'game-lol': 'League of Legends',
            'game-valorant': 'Valorant',
            'game-cs2': 'CS2 (Counter-Strike 2)',
            'game-rl': 'Rocket League',
            'game-r6': 'Rainbow Six Siege',
            'esports-competitions-title': 'Competições',
            'esports-competitions-text-1': 'Os times irão participar de campeonatos externos representando a atlética.',
            'esports-competitions-text-2': 'Os times poderão participar de campeonatos internos ou onlines.',
            'esports-competitions-text-3': 'Os times não estão inscritos em nenhuma competição que seja divulgada seus resultados.',
            'esports-contact': 'Para mais informações entrar em contato via instagram: <a href="https://www.instagram.com/esportskapiva/"><span>Kapiva E-Sports</span></a>.',


            // HandF.html
            'handball-f-title': 'Handebol Feminino Kapiva',
            'about-handball-f-title': 'Sobre o Handebol Feminino',
            'about-handball-f-text': 'O time de Handebol Feminino da Atlética Kapiva é composto por atletas dedicadas e apaixonadas pelo esporte. Com treinos focados em técnica, tática e preparo físico, buscamos constantemente superar nossos limites e alcançar a vitória nas competições universitárias. Nosso time valoriza a união, a garra e o espírito esportivo. Se você ama handebol e quer fazer parte de uma equipe vitoriosa, junte-se a nós!',
            'handball-f-competitions-text': 'O time no momento está:',
            'handball-f-ndu-status': 'Em Decimo-Oitavo Lugar com -1 Pontos em 5 jogos na NDU (O time desistiu e sofreu punição de -1 ponto).',
            'handball-f-interatleticas-status': 'Em Terceiro Lugar com 4 Pontos em 2 jogos em 2 jogos na InterAtléticas',
            'handball-f-contact': 'Para mais informações entrar em contato via instagram: <a href="https://www.instagram.com/handkapiva_fem/"><span>handkapiva_fem</span></a>.',


            // HandM.html
            'handball-m-title': 'Handebol Masculino Kapiva',
            'about-handball-m-title': 'Sobre o Handebol Masculino',
            'about-handball-m-text': 'O time de Handebol Masculino da Atlética Kapiva é sinônimo de força e estratégia. Com um elenco talentoso e dedicado, buscamos aprimorar nossas habilidades em cada treino e surpreender os adversários em quadra. A paixão pelo handebol nos impulsiona a lutar por cada ponto e a representar o Senac Santo Amaro com garra e determinação. Venha suar a camisa conosco e fazer parte dessa família!',
            'handball-m-competitions-text': 'O time no momento está:',
            'handball-m-ndu-status': 'Em Sexto Lugar do Grupo A com 0 Pontos em 5 jogos, encerrando assim sua participação na NDU.',
            'handball-m-interatleticas-status': 'Em Segundo Lugar do Grupo B com 6 Pontos em 3 jogos na InterAtléticas.',
            'handball-m-contact': 'Para mais informações entrar em contato via instagram: <a href="https://www.instagram.com/handkapiva_masc/"><span>handkapiva_masc</span></a>.',


            // KapivaFutF.html
            'futsal-f-title': 'Futsal Feminino Kapiva',
            'about-futsal-f-title': 'Sobre o Futsal Feminino',
            'about-futsal-f-text': 'O time de Futsal Feminino da Atlética Kapiva é um exemplo de garra e talento em quadra. Nossas atletas se dedicam nos treinos para aperfeiçoar a técnica, a tática e a união do grupo. Com um espírito competitivo e muita determinação, buscamos sempre a vitória e a representação digna do Senac Santo Amaro nas competições. Se você ama futsal e quer fazer parte de uma equipe vibrante, seu lugar é aqui!',
            'futsal-f-competitions-text': 'O time atualmente está:',
            'futsal-f-interatleticas-status': 'Em Primeiro Lugar do Grupo A com 6 Pontos em 2 jogos na InterAtléticas.',
            'futsal-f-liga-paulista-status': 'Em Primeiro Lugar do Grupo B com 6 Pontos em 2 jogos Na Liga Paulista.',
            'futsal-f-contact': 'Para mais informações entrar em contato via instagram: <a href="https://www.instagram.com/futkapiva_fem/"><span>futkapiva_fem</span></a>.',


            // KapivaFutM.html
            'futsal-m-title': 'Futsal Masculino Kapiva',
            'about-futsal-m-title': 'Sobre o Futsal Masculino',
            'about-futsal-m-text': 'O time de Futsal Masculino da Atlética Kapiva é composto por atletas habilidosos e apaixonados pelo esporte. Com treinos intensos e foco na estratégia, buscamos sempre a excelência em quadra. Acreditamos no trabalho em equipe e na dedicação de cada jogador para alcançar nossos objetivos nas competições. Venha fazer parte do nosso time e viva a emoção do futsal universitário com a Kapiva!',
            'futsal-m-status-text': 'O time no momento está:',
            'futsal-m-status-ndu': 'Na Semi-Final da Série C na NDU e jogam no Sábado 08/06/2025 (Oito de Junho de Dois Mil e Vinte e Cinco) buscando garantir uma vaga na Final e subir para a Série B no próximo semestre.',
            'futsal-m-interatleticas-status': 'Em Primeiro Lugar do Grupo D com 12 Pontos em 5 jogos na InterAtléticas.',
            'futsal-m-liga-paulista-status': 'Em Segundo Lugar do Grupo B com 6 Pontos em 2 jogos na Liga Paulista.',
            'futsal-m-contact': 'Para mais informações entrar em contato via instagram: <a href="https://www.instagram.com/futkapiva_masc/"><span>futkapiva_masc</span></a>.',


            // VoleiF.html
            'volleyball-f-title': 'Vôlei Feminino Kapiva',
            'about-volleyball-f-title': 'Sobre o Vôlei Feminino',
            'about-volleyball-f-text': 'O time de Vôlei Feminino da Atlética Kapiva é uma equipe que se destaca pela técnica, união e paixão pelo esporte. Nossas atletas dedicam-se a cada treino para aprimorar o ataque, a defesa e o entrosamento em quadra. Com um espírito vibrante e muita determinação, buscamos sempre a vitória e a representação digna do Senac Santo Amaro nas competições. Se você ama vôlei e quer fazer parte de uma equipe inspiradora, venha para a Kapiva!',
            'volleyball-f-competitions-text': 'O time atualmente está:',
            'volleyball-f-ndu-status': 'Na Quartas de Final da Série E na NDU.',
            'volleyball-f-interatleticas-status': 'Na Quinta Rodada na InterAtléticas.',
            'volleyball-f-contact': 'Para mais informações entrar em contato via instagram: <a href="https://www.instagram.com/voleikapiva_fem/"><span>voleikapiva_fem</span></a>.',


            // VoleiM.html
            'volleyball-m-title': 'Vôlei Masculino Kapiva',
            'about-volleyball-m-title': 'Sobre o Vôlei Masculino',
            'about-volleyball-m-text': 'O time de Vôlei Masculino da Atlética Kapiva é uma equipe que se destaca pela força, estratégia e paixão pelo esporte. Nossos atletas dedicam-se a cada treino para aprimorar o ataque, a defesa e o entrosamento em quadra. Com um espírito vibrante e muita determinação, buscamos sempre a vitória e a representação digna do Senac Santo Amaro nas competições. Se você ama vôlei e quer fazer parte de uma equipe inspiradora, venha para a Kapiva!',
            'volleyball-m-competitions-text': 'O time no momento não está:',
            'volleyball-m-liga-paulista-status': 'Em Segundo Lugar do Grupo A com 1 Vitória em 2 jogos na Liga Paulista.',
            'volleyball-m-interatleticas-status': 'Na Quarta Rodada na InterAtléticas.',
            'volleyball-m-contact': 'Para mais informações entrar em contato via instagram: <a href="https://www.instagram.com/voleikapiva/"><span>voleikapiva_masc</span></a>.',


            // xadrez.html
            'chess-title': 'Xadrez Kapiva',
            'about-chess-title': 'Sobre o Xadrez',
            'about-chess-text': 'A seção de Xadrez da Atlética Kapiva é um espaço para desenvolver o raciocínio lógico, a estratégia e a concentração. Nossos jogadores se reúnem para aprimorar suas habilidades no tabuleiro, trocar conhecimentos e se preparar para competições. O xadrez é mais do que um jogo, é uma paixão que desafia a mente e promove o crescimento intelectual. Venha fazer parte do nosso clube e aprimorar sua jogada!',
            'chess-trainings-title': 'Treinos',
            'chess-trainings-day': 'Dia do Treino:',
            'chess-trainings-hour': 'Horário do Treino:',
            'chess-competitions-text': 'A equipe no momento não está inscrita em nenhuma competição universitária.',
            'chess-contact': 'Para mais informações entrar em contato via instagram: <a href="https://www.instagram.com/xadrez.kapiva/"><span>Kapiva Xadrez</span></a>.',

        },
        en: {
            // index.html
            'home': 'Home',
            'futsal-m': 'Men\'s Futsal',
            'futsal-f': 'Women\'s Futsal',
            'basketball': 'Men\'s Basketball',
            'handball-m': 'Men\'s Handball',
            'handball-f': 'Women\'s Handball',
            'volleyball-m': 'Men\'s Volleyball',
            'volleyball-f': 'Women\'s Volleyball',
            'cheerleading': 'Cheerleading',
            'esports': 'E-Sports',
            'chess': 'Chess',
            'toggle-theme': 'Toggle Theme',
            'about-us-title': 'About Us',
            'about-us-text': 'Atlética Kapiva is the athletic association of Senac Santo Amaro, founded on June 21, 2017, with the aim of providing an enriching academic experience for students. Our goal is to promote sports and integration among students, as well as to represent Senac in various university competitions. Since our foundation, we have continuously sought to improve our structure and offer the best support to our athletes. Currently, Atlética Kapiva is dedicated to strengthening the sportsmanship and camaraderie, being a fundamental pillar in the university life of our members.',
            'kapiva-founded-text': 'Kapiva was founded with',
            'old-logo-title': 'Old Logo',
            'kapiva-old-logo-duration': 'This version lasted from its foundation (06/21/2017) until September 03, 2018, when the athletics underwent a renovation and took advantage of its <a href="https://www.instagram.com/p/BnR4bplFzU8/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="><span data-translate-key="post-number-100">post number 100</span></a>, to publicize the new and current logo.',
            'post-number-100': 'post number 100',
            'to-divulge-new-logo': 'to publicize the new and current logo.',
            'contact': 'Contact',
            'contact-info': 'For more information, contact us via instagram: <a href="https://www.instagram.com/atleticakapiva/"><span>@atleticakapiva</span></a>.',
            'all-rights-reserved': '&copy; 2025 Atlética Kapiva. All rights reserved.',
            'athletica-instagram': 'Athletics Instagram',
            'senac-instagram': 'Senac Santo Amaro Instagram',

            // Basquete.html
            'basketball-title': 'Kapiva Men\'s Basketball',
            'about-basketball-title': 'About Men\'s Basketball',
            'about-basketball-text': 'The Men\'s Basketball team is one of our most promising teams. With intense training and a focus on strategy, we always seek excellence on the court. We believe in teamwork and the dedication of each player to achieve our goals in competitions. Come be part of our team and experience the excitement of university basketball with Kapiva!',
            'trainings-title': 'Trainings',
            'trainings-location': 'Training Location:',
            'trainings-location-name': 'Senac Santo Amaro Court',
            'trainings-schedule': 'Training Schedule:',
            'monday': 'Monday',
            'wednesday': 'Wednesday',
            'competitions': 'Competitions',
            'basketball-status-text': 'The team is currently:',
            'basketball-status-ndu': 'In the Quarter-Finals of Series B in NDU and will play on Saturday, June 7, 2025, seeking to secure a spot in the Semi-Finals.',
            'basketball-status-interatleticas': 'In Second Place in Group A with 8 Points in 5 games in InterAtléticas.',
            'basketball-contact': 'For more information, contact us via instagram: <a href="https://www.instagram.com/basquetekapiva/"><span>basquetekapiva</span></a>.',

            // Cheer.html
            'cheerleading-title': 'Kapiva Cheerleading',
            'about-cheer-title': 'About Cheerleading',
            'about-cheer-text': 'The Atlética Kapiva Cheerleading team is responsible for bringing energy and passion to all events! With elaborate choreographies and impressive acrobatics, our cheerleaders are the soul of our athletics, encouraging our teams and infecting everyone with their vibrant spirit. Come be part of this team that unites strength, rhythm, and a lot of enthusiasm!',
            'cheer-status-text': 'The team is currently:',
            'cheer-status-revival': 'The team is being restructured for the 1st Semester of 2025. We hope that during the 1st Semester of 2025 the team will become active again and resume training and participating in competitions.',
            'cheer-competitions-title': 'Competitions',
            'cheer-competitions-text': 'The team is currently not registered in any university competition.',
            'cheer-contact': 'For more information, contact us via instagram: <a href="https://www.instagram.com/kapivacheer/"><span>Kapiva Cheerleading</span></a>.',

            // esports.html
            'esports-title': 'Kapiva E-Sports',
            'about-esports-title': 'About E-Sports',
            'about-esports-text': 'The E-Sports section of Atlética Kapiva brings together the best players in various modalities. Our goal is to promote healthy competitiveness and integration among gamers, offering support and structure for our athletes to stand out in university electronic gaming scenarios. If you are passionate about games and are looking for a team to represent your passion, come to Kapiva E-Sports!',
            'games-list-title': 'Games with Kapiva teams:',
            'game-lol': 'League of Legends',
            'game-valorant': 'Valorant',
            'game-cs2': 'CS2 (Counter-Strike 2)',
            'game-rl': 'Rocket League',
            'game-r6': 'Rainbow Six Siege',
            'esports-competitions-title': 'Competitions',
            'esports-competitions-text-1': 'The teams will participate in external championships representing the athletics.',
            'esports-competitions-text-2': 'The teams may participate in internal or online championships.',
            'esports-competitions-text-3': 'The teams are not registered in any competition whose results are disclosed.',
            'esports-contact': 'For more information, contact us via instagram: <a href="https://www.instagram.com/esportskapiva/"><span>Kapiva E-Sports</span></a>.',

            // HandF.html
            'handball-f-title': 'Kapiva Women\'s Handball',
            'about-handball-f-title': 'About Women\'s Handball',
            'about-handball-f-text': 'The Atlética Kapiva Women\'s Handball team is composed of dedicated athletes passionate about the sport. With training focused on technique, tactics, and physical preparation, we constantly seek to overcome our limits and achieve victory in university competitions. Our team values unity, grit, and sportsmanship. If you love handball and want to be part of a winning team, join us!',
            'handball-f-competitions-text': 'The team is currently:',
            'handball-f-ndu-status': 'In Eighteenth Place with -1 Points in 5 games in NDU (The team withdrew and suffered a -1 point penalty).',
            'handball-f-interatleticas-status': 'In Third Place with 4 Points in 2 games in 2 games in InterAtléticas',
            'handball-f-contact': 'For more information, contact us via instagram: <a href="https://www.instagram.com/handkapiva_fem/"><span>handkapiva_fem</span></a>.',

            // HandM.html
            'handball-m-title': 'Kapiva Men\'s Handball',
            'about-handball-m-title': 'About Men\'s Handball',
            'about-handball-m-text': 'The Atlética Kapiva Men\'s Handball team is synonymous with strength and strategy. With a talented and dedicated squad, we seek to improve our skills in every training session and surprise opponents on the court. The passion for handball drives us to fight for every point and to represent Senac Santo Amaro with grit and determination. Come sweat your shirt with us and be part of this family!',
            'handball-m-competitions-text': 'The team is currently:',
            'handball-m-ndu-status': 'In Sixth Place in Group A with 0 Points in 5 games, thus ending their participation in the NDU.',
            'handball-m-interatleticas-status': 'In Second Place in Group B with 6 Points in 3 games in InterAtléticas.',
            'handball-m-contact': 'For more information, contact us via instagram: <a href="https://www.instagram.com/handkapiva_masc/"><span>handkapiva_masc</span></a>.',

            // KapivaFutF.html
            'futsal-f-title': 'Kapiva Women\'s Futsal',
            'about-futsal-f-title': 'About Women\'s Futsal',
            'about-futsal-f-text': 'The Atlética Kapiva Women\'s Futsal team is an example of grit and talent on the court. Our athletes dedicate themselves to training to improve their technique, tactics, and team cohesion. With a competitive spirit and great determination, we always seek victory and worthy representation of Senac Santo Amaro in competitions. If you love futsal and want to be part of a vibrant team, your place is here!',
            'futsal-f-competitions-text': 'The team is currently:',
            'futsal-f-interatleticas-status': 'In First Place in Group A with 6 Points in 2 games in InterAtléticas.',
            'futsal-f-liga-paulista-status': 'In First Place in Group B with 6 Points in 2 games in Liga Paulista.',
            'futsal-f-contact': 'For more information, contact us via instagram: <a href="https://www.instagram.com/futkapiva_fem/"><span>futkapiva_fem</span></a>.',

            // KapivaFutM.html
            'futsal-m-title': 'Kapiva Men\'s Futsal',
            'about-futsal-m-title': 'About Men\'s Futsal',
            'about-futsal-m-text': 'The Atlética Kapiva Men\'s Futsal team is composed of skilled athletes passionate about the sport. With intense training and a focus on strategy, we always seek excellence on the court. We believe in teamwork and the dedication of each player to achieve our goals in competitions. Come be part of our team and experience the excitement of university futsal with Kapiva!',
            'futsal-m-status-text': 'The team is currently:',
            'futsal-m-status-ndu': 'In the Semi-Finals of Series C in NDU and will play on Saturday, June 8, 2025, seeking to secure a spot in the Final and move up to Series B next semester.',
            'futsal-m-interatleticas-status': 'In First Place in Group D with 12 Points in 5 games in InterAtléticas.',
            'futsal-m-liga-paulista-status': 'In Second Place in Group B with 6 Points in 2 games in Liga Paulista.',
            'futsal-m-contact': 'For more information, contact us via instagram: <a href="https://www.instagram.com/futkapiva_masc/"><span>futkapiva_masc</span></a>.',

            // VoleiF.html
            'volleyball-f-title': 'Kapiva Women\'s Volleyball',
            'about-volleyball-f-title': 'About Women\'s Volleyball',
            'about-volleyball-f-text': 'The Atlética Kapiva Women\'s Volleyball team is a team that stands out for its technique, unity, and passion for the sport. Our athletes dedicate themselves to each training session to improve their attack, defense, and teamwork on the court. With a vibrant spirit and great determination, we always seek victory and worthy representation of Senac Santo Amaro in competitions. If you love volleyball and want to be part of an inspiring team, come to Kapiva!',
            'volleyball-f-competitions-text': 'The team is currently:',
            'volleyball-f-ndu-status': 'In the Quarter-Finals of Series E in NDU.',
            'volleyball-f-interatleticas-status': 'In the Fifth Round in InterAtléticas.',
            'volleyball-f-contact': 'For more information, contact us via instagram: <a href="https://www.instagram.com/voleikapiva_fem/"><span>voleikapiva_fem</span></a>.',

            // VoleiM.html
            'volleyball-m-title': 'Kapiva Men\'s Volleyball',
            'about-volleyball-m-title': 'About Men\'s Volleyball',
            'about-volleyball-m-text': 'The Atlética Kapiva Men\'s Volleyball team is a team that stands out for its strength, strategy, and passion for the sport. Our athletes dedicate themselves to each training session to improve their attack, defense, and teamwork on the court. With a vibrant spirit and great determination, we always seek victory and worthy representation of Senac Santo Amaro in competitions. If you love volleyball and want to be part of an inspiring team, come to Kapiva!',
            'volleyball-m-competitions-text': 'The team is currently not:',
            'volleyball-m-liga-paulista-status': 'In Second Place in Group A with 1 Victory in 2 games in Liga Paulista.',
            'volleyball-m-interatleticas-status': 'In the Fourth Round in InterAtléticas.',
            'volleyball-m-contact': 'For more information, contact us via instagram: <a href="https://www.instagram.com/voleikapiva/"><span>voleikapiva_masc</span></a>.',

            // xadrez.html
            'chess-title': 'Kapiva Chess',
            'about-chess-title': 'About Chess',
            'about-chess-text': 'The Chess section of Atlética Kapiva is a space to develop logical reasoning, strategy, and concentration. Our players gather to improve their skills on the board, exchange knowledge, and prepare for competitions. Chess is more than a game; it is a passion that challenges the mind and promotes intellectual growth. Come join our club and improve your game!',
            'chess-trainings-title': 'Trainings',
            'chess-trainings-day': 'Training Day:',
            'chess-trainings-hour': 'Training Hour:',
            'chess-competitions-text': 'The team is currently not registered in any university competition.',
            'chess-contact': 'For more information, contact us via instagram: <a href="https://www.instagram.com/xadrez.kapiva/"><span>Kapiva Chess</span></a>.',
        }
    };

    let currentLang = localStorage.getItem('lang') || 'pt'; // Pega o idioma salvo ou define 'pt'
    const theme = localStorage.getItem('theme') || 'light'; // Pega o tema salvo ou define 'light'
    const langButtons = document.querySelectorAll('.lang-button');
    const themeToggle = document.getElementById('theme-toggle');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navWrapper = document.querySelector('.nav-wrapper');
    const navLinks = document.querySelectorAll('.nav-wrapper nav ul.horizontal li a'); // Todos os links de navegação

    function applyTranslation() {
        document.querySelectorAll('[data-translate-key]').forEach(element => {
            const key = element.getAttribute('data-translate-key');
            if (translations[currentLang] && translations[currentLang][key]) {
                // Use innerHTML para permitir tags HTML dentro da tradução
                element.innerHTML = translations[currentLang][key];
            }
        });
    }

    function applyTheme(theme) {
        document.body.className = theme;
        // Atualiza o texto do botão de alternar tema com base no idioma
        if (theme === 'dark') {
            themeToggle.textContent = currentLang === 'pt' ? 'Alternar para Tema Claro' : 'Switch to Light Theme';
        } else {
            themeToggle.textContent = currentLang === 'pt' ? 'Alternar para Tema Escuro' : 'Switch to Dark Theme';
        }
    }


    function toggleTheme() {
        let currentTheme = localStorage.getItem('theme') || 'light';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme);
    }
    
    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            currentLang = button.id.replace('lang-', '');
            localStorage.setItem('lang', currentLang);
            langButtons.forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
            applyTranslation();
            // Após aplicar a tradução, re-aplique o tema para atualizar o texto do botão
            applyTheme(localStorage.getItem('theme') || 'light');
        });
    });

    themeToggle.addEventListener('click', toggleTheme);

    hamburgerMenu.addEventListener('click', () => {
        navWrapper.classList.toggle('active');
        hamburgerMenu.classList.toggle('active'); // Adiciona classe 'active' ao hamburger-menu
    });

    // Fechar o menu ao clicar em um link (para mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 900) { // Ajuste o breakpoint conforme o CSS
                navWrapper.classList.remove('active');
                hamburgerMenu.classList.remove('active');
            }
        });
    });

    // Fechar o menu se a tela for redimensionada para desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth > 900) {
            navWrapper.classList.remove('active');
            hamburgerMenu.classList.remove('active');
        }
    });


    applyTranslation();
    // Definir o botão de idioma correto como 'selected' na inicialização
    document.getElementById(`lang-${currentLang}`).classList.add('selected');
    // Aplicar o tema salvo na inicialização
    applyTheme(theme);
});