import 'package:flutter/material.dart';
import 'package:parth_portfolio/provider/app_provider.dart';
import 'package:parth_portfolio/provider/drawer_provider.dart';
import 'package:parth_portfolio/provider/scroll_provider.dart';
import 'package:parth_portfolio/sections/main/main_section.dart';
import 'package:provider/provider.dart';
import 'package:parth_portfolio/configs/core_theme.dart' as theme;
// import 'package:parth_portfolio/provider/portfolio_provider.dart';
// import 'package:parth_portfolio/services/firestore_service.dart';
// import 'package:cloud_firestore/cloud_firestore.dart';
// import 'package:firebase_app_check/firebase_app_check.dart';
// import 'package:firebase_auth/firebase_auth.dart';
// import 'package:firebase_core/firebase_core.dart';
// import 'package:flutter/foundation.dart' show kIsWeb;
// import 'package:parth_portfolio/services/firebase_options.dart';
// import 'dart:developer' as logger;
// late final FirebaseApp app;
// late final FirebaseAuth auth;

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  /*
  try {
    if (Firebase.apps.isEmpty) {
      app = await Firebase.initializeApp(
          name: kIsWeb ? 'cardmaker' : 'devfolio',
          // name: kIsWeb ? null : 'devfolio',
          options: DefaultFirebaseOptions.currentPlatform);
      auth = FirebaseAuth.instanceFor(app: app);

      await FirebaseAppCheck.instance.activate(
        androidProvider: AndroidProvider.playIntegrity,
        appleProvider: AppleProvider.debug,
        webProvider: ReCaptchaV3Provider('your-site-key'),

        // isTokenAutoRefreshEnabled: true,
      );
      await FirebaseAuth.instance.signInAnonymously();
    }
  } catch (e, stack) {
    logger.log('initializeApp => ERROR : $e');
    logger.log('initializeApp => Stacktrace: $stack');
  } */
  runApp(const MyApp());
}

class MyApp extends StatefulWidget {
  const MyApp({super.key});

  @override
  MyAppState createState() => MyAppState();
}

class MyAppState extends State<MyApp> {
  @override
  Widget build(BuildContext context) {
    return MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (_) => AppProvider()),
        ChangeNotifierProvider(create: (_) => DrawerProvider()),
        ChangeNotifierProvider(create: (_) => ScrollProvider()),
        // Provider(create: (_) => FirestoreService()),
        // ChangeNotifierProxyProvider<FirestoreService, PortfolioProvider>(
        //   create: (_) => PortfolioProvider(null),
        //   update: (_, firestoreService, portfolioProvider) => portfolioProvider!..firestoreService = firestoreService,
        // ),
      ],
      child: Consumer<AppProvider>(
        builder: (context, value, _) => MaterialChild(
          provider: value,
        ),
      ),
    );
  }
}

class MaterialChild extends StatefulWidget {
  final AppProvider provider;
  const MaterialChild({super.key, required this.provider});

  @override
  State<MaterialChild> createState() => _MaterialChildState();
}

class _MaterialChildState extends State<MaterialChild> {
  void initAppTheme() {
    final appProviders = AppProvider.state(context);
    appProviders.init();
  }

  @override
  void initState() {
    initAppTheme();
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Parth',
      theme: theme.themeLight,
      darkTheme: theme.themeDark,
      themeMode: widget.provider.themeMode,
      initialRoute: "/",
      routes: {
        "/": (context) => const MainPage(),
      },
    );
  }
}
