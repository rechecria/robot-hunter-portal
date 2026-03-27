// Extract and export all vault data as clean JavaScript
// Data transformed from vault-data.json

export const marketData = {
  "2024": {
    "marketsandmarkets": {
      value: 17.7,
      currency: "USD bi",
      source: "MarketsandMarkets"
    },
    "grandview": {
      value: 14.7,
      currency: "USD bi",
      source: "Grand View Research"
    },
    "mordor": {
      value: 25,
      currency: "USD bi",
      source: "Mordor Intelligence"
    }
  },
  "2030": {
    "marketsandmarkets": {
      value: 56.3,
      currency: "USD bi",
      cagr: "26.0%"
    },
    "grandview": {
      value: 48.1,
      currency: "USD bi",
      cagr: "23.0%"
    },
    "mordor": {
      value: 75,
      currency: "USD bi",
      cagr: "24.6%"
    }
  },
  "segments": {
    "ordenha_pecuaria": {
      share: "38%",
      trend: "Maduro, crescimento estável"
    },
    "drones_uav": {
      share: "24% CAGR",
      trend: "Segmento de maior crescimento"
    },
    "tratores_autonomos": {
      trend: "Em expansão, fase de comercialização"
    },
    "capina_weeding": {
      trend: "Em expansão, forte demanda em orgânicos"
    },
    "pulverizadores": {
      trend: "Em expansão, ROI mais claro"
    },
    "colheitadeiras": {
      trend: "Emergente, desafio técnico mais alto"
    }
  }
};

export const painPoints = [
  {
    id: 1,
    titulo: "Escassez de Mão de Obra",
    descricao: "67% dos agricultores citam mão de obra como desafio #1 ou #2. Califórnia gastou US$ 16,3 bilhões em 850 milhões de horas em 2023 (~US$ 20/hora).",
    solucoes: ["Tratores autônomos 24h", "Robôs de capina automática", "Plataformas retrofit (Bluewhite, Agtonomy)"],
    impacto: "Altíssimo - problema dominante em todas as regiões"
  },
  {
    id: 2,
    titulo: "Custo e Dependência de Insumos Químicos",
    descricao: "Bilhões gastos em herbicidas, pesticidas, fungicidas. Pressão regulatória crescente (UE proibindo glifosato) e resistência de pragas.",
    solucoes: [
      "Ecorobotix ARA: 95% redução herbicidas",
      "Verdant Robotics: 96% redução com micro-spray",
      "Carbon Robotics LaserWeeder: 100% eliminação",
      "Aigen Element: 100% eliminação (capina solar)"
    ],
    impacto: "Muito alto - especialmente para produtores orgânicos"
  },
  {
    id: 3,
    titulo: "Compactação do Solo e Degradação",
    descricao: "Tratores pesados (>10 ton) causam compactação progressiva. €1,2 bilhão/ano em perdas só na UE.",
    solucoes: [
      "Fendt Xaver: 150 kg vs >10.000 kg de trator",
      "FarmDroid FD20: ~900 kg, solar",
      "AgXeed AgBot: Esteiras com <30 kPa pressão"
    ],
    impacto: "Alto - preocupação crescente em EU sustentabilidade"
  },
  {
    id: 4,
    titulo: "Janelas de Operação Limitadas",
    descricao: "Operador humano: 8-12h/dia. Robô autônomo: 24h sem parar. Pode multiplicar capacidade na mesma janela climática.",
    solucoes: [
      "AgXeed AgBot: Operação 24h diesel-elétrico",
      "Robotti LR: 60h autonomia energética",
      "Fendt Xaver: Swarm de 6 robôs, 3 ha/h"
    ],
    impacto: "Alto - especialmente crítico em plantio e colheita"
  },
  {
    id: 5,
    titulo: "Falta de Dados de Precisão e Rastreabilidade",
    descricao: "Perdas por decisões baseadas em estimativas. Pressão por certificação de origem e práticas sustentáveis.",
    solucoes: [
      "Plataformas IoT com IA (Solinftec Solix ALICE)",
      "Câmeras e sensores em tempo real",
      "Integração com sistemas de gestão (ISOBUS)"
    ],
    impacto: "Médio-alto - crescente com premium por sustentabilidade"
  }
];

export const trends = [
  {
    id: 1,
    titulo: "M&A e Consolidação",
    descricao: "John Deere adquiriu Bear Flag ($250M) e GUSS. Kubota parceria com Agtonomy. CNH Industrial + AGCO movimentações."
  },
  {
    id: 2,
    titulo: "RaaS (Robotics-as-a-Service)",
    descricao: "Bluewhite, Greenfield Robotics e startups pivotam para modelo de assinatura mensal vs. CapEx alto."
  },
  {
    id: 3,
    titulo: "IA Generativa em Decisões Agrícolas",
    descricao: "De visão computacional para IA generativa analisando safras, clima e dados de solo em tempo real."
  },
  {
    id: 4,
    titulo: "Energia Solar e Autossuficiência Energética",
    descricao: "FarmDroid FD20, Aigen Element, Agrointelli Robotti usam solar. Reduz custo operacional zero-emission."
  },
  {
    id: 5,
    titulo: "Interoperabilidade e Padrões Abertos",
    descricao: "ISO 18497, ISOBUS 2.0, tentativas de padrão aberto para trocar dados entre sistemas."
  }
];

export const categories = [
  {
    id: "trator",
    nome: "Tratores Autônomos",
    descricao: "Máquinas principais para preparo de solo, plantio e transporte",
    count: 12
  },
  {
    id: "pulverizador",
    nome: "Pulverizadores de Precisão",
    descricao: "Redução de até 96% no uso de químicos com IA e micro-spray",
    count: 5
  },
  {
    id: "weeder",
    nome: "Robôs de Capina (Weeding)",
    descricao: "Capina mecânica ou óptica, essencial para orgânicos",
    count: 8
  },
  {
    id: "colheitadeira",
    nome: "Colheitadeiras Robóticas",
    descricao: "Maior desafio técnico, colheita de frutas e especializadas",
    count: 4
  },
  {
    id: "semeadora",
    nome: "Semeadoras Autônomas",
    descricao: "Plantio de precisão planta-por-planta",
    count: 3
  },
  {
    id: "drone",
    nome: "Drones Agrícolas",
    descricao: "Monitoramento, pulverização aérea, mapeamento",
    count: 2
  }
];

// Full company database
export const companies = [
  {
    id: "AGCO",
    nome: "AGCO Corporation",
    pais: "Estados Unidos",
    status: "ativa",
    estagio: "ipo",
    fundacao: 1990,
    funding: "IPO",
    produtos: ["Fendt Xaver", "Fendt Xaver GT"],
    autonomyLevel: "totalmente-autonomo",
    website: "https://www.agcocorp.com",
    businessModel: "venda-direta",
    techStack: ["gps-rtk", "lidar", "camera-rgb", "ia-visao", "can-bus", "isobus"],
    ceo: "Eric Hansotia",
    funcionarios: 25000
  },
  {
    id: "Amos-Power",
    nome: "AMOS Power",
    pais: "Estados Unidos",
    status: "ativa",
    estagio: "seed",
    fundacao: 2021,
    funding: "$1.13M (2024)",
    produtos: ["Amos Power A3", "Amos Power A4"],
    autonomyLevel: "totalmente-autonomo",
    website: "https://www.amospower.com",
    businessModel: "venda-direta",
    techStack: ["gps-rtk", "camera-rgb", "ia-visao"],
    ceo: "N/A"
  },
  {
    id: "ANT-Robotics",
    nome: "ANT Robotics",
    pais: "China",
    status: "ativa",
    estagio: "growth",
    funding: "$2M",
    produtos: ["ANT Logistics Robot"],
    autonomyLevel: "semi-autonoma",
    businessModel: "raas",
    techStack: ["gps"]
  },
  {
    id: "Afara",
    nome: "Afara Agricultural Technologies",
    pais: "Turquia",
    status: "ativa",
    estagio: "seed",
    fundacao: 2023,
    funding: "Crowdfunding",
    produtos: ["Afara Cotton Picker"],
    autonomyLevel: "totalmente-autonomo",
    website: "https://afara.com.tr",
    businessModel: "venda-direta",
    techStack: ["camera-rgb", "lidar", "ultrassonico", "ia-visao"],
    ceo: "Ömer Muratlı"
  },
  {
    id: "AgXeed",
    nome: "AgXeed",
    pais: "Holanda",
    status: "ativa",
    estagio: "series-a",
    fundacao: 2018,
    funding: "Series A (2025)",
    produtos: ["AgBot T2 7 Series", "AgBot T2 5 Series", "AgBot W3 2 Series"],
    autonomyLevel: "totalmente-autonomo",
    website: "https://www.agxeed.com",
    businessModel: "venda-direta",
    techStack: ["gps-rtk", "lidar", "camera-rgb", "isobus", "can-bus"],
    ceo: "N/A"
  },
  {
    id: "Aigen",
    nome: "Aigen",
    pais: "Estados Unidos",
    status: "ativa",
    estagio: "growth",
    funding: "$50K+ pré-vendas",
    produtos: ["Element"],
    autonomyLevel: "semi-autonomo",
    website: "https://www.aigen.io",
    businessModel: "venda-direta",
    techStack: ["solar", "mecanico"],
    ceo: "N/A"
  },
  {
    id: "Agrointelli",
    nome: "Agrointelli",
    pais: "Dinamarca",
    status: "inativa",
    estagio: "growth",
    fundacao: 2017,
    funding: "€14.5M (falhou fev/2026)",
    produtos: ["Robotti LR"],
    autonomyLevel: "totalmente-autonomo",
    website: "https://www.agrointelli.com"
  },
  {
    id: "Agronomy-AI",
    nome: "Agronomy AI",
    pais: "Canadá",
    status: "ativa",
    estagio: "series-a",
    funding: "Series A",
    produtos: ["Agronomy Intelligence Platform"],
    autonomyLevel: "software",
    website: "https://agronomyai.com",
    businessModel: "saas"
  },
  {
    id: "Agtonomy",
    nome: "Agtonomy",
    pais: "Estados Unidos",
    status: "ativa",
    estagio: "series-b",
    fundacao: 2019,
    funding: "$50.8M Series B",
    produtos: ["Agtonomy Platform", "Parcerias Kubota, Bobcat"],
    autonomyLevel: "totalmente-autonomo",
    website: "https://www.agtonomy.com",
    businessModel: "saas",
    techStack: ["plataforma-software", "gps-rtk", "camera-rgb"],
    ceo: "Igal Chriqui"
  },
  {
    id: "Bluewhite",
    nome: "Bluewhite",
    pais: "Israel",
    status: "ativa",
    estagio: "series-c",
    fundacao: 2017,
    funding: "$89M Series C",
    produtos: ["Pathfinder", "Retrofit Kit"],
    autonomyLevel: "totalmente-autonomo",
    website: "https://www.bluewhitetech.com",
    businessModel: "venda-direta",
    techStack: ["camera-rgb", "lidar", "ia-visao"],
    ceo: "Avi Matan",
    funcionarios: 100
  },
  {
    id: "Carbon-Robotics",
    nome: "Carbon Robotics",
    pais: "Estados Unidos",
    status: "ativa",
    estagio: "series-d",
    fundacao: 2019,
    funding: "$70M Series D",
    produtos: ["LaserWeeder"],
    autonomyLevel: "totalmente-autonomo",
    website: "https://www.carbonrobotics.com",
    businessModel: "venda-direta",
    techStack: ["laser-co2", "camera-rgb", "ia-visao"],
    ceo: "Paul Mikesell"
  },
  {
    id: "Ecorobotix",
    nome: "Ecorobotix",
    pais: "Suíça",
    status: "ativa",
    estagio: "growth",
    fundacao: 2012,
    funding: "$297M total",
    produtos: ["ARA Ultra-High Precision Sprayer"],
    autonomyLevel: "totalmente-autonomo",
    website: "https://www.ecorobotix.com",
    businessModel: "venda-direta",
    techStack: ["camera-hd", "gps-rtk", "ia-visao"],
    ceo: "Auréle Parriaux",
    funcionarios: 200
  },
  {
    id: "FarmDroid",
    nome: "FarmDroid",
    pais: "Dinamarca",
    status: "ativa",
    estagio: "growth",
    fundacao: 2017,
    funding: "Não divulgado",
    produtos: ["FD20 Solar Weeder"],
    autonomyLevel: "totalmente-autonomo",
    website: "https://www.farmdroid.dk",
    businessModel: "venda-direta",
    techStack: ["solar", "gps", "mecanico"],
    ceo: "John Andersen"
  },
  {
    id: "FJDynamics",
    nome: "FJDynamics",
    pais: "China",
    status: "ativa",
    estagio: "growth",
    fundacao: 2018,
    funding: "Não divulgado",
    produtos: ["FJ-EV1", "FJ-HV1"],
    autonomyLevel: "totalmente-autonomo",
    website: "https://fjdynamics.com",
    businessModel: "venda-direta",
    techStack: ["gps-rtk", "lidar", "camera-rgb"]
  },
  {
    id: "Grodi",
    nome: "Grodi",
    pais: "Espanha",
    status: "ativa",
    estagio: "seed",
    funding: "Não divulgado",
    produtos: ["VEGA 11"],
    autonomyLevel: "semi-autonoma",
    website: "https://www.grodi.es",
    businessModel: "venda-direta"
  },
  {
    id: "Greenfield-Robotics",
    nome: "Greenfield Robotics",
    pais: "Estados Unidos",
    status: "ativa",
    estagio: "series-a",
    fundacao: 2017,
    funding: "Series A",
    produtos: ["Oz Weeder"],
    autonomyLevel: "totalmente-autonomo",
    website: "https://www.greenfieldrobotics.com",
    businessModel: "raas",
    techStack: ["camera-rgb", "ia-visao"],
    ceo: "Tom Jennings"
  },
  {
    id: "Ikos-Advanced",
    nome: "Ikos Advanced",
    pais: "Espanha",
    status: "ativa",
    estagio: "series-a",
    funding: "Series A",
    produtos: ["IKOS Irrigation Control"],
    autonomyLevel: "semi-autonoma",
    website: "https://www.ikosadv.com",
    businessModel: "saas"
  },
  {
    id: "John-Deere",
    nome: "John Deere",
    pais: "Estados Unidos",
    status: "ativa",
    estagio: "ipo",
    fundacao: 1837,
    funding: "IPO",
    produtos: ["8R Autônomo", "See & Spray", "Operations Center"],
    autonomyLevel: "totalmente-autonomo",
    website: "https://www.deere.com",
    businessModel: "venda-direta",
    techStack: ["gps-rtk", "lidar", "camera-rgb", "ia-visao", "isobus"],
    ceo: "Raj Kalathur",
    funcionarios: 77000
  },
  {
    id: "Kubota",
    nome: "Kubota",
    pais: "Japão",
    status: "ativa",
    estagio: "ipo",
    fundacao: 1890,
    funding: "IPO",
    produtos: ["KFAST Autônomo", "Agri Robo Series"],
    autonomyLevel: "totalmente-autonomo",
    website: "https://www.kubota.com",
    businessModel: "venda-direta",
    techStack: ["gps-rtk", "camera-rgb", "ia-visao"],
    ceo: "N/A",
    funcionarios: 40000
  },
  {
    id: "Monarch-Tractor",
    nome: "Monarch Tractor",
    pais: "Estados Unidos",
    status: "ativa",
    estagio: "series-b",
    fundacao: 2019,
    funding: "$220M+",
    produtos: ["MK-V Elétrico"],
    autonomyLevel: "totalmente-autonomo",
    website: "https://www.monarchtractor.com",
    businessModel: "venda-direta",
    techStack: ["gps-rtk", "camera-rgb", "lidar", "ia-visao"],
    ceo: "Sophia Gaertner",
    funcionarios: 150
  },
  {
    id: "Nao-Technologies",
    nome: "Naïo Technologies",
    pais: "França",
    status: "ativa",
    estagio: "growth",
    fundacao: 2011,
    funding: "€30M+",
    produtos: ["Oz", "Ted", "Orio"],
    autonomyLevel: "totalmente-autonomo",
    website: "https://www.naiotechnologies.com",
    businessModel: "venda-direta",
    techStack: ["camera-rgb", "lidar", "ia-visao"],
    ceo: "Gaëtan Séverac",
    funcionarios: 80
  },
  {
    id: "Nature-Robots",
    nome: "Nature Robots",
    pais: "Alemanha",
    status: "ativa",
    estagio: "series-a",
    fundacao: 2018,
    funding: "Series A",
    produtos: ["Laser Weeding System"],
    autonomyLevel: "totalmente-autonomo",
    website: "https://www.nature-robots.de",
    businessModel: "venda-direta",
    techStack: ["laser", "camera-rgb", "ia-visao"]
  },
  {
    id: "Niqo-Robotics",
    nome: "Niqo Robotics",
    pais: "Índia",
    status: "ativa",
    estagio: "series-a",
    fundacao: 2018,
    funding: "$13M Series A",
    produtos: ["Niqo Sense"],
    autonomyLevel: "software",
    website: "https://www.niqo.io",
    businessModel: "saas",
    techStack: ["ia-visao", "camera-rgb"]
  },
  {
    id: "Robotics-Plus",
    nome: "Robotics Plus",
    pais: "Nova Zelândia",
    status: "ativa",
    estagio: "series-a",
    funding: "Series A",
    produtos: ["Harvest & Logistics Platform"],
    autonomyLevel: "semi-autonomo",
    website: "https://www.roboticsplus.co.nz",
    businessModel: "raas"
  },
  {
    id: "Saga-Robotics",
    nome: "Saga Robotics",
    pais: "Noruega/UK",
    status: "ativa",
    estagio: "series-b",
    funding: "Series B",
    produtos: ["Thorvald UV-C", "Thorvald Generalist"],
    autonomyLevel: "totalmente-autonomo",
    website: "https://www.sagarobotics.com",
    businessModel: "venda-direta",
    techStack: ["camera-rgb", "lidar", "uv-c"],
    ceo: "Fredrik Christiansen"
  },
  {
    id: "Solinftec",
    nome: "Solinftec",
    pais: "Brasil",
    status: "ativa",
    estagio: "series-c",
    fundacao: 2011,
    funding: "$189M",
    produtos: ["Solix com IA ALICE"],
    autonomyLevel: "software",
    website: "https://www.solinftec.com.br",
    businessModel: "saas",
    techStack: ["ia", "iot", "sensores"],
    ceo: "André Grossmann"
  },
  {
    id: "SwarmFarm-Robotics",
    nome: "SwarmFarm Robotics",
    pais: "Austrália",
    status: "ativa",
    estagio: "growth",
    fundacao: 2010,
    funding: "Não divulgado",
    produtos: ["SwarmBot"],
    autonomyLevel: "totalmente-autonomo",
    website: "https://www.swarmfarm.com",
    businessModel: "venda-direta",
    techStack: ["gps-rtk", "camera-rgb", "lidar"],
    ceo: "Stephen Walker"
  },
  {
    id: "Verdant-Robotics",
    nome: "Verdant Robotics",
    pais: "Estados Unidos",
    status: "ativa",
    estagio: "series-b",
    fundacao: 2019,
    funding: "$60M Series B",
    produtos: ["SharpShooter"],
    autonomyLevel: "totalmente-autonomo",
    website: "https://www.verdantrobotics.com",
    businessModel: "venda-direta",
    techStack: ["camera-rgb", "ia-visao", "micro-spray"],
    ceo: "Nailen Mathai",
    funcionarios: 80
  },
  {
    id: "Vitibot",
    nome: "Vitibot",
    pais: "França",
    status: "ativa",
    estagio: "growth",
    fundacao: 2018,
    funding: "€10M+",
    produtos: ["Bakus"],
    autonomyLevel: "semi-autonomo",
    website: "https://www.vitibot.com",
    businessModel: "venda-direta",
    techStack: ["camera-rgb", "ia-visao"]
  },
  {
    id: "AutoAgroMachines",
    nome: "AutoAgroMachines",
    pais: "Brasil",
    status: "ativa",
    estagio: "growth",
    funding: "Não divulgado",
    produtos: ["Forest.Bot"],
    autonomyLevel: "totalmente-autonomo",
    website: "https://autoagromachines.com.br",
    businessModel: "venda-direta",
    techStack: ["gps", "camera-rgb", "solar"]
  },
  {
    id: "AgreenCulture",
    nome: "AgreenCulture",
    pais: "França",
    status: "ativa",
    estagio: "series-a",
    funding: "Series A",
    produtos: ["Kit de Autonomia OEM"],
    autonomyLevel: "software",
    website: "https://www.agreenculture.com",
    businessModel: "saas"
  }
];

// Vehicle database
export const vehicles = [
  {
    id: "Ecorobotix-ARA",
    nome: "ARA Ultra-High Precision Sprayer",
    fabricante: "Ecorobotix",
    categoria: "pulverizador",
    status: "comercial",
    propulsao: "diesel/hibrido",
    potencia: null,
    autonomyLevel: "Completa (Plant-by-Plant)",
    sensores: ["Câmeras HD", "GPS/RTK", "Inclinômetros", "Sensores velocidade"],
    preco: null,
    image: "ecorobotix-ara.jpg"
  },
  {
    id: "Afara-Cotton-Picker",
    nome: "Afara Cotton Picker",
    fabricante: "Afara",
    categoria: "colheitadeira",
    status: "comercial",
    propulsao: "eletrico",
    potencia: null,
    autonomyLevel: "Totalmente autônomo",
    sensores: ["4x câmeras RGB", "2x LIDAR", "Ultrassônico"],
    preco: 140000,
    image: "afara-cotton-picker.jpg"
  },
  {
    id: "AgXeed-AgBot-T2-7-Series",
    nome: "AgBot T2 7 SERIES",
    fabricante: "AgXeed",
    categoria: "trator",
    status: "comercial",
    propulsao: "hibrido-diesel",
    potencia: 230,
    autonomyLevel: "Totalmente autônomo",
    sensores: ["GPS/RTK", "LIDAR", "Câmera RGB"],
    preco: null,
    image: "agxeed-agbot.jpg"
  },
  {
    id: "Aigen-Element",
    nome: "Element Solar Weeder",
    fabricante: "Aigen",
    categoria: "weeder",
    status: "pré-produção",
    propulsao: "solar",
    potencia: null,
    autonomyLevel: "Semi-autônomo",
    sensores: ["Câmera RGB", "Sensores solo"],
    preco: 50000,
    image: "aigen-element.jpg"
  },
  {
    id: "Carbon-Robotics-LaserWeeder",
    nome: "LaserWeeder",
    fabricante: "Carbon Robotics",
    categoria: "weeder",
    status: "comercial",
    propulsao: "diesel",
    potencia: null,
    autonomyLevel: "Totalmente autônomo",
    sensores: ["Câmera RGB", "LIDAR", "Laser CO₂"],
    preco: 250000,
    image: "carbon-laser.jpg"
  },
  {
    id: "FarmDroid-FD20",
    nome: "FD20 Solar Weeder",
    fabricante: "FarmDroid",
    categoria: "weeder",
    status: "comercial",
    propulsao: "solar",
    potencia: null,
    autonomyLevel: "Totalmente autônomo",
    sensores: ["Câmera RGB", "GPS", "Sensores solo"],
    preco: 35000,
    image: "farmdroid-fd20.jpg"
  },
  {
    id: "John-Deere-8R",
    nome: "8R Autônomo",
    fabricante: "John Deere",
    categoria: "trator",
    status: "comercial",
    propulsao: "diesel",
    potencia: 330,
    autonomyLevel: "Totalmente autônomo",
    sensores: ["GPS/RTK", "Câmeras 8x", "LIDAR", "Sensores diversos"],
    preco: 500000,
    image: "john-deere-8r.jpg"
  },
  {
    id: "John-Deere-See-and-Spray",
    nome: "See & Spray Premium",
    fabricante: "John Deere",
    categoria: "pulverizador",
    status: "comercial",
    propulsao: "diesel",
    potencia: null,
    autonomyLevel: "Semi-autônomo",
    sensores: ["36x câmeras", "IA visão", "RTK"],
    preco: 300000,
    image: "john-deere-see-spray.jpg"
  },
  {
    id: "Kubota-KFAST",
    nome: "KFAST Autônomo",
    fabricante: "Kubota",
    categoria: "trator",
    status: "comercial",
    propulsao: "diesel",
    potencia: 180,
    autonomyLevel: "Totalmente autônomo",
    sensores: ["GPS/RTK", "Câmera RGB", "Sensores diversos"],
    preco: 250000,
    image: "kubota-kfast.jpg"
  },
  {
    id: "Monarch-MK-V",
    nome: "MK-V Elétrico",
    fabricante: "Monarch Tractor",
    categoria: "trator",
    status: "comercial",
    propulsao: "eletrico",
    potencia: 180,
    autonomyLevel: "Totalmente autônomo",
    sensores: ["GPS/RTK", "Câmeras múltiplas", "LIDAR"],
    preco: 350000,
    image: "monarch-mkv.jpg"
  },
  {
    id: "Naïo-Oz",
    nome: "Oz Weeder",
    fabricante: "Naïo Technologies",
    categoria: "weeder",
    status: "comercial",
    propulsao: "eletrico",
    potencia: null,
    autonomyLevel: "Totalmente autônomo",
    sensores: ["Câmera RGB", "LIDAR", "GPS"],
    preco: 45000,
    image: "naïo-oz.jpg"
  },
  {
    id: "Naïo-Ted",
    nome: "Ted Sprayer",
    fabricante: "Naïo Technologies",
    categoria: "pulverizador",
    status: "comercial",
    propulsao: "eletrico",
    potencia: null,
    autonomyLevel: "Semi-autônomo",
    sensores: ["Câmera RGB", "GPS", "Sensores clima"],
    preco: 60000,
    image: "naïo-ted.jpg"
  },
  {
    id: "Saga-Thorvald",
    nome: "Thorvald UV-C",
    fabricante: "Saga Robotics",
    categoria: "weeder",
    status: "comercial",
    propulsao: "diesel",
    potencia: null,
    autonomyLevel: "Semi-autônomo",
    sensores: ["Câmera RGB", "UV-C", "Sensores solo"],
    preco: 180000,
    image: "saga-thorvald.jpg"
  },
  {
    id: "Verdant-SharpShooter",
    nome: "SharpShooter",
    fabricante: "Verdant Robotics",
    categoria: "pulverizador",
    status: "comercial",
    propulsao: "diesel",
    potencia: null,
    autonomyLevel: "Totalmente autônomo",
    sensores: ["Câmera RGB", "Sensores pressão", "Micro-spray 5mm"],
    preco: 320000,
    image: "verdant-sharpshooter.jpg"
  },
  {
    id: "SwarmFarm-SwarmBot",
    nome: "SwarmBot",
    fabricante: "SwarmFarm Robotics",
    categoria: "trator",
    status: "comercial",
    propulsao: "diesel",
    potencia: 50,
    autonomyLevel: "Totalmente autônomo",
    sensores: ["GPS/RTK", "Câmera RGB", "LIDAR"],
    preco: 150000,
    image: "swarmfarm-swarmbot.jpg"
  }
];

// Regional data
export const regions = {
  "Estados Unidos": {
    empresas: 16,
    paises: "EUA",
    funding: "$950M+",
    destaque: "Capital e startups: Califórnia, Kansas, Iowa"
  },
  "Europa": {
    empresas: 15,
    paises: "França, Holanda, Dinamarca, Alemanha, Suíça, Noruega, UK",
    funding: "€200M+",
    destaque: "Regulamentação e padronização ISO 18497"
  },
  "Japão": {
    empresas: 1,
    paises: "Japão",
    funding: "$500M+ gov",
    destaque: "Kubota Agri Robo Series: 700+ em operação"
  },
  "Austrália": {
    empresas: 1,
    paises: "Austrália",
    funding: "$50M+",
    destaque: "Fazendas de larga escala (broadacre)"
  },
  "Brasil": {
    empresas: 2,
    paises: "Brasil",
    funding: "$189M+",
    destaque: "Solinftec: startup mais capitalizada da América Latina"
  }
};
