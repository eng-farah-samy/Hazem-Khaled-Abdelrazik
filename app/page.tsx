"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Facebook,
  Instagram,
  MessageCircle,
  CreditCard,
  Wallet,
  User,
  Award,
  Briefcase,
  Newspaper,
  Phone,
  MapPin,
  ExternalLink,
  Scale,
  Check,
} from "lucide-react"
import Image from "next/image"

export default function LawyerWebsite() {
  const [currentPage, setCurrentPage] = useState<"home" | "portfolio">("home")
  const [activeTab, setActiveTab] = useState<"about" | "experience" | "certificates" | "news">("about")
  const [copiedItem, setCopiedItem] = useState<string | null>(null)

  const t = {
    title: "المستشار / حازم خالد عبد الرازق",
    subtitle: "ماجستير القانون العام والخاص",
    phone: "+20 11 28837666",
    email: "hazem.lawyer@email.com",
    location: "الإسكندرية، مصر",
    paymentMethods: "طرق الدفع",
    viewProfile: "عرض الملف الشخصي",
    backToHome: "العودة للرئيسية",
    personalProfile: "الملف الشخصي",
    aboutMe: "نبذة عني",
    experience: "الخبرة المهنية",
    certificates: "الشهادات والمؤهلات",
    news: "الأخبار والمقالات",
    copyright: "© 2025 المستشار حازم خالد عبد الرازق. جميع الحقوق محفوظة.",
  }

  const socialLinks = [
    { icon: MessageCircle, label: "واتساب", href: "https://wa.me/201128837666", color: "bg-green-600" },
    {
      icon: Facebook,
      label: "فيسبوك",
      href: "https://www.facebook.com/rane.rone76?locale=ar_AR",
      color: "bg-blue-600",
    },
    {
      icon: Instagram,
      label: "إنستجرام",
      href: "https://www.instagram.com/hazemkhaledabdelrazik/",
      color: "bg-pink-600",
    },
  ]

  const paymentLinks = [
    { icon: CreditCard, label: "إنستا باي", href: "#" },
    { icon: Wallet, label: "اتصالات كاش", number: "+20 11 28837666", isCopyable: true },
  ]

  const copyToClipboard = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedItem(label)
      setTimeout(() => setCopiedItem(null), 2000)
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

  const newsItems = [
    {
      id: 1,
      title: "تطورات جديدة في قانون الأحوال الشخصية",
      summary: "آخر التحديثات والتعديلات في قانون الأحوال الشخصية وتأثيرها على المواطنين",
      image: "/placeholder-4i03s.png",
      date: "2024-01-15",
    },
    {
      id: 2,
      title: "حقوق المستهلك في القانون المصري",
      summary: "دليل شامل لحقوق المستهلك وكيفية حمايتها قانونياً",
      image: "/consumer-rights-protection.png",
      date: "2024-01-10",
    },
    {
      id: 3,
      title: "التحكيم التجاري والمنازعات",
      summary: "أهمية التحكيم في حل المنازعات التجارية وإجراءاته",
      image: "/placeholder-hy2dg.png",
      date: "2024-01-05",
    },
  ]

  const renderTabContent = () => {
    switch (activeTab) {
      case "about":
        return (
          <Card className="animate-slide-up bg-card/90 backdrop-blur-sm border-accent/20 hover-glow">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <User className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-semibold text-accent">{t.aboutMe}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                محامي متخصص في القانون الجنائي والقانون التجاري مع خبرة 5 سنوات في مجال المحاماة والاستشارات القانونية.
                حاصل على ماجستير في القانون العام والخاص من جامعة مدينة السادات، ومتخصص في القانون الجنائي ومحامي شركة.
                أسعى دائماً لتقديم أفضل الخدمات القانونية لموكليّ مع الحفاظ على أعلى معايير المهنية والنزاهة.
              </p>
            </CardContent>
          </Card>
        )
      case "experience":
        return (
          <Card className="animate-slide-up bg-card/90 backdrop-blur-sm border-accent/20 hover-glow">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-semibold text-accent">{t.experience}</h3>
              </div>
              <div className="space-y-6">
                <div className="border-r-2 border-accent pr-4">
                  <h4 className="font-semibold text-lg">محامي أول - شركة مصر العامرية للغزل والنسيج</h4>
                  <p className="text-accent font-medium">2020 - حتى الآن (4 سنوات)</p>
                  <p className="text-muted-foreground mt-2">
                    العمل كمحامي أول في شركة مصر العامرية للغزل والنسيج، متخصص في القضايا التجارية والعمالية والعقود
                    التجارية.
                  </p>
                </div>
                <div className="border-r-2 border-muted pr-4">
                  <h4 className="font-semibold text-lg">محامي متخصص في القانون الجنائي</h4>
                  <p className="text-muted-foreground font-medium">2019 - حتى الآن</p>
                  <p className="text-muted-foreground mt-2">
                    ممارسة المحاماة في القضايا الجنائية والتجارية مع التركيز على تقديم الاستشارات القانونية المتخصصة.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )
      case "certificates":
        return (
          <Card className="animate-slide-up bg-card/90 backdrop-blur-sm border-accent/20 hover-glow">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-semibold text-accent">{t.certificates}</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-muted/50 p-4 rounded-lg hover:shadow-md transition-shadow border border-accent/10">
                  <h4 className="font-semibold mb-2">ماجستير القانون العام والخاص</h4>
                  <p className="text-muted-foreground text-sm">جامعة مدينة السادات</p>
                  <p className="text-accent text-sm">2024</p>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg hover:shadow-md transition-shadow border border-accent/10">
                  <h4 className="font-semibold mb-2">ليسانس الحقوق</h4>
                  <p className="text-muted-foreground text-sm">جامعة الإسكندرية - بتقدير عام جيد</p>
                  <p className="text-accent text-sm">2016 - 2019</p>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg hover:shadow-md transition-shadow border border-accent/10">
                  <h4 className="font-semibold mb-2">عضوية نقابة المحامين</h4>
                  <p className="text-muted-foreground text-sm">نقابة المحامين المصرية</p>
                  <p className="text-accent text-sm">2019</p>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg hover:shadow-md transition-shadow border border-accent/10">
                  <h4 className="font-semibold mb-2">تخصص القانون الجنائي</h4>
                  <p className="text-muted-foreground text-sm">متخصص في القضايا الجنائية والتجارية</p>
                  <p className="text-accent text-sm">خبرة 5 سنوات</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )
      case "news":
        return (
          <Card className="animate-slide-up bg-card/90 backdrop-blur-sm border-accent/20 hover-glow">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <Newspaper className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-semibold text-accent">{t.news}</h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {newsItems.map((item) => (
                  <Card
                    key={item.id}
                    className="hover:shadow-lg transition-shadow cursor-pointer bg-card/90 backdrop-blur-sm border-accent/20 hover:border-accent/40 hover-glow"
                  >
                    <div className="relative h-48 overflow-hidden rounded-t-lg">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-2 line-clamp-2">{item.title}</h4>
                      <p className="text-muted-foreground text-sm mb-3 line-clamp-3">{item.summary}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-accent">{item.date}</span>
                        <Button size="sm" variant="ghost" className="p-1 text-accent hover:bg-accent hover:text-black">
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        )
      default:
        return null
    }
  }

  if (currentPage === "portfolio") {
    return (
      <div className="min-h-screen bg-black relative">
        <div className="golden-particles">
          {[...Array(40)].map((_, i) => (
            <div key={i} className="particle" />
          ))}
        </div>

        <div className="justice-logo hidden md:block">
          <Scale className="w-full h-full" />
        </div>

        <div className="container mx-auto px-4 py-8 relative z-10">
          <div className="flex justify-between items-center mb-8 animate-fade-in">
            <Button
              variant="outline"
              onClick={() => setCurrentPage("home")}
              className="flex items-center gap-2 border-accent text-accent hover:bg-accent hover:text-black"
            >
              {t.backToHome}
            </Button>
          </div>

          <Card className="mb-8 animate-slide-up bg-card/90 backdrop-blur-sm border-accent/20 hover-glow">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="relative">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-16%20160119-EAK23OwH3ruMnECtFTT9UEmFori2pO.png"
                    alt={t.title}
                    width={150}
                    height={150}
                    className="rounded-full border-4 border-accent shadow-lg shadow-accent/20"
                  />
                </div>
                <div className="text-center md:text-right flex-1">
                  <h2 className="text-2xl font-bold mb-2 text-accent">{t.title}</h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{t.subtitle}</p>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30">
                      قانون جنائي
                    </Badge>
                    <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30">
                      قانون تجاري
                    </Badge>
                    <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30">
                      محامي شركة
                    </Badge>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Button size="sm" className="flex items-center gap-2 bg-accent text-black hover:bg-accent/90" asChild>
                    <a href="https://wa.me/201128837666" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-4 h-4" />
                      واتساب
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 border-accent text-accent hover:bg-accent hover:text-black bg-transparent"
                    onClick={() => copyToClipboard("+20 11 28837666", "phone")}
                  >
                    {copiedItem === "phone" ? <Check className="w-4 h-4" /> : <Phone className="w-4 h-4" />}
                    {copiedItem === "phone" ? "تم النسخ" : "اتصال"}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="tabs-container mb-8">
            <div className="flex flex-wrap gap-1 justify-center">
              <button
                className={`tab-button-mobile ${activeTab === "about" ? "active" : ""}`}
                onClick={() => setActiveTab("about")}
              >
                نبذة
              </button>
              <button
                className={`tab-button-mobile ${activeTab === "experience" ? "active" : ""}`}
                onClick={() => setActiveTab("experience")}
              >
                الخبرة
              </button>
              <button
                className={`tab-button-mobile ${activeTab === "certificates" ? "active" : ""}`}
                onClick={() => setActiveTab("certificates")}
              >
                الشهادات
              </button>
              <button
                className={`tab-button-mobile ${activeTab === "news" ? "active" : ""}`}
                onClick={() => setActiveTab("news")}
              >
                الأخبار
              </button>
            </div>
          </div>

          <div className="tab-content">{renderTabContent()}</div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 relative">
      <div className="golden-particles">
        {[...Array(40)].map((_, i) => (
          <div key={i} className="particle" />
        ))}
      </div>

      <div className="justice-logo">
        <Scale className="w-full h-full" />
      </div>

      <div className="w-full max-w-md relative z-10">
        <div className="flex justify-center mb-[-4rem] relative z-20">
          <div className="relative">
            <div className="w-32 h-32 rounded-full border-4 border-accent shadow-2xl shadow-accent/30 overflow-hidden bg-black hover-glow">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-16%20160119-EAK23OwH3ruMnECtFTT9UEmFori2pO.png"
                alt={t.title}
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center shadow-lg">
              <Award className="w-4 h-4 text-black" />
            </div>
          </div>
        </div>

        <Card className="overflow-hidden shadow-3xl animate-scale-in hover:shadow-3xl transition-all duration-300 bg-card/90 backdrop-blur-sm border-2 border-accent/30 hover:border-accent/50 hover-glow">
          <CardContent className="p-0">
            <div className="relative">
              <div className="h-2 bg-gradient-to-r from-transparent via-accent to-transparent shadow-lg"></div>

              <div className="p-6 pt-20 text-center">
                <h1 className="text-2xl font-bold mb-2 text-accent">{t.title}</h1>
                <p className="text-muted-foreground mb-6 leading-relaxed">{t.subtitle}</p>

                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex items-center justify-center gap-2 text-muted-foreground" dir="ltr">
                    <Phone className="w-4 h-4 text-accent" />
                    <span>{t.phone}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4 text-accent" />
                    <span>{t.location}</span>
                  </div>
                </div>

                <div className="flex justify-center gap-3 mb-6">
                  {socialLinks.map((link, index) => (
                    <Button
                      key={index}
                      size="sm"
                      className={`${link.color} hover:scale-110 transition-transform duration-200 text-white shadow-lg hover-glow`}
                      asChild
                    >
                      <a href={link.href} aria-label={link.label} target="_blank" rel="noopener noreferrer">
                        <link.icon className="w-4 h-4" />
                      </a>
                    </Button>
                  ))}
                </div>

                <div className="space-y-3 mb-6">
                  <h3 className="text-sm font-semibold text-accent">{t.paymentMethods}</h3>
                  <div className="flex justify-center gap-3">
                    {paymentLinks.map((payment, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-2 border-accent text-accent hover:bg-accent hover:text-black transition-colors bg-transparent hover-glow"
                        onClick={() => payment.isCopyable && copyToClipboard(payment.number!, payment.label)}
                      >
                        {copiedItem === payment.label ? (
                          <Check className="w-4 h-4" />
                        ) : (
                          <payment.icon className="w-4 h-4" />
                        )}
                        <span className="text-xs">
                          {copiedItem === payment.label ? "تم نسخ رقم المحفظة" : payment.label}
                        </span>
                      </Button>
                    ))}
                  </div>
                </div>

                <Button
                  className="w-full bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent text-black font-semibold py-3 shadow-lg hover:shadow-accent/20 transition-all duration-300 hover-glow"
                  onClick={() => setCurrentPage("portfolio")}
                >
                  {t.viewProfile}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-6 text-xs text-muted-foreground animate-fade-in">{t.copyright}</div>
      </div>
    </div>
  )
}
