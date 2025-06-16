/*
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:parth_portfolio/model/portfolio_model.dart';
import 'dart:developer' as logger;
import 'package:http/http.dart' as http;

class FirestoreService {
  final FirebaseFirestore _firestore = FirebaseFirestore.instance;

  Future<PortfolioModel?> getPortfolioData() async {
    // try {
    //   // FirebaseAuth.instance.signInAnonymously();
    //   String projectId = 'cardmaker-95ba3';
    //   String docId = 'aBsKn9Xf8FOgZRhuC7u7';
    //   http.Response res = await http.get(Uri.parse(
    //       'https://firestore.googleapis.com/v1/projects/$projectId/databases/(default)/documents/portfolio/$docId'));
    //   logger.log(
    //       'getPortfolioData => statuscode : ${res.statusCode} || res.body : ${res.body}');
    // } catch (e) {
    //   logger.log('getPortfolioData => http error : $e');
    // }
    try {
      User? user = FirebaseAuth.instance.currentUser;
      if (user != null) {
        print("getPortfolioData : ${user.uid}");
      } else {
        logger.log('getPortfolioData => USER GETTING NULL');
      }
      final doc = await _firestore
          .collection('portfolio')
          .doc('aBsKn9Xf8FOgZRhuC7u7')
          .get();

      // logger.log('getPortfolioData => projectId : ${Firebase.app().options.projectId}');
      if (doc.exists) {
        final data = doc.data();
        logger.log('getPortfolioData => Data: $data');
        final model = PortfolioModel.fromJson(data!);
        logger.log('getPortfolioData => PortfolioModel: $model');
        return PortfolioModel.fromJson(doc.data()!);
      }
    } catch (e) {
      print('getPortfolioData => Error: $e');
    }
    return null;
  }
}
 */