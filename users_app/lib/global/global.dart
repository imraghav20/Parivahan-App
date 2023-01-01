import 'package:firebase_auth/firebase_auth.dart';
import 'package:users_app/models/direction_details_info.dart';
import 'package:users_app/models/user_model.dart';



final FirebaseAuth fAuth = FirebaseAuth.instance;
User? currentFirebaseUser;
UserModel? userModelCurrentInfo;
List dList = []; //online-active drivers Information List
DirectionDetailsInfo? tripDirectionDetailsInfo;
String? chosenDriverId="";
String cloudMessagingServerToken = "key=AAAAWK-Zu88:APA91bHZfuJacSm48XoFRDNo6rSAW4iQuEbJjQxSiP8BOurxdr8C5n0hk3W_JQo5vBqx6p9iDZAFBHSlQgBYpjt_eRuhBHmUU2HCsZTbkmjvdsARSrO2okJ0DyE0R8nv17HJvTATM3ec";
String userDropOffAddress = "";
String driverCarDetails="";
String driverName="";
String driverPhone="";
double countRatingStars=0.0;
String titleStarsRating="";