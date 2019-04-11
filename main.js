var tv1 = new TV (false, 0, 0);
var remote1 = new Remote ("abc1");

remote1.power(tv1,true);
tv1.setChannel(7);
remote1.setTVChannel(tv1,3);
remote1.adjustTVVolume(tv1,2);
tv1.getInfo();
remote1.power(tv1,false);
tv1.getInfo();
remote1.power(tv1,true);
remote1.adjustTVVolume(tv1,-10);
tv1.getInfo();

