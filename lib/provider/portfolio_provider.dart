/*
import 'package:flutter/foundation.dart';
import 'package:parth_portfolio/model/portfolio_model.dart';
import 'package:parth_portfolio/services/firestore_service.dart';

class PortfolioProvider extends ChangeNotifier {
  FirestoreService? firestoreService;

  PortfolioProvider(this.firestoreService);

  PortfolioModel? _portfolio;
  bool _isLoading = false;

  PortfolioModel? get portfolio => _portfolio;
  bool get isLoading => _isLoading;

  Future<void> fetchPortfolio() async {
    _isLoading = true;
    notifyListeners();

    _portfolio = await firestoreService?.getPortfolioData();

    _isLoading = false;
    notifyListeners();
  }
} */