const express = require("express");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const flash = require("connect-flash");
const User = require("../models/User"); // User modelinin doğru olduğunu varsayıyoruz

const router = express.Router();

// Middleware
router.use(
    session({
        secret: "secret-key", // Güçlü bir secret kullanın
        resave: false,
        saveUninitialized: true,
    })
);
router.use(flash());

// Middleware to pass flash messages to views
router.use((req, res, next) => {
    res.locals.success_msg = req.flash("success_msg");
    res.locals.error_msg = req.flash("error_msg");
    next();
});

// Login Sayfası
router.get("/login", (req, res) => res.render("login"));

// Register Sayfası
router.get("/register", (req, res) => res.render("register"));

// Kullanıcı Kaydı
router.post("/register", async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        req.flash("error_msg", "Tüm alanları doldurun.");
        return res.redirect("/register");
    }

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            req.flash("error_msg", "Bu e-posta zaten kullanılıyor.");
            return res.redirect("/register");
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({ name, email, password: hashedPassword });
        req.flash("success_msg", "Kayıt başarılı, giriş yapabilirsiniz!");
        res.redirect("/login");
    } catch (error) {
        console.error("Kayıt hatası:", error);
        req.flash("error_msg", "Bir hata oluştu. Lütfen tekrar deneyin.");
        res.redirect("/register");
    }
});

// Login İşlemi
router.post("/", async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        req.flash("error_msg", "Lütfen tüm alanları doldurun.");
        return res.redirect("/login");
    }

    try {
        const user = await User.findOne({ email });
        if (user && (await bcrypt.compare(password, user.password))) {
            req.session.user = { id: user._id, name: user.name, email: user.email };
            req.flash("success_msg", "Başarıyla giriş yaptınız.");
            return res.redirect("/dashboard");
        } else {
            req.flash("error_msg", "Geçersiz e-posta veya şifre.");
            return res.redirect("/login");
        }
    } catch (error) {
        console.error("Login hatası:", error);
        req.flash("error_msg", "Bir hata oluştu. Lütfen tekrar deneyin.");
        res.redirect("/login");
    }
});

// Dashboard (Authenticated Route)
router.get("/dashboard", (req, res) => {
    if (!req.session.user) {
        req.flash("error_msg", "Lütfen giriş yapın.");
        return res.redirect("/login");
    }

    res.render("dashboard", { user: req.session.user });
});

// Çıkış
router.get("/logout", (req, res) => {
    req.session.destroy(() => {
        res.redirect("/login");
    });
});

module.exports = router;
