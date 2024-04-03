import 'package:flutter/material.dart';
import 'package:parth_portfolio/configs/app_dimensions.dart';
import 'package:parth_portfolio/configs/app_theme.dart';
import 'package:parth_portfolio/configs/app_typography.dart';
import 'package:parth_portfolio/provider/app_provider.dart';
import 'package:provider/provider.dart';

class ToolTechWidget extends StatelessWidget {
  final String techName;

  const ToolTechWidget({Key? key, required this.techName}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    final appProvider = Provider.of<AppProvider>(context);
    return Row(
      children: [
        Icon(
          Icons.play_arrow,
          color: AppTheme.c!.primary,
          size: AppDimensions.normalize(6),
        ),
        Text(
          " $techName ",
          style: AppText.l1b!.copyWith(
            color: appProvider.isDark ? Colors.white : Colors.black,
          ),
        )
      ],
    );
  }
}
