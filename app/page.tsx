"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Phone,
  Mail,
  MapPin,
  Star,
  Users,
  Award,
  Clock,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import HeroSlider from "@/components/hero-slider";

export default function LakmeAcademyBangalore() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    state: "Karnataka",
    branch: "",
    course: "",
    message: "",
  });

  const [selectedCourse, setSelectedCourse] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showPopupForm, setShowPopupForm] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Sparkle cursor effect
    const handleMouseMove = (e: MouseEvent) => {
      for (let i = 0; i < 3; i++) {
        const sparkle = document.createElement("div");
        sparkle.className = "sparkle";

        const size = Math.random() * 6 + 4; // 4px to 10px
        sparkle.style.width = `${size}px`;
        sparkle.style.height = `${size}px`;

        const offsetX = (Math.random() - 0.5) * 20;
        const offsetY = (Math.random() - 0.5) * 20;

        sparkle.style.left = `${e.pageX + offsetX}px`;
        sparkle.style.top = `${e.pageY + offsetY}px`;

        document.body.appendChild(sparkle);

        setTimeout(() => sparkle.remove(), 800);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    // Show popup form after 3 seconds
    const timer = setTimeout(() => {
      setShowPopupForm(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openCourseModal = (course: any) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; // Prevent background scrolling
  };

  const closeCourseModal = () => {
    setSelectedCourse(null);
    setIsModalOpen(false);
    document.body.style.overflow = "unset"; // Restore scrolling
  };

  const scrollToEnquiry = () => {
    const enquirySection = document.getElementById("enquiry-form");
    if (enquirySection) {
      enquirySection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          to: "imrankhan.basha@gmail.com", // This is fine, though it's ignored in your backend
        }),
      });

      if (response.ok) {
        alert(
          "Thank you! Your enquiry has been submitted successfully. We will contact you soon."
        );
        setFormData({
          name: "",
          email: "",
          phone: "",
          state: "Karnataka",
          branch: "",
          course: "",
          message: "",
        });
      } else {
        alert("There was an error submitting your enquiry. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your enquiry. Please try again.");
    }
  };

  const courses = [
    {
      title: "Complete Cosmetology",
      description:
        "Comprehensive program covering all aspects of beauty and cosmetology for salon management.",
      image: "https://lakmeacademybangalore.in/course-images/cosmetology.png",
      duration: "6-12 Months",
      rating: 4.9,
      students: "3,200+",
      detailContent: {
        title: "Cosmetology",
        description:
          "Become a professional cosmetologist and create the best looks for your clients that is going to leave a lasting impression.",
        courses: [
          {
            name: "Foundation Course in Cosmetology",
            details:
              "This is a 6-month cosmetology course that introduces you to the various aspects of the salon industry, different hair cutting and hair styling techniques and skin treatments.",
          },
          {
            name: "Advanced Course in Cosmetology",
            details:
              "This is a 12-month course that trains you to work as an independent cosmetologist, as a consultant for beauty and skin care brands, or as beauticians in top salons and wellness centres in India and abroad.",
          },
        ],
      },
    },
    {
      title: "Skin Care & Beauty Therapy",
      description:
        "Comprehensive training in skincare analysis, facial treatments, and beauty therapy.",
      image: "https://lakmeacademybangalore.in/course-images/skin-care.png",
      duration: "3-6 Months",
      rating: 4.9,
      students: "2,100+",
      detailContent: {
        title: "Skin",
        description:
          "A comprehensive course on skin, delving into the fundamentals of skin science, its functions, common disorders and treatments, effective skin consultations, and advanced facial techniques.",
        courses: [
          {
            name: "Foundation Course in Beauty Therapy",
            details:
              "This is a 3-month course that provides holistic training and career guidance in areas like skin science, skin function, and skin structure. This course ensures that you build a strong foundation and gain skills with a deeper understanding of beauty techniques.",
          },
          {
            name: "Advanced Course in Beauty Therapy",
            details:
              "A 6-month program crafted by industry experts in collaboration with Lakmé Salon and Lakmé Academy powered by Aptech mentors. This course is ideal for those looking to go beyond the basics of beauty therapy and elevate their expertise.",
          },
        ],
      },
    },
    {
      title: "Advanced Hair Styling & Cutting",
      description:
        "Learn cutting-edge hair styling, coloring, and cutting techniques from expert stylists.",
      image: "https://lakmeacademybangalore.in/course-images/hair-styling.png",
      duration: "3-6 Months",
      rating: 4.8,
      students: "1,800+",
      detailContent: {
        title: "Hair",
        description:
          "Everyone desires smooth, silky, and stunning hair. Discover how to achieve it with our professional guidance and expertise.",
        courses: [
          {
            name: "Foundation Course in Hair",
            details:
              "This 3-month program in hairdressing and hair care offers comprehensive training in various hairdressing techniques and the latest hair trends.",
          },
          {
            name: "Advanced Course in Hair",
            details:
              "The 6-months advanced course in hair is designed to give you expert training in hair and scalp analysis. Excel in advanced topics like hair design and colour, salon safety and professional development.",
          },
        ],
      },
    },
    {
      title: "Professional Makeup Artistry",
      description:
        "Master bridal, fashion, and editorial makeup techniques with industry-standard products and tools.",
      image:
        "https://lakmeacademybangalore.in/course-images/professional-makeup-artistry.png",
      duration: "1-2 Months",
      rating: 4.9,
      students: "2,500+",
      detailContent: {
        title: "Make-Up",
        description:
          "With our foundation and advanced makeup courses, young talents like you get to set their skill sets further and become professional makeup artists.",
        courses: [
          {
            name: "Foundation Course in Makeup",
            details:
              "A 1-month makeup course that takes you through the fundamentals of makeup skills and provides elementary training in area like facial anatomy, colour application, colour corrections etc.",
          },
          {
            name: "Advanced Course in Makeup",
            details:
              "This is a 2-month course that gives a deeper understanding of advanced makeup concepts, enabling you to succeed as a professional makeup artist. You will be mentored by top-notch makeup artists and experienced mentors at the academy.",
          },
        ],
      },
    },
    {
      title: "Nail Art & Extensions",
      description:
        "Create stunning nail designs, extensions, and nail care treatments for professional salons.",
      image: "https://lakmeacademybangalore.in/course-images/nail-art.png",
      duration: "1.5 Months",
      rating: 4.7,
      students: "1,200+",
      detailContent: {
        title: "Nail Art",
        description:
          "Join our 1.5-month nail art course and stay ahead with the latest trends and techniques in nail art and extensions, gaining the expertise to shine in the industry.",
        courses: [],
      },
    },
    {
      title: "Manicure and Pedicure",
      description:
        "Learn the latest trends in manicure and pedicure with hand and feet hygiene techniques.",
      image:
        "https://lakmeacademybangalore.in/course-images/manicure-&-pedicure.png",
      duration: "1 Month",
      rating: 4.6,
      students: "900+",
      detailContent: {
        title: "Manicure and Pedicure",
        description:
          "With this 1-month course you will be equipped with latest trends of manicure and pedicure along with learning the fundamentals of hand and feet hygiene and nail care.",
        courses: [],
      },
    },
    {
      title: "Barbering & Grooming",
      description:
        "Professional training in men's hairstyling, barbering, and grooming techniques.",
      image:
        "https://lakmeacademybangalore.in/course-images/barbering-&-grooming.png",
      duration: "2-3 Months",
      rating: 4.8,
      students: "1,100+",
      detailContent: {
        title: "Barbering & Grooming",
        description:
          "With our certification course in Barbering & Grooming, young talents like you get their skills right to become a skilled professional. Get trained in Hairstyling, Haircare, Barbering, Beard Grooming, Hair Colour & Texture Services.",
        courses: [],
      },
    },
    {
      title: "Eyelash Extensions",
      description:
        "Master the art of eyelash extensions with professional application techniques.",
      image:
        "https://lakmeacademybangalore.in/course-images/eyelash-extensions.png",
      duration: "1 Month",
      rating: 4.7,
      students: "800+",
      detailContent: {
        title: "Eyelash Extensions",
        description:
          "With our Certification Course in Eyelash Extensions, young talents like you get their skills right to become a skilled professional. Get trained in eyelash application and isolation technique, client consultation & care, eyelash extensions removal process, 2D/3D pre-made volume lashes application, textured lash extensions & coloured lash extensions, 2D/3D volume fan making and application.",
        courses: [],
      },
    },
    {
      title: "Hair Extensions",
      description:
        "Learn various hair extension techniques including temporary and permanent methods.",
      image:
        "https://lakmeacademybangalore.in/course-images/hair-extensions.png",
      duration: "1.5 Months",
      rating: 4.6,
      students: "700+",
      detailContent: {
        title: "Hair Extensions",
        description:
          'With our course in Hair Extensions, acquire the skills to perform services such as temporary hair extensions with aftercare procedures, permanent hair extensions with removal, refill and post-care procedures, micro ring hair extensions, nano ring hair extensions, "I" Tip hair extensions, "U" Tip hair extensions and Flat-Tip hair extensions.',
        courses: [],
      },
    },
    {
      title: "Course In Groom Makeup",
      description:
        "Specialized training in male grooming and makeup techniques for professional consultants.",
      image: "https://lakmeacademybangalore.in/course-images/groom-makeup.png",
      duration: "1 Month",
      rating: 4.5,
      students: "600+",
      detailContent: {
        title: "Course In Groom Makeup",
        description:
          "With our course in Groom Makeup, you will become a professional consultant and you will know how to tailor makeup looks to suit your clients' features perfectly, from basic styles to more advanced techniques. This course aims at building your efficiency to deliver the male makeup schemes as per the industry standards.",
        courses: [],
      },
    },
    {
      title: "Certificate Course In HydraFacial",
      description:
        "Professional certification in HydraFacial treatments and skin care techniques.",
      image: "https://lakmeacademybangalore.in/course-images/hydra-facial.png",
      duration: "2 Weeks",
      rating: 4.8,
      students: "500+",
      detailContent: {
        title: "Certificate Course In HydraFacial",
        description:
          "With our Certificate Course In HydraFacial, young talents like you get their skills right to become a skilled professional. Get trained in professional safety and hygiene, anatomy and physiology of skin, pathology of skin and contraindications, skin conditions and texture, knowledge and understanding of Hydra Facial.",
        courses: [],
      },
    },
    {
      title: "Professional Makeup Course With Global Trends",
      description:
        "Learn international makeup trends and techniques for global beauty standards.",
      image:
        "https://lakmeacademybangalore.in/course-images/global-trend-makeup.png",
      duration: "3 Months",
      rating: 4.9,
      students: "1,300+",
      detailContent: {
        title: "Professional Makeup Course With Global Trends",
        description:
          "With our course in Professional Makeup Course With Global Trends, acquire the skills to create various global makeup looks. Learn media makeup, monochrome makeup and bridal makeup.",
        courses: [],
      },
    },
  ];

  const features = [
    {
      icon: Users,
      title: "Expert Trainers",
      description:
        "Learn from certified professionals with 10+ years industry experience",
      color: "bg-pink-100 text-pink-600",
    },
    {
      icon: Award,
      title: "Certified Courses",
      description: "Internationally recognized certificates accepted worldwide",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Clock,
      title: "Flexible Timings",
      description: "Weekend and weekday batches to suit your schedule",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: CheckCircle,
      title: "100% Placement",
      description:
        "Guaranteed job placement assistance with top salons and brands",
      color: "bg-green-100 text-green-600",
    },
  ];

  // Popular courses for footer (first 8 courses)
  const popularFooterCourses = courses.slice(0, 8);

  return (
    <div className="min-h-screen bg-white">
      {/* Top Banner */}
      <div className="bg-pink-600 text-white py-3 overflow-hidden">
        <div className="flex animate-scroll-fast space-x-12 whitespace-nowrap">
          {[
            "🎓 ADMISSIONS OPEN",
            "💳 Easy EMI on our Courses - Now starting at ₹4500/month",
            "🎓 ADMISSIONS OPEN",
            "💳 Easy EMI on our Courses - Now starting at ₹4500/month",
            "🎓 ADMISSIONS OPEN",
            "💳 Easy EMI on our Courses - Now starting at ₹4500/month",
            "🎓 ADMISSIONS OPEN",
            "💳 Easy EMI on our Courses - Now starting at ₹4500/month",
          ].map((text, index) => (
            <div key={index} className="flex items-center space-x-3">
              <span className="text-lg font-bold">{text}</span>
              {text.includes("EMI") && (
                <div className="bg-white rounded px-2 py-1">
                  <span className="text-pink-600 text-sm font-bold">
                    BAJAJ FINSERV
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-center">
              <Image
                src="https://lakmeacademybangalore.in/lakme-academy-logo.png"
                alt="Lakme Academy Logo"
                width={120}
                height={60}
                className="h-16 md:h-20 lg:h-24 w-auto object-contain"
              />
            </div>

            {/* Contact Number - Highlighted */}
            <div className="flex items-center space-x-6">
              <div className="hidden md:flex items-center space-x-2 text-sm text-gray-600">
                <Mail className="w-4 h-4 text-pink-600" />
                <a href="mailto:lakme@kaki.co.in" className="hover:underline">
                  lakme@kaki.co.in
                </a>
              </div>

              {/* Highlighted Contact Number */}
              <div className="bg-pink-600 text-white px-3 md:px-6 py-2 md:py-3 rounded-full flex items-center space-x-1 md:space-x-2 shadow-lg hover:bg-pink-700 transition-all duration-300 cursor-pointer transform hover:scale-105">
                <Phone className="w-4 h-4 md:w-5 md:h-5 animate-pulse" />
                <span className="font-bold text-sm md:text-lg">9972777786</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Slider */}
      <HeroSlider />

      {/* Features Section */}
      <section className="py-16 bg-pink-50 mt-8 md:mt-0">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Lakmé Academy Bangalore?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide world-class beauty education with practical training
              and industry exposure
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 bg-white group cursor-pointer">
                <CardContent className="pt-8">
                  <div
                    className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110`}>
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-pink-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section with Enhanced Animations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Popular Courses
            </h2>
            <p className="text-xl text-gray-600">
              Choose from our wide range of professional beauty courses
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 cursor-pointer overflow-hidden border-0 shadow-lg bg-white relative flex flex-col h-full"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}>
                <div className="relative overflow-hidden">
                  <Image
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    width={350}
                    height={200}
                    className="w-full h-40 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                    <span className="text-xs font-semibold text-pink-600">
                      {course.duration}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-medium">{course.rating}</span>
                  </div>
                </div>

                <CardHeader className="pb-2 flex-grow">
                  <CardTitle className="text-lg group-hover:text-pink-600 transition-colors duration-300 leading-tight">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed text-sm">
                    {course.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0 mt-auto">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <Users className="w-3 h-3" />
                      <span>{course.students}</span>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-xs px-3 py-1 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white transition-all duration-300"
                      onClick={() => openCourseModal(course)}>
                      Know More
                    </Button>
                  </div>
                  <Button
                    className="w-full bg-pink-600 hover:bg-pink-700 text-white transition-all duration-300 transform group-hover:scale-105 text-sm py-2"
                    onClick={scrollToEnquiry}>
                    <Sparkles className="w-3 h-3 mr-2" />
                    Enroll Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Career Opportunities Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Is a career in beauty & fashion right for you?
              </h2>
              <p className="text-xl text-gray-600">
                The beauty industry offers exciting and well-paid jobs & career
                opportunities.
              </p>
            </div>

            <div className="bg-pink-50 rounded-2xl p-8 mb-8">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                As per the Indian Salon Report 2015, the Indian salon industry
                is worth Rs. 24 billion by 2015 and has a potential to reach Rs.
                60 billion by 2020. As more and more people are upgrading
                themselves from local parlours to top notch salons and spas, the
                Indian spa market is expected to exceed the revenue of $154.6
                billion by 2022.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                The Indian beauty & wellness sector will:
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">
                        12.1 Million
                      </h4>
                      <p className="text-gray-600">
                        Job opportunities by 2022*
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">₹</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">
                        Up to ₹65,000
                      </h4>
                      <p className="text-gray-600">Per month salary*</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-xl font-semibold text-pink-600 mb-4">
                  This is the perfect time to build your career in the most
                  glamorous industry in the world!
                </p>
                <p className="text-sm text-gray-500">
                  *Source: KPMG Wellness Report and Indian Salon Industry Report
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recruiters Section */}
      <section className="py-16 bg-pink-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Recruiters
            </h2>
            <p className="text-xl text-gray-600">
              Our students are placed in top beauty brands and salons across
              India
            </p>
          </div>

          {/* Horizontal Scrolling Recruiters */}
          <div className="relative">
            <div className="flex animate-scroll-faster space-x-8 whitespace-nowrap">
              {[
                "Enrich",
                "MAC",
                "Victoria's Secret",
                "Bobbi Brown",
                "Purple.com",
                "Lakmé Salon",
                "Nykaa",
                "Bath & Body Works",
                "Kryolan Professional Make-Up",
                "Coloressence",
                "BBLUNT",
                "Envi Salon and Spa",
              ]
                .concat([
                  "Enrich",
                  "MAC",
                  "Victoria's Secret",
                  "Bobbi Brown",
                  "Purple.com",
                  "Lakmé Salon",
                  "Nykaa",
                  "Bath & Body Works",
                  "Kryolan Professional Make-Up",
                  "Coloressence",
                  "BBLUNT",
                  "Envi Salon and Spa",
                ])
                .map((recruiter, index) => (
                  <div
                    key={index}
                    className="bg-white px-6 py-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-pink-100">
                    <span className="text-gray-800 font-medium text-lg whitespace-nowrap">
                      {recruiter}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <section id="enquiry-form" className="py-16 bg-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Start Your Beauty Career Today
              </h2>
              <p className="text-xl text-gray-600">
                Fill out the form below and our counselors will get in touch
                with you
              </p>
            </div>
            <Card className="shadow-2xl border-0 overflow-hidden">
              <div className="bg-pink-600 text-white p-6">
                <CardTitle className="text-2xl text-center">
                  Enquiry Form
                </CardTitle>
                <CardDescription className="text-center text-pink-100 mt-2">
                  Get personalized course recommendations and career guidance
                </CardDescription>
              </div>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label
                        htmlFor="name"
                        className="text-gray-700 font-medium">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                        className="border-gray-300 focus:border-pink-500 focus:ring-pink-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="text-gray-700 font-medium">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        required
                        className="border-gray-300 focus:border-pink-500 focus:ring-pink-500"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label
                        htmlFor="phone"
                        className="text-gray-700 font-medium">
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={(e) => {
                          const value = e.target.value
                            .replace(/\D/g, "")
                            .slice(0, 10);
                          setFormData({ ...formData, phone: value });
                        }}
                        pattern="[0-9]{10}"
                        maxLength={10}
                        required
                        className="border-gray-300 focus:border-pink-500 focus:ring-pink-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="state"
                        className="text-gray-700 font-medium">
                        State
                      </Label>
                      <Select value={formData.state} disabled>
                        <SelectTrigger className="bg-gray-100 border-gray-300">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Karnataka">Karnataka</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label
                        htmlFor="branch"
                        className="text-gray-700 font-medium">
                        Select Branch *
                      </Label>
                      <Select
                        value={formData.branch}
                        onValueChange={(value) =>
                          setFormData({ ...formData, branch: value })
                        }>
                        <SelectTrigger className="border-gray-300 focus:border-pink-500 focus:ring-pink-500">
                          <SelectValue placeholder="Choose your preferred branch" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="HSR Layout">HSR Layout</SelectItem>
                          <SelectItem value="Indiranagar">
                            Indiranagar
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="course"
                        className="text-gray-700 font-medium">
                        Course Interested In *
                      </Label>
                      <Select
                        value={formData.course}
                        onValueChange={(value) =>
                          setFormData({ ...formData, course: value })
                        }>
                        <SelectTrigger className="border-gray-300 focus:border-pink-500 focus:ring-pink-500">
                          <SelectValue placeholder="Select a course" />
                        </SelectTrigger>
                        <SelectContent>
                          {courses.map((course) => (
                            <SelectItem key={course.title} value={course.title}>
                              {course.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="message"
                      className="text-gray-700 font-medium">
                      Message (Optional)
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your career goals or any specific questions"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={4}
                      className="border-gray-300 focus:border-pink-500 focus:ring-pink-500"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-pink-600 hover:bg-pink-700 text-white py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                    Submit Enquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Locations
            </h2>
            <p className="text-xl text-gray-600">
              Visit our state-of-the-art training centers in Bangalore
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* HSR Layout Branch */}
            <Card className="overflow-hidden shadow-xl border-0 hover:shadow-2xl transition-all duration-500">
              <CardHeader className="bg-pink-600 text-white">
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5" />
                  <span>HSR Layout Branch</span>
                </CardTitle>
                <CardDescription className="text-pink-100">
                  27th Main Road, HSR Layout Sector 1, Bangalore - 560102
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8267!2d77.6387!3d12.9141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU0JzUwLjgiTiA3N8KwMzgnMTkuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="256"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="HSR Layout Branch Location"></iframe>
                </div>
                <div className="p-4 bg-pink-50">
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span className="flex items-center space-x-1">
                      <Phone className="w-4 h-4 text-pink-600" />
                      <span>+91 9972777786</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-4 h-4 text-pink-600" />
                      <span>Mon-Sat: 9AM-7PM</span>
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Indiranagar Branch */}
            <Card className="overflow-hidden shadow-xl border-0 hover:shadow-2xl transition-all duration-500">
              <CardHeader className="bg-pink-600 text-white">
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5" />
                  <span>Indiranagar Branch</span>
                </CardTitle>
                <CardDescription className="text-pink-100">
                  100 Feet Road, Indiranagar, Bangalore - 560038
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9267!2d77.6387!3d12.9741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzI2LjgiTiA3N8KwMzgnMTkuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="256"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Indiranagar Branch Location"></iframe>
                </div>
                <div className="p-4 bg-pink-50">
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span className="flex items-center space-x-1">
                      <Phone className="w-4 h-4 text-pink-600" />
                      <span>+91 9972777786</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-4 h-4 text-pink-600" />
                      <span>Mon-Sat: 9AM-7PM</span>
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center justify-center md:justify-start mb-4">
                <Image
                  src="https://lakmeacademybangalore.in/lakme-academy-logo.png"
                  alt="Lakme Academy Logo"
                  width={120}
                  height={60}
                  className="h-16 md:h-18 lg:h-20 w-auto object-contain filter brightness-0 invert"
                />
              </div>
              <p className="text-gray-400">
                Leading beauty academy in Bangalore providing world-class
                training and certification in cosmetology, makeup, hair care,
                and nail art.
              </p>
            </div>

            {/* Popular Courses - Column 1 */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Popular Courses</h4>
              <ul className="space-y-2 text-gray-400">
                {popularFooterCourses.slice(0, 4).map((course, index) => (
                  <li key={index}>
                    <button
                      onClick={() => openCourseModal(course)}
                      className="hover:text-white transition-colors text-left">
                      {course.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Courses - Column 2 */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-transparent">
                Courses
              </h4>
              <ul className="space-y-2 text-gray-400">
                {popularFooterCourses.slice(4, 8).map((course, index) => (
                  <li key={index}>
                    <button
                      onClick={() => openCourseModal(course)}
                      className="hover:text-white transition-colors text-left">
                      {course.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-pink-600" />
                  <a
                    href="tel:+919972777786"
                    className="hover:text-white transition-colors">
                    +91 9972777786
                  </a>
                </p>
                <p className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-pink-600" />
                  <a
                    href="mailto:lakme@kaki.co.in"
                    className="hover:text-white transition-colors">
                    lakme@kaki.co.in
                  </a>
                </p>
                <p className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-pink-600" />
                  <span>HSR Layout & Indiranagar, Bangalore</span>
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; 2024 Lakmé Academy Bangalore | All rights reserved. |
              Designed by Onprimehub
            </p>
          </div>
        </div>
      </footer>

      {/* Course Details Modal */}
      {isModalOpen && selectedCourse && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeCourseModal}>
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl transform transition-all duration-300 animate-in slide-in-from-bottom-4 scale-in-95"
            onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="bg-pink-600 text-white p-6 relative">
              <button
                onClick={closeCourseModal}
                className="absolute top-4 right-4 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110">
                <span className="text-white text-xl leading-none">&times;</span>
              </button>
              <h2 className="text-2xl font-bold mb-2">
                {selectedCourse.detailContent.title}
              </h2>
              <div className="flex items-center space-x-4 text-pink-100">
                <span className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{selectedCourse.duration}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-yellow-300 text-yellow-300" />
                  <span>{selectedCourse.rating}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Users className="w-4 h-4" />
                  <span>{selectedCourse.students}</span>
                </span>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {selectedCourse.detailContent.description}
              </p>

              {selectedCourse.detailContent.courses.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Course Details:
                  </h3>
                  {selectedCourse.detailContent.courses.map(
                    (courseDetail: any, idx: number) => (
                      <div
                        key={idx}
                        className="bg-pink-50 rounded-lg p-4 border-l-4 border-pink-600">
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {idx + 1}. {courseDetail.name}
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          {courseDetail.details}
                        </p>
                      </div>
                    )
                  )}
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="bg-gray-50 px-6 py-4 flex flex-col sm:flex-row gap-3">
              <Button
                className="flex-1 bg-pink-600 hover:bg-pink-700 text-white"
                onClick={() => {
                  closeCourseModal();
                  scrollToEnquiry();
                }}>
                <Sparkles className="w-4 h-4 mr-2" />
                Enroll Now
              </Button>
              <Button
                variant="outline"
                className="flex-1 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white"
                onClick={closeCourseModal}>
                Close
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Popup Enquiry Form */}
      {showPopupForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl transform transition-all duration-300">
            {/* Popup Header */}
            <div className="bg-pink-600 text-white p-6 relative">
              <button
                onClick={() => setShowPopupForm(false)}
                className="absolute top-4 right-4 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110">
                <span className="text-white text-xl leading-none">&times;</span>
              </button>
              <h2 className="text-2xl font-bold mb-2">
                Start Your Beauty Career!
              </h2>
              <p className="text-pink-100">
                Get expert guidance and course recommendations
              </p>
            </div>

            {/* Popup Content */}
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              <form
                onSubmit={(e) => {
                  handleSubmit(e);
                  setShowPopupForm(false);
                }}
                className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="popup-name"
                      className="text-gray-700 font-medium">
                      Full Name *
                    </Label>
                    <Input
                      id="popup-name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      className="border-gray-300 focus:border-pink-500 focus:ring-pink-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="popup-email"
                      className="text-gray-700 font-medium">
                      Email Address *
                    </Label>
                    <Input
                      id="popup-email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      className="border-gray-300 focus:border-pink-500 focus:ring-pink-500"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="popup-phone"
                      className="text-gray-700 font-medium">
                      Phone Number *
                    </Label>
                    <Input
                      id="popup-phone"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={(e) => {
                        const value = e.target.value
                          .replace(/\D/g, "")
                          .slice(0, 10);
                        setFormData({ ...formData, phone: value });
                      }}
                      pattern="[0-9]{10}"
                      maxLength={10}
                      required
                      className="border-gray-300 focus:border-pink-500 focus:ring-pink-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="popup-branch"
                      className="text-gray-700 font-medium">
                      Select Branch *
                    </Label>
                    <Select
                      value={formData.branch}
                      onValueChange={(value) =>
                        setFormData({ ...formData, branch: value })
                      }>
                      <SelectTrigger className="border-gray-300 focus:border-pink-500 focus:ring-pink-500">
                        <SelectValue placeholder="Choose your preferred branch" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="HSR Layout">HSR Layout</SelectItem>
                        <SelectItem value="Indiranagar">Indiranagar</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="popup-course"
                      className="text-gray-700 font-medium">
                      Course Interested In *
                    </Label>
                    <Select
                      value={formData.course}
                      onValueChange={(value) =>
                        setFormData({ ...formData, course: value })
                      }>
                      <SelectTrigger className="border-gray-300 focus:border-pink-500 focus:ring-pink-500">
                        <SelectValue placeholder="Select a course" />
                      </SelectTrigger>
                      <SelectContent>
                        {courses.map((course) => (
                          <SelectItem key={course.title} value={course.title}>
                            {course.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Get Free Consultation
                </Button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Floating Social Media Icons */}
      <div className="fixed right-6 bottom-6 z-50 flex flex-col space-y-4">
        {/* WhatsApp */}
        <a
          href="https://wa.me/919972777786"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-pink-600 hover:bg-pink-700 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-bounce"
          style={{ animationDelay: "0s" }}>
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.63" />
          </svg>
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/lakmeacademybangalore"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-pink-600 hover:bg-pink-700 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-bounce"
          style={{ animationDelay: "0.2s" }}>
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/lakmeacademy_bangalore/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-pink-600 hover:bg-pink-700 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-bounce"
          style={{ animationDelay: "0.4s" }}>
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </a>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-14 h-14 bg-pink-600 hover:bg-pink-700 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-pulse">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
