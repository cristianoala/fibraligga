import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Zap, Shield, Headphones, ChevronDown, Send } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const plans = [
    {
      name: "500 Mega",
      price: "R$ 99,00",
      speed: "500 Mbps",
      description: "Perfeito para navegação e streaming",
      features: ["Fibra Óptica", "Wi-Fi 6", "Instalação Grátis", "Suporte 24h"],
      highlighted: false,
    },
    {
      name: "600 Mega",
      price: "R$ 119,90",
      speed: "600 Mbps",
      description: "Ideal para trabalho remoto e múltiplos dispositivos",
      features: ["Fibra Óptica", "Wi-Fi 6", "Instalação Grátis", "Suporte 24h", "Prioridade"],
      highlighted: true,
    },
    {
      name: "800 Mega",
      price: "R$ 149,90",
      speed: "800 Mbps",
      description: "Máxima velocidade para tudo",
      features: ["Fibra Óptica", "Wi-Fi 6", "Instalação Grátis", "Suporte 24h", "Prioridade"],
      highlighted: false,
    },
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Velocidade Ultra",
      description: "Conexão de fibra óptica com velocidade incomparável para todas as suas atividades",
    },
    {
      icon: Shield,
      title: "Estabilidade Garantida",
      description: "Rede de fibra óptica com 99.9% de disponibilidade e conexão estável",
    },
    {
      icon: Headphones,
      title: "Suporte Dedicado",
      description: "Atendimento rápido e eficiente via WhatsApp, telefone e chat",
    },
  ];

  const faqs = [
    {
      question: "Como funciona a instalação?",
      answer: "A instalação é totalmente grátis! Nossos técnicos especializados vão até sua casa para instalar e configurar tudo. O processo leva cerca de 1 a 2 horas.",
    },
    {
      question: "Qual é o tempo de contrato?",
      answer: "Oferecemos planos sem fidelidade obrigatória. Você pode cancelar quando quiser, sem multas ou taxas adicionais.",
    },
    {
      question: "Funciona em qual região?",
      answer: "Atendemos Curitiba, Araucária e Fazenda Rio Grande. Verifique a disponibilidade no seu endereço através do nosso WhatsApp.",
    },
    {
      question: "Qual é o diferencial da Ligga?",
      answer: "Somos especializados em fibra óptica de verdade, com suporte humano rápido e atendimento via WhatsApp. Sem promessas vazias, apenas internet de qualidade.",
    },
  ];

  const handleWhatsApp = () => {
    const message = "Olá! Gostaria de saber mais sobre os planos de internet da Ligga Telecom.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5541987600220?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="font-display text-2xl font-bold text-primary">
            Ligga Telecom
          </div>
          <Button
            onClick={handleWhatsApp}
            className="bg-accent hover:bg-orange-700 text-white font-semibold"
          >
            Fale Conosco
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 relative overflow-hidden bg-black text-white">
        <div className="absolute inset-0 opacity-40">
          <img
            src="https://private-us-east-1.manuscdn.com/sessionFile/EMZQFZLfniZELGBXevIzfL/sandbox/oGsclh4nZLABMAP8QnwZMU-img-1_1771792384000_na1fn_aGVyby1maWJlci1vcHRpYw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRU1aUUZaTGZuaVpFTEdCWGV2SXpmTC9zYW5kYm94L29Hc2NsaDRuWkxBQk1BUDhRbndaTVUtaW1nLTFfMTc3MTc5MjM4NDAwMF9uYTFmbl9hR1Z5YnkxbWFXSmxjaTF2Y0hScFl3LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=KM1jq-yPIR2dGrfeWPh~GUUt9A7Ogf62kS9XTmkPr~NPxcxKvaeQS6LjkkM95nfn5zJG~hfGeFeMUZsArzwztxyDLbNH5fLyV58PHu-RDtvYFVO5zTvv3H5M627nzgfIrgJCt1BgpfBb-SS1e17kobgOOgp0kDnFkwj845ajqnxyDfjKPx7EEwcD-4G~N0f3yz2A74V9KfwyGdaPN7tX~52gAEvMeGh3ESUVERnEGQjTYsJuuY91s1a3urlc3zFLRT11a1qrjdJZUWO5CyBsbjcm0sKUOlw6dExX9wFFVnip6redKXZZoOiGQa~v-svuRuisbj5OSdMa9mfuIRkMoSA__"
            alt="Fiber Optic Network"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Internet de Fibra Óptica <span className="text-accent">Ultra Rápida</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Conexão estável, velocidade incomparável e atendimento humanizado via WhatsApp. Ligga Telecom: a fibra que conecta você com o melhor custo-benefício.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleWhatsApp}
                size="lg"
                className="bg-accent hover:bg-orange-700 text-white font-bold text-lg h-14 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <Send className="mr-2 h-5 w-5" />
                Fale Conosco no WhatsApp
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-black font-bold text-lg h-14 px-8 rounded-lg"
              >
                Ver Planos
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-accent" />
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-black mb-4">
              Nossos Planos
            </h2>
            <p className="text-xl text-gray-600">
              Escolha a velocidade ideal para sua casa ou empresa
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                  plan.highlighted
                    ? "border-2 border-accent bg-white md:scale-105"
                    : "border border-gray-200 bg-white"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 right-0 bg-accent text-white px-4 py-2 font-bold text-sm rounded-bl-lg">
                    MAIS POPULAR
                  </div>
                )}

                <div className="p-8">
                  <h3 className="font-display text-2xl font-bold text-black mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>

                  <div className="mb-8">
                    <div className="text-5xl font-bold text-accent mb-2">
                      {plan.price}
                    </div>
                    <p className="text-gray-600 text-sm">por mês</p>
                  </div>

                  <div className="mb-8 p-4 bg-orange-50 rounded-lg">
                    <p className="text-center font-bold text-black text-lg">
                      {plan.speed}
                    </p>
                  </div>

                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-accent flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    onClick={handleWhatsApp}
                    className={`w-full font-bold text-lg h-12 rounded-lg transition-all duration-300 ${
                      plan.highlighted
                        ? "bg-accent hover:bg-orange-700 text-white"
                        : "bg-black hover:bg-gray-800 text-white"
                    }`}
                  >
                    Contratar Agora
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-black mb-4">
              Por Que Escolher Ligga?
            </h2>
            <p className="text-xl text-gray-600">
              Qualidade, velocidade e atendimento que você merece
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="p-8 bg-gray-50 rounded-lg border border-gray-200 hover:border-accent hover:shadow-lg transition-all duration-300"
                >
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full">
                      <Icon className="h-8 w-8 text-accent" />
                    </div>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-black mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Cobertura em Sua Região
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Atendemos Curitiba, Araucária e Fazenda Rio Grande
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {["Curitiba", "Araucária", "Fazenda Rio Grande"].map((city, i) => (
              <div key={i} className="p-6 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
                <p className="text-2xl font-bold">{city}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-300 mb-8">
            Não tem certeza se sua região é atendida? Fale conosco no WhatsApp!
          </p>
          <Button
            onClick={handleWhatsApp}
            className="bg-accent hover:bg-orange-700 text-white font-bold text-lg h-12 px-8 rounded-lg"
          >
            Verificar Cobertura
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-black mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-gray-600">
              Tire suas dúvidas sobre nossos planos e serviços
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden hover:border-accent transition-colors"
              >
                <button
                  onClick={() =>
                    setExpandedFaq(expandedFaq === index ? null : index)
                  }
                  className="w-full p-6 bg-white hover:bg-gray-50 transition-colors text-left flex items-center justify-between"
                >
                  <h3 className="font-display text-lg font-bold text-black">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`h-5 w-5 text-accent transition-transform duration-300 ${
                      expandedFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {expandedFaq === index && (
                  <div className="p-6 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Pronto para Conectar?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Fale com nossos especialistas via WhatsApp e descubra o plano perfeito para você
          </p>
          <Button
            onClick={handleWhatsApp}
            size="lg"
            className="bg-black hover:bg-gray-800 text-white font-bold text-lg h-14 px-10 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            <Send className="mr-2 h-5 w-5" />
            Iniciar Conversa no WhatsApp
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-display text-lg font-bold mb-4">
                Ligga Telecom
              </h3>
              <p className="text-gray-400">
                Internet de fibra óptica com qualidade e atendimento humanizado
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Planos</h4>
              <ul className="space-y-2 text-gray-400">
                <li>500 Mega</li>
                <li>600 Mega</li>
                <li>800 Mega</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Cobertura</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Curitiba</li>
                <li>Araucária</li>
                <li>Fazenda Rio Grande</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-400">
                <li>WhatsApp: (41) 98760-0220</li>
                <li>Email: contato@ligga.com.br</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
            <p>
              &copy; 2026 Ligga Telecom. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <button
        onClick={handleWhatsApp}
        className="fixed bottom-8 right-8 w-16 h-16 bg-accent hover:bg-orange-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center z-40"
        title="Fale conosco no WhatsApp"
      >
        <Send className="h-8 w-8" />
      </button>
    </div>
  );
}
