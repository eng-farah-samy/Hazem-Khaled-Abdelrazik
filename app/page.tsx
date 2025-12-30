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
  Phone,
  MapPin,
  Scale,
  Check,
  Mail,
  Linkedin,
  UserPlus,
  GraduationCap,
} from "lucide-react"
import Image from "next/image"

export default function LawyerWebsite() {
  const [currentPage, setCurrentPage] = useState<"home" | "portfolio">("home")
  const [activeTab, setActiveTab] = useState<"about" | "experience" | "certificates">("about")
  const [copiedItem, setCopiedItem] = useState<string | null>(null)

  const t = {
    name: "المستشار / حازم خالد عبد الرازق",
    title: "ماجستير في القانون العام والخاص",
    specialization: "متخصص في القانون الجنائي والتجاري",
    phone: "+20 11 28837666",
    email: "hazemkhaledabdelrazik@gmail.com",
    location: "الإسكندرية، مصر",
    paymentMethods: "طرق الدفع",
    viewProfile: "عرض الملف الشخصي",
    backToHome: "العودة للرئيسية",
    personalProfile: "الملف الشخصي",
    aboutMe: "نبذة عني",
    experience: "الخبرة المهنية",
    certificates: "الشهادات والمؤهلات",
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
    {
      icon: Mail,
      label: "إيميل",
      href: `mailto:${t.email}`,
      color: "bg-red-600",
    },
    {
      icon: Linkedin,
      label: "لينكدإن",
      href: "https://linkedin.com/in/hazem-khaled-lawyer",
      color: "bg-blue-700",
    },
  ]

  const paymentLinks = [
    {
      icon: CreditCard,
      label: "إنستا باي",
      href: "#",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/InstaPay_Logo.png",
    },
    {
      icon: Wallet,
      label: "اتصالات كاش",
      number: "+20 11 28837666",
      isCopyable: true,
      logo: "https://img.utdstc.com/icon/7ae/68e/7ae68e49c475987f4f59529ea31705cdd1967caaf850cd396d8cf942ade275ba:200",
    },
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

  const downloadVCard = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${t.name}
ORG:محامي ومستشار قانوني
TITLE:${t.title}
TEL;TYPE=CELL:${t.phone}
EMAIL:${t.email}
URL:https://www.facebook.com/rane.rone76?locale=ar_AR
URL:https://www.instagram.com/hazemkhaledabdelrazik/
URL:https://linkedin.com/in/hazem-khaled-lawyer
ADR;TYPE=WORK:;;${t.location};;;;
NOTE:${t.specialization}
END:VCARD`

    const blob = new Blob([vcard], { type: "text/vcard" })
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = "حازم_خالد_عبد_الرازق_المحامي.vcf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    window.URL.revokeObjectURL(url)
  }

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
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors hover-glow">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-accent mb-1">ليسانس حقوق</h4>
                    <p className="text-sm text-muted-foreground mb-1">جامعة الإسكندرية</p>
                    <p className="text-xs text-muted-foreground">2016 - 2019 | تقدير عام: جيد</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors hover-glow">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-accent mb-1">ماجستير في القانون العام والخاص</h4>
                    <p className="text-sm text-muted-foreground mb-1">جامعة مدينة السادات</p>
                    <p className="text-xs text-muted-foreground">2024</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors hover-glow">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Scale className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-accent mb-1">عضوية نقابة المحامين</h4>
                    <p className="text-sm text-muted-foreground mb-1">نقابة المحامين المصرية</p>
                    <p className="text-xs text-muted-foreground">منذ 2019</p>
                  </div>
                </div>
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
                    src="/images/screenshot-202025-08-16-20160119.png"
                    alt={t.name}
                    width={150}
                    height={150}
                    className="rounded-full border-4 border-accent shadow-lg shadow-accent/20"
                  />
                </div>
                <div className="text-center md:text-right flex-1">
                  <h2 className="text-2xl font-bold mb-2 text-accent">{t.name}</h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{t.specialization}</p>
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
                src="/images/screenshot-202025-08-16-20160119.png"
                alt={t.name}
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
                <h1 className="text-2xl font-bold mb-2 text-accent">{t.name}</h1>
                <p className="text-muted-foreground mb-6 leading-relaxed">{t.specialization}</p>

                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex items-center justify-center gap-2 text-muted-foreground" dir="ltr">
                    <Phone className="w-4 h-4 text-accent" />
                    <span>{t.phone}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <Mail className="w-4 h-4 text-accent" />
                    <a href={`mailto:${t.email}`} className="hover:text-accent transition-colors">
                      {t.email}
                    </a>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4 text-accent" />
                    <span>{t.location}</span>
                  </div>
                </div>

                <div className="flex justify-center gap-2 mb-6 flex-wrap">
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

                <div className="mb-6">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 border-accent text-accent hover:bg-accent hover:text-black transition-colors bg-transparent hover-glow mx-auto"
                    onClick={downloadVCard}
                  >
                    <UserPlus className="w-4 h-4" />
                    <span className="text-xs">{t.viewProfile}</span>
                  </Button>
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
                        <Image
                          src={payment.logo || "/placeholder.svg"}
                          alt={payment.label}
                          width={16}
                          height={16}
                          className="object-contain"
                        />
                        {copiedItem === payment.label ? <Check className="w-4 h-4" /> : null}
                        <span className="text-xs">{copiedItem === payment.label ? "تم النسخ" : payment.label}</span>
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
