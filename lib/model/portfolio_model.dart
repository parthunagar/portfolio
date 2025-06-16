class PortfolioModel {
  final String facebookUrl;
  final String githubProfileUrl;
  final String githubRepoUrl;
  final String instagramUrl;
  final String linkedInUrl;
  final String mediumUrl;
  final String resumeUrl;
  final String twitterUrl;

  PortfolioModel({
    required this.facebookUrl,
    required this.githubProfileUrl,
    required this.githubRepoUrl,
    required this.instagramUrl,
    required this.linkedInUrl,
    required this.mediumUrl,
    required this.resumeUrl,
    required this.twitterUrl,
  });

  factory PortfolioModel.fromJson(Map<String, dynamic> json) {
    return PortfolioModel(
      facebookUrl: json['facebookUrl'] ?? '',
      githubProfileUrl: json['githubProfileUrl'] ?? '',
      githubRepoUrl: json['githubRepoUrl'] ?? '',
      instagramUrl: json['instagramUrl'] ?? '',
      linkedInUrl: json['linkedInUrl'] ?? '',
      mediumUrl: json['mediumUrl'] ?? '',
      resumeUrl: json['resumeUrl'] ?? '',
      twitterUrl: json['twitterUrl'] ?? '',
    );
  }
}
