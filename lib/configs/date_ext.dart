extension SuperDate on DateTime {
  DateTime get today => DateTime(year, month, day);

  DateTime get joiningDate => DateTime(2020, 6, 01);

  findToalExperience() {
    var years = today.difference(joiningDate);
    print('findToalExperience => ${(years.inDays ~/ 365)}');
    return (years.inDays ~/ 365);
  }
}
