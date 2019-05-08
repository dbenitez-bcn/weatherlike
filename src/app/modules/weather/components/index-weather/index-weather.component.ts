import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
// import { Time } from '../../models/Time';

@Component({
  selector: 'app-index-weather',
  templateUrl: './index-weather.component.html',
  styleUrls: ['./index-weather.component.css']
})
export class IndexWeatherComponent implements OnInit {
  private cities: any = [{ "name": "Worldwide", "woeid": 1 }, { "name": "Winnipeg", "woeid": 2972 }, { "name": "Ottawa", "woeid": 3369 }, { "name": "Quebec", "woeid": 3444 }, { "name": "Montreal", "woeid": 3534 }, { "name": "Toronto", "woeid": 4118 }, { "name": "Edmonton", "woeid": 8676 }, { "name": "Calgary", "woeid": 8775 }, { "name": "Vancouver", "woeid": 9807 }, { "name": "Birmingham", "woeid": 12723 }, { "name": "Blackpool", "woeid": 12903 }, { "name": "Bournemouth", "woeid": 13383 }, { "name": "Brighton", "woeid": 13911 }, { "name": "Bristol", "woeid": 13963 }, { "name": "Cardiff", "woeid": 15127 }, { "name": "Coventry", "woeid": 17044 }, { "name": "Derby", "woeid": 18114 }, { "name": "Edinburgh", "woeid": 19344 }, { "name": "Glasgow", "woeid": 21125 }, { "name": "Hull", "woeid": 25211 }, { "name": "Leeds", "woeid": 26042 }, { "name": "Leicester", "woeid": 26062 }, { "name": "Liverpool", "woeid": 26734 }, { "name": "Manchester", "woeid": 28218 }, { "name": "Middlesbrough", "woeid": 28869 }, { "name": "Newcastle", "woeid": 30079 }, { "name": "Nottingham", "woeid": 30720 }, { "name": "Plymouth", "woeid": 32185 }, { "name": "Portsmouth", "woeid": 32452 }, { "name": "Preston", "woeid": 32566 }, { "name": "Sheffield", "woeid": 34503 }, { "name": "Stoke-on-Trent", "woeid": 36240 }, { "name": "Swansea", "woeid": 36758 }, { "name": "London", "woeid": 44418 }, { "name": "Belfast", "woeid": 44544 }, { "name": "Santo Domingo", "woeid": 76456 }, { "name": "Guatemala City", "woeid": 83123 }, { "name": "Acapulco", "woeid": 110978 }, { "name": "Aguascalientes", "woeid": 111579 }, { "name": "Chihuahua", "woeid": 115958 }, { "name": "Mexico City", "woeid": 116545 }, { "name": "Ciudad Juarez", "woeid": 116556 }, { "name": "Nezahualcóyotl", "woeid": 116564 }, { "name": "Culiacán", "woeid": 117994 }, { "name": "Ecatepec de Morelos", "woeid": 118466 }, { "name": "Guadalajara", "woeid": 124162 }, { "name": "Hermosillo", "woeid": 124785 }, { "name": "León", "woeid": 131068 }, { "name": "Mérida", "woeid": 133327 }, { "name": "Mexicali", "woeid": 133475 }, { "name": "Monterrey", "woeid": 134047 }, { "name": "Morelia", "woeid": 134091 }, { "name": "Naucalpan de Juárez", "woeid": 134395 }, { "name": "Puebla", "woeid": 137612 }, { "name": "Querétaro", "woeid": 138045 }, { "name": "Saltillo", "woeid": 141272 }, { "name": "San Luis Potosí", "woeid": 144265 }, { "name": "Tijuana", "woeid": 149361 }, { "name": "Toluca", "woeid": 149769 }, { "name": "Zapopan", "woeid": 151582 }, { "name": "Mendoza", "woeid": 332471 }, { "name": "Santiago", "woeid": 349859 }, { "name": "Concepcion", "woeid": 349860 }, { "name": "Valparaiso", "woeid": 349861 }, { "name": "Bogotá", "woeid": 368148 }, { "name": "Cali", "woeid": 368149 }, { "name": "Medellín", "woeid": 368150 }, { "name": "Barranquilla", "woeid": 368151 }, { "name": "Quito", "woeid": 375732 }, { "name": "Guayaquil", "woeid": 375733 }, { "name": "Caracas", "woeid": 395269 }, { "name": "Maracaibo", "woeid": 395270 }, { "name": "Maracay", "woeid": 395271 }, { "name": "Valencia", "woeid": 395272 }, { "name": "Barcelona", "woeid": 395273 }, { "name": "Ciudad Guayana", "woeid": 395275 }, { "name": "Turmero", "woeid": 395277 }, { "name": "Lima", "woeid": 418440 }, { "name": "Brasília", "woeid": 455819 }, { "name": "Belém", "woeid": 455820 }, { "name": "Belo Horizonte", "woeid": 455821 }, { "name": "Curitiba", "woeid": 455822 }, { "name": "Porto Alegre", "woeid": 455823 }, { "name": "Recife", "woeid": 455824 }, { "name": "Rio de Janeiro", "woeid": 455825 }, { "name": "Salvador", "woeid": 455826 }, { "name": "São Paulo", "woeid": 455827 }, { "name": "Campinas", "woeid": 455828 }, { "name": "Fortaleza", "woeid": 455830 }, { "name": "Goiânia", "woeid": 455831 }, { "name": "Manaus", "woeid": 455833 }, { "name": "São Luís", "woeid": 455834 }, { "name": "Guarulhos", "woeid": 455867 }, { "name": "Córdoba", "woeid": 466861 }, { "name": "Rosario", "woeid": 466862 }, { "name": "Barquisimeto", "woeid": 468382 }, { "name": "Maturín", "woeid": 468384 }, { "name": "Buenos Aires", "woeid": 468739 }, { "name": "Gdańsk", "woeid": 493417 }, { "name": "Kraków", "woeid": 502075 }, { "name": "Lodz", "woeid": 505120 }, { "name": "Poznań", "woeid": 514048 }, { "name": "Warsaw", "woeid": 523920 }, { "name": "Wroclaw", "woeid": 526363 }, { "name": "Vienna", "woeid": 551801 }, { "name": "Cork", "woeid": 560472 }, { "name": "Dublin", "woeid": 560743 }, { "name": "Galway", "woeid": 560912 }, { "name": "Bordeaux", "woeid": 580778 }, { "name": "Lille", "woeid": 608105 }, { "name": "Lyon", "woeid": 609125 }, { "name": "Marseille", "woeid": 610264 }, { "name": "Montpellier", "woeid": 612977 }, { "name": "Nantes", "woeid": 613858 }, { "name": "Paris", "woeid": 615702 }, { "name": "Rennes", "woeid": 619163 }, { "name": "Strasbourg", "woeid": 627791 }, { "name": "Toulouse", "woeid": 628886 }, { "name": "Berlin", "woeid": 638242 }, { "name": "Bremen", "woeid": 641142 }, { "name": "Dortmund", "woeid": 645458 }, { "name": "Dresden", "woeid": 645686 }, { "name": "Dusseldorf", "woeid": 646099 }, { "name": "Essen", "woeid": 648820 }, { "name": "Frankfurt", "woeid": 650272 }, { "name": "Hamburg", "woeid": 656958 }, { "name": "Cologne", "woeid": 667931 }, { "name": "Leipzig", "woeid": 671072 }, { "name": "Munich", "woeid": 676757 }, { "name": "Stuttgart", "woeid": 698064 }, { "name": "Bologna", "woeid": 711080 }, { "name": "Genoa", "woeid": 716085 }, { "name": "Milan", "woeid": 718345 }, { "name": "Naples", "woeid": 719258 }, { "name": "Palermo", "woeid": 719846 }, { "name": "Rome", "woeid": 721943 }, { "name": "Turin", "woeid": 725003 }, { "name": "Den Haag", "woeid": 726874 }, { "name": "Amsterdam", "woeid": 727232 }, { "name": "Rotterdam", "woeid": 733075 }, { "name": "Utrecht", "woeid": 734047 }, { "name": "Barcelona", "woeid": 753692 }, { "name": "Bilbao", "woeid": 754542 }, { "name": "Las Palmas", "woeid": 764814 }, { "name": "Madrid", "woeid": 766273 }, { "name": "Malaga", "woeid": 766356 }, { "name": "Murcia", "woeid": 768026 }, { "name": "Palma", "woeid": 769293 }, { "name": "Seville", "woeid": 774508 }, { "name": "Valencia", "woeid": 776688 }, { "name": "Zaragoza", "woeid": 779063 }, { "name": "Geneva", "woeid": 782538 }, { "name": "Lausanne", "woeid": 783058 }, { "name": "Zurich", "woeid": 784794 }, { "name": "Brest", "woeid": 824382 }, { "name": "Grodno", "woeid": 825848 }, { "name": "Gomel", "woeid": 825978 }, { "name": "Minsk", "woeid": 834463 }, { "name": "Riga", "woeid": 854823 }, { "name": "Bergen", "woeid": 857105 }, { "name": "Oslo", "woeid": 862592 }, { "name": "Gothenburg", "woeid": 890869 }, { "name": "Stockholm", "woeid": 906057 }, { "name": "Dnipropetrovsk", "woeid": 918981 }, { "name": "Donetsk", "woeid": 919163 }, { "name": "Kharkiv", "woeid": 922137 }, { "name": "Kyiv", "woeid": 924938 }, { "name": "Lviv", "woeid": 924943 }, { "name": "Odesa", "woeid": 929398 }, { "name": "Zaporozhye", "woeid": 939628 }, { "name": "Athens", "woeid": 946738 }, { "name": "Thessaloniki", "woeid": 963291 }, { "name": "Bekasi", "woeid": 1030077 }, { "name": "Depok", "woeid": 1032539 }, { "name": "Pekanbaru", "woeid": 1040779 }, { "name": "Surabaya", "woeid": 1044316 }, { "name": "Makassar", "woeid": 1046138 }, { "name": "Bandung", "woeid": 1047180 }, { "name": "Jakarta", "woeid": 1047378 }, { "name": "Medan", "woeid": 1047908 }, { "name": "Palembang", "woeid": 1048059 }, { "name": "Semarang", "woeid": 1048324 }, { "name": "Tangerang", "woeid": 1048536 }, { "name": "Singapore", "woeid": 1062617 }, { "name": "Perth", "woeid": 1098081 }, { "name": "Adelaide", "woeid": 1099805 }, { "name": "Brisbane", "woeid": 1100661 }, { "name": "Canberra", "woeid": 1100968 }, { "name": "Darwin", "woeid": 1101597 }, { "name": "Melbourne", "woeid": 1103816 }, { "name": "Sydney", "woeid": 1105779 }, { "name": "Kitakyushu", "woeid": 1110809 }, { "name": "Saitama", "woeid": 1116753 }, { "name": "Chiba", "woeid": 1117034 }, { "name": "Fukuoka", "woeid": 1117099 }, { "name": "Hamamatsu", "woeid": 1117155 }, { "name": "Hiroshima", "woeid": 1117227 }, { "name": "Kawasaki", "woeid": 1117502 }, { "name": "Kobe", "woeid": 1117545 }, { "name": "Kumamoto", "woeid": 1117605 }, { "name": "Nagoya", "woeid": 1117817 }, { "name": "Niigata", "woeid": 1117881 }, { "name": "Sagamihara", "woeid": 1118072 }, { "name": "Sapporo", "woeid": 1118108 }, { "name": "Sendai", "woeid": 1118129 }, { "name": "Takamatsu", "woeid": 1118285 }, { "name": "Tokyo", "woeid": 1118370 }, { "name": "Yokohama", "woeid": 1118550 }, { "name": "Goyang", "woeid": 1130853 }, { "name": "Yongin", "woeid": 1132094 }, { "name": "Ansan", "woeid": 1132444 }, { "name": "Bucheon", "woeid": 1132445 }, { "name": "Busan", "woeid": 1132447 }, { "name": "Changwon", "woeid": 1132449 }, { "name": "Daegu", "woeid": 1132466 }, { "name": "Gwangju", "woeid": 1132481 }, { "name": "Incheon", "woeid": 1132496 }, { "name": "Seongnam", "woeid": 1132559 }, { "name": "Suwon", "woeid": 1132567 }, { "name": "Ulsan", "woeid": 1132578 }, { "name": "Seoul", "woeid": 1132599 }, { "name": "Kajang", "woeid": 1141268 }, { "name": "Ipoh", "woeid": 1154679 }, { "name": "Johor Bahru", "woeid": 1154698 }, { "name": "Klang", "woeid": 1154726 }, { "name": "Kuala Lumpur", "woeid": 1154781 }, { "name": "Calocan", "woeid": 1167715 }, { "name": "Makati", "woeid": 1180689 }, { "name": "Pasig", "woeid": 1187115 }, { "name": "Taguig", "woeid": 1195098 }, { "name": "Antipolo", "woeid": 1198785 }, { "name": "Cagayan de Oro", "woeid": 1199002 }, { "name": "Cebu City", "woeid": 1199079 }, { "name": "Davao City", "woeid": 1199136 }, { "name": "Manila", "woeid": 1199477 }, { "name": "Quezon City", "woeid": 1199682 }, { "name": "Zamboanga City", "woeid": 1199980 }, { "name": "Bangkok", "woeid": 1225448 }, { "name": "Hanoi", "woeid": 1236594 }, { "name": "Hai Phong", "woeid": 1236690 }, { "name": "Can Tho", "woeid": 1252351 }, { "name": "Da Nang", "woeid": 1252376 }, { "name": "Ho Chi Minh City", "woeid": 1252431 }, { "name": "Algiers", "woeid": 1253079 }, { "name": "Accra", "woeid": 1326075 }, { "name": "Kumasi", "woeid": 1330595 }, { "name": "Benin City", "woeid": 1387660 }, { "name": "Ibadan", "woeid": 1393672 }, { "name": "Kaduna", "woeid": 1396439 }, { "name": "Kano", "woeid": 1396803 }, { "name": "Lagos", "woeid": 1398823 }, { "name": "Port Harcourt", "woeid": 1404447 }, { "name": "Giza", "woeid": 1521643 }, { "name": "Cairo", "woeid": 1521894 }, { "name": "Alexandria", "woeid": 1522006 }, { "name": "Mombasa", "woeid": 1528335 }, { "name": "Nairobi", "woeid": 1528488 }, { "name": "Durban", "woeid": 1580913 }, { "name": "Johannesburg", "woeid": 1582504 }, { "name": "Port Elizabeth", "woeid": 1586614 }, { "name": "Pretoria", "woeid": 1586638 }, { "name": "Soweto", "woeid": 1587677 }, { "name": "Cape Town", "woeid": 1591691 }, { "name": "Medina", "woeid": 1937801 }, { "name": "Dammam", "woeid": 1939574 }, { "name": "Riyadh", "woeid": 1939753 }, { "name": "Jeddah", "woeid": 1939873 }, { "name": "Mecca", "woeid": 1939897 }, { "name": "Sharjah", "woeid": 1940119 }, { "name": "Abu Dhabi", "woeid": 1940330 }, { "name": "Dubai", "woeid": 1940345 }, { "name": "Haifa", "woeid": 1967449 }, { "name": "Tel Aviv", "woeid": 1968212 }, { "name": "Jerusalem", "woeid": 1968222 }, { "name": "Amman", "woeid": 1968902 }, { "name": "Chelyabinsk", "woeid": 1997422 }, { "name": "Khabarovsk", "woeid": 2018708 }, { "name": "Krasnodar", "woeid": 2028717 }, { "name": "Krasnoyarsk", "woeid": 2029043 }, { "name": "Samara", "woeid": 2077746 }, { "name": "Voronezh", "woeid": 2108210 }, { "name": "Yekaterinburg", "woeid": 2112237 }, { "name": "Irkutsk", "woeid": 2121040 }, { "name": "Kazan", "woeid": 2121267 }, { "name": "Moscow", "woeid": 2122265 }, { "name": "Nizhny Novgorod", "woeid": 2122471 }, { "name": "Novosibirsk", "woeid": 2122541 }, { "name": "Omsk", "woeid": 2122641 }, { "name": "Perm", "woeid": 2122814 }, { "name": "Rostov-on-Don", "woeid": 2123177 }, { "name": "Saint Petersburg", "woeid": 2123260 }, { "name": "Ufa", "woeid": 2124045 }, { "name": "Vladivostok", "woeid": 2124288 }, { "name": "Volgograd", "woeid": 2124298 }, { "name": "Karachi", "woeid": 2211096 }, { "name": "Lahore", "woeid": 2211177 }, { "name": "Multan", "woeid": 2211269 }, { "name": "Rawalpindi", "woeid": 2211387 }, { "name": "Faisalabad", "woeid": 2211574 }, { "name": "Muscat", "woeid": 2268284 }, { "name": "Nagpur", "woeid": 2282863 }, { "name": "Lucknow", "woeid": 2295377 }, { "name": "Kanpur", "woeid": 2295378 }, { "name": "Patna", "woeid": 2295381 }, { "name": "Ranchi", "woeid": 2295383 }, { "name": "Kolkata", "woeid": 2295386 }, { "name": "Srinagar", "woeid": 2295387 }, { "name": "Amritsar", "woeid": 2295388 }, { "name": "Jaipur", "woeid": 2295401 }, { "name": "Ahmedabad", "woeid": 2295402 }, { "name": "Rajkot", "woeid": 2295404 }, { "name": "Surat", "woeid": 2295405 }, { "name": "Bhopal", "woeid": 2295407 }, { "name": "Indore", "woeid": 2295408 }, { "name": "Thane", "woeid": 2295410 }, { "name": "Mumbai", "woeid": 2295411 }, { "name": "Pune", "woeid": 2295412 }, { "name": "Hyderabad", "woeid": 2295414 }, { "name": "Bangalore", "woeid": 2295420 }, { "name": "Chennai", "woeid": 2295424 }, { "name": "Mersin", "woeid": 2323778 }, { "name": "Adana", "woeid": 2343678 }, { "name": "Ankara", "woeid": 2343732 }, { "name": "Antalya", "woeid": 2343733 }, { "name": "Bursa", "woeid": 2343843 }, { "name": "Diyarbakır", "woeid": 2343932 }, { "name": "Eskişehir", "woeid": 2343980 }, { "name": "Gaziantep", "woeid": 2343999 }, { "name": "Istanbul", "woeid": 2344116 }, { "name": "Izmir", "woeid": 2344117 }, { "name": "Kayseri", "woeid": 2344174 }, { "name": "Konya", "woeid": 2344210 }, { "name": "Okinawa", "woeid": 2345896 }, { "name": "Daejeon", "woeid": 2345975 }, { "name": "Auckland", "woeid": 2348079 }, { "name": "Albuquerque", "woeid": 2352824 }, { "name": "Atlanta", "woeid": 2357024 }, { "name": "Austin", "woeid": 2357536 }, { "name": "Baltimore", "woeid": 2358820 }, { "name": "Baton Rouge", "woeid": 2359991 }, { "name": "Birmingham", "woeid": 2364559 }, { "name": "Boston", "woeid": 2367105 }, { "name": "Charlotte", "woeid": 2378426 }, { "name": "Chicago", "woeid": 2379574 }, { "name": "Cincinnati", "woeid": 2380358 }, { "name": "Cleveland", "woeid": 2381475 }, { "name": "Colorado Springs", "woeid": 2383489 }, { "name": "Columbus", "woeid": 2383660 }, { "name": "Dallas-Ft. Worth", "woeid": 2388929 }, { "name": "Denver", "woeid": 2391279 }, { "name": "Detroit", "woeid": 2391585 }, { "name": "El Paso", "woeid": 2397816 }, { "name": "Fresno", "woeid": 2407517 }, { "name": "Greensboro", "woeid": 2414469 }, { "name": "Harrisburg", "woeid": 2418046 }, { "name": "Honolulu", "woeid": 2423945 }, { "name": "Houston", "woeid": 2424766 }, { "name": "Indianapolis", "woeid": 2427032 }, { "name": "Jackson", "woeid": 2428184 }, { "name": "Jacksonville", "woeid": 2428344 }, { "name": "Kansas City", "woeid": 2430683 }, { "name": "Las Vegas", "woeid": 2436704 }, { "name": "Long Beach", "woeid": 2441472 }, { "name": "Los Angeles", "woeid": 2442047 }, { "name": "Louisville", "woeid": 2442327 }, { "name": "Memphis", "woeid": 2449323 }, { "name": "Mesa", "woeid": 2449808 }, { "name": "Miami", "woeid": 2450022 }, { "name": "Milwaukee", "woeid": 2451822 }, { "name": "Minneapolis", "woeid": 2452078 }, { "name": "Nashville", "woeid": 2457170 }, { "name": "New Haven", "woeid": 2458410 }, { "name": "New Orleans", "woeid": 2458833 }, { "name": "New York", "woeid": 2459115 }, { "name": "Norfolk", "woeid": 2460389 }, { "name": "Oklahoma City", "woeid": 2464592 }, { "name": "Omaha", "woeid": 2465512 }, { "name": "Orlando", "woeid": 2466256 }, { "name": "Philadelphia", "woeid": 2471217 }, { "name": "Phoenix", "woeid": 2471390 }, { "name": "Pittsburgh", "woeid": 2473224 }, { "name": "Portland", "woeid": 2475687 }, { "name": "Providence", "woeid": 2477058 }, { "name": "Raleigh", "woeid": 2478307 }, { "name": "Richmond", "woeid": 2480894 }, { "name": "Sacramento", "woeid": 2486340 }, { "name": "St. Louis", "woeid": 2486982 }, { "name": "Salt Lake City", "woeid": 2487610 }, { "name": "San Antonio", "woeid": 2487796 }, { "name": "San Diego", "woeid": 2487889 }, { "name": "San Francisco", "woeid": 2487956 }, { "name": "San Jose", "woeid": 2488042 }, { "name": "Seattle", "woeid": 2490383 }, { "name": "Tallahassee", "woeid": 2503713 }, { "name": "Tampa", "woeid": 2503863 }, { "name": "Tucson", "woeid": 2508428 }, { "name": "Virginia Beach", "woeid": 2512636 }, { "name": "Washington", "woeid": 2514815 }, { "name": "Osaka", "woeid": 15015370 }, { "name": "Kyoto", "woeid": 15015372 }, { "name": "Delhi", "woeid": 20070458 }, { "name": "United Arab Emirates", "woeid": 23424738 }, { "name": "Algeria", "woeid": 23424740 }, { "name": "Argentina", "woeid": 23424747 }, { "name": "Australia", "woeid": 23424748 }, { "name": "Austria", "woeid": 23424750 }, { "name": "Bahrain", "woeid": 23424753 }, { "name": "Belgium", "woeid": 23424757 }, { "name": "Belarus", "woeid": 23424765 }, { "name": "Brazil", "woeid": 23424768 }, { "name": "Canada", "woeid": 23424775 }, { "name": "Chile", "woeid": 23424782 }, { "name": "Colombia", "woeid": 23424787 }, { "name": "Denmark", "woeid": 23424796 }, { "name": "Dominican Republic", "woeid": 23424800 }, { "name": "Ecuador", "woeid": 23424801 }, { "name": "Egypt", "woeid": 23424802 }, { "name": "Ireland", "woeid": 23424803 }, { "name": "France", "woeid": 23424819 }, { "name": "Ghana", "woeid": 23424824 }, { "name": "Germany", "woeid": 23424829 }, { "name": "Greece", "woeid": 23424833 }, { "name": "Guatemala", "woeid": 23424834 }, { "name": "Indonesia", "woeid": 23424846 }, { "name": "India", "woeid": 23424848 }, { "name": "Israel", "woeid": 23424852 }, { "name": "Italy", "woeid": 23424853 }, { "name": "Japan", "woeid": 23424856 }, { "name": "Jordan", "woeid": 23424860 }, { "name": "Kenya", "woeid": 23424863 }, { "name": "Korea", "woeid": 23424868 }, { "name": "Kuwait", "woeid": 23424870 }, { "name": "Lebanon", "woeid": 23424873 }, { "name": "Latvia", "woeid": 23424874 }, { "name": "Oman", "woeid": 23424898 }, { "name": "Mexico", "woeid": 23424900 }, { "name": "Malaysia", "woeid": 23424901 }, { "name": "Nigeria", "woeid": 23424908 }, { "name": "Netherlands", "woeid": 23424909 }, { "name": "Norway", "woeid": 23424910 }, { "name": "New Zealand", "woeid": 23424916 }, { "name": "Peru", "woeid": 23424919 }, { "name": "Pakistan", "woeid": 23424922 }, { "name": "Poland", "woeid": 23424923 }, { "name": "Panama", "woeid": 23424924 }, { "name": "Portugal", "woeid": 23424925 }, { "name": "Qatar", "woeid": 23424930 }, { "name": "Philippines", "woeid": 23424934 }, { "name": "Puerto Rico", "woeid": 23424935 }, { "name": "Russia", "woeid": 23424936 }, { "name": "Saudi Arabia", "woeid": 23424938 }, { "name": "South Africa", "woeid": 23424942 }, { "name": "Singapore", "woeid": 23424948 }, { "name": "Spain", "woeid": 23424950 }, { "name": "Sweden", "woeid": 23424954 }, { "name": "Switzerland", "woeid": 23424957 }, { "name": "Thailand", "woeid": 23424960 }, { "name": "Turkey", "woeid": 23424969 }, { "name": "United Kingdom", "woeid": 23424975 }, { "name": "Ukraine", "woeid": 23424976 }, { "name": "United States", "woeid": 23424977 }, { "name": "Venezuela", "woeid": 23424982 }, { "name": "Vietnam", "woeid": 23424984 }, { "name": "Petaling", "woeid": 56013632 }, { "name": "Hulu Langat", "woeid": 56013645 }, { "name": "Ahsa", "woeid": 56120136 }, { "name": "Okayama", "woeid": 90036018 }];

  public dateSelected: any;
  public daySelectedFromServer: any;
  public timeSelected: any;
  public woeidSelected: number;
  public citiesWoeidArr: Array<number>;
  constructor(private weatherService: WeatherService) {
    this.citiesWoeidArr = [753692, 44418, 766273];
  }

  ngOnInit() {
  }

  changeTimeSelected() {
    this.weatherService.getTimeByWoeid(this.woeidSelected).subscribe((res) => {
      this.timeSelected = res;
    });
  }

  changeDateSelected() {
    if (this.woeidSelected != null) {
      let dateSplited = this.dateSelected.split("-");
      this.weatherService.getTimeByDate(this.woeidSelected, dateSplited[0], dateSplited[1], dateSplited[2]).subscribe((res) => {
        this.daySelectedFromServer = res[0];
        console.log(this.daySelectedFromServer);
      });
    }
  }



}
