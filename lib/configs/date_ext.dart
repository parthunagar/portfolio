import 'dart:developer' as logger;

extension SuperDate on DateTime {
  DateTime get today => DateTime(year, month, day);

  DateTime get joiningDate => DateTime(2020, 6, 01);

  // findToalExperience() {
  //   var years = today.difference(joiningDate);
  //   logger.log('findToalExperience => ${(years.inDays ~/ 365)}');
  //   return (years.inDays ~/ 365);
  // }
  String findTotalExperience() {
    // final today = DateTime.now();
    // final joiningDate = DateTime(2020, 6, 1);
    int years = today.year - joiningDate.year;
    int months = today.month - joiningDate.month;
    if (months < 0) {
      years -= 1;
      months += 12;
    }
    if (months == 0) {
      return '$years';
    } else {
      return '$years.$months';
    }
  }
}
