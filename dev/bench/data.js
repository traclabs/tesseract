window.BENCHMARK_DATA = {
  "lastUpdate": 1592415111791,
  "repoUrl": "https://github.com/ros-industrial-consortium/tesseract",
  "entries": {
    "C++ Benchmark": [
      {
        "commit": {
          "author": {
            "email": "levi.armstrong@gmail.com",
            "name": "Levi Armstrong",
            "username": "Levi-Armstrong"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8fd4370ce164e10428f19a82d32f2fe33c53f0ff",
          "message": "Add Noetic CI Build (#305)\n\n* Add Noetic CI build\r\n\r\n* remove redundant move\r\n\r\n* Add missing static_casts\r\n\r\n* remove more redundant moves\r\n\r\n* Another redundant move\r\n\r\n* Remove old header.\r\n\r\n* Add Python 3.8\r\n\r\n* Add Colcon environment hooks for Python packages\r\n\r\n* Bump tesseract_viewer_python required cmake version to 3.5.0\r\n\r\n* Add python version to tesseract_viewer_python\r\n\r\n* Source workspace before testing\r\n\r\n* Remove after script\r\n\r\nThe tests are being run by colcon anyway\r\n\r\nCo-authored-by: Matthew Powelson <powelson.matthew@gmail.com>",
          "timestamp": "2020-06-17T11:44:01-05:00",
          "tree_id": "eb7453c635b76359b7da64379f6fc961aa9a5348",
          "url": "https://github.com/ros-industrial-consortium/tesseract/commit/8fd4370ce164e10428f19a82d32f2fe33c53f0ff"
        },
        "date": 1592415108209,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_0/real_time",
            "value": 57.65315165163936,
            "unit": "us/iter",
            "extra": "iterations: 11988\ncpu: 57.628912662662664 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_2/real_time",
            "value": 58.824997968960616,
            "unit": "us/iter",
            "extra": "iterations: 10832\ncpu: 58.78775849335302 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_4/real_time",
            "value": 61.58155966492201,
            "unit": "us/iter",
            "extra": "iterations: 11221\ncpu: 61.568615096693705 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_8/real_time",
            "value": 64.06664777107079,
            "unit": "us/iter",
            "extra": "iterations: 11149\ncpu: 64.05043232576912 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_16/real_time",
            "value": 69.57269027412204,
            "unit": "us/iter",
            "extra": "iterations: 10251\ncpu: 69.53385220954057 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_32/real_time",
            "value": 84.31060343170843,
            "unit": "us/iter",
            "extra": "iterations: 8334\ncpu: 84.31101775857931 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_64/real_time",
            "value": 123.90830026203717,
            "unit": "us/iter",
            "extra": "iterations: 5725\ncpu: 123.80837868995627 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_128/real_time",
            "value": 224.45681860759862,
            "unit": "us/iter",
            "extra": "iterations: 3203\ncpu: 224.45787886356544 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_256/real_time",
            "value": 479.79365411941126,
            "unit": "us/iter",
            "extra": "iterations: 1408\ncpu: 479.68922656250015 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_512/real_time",
            "value": 1426.424027451111,
            "unit": "us/iter",
            "extra": "iterations: 510\ncpu: 1426.4306254901933 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_BOX_BOX/real_time",
            "value": 3.966876781015617,
            "unit": "us/iter",
            "extra": "iterations: 176304\ncpu: 3.9661264747254776 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_BOX_CONE/real_time",
            "value": 6.421442428136229,
            "unit": "us/iter",
            "extra": "iterations: 112086\ncpu: 6.421054333279808 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_BOX_SPHERE/real_time",
            "value": 43.071584943858085,
            "unit": "us/iter",
            "extra": "iterations: 16299\ncpu: 43.062209828823896 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_BOX_CAPSULE/real_time",
            "value": 23.411756417107778,
            "unit": "us/iter",
            "extra": "iterations: 29920\ncpu: 23.41189411764704 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_BOX_CYLINDER/real_time",
            "value": 4.926863972363656,
            "unit": "us/iter",
            "extra": "iterations: 142993\ncpu: 4.926591560426025 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CONE_BOX/real_time",
            "value": 6.7719498073194195,
            "unit": "us/iter",
            "extra": "iterations: 104577\ncpu: 6.771548055499778 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CONE_CONE/real_time",
            "value": 4.923055350244582,
            "unit": "us/iter",
            "extra": "iterations: 143414\ncpu: 4.922764813755979 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CONE_SPHERE/real_time",
            "value": 74.09889186070079,
            "unit": "us/iter",
            "extra": "iterations: 9534\ncpu: 74.09940853786432 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CONE_CAPSULE/real_time",
            "value": 74.15204030808052,
            "unit": "us/iter",
            "extra": "iterations: 9477\ncpu: 74.13581945763408 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CONE_CYLINDER/real_time",
            "value": 5.3924507244605016,
            "unit": "us/iter",
            "extra": "iterations: 129476\ncpu: 5.3920955389415735 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_SPHERE_BOX/real_time",
            "value": 44.174872959517536,
            "unit": "us/iter",
            "extra": "iterations: 16050\ncpu: 44.16442043613709 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_SPHERE_CONE/real_time",
            "value": 72.71669261375082,
            "unit": "us/iter",
            "extra": "iterations: 9802\ncpu: 72.71708396245673 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_SPHERE_SPHERE/real_time",
            "value": 0.5590035330269423,
            "unit": "us/iter",
            "extra": "iterations: 1264638\ncpu: 0.5590383421975322 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_SPHERE_CAPSULE/real_time",
            "value": 0.6006595659217091,
            "unit": "us/iter",
            "extra": "iterations: 1170065\ncpu: 0.6005177361941434 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_SPHERE_CYLINDER/real_time",
            "value": 12.5046498606492,
            "unit": "us/iter",
            "extra": "iterations: 55615\ncpu: 12.504726674458329 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CAPSULE_BOX/real_time",
            "value": 26.194248791636863,
            "unit": "us/iter",
            "extra": "iterations: 26689\ncpu: 26.188723444115496 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CAPSULE_CONE/real_time",
            "value": 74.06906440389344,
            "unit": "us/iter",
            "extra": "iterations: 9487\ncpu: 74.06953283440478 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CAPSULE_SPHERE/real_time",
            "value": 0.5950483421485512,
            "unit": "us/iter",
            "extra": "iterations: 1183791\ncpu: 0.5949803394349168 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CAPSULE_CAPSULE/real_time",
            "value": 0.5973830416893897,
            "unit": "us/iter",
            "extra": "iterations: 1175919\ncpu: 0.5973058782109992 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CAPSULE_CYLINDER/real_time",
            "value": 77.52584639944686,
            "unit": "us/iter",
            "extra": "iterations: 9082\ncpu: 77.52637789033272 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CYLINDER_BOX/real_time",
            "value": 5.47448241288144,
            "unit": "us/iter",
            "extra": "iterations: 128560\ncpu: 5.473270854075923 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CYLINDER_CONE/real_time",
            "value": 5.447682107564745,
            "unit": "us/iter",
            "extra": "iterations: 130843\ncpu: 5.447710408657696 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CYLINDER_SPHERE/real_time",
            "value": 13.142626897773093,
            "unit": "us/iter",
            "extra": "iterations: 53945\ncpu: 13.140764593567544 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CYLINDER_CAPSULE/real_time",
            "value": 76.0529683467197,
            "unit": "us/iter",
            "extra": "iterations: 9067\ncpu: 76.04764607918857 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CYLINDER_CYLINDER/real_time",
            "value": 4.407436109073707,
            "unit": "us/iter",
            "extra": "iterations: 159561\ncpu: 4.4073998846836 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_BOX_BOX/real_time",
            "value": 4.2098156588760105,
            "unit": "us/iter",
            "extra": "iterations: 166040\ncpu: 4.209747729462787 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_BOX_CONE/real_time",
            "value": 6.568639677246028,
            "unit": "us/iter",
            "extra": "iterations: 107079\ncpu: 6.5685950092921725 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_BOX_SPHERE/real_time",
            "value": 43.405574258616,
            "unit": "us/iter",
            "extra": "iterations: 16355\ncpu: 43.40221106695235 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_BOX_CAPSULE/real_time",
            "value": 23.444870912161036,
            "unit": "us/iter",
            "extra": "iterations: 29600\ncpu: 23.4402690202703 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_BOX_CYLINDER/real_time",
            "value": 4.8565005599933055,
            "unit": "us/iter",
            "extra": "iterations: 137502\ncpu: 4.8561256636267265 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CONE_BOX/real_time",
            "value": 6.7507563938782775,
            "unit": "us/iter",
            "extra": "iterations: 103302\ncpu: 6.7507908172155195 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CONE_CONE/real_time",
            "value": 4.632747386060389,
            "unit": "us/iter",
            "extra": "iterations: 151591\ncpu: 4.632030067748072 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CONE_SPHERE/real_time",
            "value": 72.34818788255946,
            "unit": "us/iter",
            "extra": "iterations: 9639\ncpu: 72.34855960161835 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CONE_CAPSULE/real_time",
            "value": 72.49318555954778,
            "unit": "us/iter",
            "extra": "iterations: 9695\ncpu: 72.47796266116517 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CONE_CYLINDER/real_time",
            "value": 5.1915473134691545,
            "unit": "us/iter",
            "extra": "iterations: 129107\ncpu: 5.191578125121027 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_SPHERE_BOX/real_time",
            "value": 43.445779842348394,
            "unit": "us/iter",
            "extra": "iterations: 15984\ncpu: 43.438865928428754 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_SPHERE_CONE/real_time",
            "value": 67.57439158363921,
            "unit": "us/iter",
            "extra": "iterations: 10741\ncpu: 67.57399851038103 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_SPHERE_SPHERE/real_time",
            "value": 0.47471313736248766,
            "unit": "us/iter",
            "extra": "iterations: 1452765\ncpu: 0.4746699555674883 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_SPHERE_CAPSULE/real_time",
            "value": 0.5263386803665835,
            "unit": "us/iter",
            "extra": "iterations: 1329460\ncpu: 0.5263422382019785 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_SPHERE_CYLINDER/real_time",
            "value": 12.436446258600633,
            "unit": "us/iter",
            "extra": "iterations: 56837\ncpu: 12.436507064060395 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CAPSULE_BOX/real_time",
            "value": 25.475057028312616,
            "unit": "us/iter",
            "extra": "iterations: 26443\ncpu: 25.470622773513035 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CAPSULE_CONE/real_time",
            "value": 74.64617532333706,
            "unit": "us/iter",
            "extra": "iterations: 9588\ncpu: 74.54891937838993 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CAPSULE_SPHERE/real_time",
            "value": 0.531947820929306,
            "unit": "us/iter",
            "extra": "iterations: 1288141\ncpu: 0.5317948275848683 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CAPSULE_CAPSULE/real_time",
            "value": 0.5480785205778522,
            "unit": "us/iter",
            "extra": "iterations: 1319272\ncpu: 0.548074533530616 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CAPSULE_CYLINDER/real_time",
            "value": 72.36640231102022,
            "unit": "us/iter",
            "extra": "iterations: 9433\ncpu: 72.36673794126946 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CYLINDER_BOX/real_time",
            "value": 5.3311540499998955,
            "unit": "us/iter",
            "extra": "iterations: 100000\ncpu: 5.328563520000031 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CYLINDER_CONE/real_time",
            "value": 5.298787364914041,
            "unit": "us/iter",
            "extra": "iterations: 130383\ncpu: 5.298713942768609 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CYLINDER_SPHERE/real_time",
            "value": 12.34365286754134,
            "unit": "us/iter",
            "extra": "iterations: 56477\ncpu: 12.342317332719487 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CYLINDER_CAPSULE/real_time",
            "value": 74.29417917628491,
            "unit": "us/iter",
            "extra": "iterations: 9979\ncpu: 74.28650796673071 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CYLINDER_CYLINDER/real_time",
            "value": 4.2022151141089,
            "unit": "us/iter",
            "extra": "iterations: 160724\ncpu: 4.201323666658395 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_BOX_BOX/real_time",
            "value": 4.118351208645532,
            "unit": "us/iter",
            "extra": "iterations: 171018\ncpu: 4.118371212387011 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_BOX_CONE/real_time",
            "value": 6.467210960338258,
            "unit": "us/iter",
            "extra": "iterations: 107077\ncpu: 6.467245953846283 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_BOX_SPHERE/real_time",
            "value": 41.67295345656271,
            "unit": "us/iter",
            "extra": "iterations: 16823\ncpu: 41.673172323604724 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_BOX_CAPSULE/real_time",
            "value": 22.11283607707749,
            "unit": "us/iter",
            "extra": "iterations: 31344\ncpu: 22.111486217458022 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_BOX_CYLINDER/real_time",
            "value": 4.66334410073336,
            "unit": "us/iter",
            "extra": "iterations: 150578\ncpu: 4.663087615720748 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CONE_BOX/real_time",
            "value": 6.342224605091795,
            "unit": "us/iter",
            "extra": "iterations: 108506\ncpu: 6.341586935284718 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CONE_CONE/real_time",
            "value": 4.5901123802077946,
            "unit": "us/iter",
            "extra": "iterations: 145773\ncpu: 4.590040439587563 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CONE_SPHERE/real_time",
            "value": 68.84490123946308,
            "unit": "us/iter",
            "extra": "iterations: 10085\ncpu: 68.83956539414923 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CONE_CAPSULE/real_time",
            "value": 72.43851125270189,
            "unit": "us/iter",
            "extra": "iterations: 9731\ncpu: 72.42945462953425 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CONE_CYLINDER/real_time",
            "value": 5.0583724434150446,
            "unit": "us/iter",
            "extra": "iterations: 130154\ncpu: 5.058392081687834 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_SPHERE_BOX/real_time",
            "value": 39.87312211560936,
            "unit": "us/iter",
            "extra": "iterations: 17508\ncpu: 39.86415210189596 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CONE/real_time",
            "value": 66.02796549722515,
            "unit": "us/iter",
            "extra": "iterations: 10318\ncpu: 66.02817629385456 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_SPHERE_SPHERE/real_time",
            "value": 0.5052276311418001,
            "unit": "us/iter",
            "extra": "iterations: 1375629\ncpu: 0.5051781003453767 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CAPSULE/real_time",
            "value": 0.5608677600892239,
            "unit": "us/iter",
            "extra": "iterations: 1252398\ncpu: 0.5608393785362109 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CYLINDER/real_time",
            "value": 11.456488261843077,
            "unit": "us/iter",
            "extra": "iterations: 61594\ncpu: 11.45630717277655 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_BOX/real_time",
            "value": 24.59933539397423,
            "unit": "us/iter",
            "extra": "iterations: 28632\ncpu: 24.59522108130757 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CONE/real_time",
            "value": 71.654612416739,
            "unit": "us/iter",
            "extra": "iterations: 10212\ncpu: 71.65483803368589 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_SPHERE/real_time",
            "value": 0.5727246802087835,
            "unit": "us/iter",
            "extra": "iterations: 1177409\ncpu: 0.5726037179943454 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CAPSULE/real_time",
            "value": 0.5751997258852862,
            "unit": "us/iter",
            "extra": "iterations: 1254219\ncpu: 0.5751620139704373 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CYLINDER/real_time",
            "value": 76.147661213238,
            "unit": "us/iter",
            "extra": "iterations: 9413\ncpu: 76.14808275788778 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_BOX/real_time",
            "value": 5.476748121445617,
            "unit": "us/iter",
            "extra": "iterations: 128157\ncpu: 5.475319826462877 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CONE/real_time",
            "value": 5.329099027974996,
            "unit": "us/iter",
            "extra": "iterations: 112857\ncpu: 5.328999069619115 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_SPHERE/real_time",
            "value": 13.045820590479353,
            "unit": "us/iter",
            "extra": "iterations: 53821\ncpu: 13.042065680682107 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CAPSULE/real_time",
            "value": 75.79218191687079,
            "unit": "us/iter",
            "extra": "iterations: 9213\ncpu: 75.78762183870553 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CYLINDER/real_time",
            "value": 4.388067068451126,
            "unit": "us/iter",
            "extra": "iterations: 160120\ncpu: 4.3875948226329795 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_BOX_BOX/real_time",
            "value": 4.369526802778423,
            "unit": "us/iter",
            "extra": "iterations: 158006\ncpu: 4.368951723352269 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_BOX_CONE/real_time",
            "value": 6.707655742215562,
            "unit": "us/iter",
            "extra": "iterations: 105421\ncpu: 6.707070944119302 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_BOX_SPHERE/real_time",
            "value": 43.290517592654076,
            "unit": "us/iter",
            "extra": "iterations: 16001\ncpu: 43.289823948503845 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_BOX_CAPSULE/real_time",
            "value": 23.291561112963866,
            "unit": "us/iter",
            "extra": "iterations: 30010\ncpu: 23.2873106297902 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_BOX_CYLINDER/real_time",
            "value": 4.89579634120999,
            "unit": "us/iter",
            "extra": "iterations: 143490\ncpu: 4.895829179733781 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CONE_BOX/real_time",
            "value": 6.757582883716967,
            "unit": "us/iter",
            "extra": "iterations: 104719\ncpu: 6.756027196592917 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CONE_CONE/real_time",
            "value": 4.842970962689965,
            "unit": "us/iter",
            "extra": "iterations: 144917\ncpu: 4.84300184933445 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CONE_SPHERE/real_time",
            "value": 74.33454973488841,
            "unit": "us/iter",
            "extra": "iterations: 9430\ncpu: 74.313124072111 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CONE_CAPSULE/real_time",
            "value": 75.07732229908748,
            "unit": "us/iter",
            "extra": "iterations: 9395\ncpu: 75.07601277275066 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CONE_CYLINDER/real_time",
            "value": 5.4021958954353515,
            "unit": "us/iter",
            "extra": "iterations: 124934\ncpu: 5.4021539772999905 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_SPHERE_BOX/real_time",
            "value": 43.60263657882423,
            "unit": "us/iter",
            "extra": "iterations: 16053\ncpu: 43.600357814738054 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_SPHERE_CONE/real_time",
            "value": 72.09496073975141,
            "unit": "us/iter",
            "extra": "iterations: 9679\ncpu: 72.09375668973986 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_SPHERE_SPHERE/real_time",
            "value": 0.5589724808900459,
            "unit": "us/iter",
            "extra": "iterations: 1266102\ncpu: 0.5588644398318638 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_SPHERE_CAPSULE/real_time",
            "value": 0.599463976394326,
            "unit": "us/iter",
            "extra": "iterations: 1167193\ncpu: 0.5994586268080782 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_SPHERE_CYLINDER/real_time",
            "value": 12.444223013005871,
            "unit": "us/iter",
            "extra": "iterations: 56203\ncpu: 12.441806700709957 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CAPSULE_BOX/real_time",
            "value": 26.62238200702374,
            "unit": "us/iter",
            "extra": "iterations: 26188\ncpu: 26.621922674507587 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CONE/real_time",
            "value": 74.07526954641276,
            "unit": "us/iter",
            "extra": "iterations: 9260\ncpu: 74.06978963282818 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CAPSULE_SPHERE/real_time",
            "value": 0.5955478964887354,
            "unit": "us/iter",
            "extra": "iterations: 1185494\ncpu: 0.5953875869468782 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CAPSULE/real_time",
            "value": 0.5891184640716187,
            "unit": "us/iter",
            "extra": "iterations: 1185524\ncpu: 0.5891219064312483 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CYLINDER/real_time",
            "value": 76.64196377850162,
            "unit": "us/iter",
            "extra": "iterations: 9083\ncpu: 76.6283309479254 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CYLINDER_BOX/real_time",
            "value": 5.560081259943171,
            "unit": "us/iter",
            "extra": "iterations: 121942\ncpu: 5.55974021256009 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CONE/real_time",
            "value": 5.364883227176084,
            "unit": "us/iter",
            "extra": "iterations: 127641\ncpu: 5.364911783831241 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CYLINDER_SPHERE/real_time",
            "value": 12.975886506679254,
            "unit": "us/iter",
            "extra": "iterations: 54338\ncpu: 12.97290187345861 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CAPSULE/real_time",
            "value": 74.34676838273427,
            "unit": "us/iter",
            "extra": "iterations: 9071\ncpu: 74.34714000661461 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CYLINDER/real_time",
            "value": 4.3002485531370995,
            "unit": "us/iter",
            "extra": "iterations: 159310\ncpu: 4.299389919025747 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_BOX_BOX/real_time",
            "value": 4.523734701639323,
            "unit": "us/iter",
            "extra": "iterations: 152500\ncpu: 4.523561377049169 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_BOX_CONE/real_time",
            "value": 7.4283424059242495,
            "unit": "us/iter",
            "extra": "iterations: 92954\ncpu: 7.426864513630404 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_BOX_SPHERE/real_time",
            "value": 1.3609723196128536,
            "unit": "us/iter",
            "extra": "iterations: 491720\ncpu: 1.3609796428862098 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_BOX_CAPSULE/real_time",
            "value": 1.5113135533843498,
            "unit": "us/iter",
            "extra": "iterations: 459590\ncpu: 1.5111224961378822 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_BOX_CYLINDER/real_time",
            "value": 7.018815049089995,
            "unit": "us/iter",
            "extra": "iterations: 98491\ncpu: 7.018451726553726 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CONE_BOX/real_time",
            "value": 7.661695288000612,
            "unit": "us/iter",
            "extra": "iterations: 92169\ncpu: 7.661564408857625 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CONE_CONE/real_time",
            "value": 41.63968387832582,
            "unit": "us/iter",
            "extra": "iterations: 16636\ncpu: 41.636891560470595 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CONE_SPHERE/real_time",
            "value": 4.171466089415788,
            "unit": "us/iter",
            "extra": "iterations: 173928\ncpu: 4.1714321845821285 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CONE_CAPSULE/real_time",
            "value": 20.161069674075026,
            "unit": "us/iter",
            "extra": "iterations: 35623\ncpu: 20.16000123515675 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CONE_CYLINDER/real_time",
            "value": 22.46154551994337,
            "unit": "us/iter",
            "extra": "iterations: 31975\ncpu: 22.461163690383103 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_SPHERE_BOX/real_time",
            "value": 1.463877879658023,
            "unit": "us/iter",
            "extra": "iterations: 477791\ncpu: 1.4634711202178623 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_SPHERE_CONE/real_time",
            "value": 3.8145225690862152,
            "unit": "us/iter",
            "extra": "iterations: 184190\ncpu: 3.81446725120797 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_SPHERE_SPHERE/real_time",
            "value": 0.7423141594745256,
            "unit": "us/iter",
            "extra": "iterations: 944915\ncpu: 0.7421301376314314 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_SPHERE_CAPSULE/real_time",
            "value": 0.7891580553409163,
            "unit": "us/iter",
            "extra": "iterations: 839592\ncpu: 0.7891630160840157 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_SPHERE_CYLINDER/real_time",
            "value": 24.502189211635983,
            "unit": "us/iter",
            "extra": "iterations: 27678\ncpu: 24.497536635594987 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CAPSULE_BOX/real_time",
            "value": 1.6522264922655905,
            "unit": "us/iter",
            "extra": "iterations: 423467\ncpu: 1.6522364954057491 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CAPSULE_CONE/real_time",
            "value": 19.39973353361363,
            "unit": "us/iter",
            "extra": "iterations: 35284\ncpu: 19.39660820768624 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CAPSULE_SPHERE/real_time",
            "value": 0.7636340404386369,
            "unit": "us/iter",
            "extra": "iterations: 895670\ncpu: 0.7636300032377997 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CAPSULE_CAPSULE/real_time",
            "value": 0.7636771657552068,
            "unit": "us/iter",
            "extra": "iterations: 903507\ncpu: 0.7636643589922404 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CAPSULE_CYLINDER/real_time",
            "value": 25.853771275626933,
            "unit": "us/iter",
            "extra": "iterations: 27085\ncpu: 25.85075093224991 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CYLINDER_BOX/real_time",
            "value": 7.864697135002386,
            "unit": "us/iter",
            "extra": "iterations: 85794\ncpu: 7.864306350094381 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CYLINDER_CONE/real_time",
            "value": 21.976234023572463,
            "unit": "us/iter",
            "extra": "iterations: 31390\ncpu: 21.972920261229856 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CYLINDER_SPHERE/real_time",
            "value": 27.22121770315858,
            "unit": "us/iter",
            "extra": "iterations: 25792\ncpu: 27.221344254032577 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CYLINDER_CAPSULE/real_time",
            "value": 25.99697713584832,
            "unit": "us/iter",
            "extra": "iterations: 26898\ncpu: 25.99301672986807 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CYLINDER_CYLINDER/real_time",
            "value": 5.251567613851142,
            "unit": "us/iter",
            "extra": "iterations: 133730\ncpu: 5.251585253869793 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_BOX_BOX/real_time",
            "value": 4.09393423137433,
            "unit": "us/iter",
            "extra": "iterations: 162205\ncpu: 4.093524034400979 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_BOX_CONE/real_time",
            "value": 7.295329802281448,
            "unit": "us/iter",
            "extra": "iterations: 91191\ncpu: 7.295135956399066 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_BOX_SPHERE/real_time",
            "value": 1.3504447029629552,
            "unit": "us/iter",
            "extra": "iterations: 515760\ncpu: 1.3504382716767398 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_BOX_CAPSULE/real_time",
            "value": 1.5163801410560591,
            "unit": "us/iter",
            "extra": "iterations: 477115\ncpu: 1.516158161030364 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_BOX_CYLINDER/real_time",
            "value": 7.0537704758179585,
            "unit": "us/iter",
            "extra": "iterations: 99471\ncpu: 7.052975178695206 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CONE_BOX/real_time",
            "value": 7.838473235594697,
            "unit": "us/iter",
            "extra": "iterations: 87990\ncpu: 7.837239584043665 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CONE_CONE/real_time",
            "value": 40.73651081146333,
            "unit": "us/iter",
            "extra": "iterations: 16464\ncpu: 40.736684584548236 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CONE_SPHERE/real_time",
            "value": 3.9828725050149107,
            "unit": "us/iter",
            "extra": "iterations: 180462\ncpu: 3.9818514978221793 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CONE_CAPSULE/real_time",
            "value": 20.307095325684227,
            "unit": "us/iter",
            "extra": "iterations: 36968\ncpu: 20.30717347435645 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CONE_CYLINDER/real_time",
            "value": 21.70535667900471,
            "unit": "us/iter",
            "extra": "iterations: 30798\ncpu: 21.701682024807344 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_SPHERE_BOX/real_time",
            "value": 1.467064354208628,
            "unit": "us/iter",
            "extra": "iterations: 488888\ncpu: 1.4669881404329979 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_SPHERE_CONE/real_time",
            "value": 3.901564732130085,
            "unit": "us/iter",
            "extra": "iterations: 180181\ncpu: 3.900825691943147 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_SPHERE_SPHERE/real_time",
            "value": 0.7423721745537832,
            "unit": "us/iter",
            "extra": "iterations: 935870\ncpu: 0.7423751332984082 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_SPHERE_CAPSULE/real_time",
            "value": 0.7912241879615627,
            "unit": "us/iter",
            "extra": "iterations: 782629\ncpu: 0.7911441513156389 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_SPHERE_CYLINDER/real_time",
            "value": 25.760290964218946,
            "unit": "us/iter",
            "extra": "iterations: 27048\ncpu: 25.760012015676086 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CAPSULE_BOX/real_time",
            "value": 1.7047457478489085,
            "unit": "us/iter",
            "extra": "iterations: 397975\ncpu: 1.704625255355217 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CAPSULE_CONE/real_time",
            "value": 20.80492209829497,
            "unit": "us/iter",
            "extra": "iterations: 33799\ncpu: 20.802661055060764 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CAPSULE_SPHERE/real_time",
            "value": 0.8213700263407704,
            "unit": "us/iter",
            "extra": "iterations: 854577\ncpu: 0.8213756536859836 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CAPSULE_CAPSULE/real_time",
            "value": 0.7887981018426502,
            "unit": "us/iter",
            "extra": "iterations: 864312\ncpu: 0.7886587355029258 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CAPSULE_CYLINDER/real_time",
            "value": 26.474291174698003,
            "unit": "us/iter",
            "extra": "iterations: 26424\ncpu: 26.47447256282202 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CYLINDER_BOX/real_time",
            "value": 8.323280885523777,
            "unit": "us/iter",
            "extra": "iterations: 85825\ncpu: 8.32205138362958 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CYLINDER_CONE/real_time",
            "value": 22.98427940451783,
            "unit": "us/iter",
            "extra": "iterations: 30429\ncpu: 22.984426501035294 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CYLINDER_SPHERE/real_time",
            "value": 28.574835546280653,
            "unit": "us/iter",
            "extra": "iterations: 24402\ncpu: 28.57171576100288 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CYLINDER_CAPSULE/real_time",
            "value": 27.51173629314399,
            "unit": "us/iter",
            "extra": "iterations: 25407\ncpu: 27.511226512378595 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CYLINDER_CYLINDER/real_time",
            "value": 5.377433879221451,
            "unit": "us/iter",
            "extra": "iterations: 128598\ncpu: 5.377392797710689 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_BOX_BOX/real_time",
            "value": 4.537588764712213,
            "unit": "us/iter",
            "extra": "iterations: 155332\ncpu: 4.537618475265987 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_BOX_CONE/real_time",
            "value": 7.719677816838614,
            "unit": "us/iter",
            "extra": "iterations: 90163\ncpu: 7.719666537271401 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_BOX_SPHERE/real_time",
            "value": 1.4276575044309625,
            "unit": "us/iter",
            "extra": "iterations: 492529\ncpu: 1.4274463513823874 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_BOX_CAPSULE/real_time",
            "value": 1.5904079737288843,
            "unit": "us/iter",
            "extra": "iterations: 439418\ncpu: 1.5904178481536597 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_BOX_CYLINDER/real_time",
            "value": 7.292223321560864,
            "unit": "us/iter",
            "extra": "iterations: 97129\ncpu: 7.2908182005374 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CONE_BOX/real_time",
            "value": 8.085775860876305,
            "unit": "us/iter",
            "extra": "iterations: 86424\ncpu: 8.08581537535885 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CONE_CONE/real_time",
            "value": 44.38340889964629,
            "unit": "us/iter",
            "extra": "iterations: 15686\ncpu: 44.43332748948047 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CONE_SPHERE/real_time",
            "value": 4.334642946117256,
            "unit": "us/iter",
            "extra": "iterations: 162166\ncpu: 4.334387313000213 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CONE_CAPSULE/real_time",
            "value": 21.025005089887056,
            "unit": "us/iter",
            "extra": "iterations: 33596\ncpu: 21.021472050244093 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CONE_CYLINDER/real_time",
            "value": 23.682154920609303,
            "unit": "us/iter",
            "extra": "iterations: 29854\ncpu: 23.68229547129377 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_SPHERE_BOX/real_time",
            "value": 1.5382575254057664,
            "unit": "us/iter",
            "extra": "iterations: 457384\ncpu: 1.5380214480611556 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CONE/real_time",
            "value": 3.9059769879642006,
            "unit": "us/iter",
            "extra": "iterations: 177820\ncpu: 3.9060004442696097 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_SPHERE_SPHERE/real_time",
            "value": 0.7552704702669075,
            "unit": "us/iter",
            "extra": "iterations: 932853\ncpu: 0.7552120409110668 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CAPSULE/real_time",
            "value": 0.8224061972510556,
            "unit": "us/iter",
            "extra": "iterations: 860801\ncpu: 0.8222985916605303 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CYLINDER/real_time",
            "value": 25.865079297910142,
            "unit": "us/iter",
            "extra": "iterations: 27176\ncpu: 25.86485030909597 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_BOX/real_time",
            "value": 1.7403902929799215,
            "unit": "us/iter",
            "extra": "iterations: 412485\ncpu: 1.7402701286107185 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CONE/real_time",
            "value": 20.479793060228854,
            "unit": "us/iter",
            "extra": "iterations: 35102\ncpu: 20.47965902227718 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_SPHERE/real_time",
            "value": 0.7946756015193767,
            "unit": "us/iter",
            "extra": "iterations: 860488\ncpu: 0.7945427838621976 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CAPSULE/real_time",
            "value": 0.7668439113070681,
            "unit": "us/iter",
            "extra": "iterations: 941721\ncpu: 0.7668483202561879 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CYLINDER/real_time",
            "value": 26.208757300803516,
            "unit": "us/iter",
            "extra": "iterations: 27223\ncpu: 26.204091136170977 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_BOX/real_time",
            "value": 7.7949863191325806,
            "unit": "us/iter",
            "extra": "iterations: 89468\ncpu: 7.79440421156161 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CONE/real_time",
            "value": 22.68385160984067,
            "unit": "us/iter",
            "extra": "iterations: 31680\ncpu: 22.68100025252565 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_SPHERE/real_time",
            "value": 27.048255879844216,
            "unit": "us/iter",
            "extra": "iterations: 24703\ncpu: 27.04777832651928 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CAPSULE/real_time",
            "value": 26.833398455117194,
            "unit": "us/iter",
            "extra": "iterations: 27057\ncpu: 26.82884185238551 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CYLINDER/real_time",
            "value": 5.232871540179133,
            "unit": "us/iter",
            "extra": "iterations: 128258\ncpu: 5.23259654758399 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_BOX_BOX/real_time",
            "value": 4.252470841808412,
            "unit": "us/iter",
            "extra": "iterations: 160761\ncpu: 4.25205908771401 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_BOX_CONE/real_time",
            "value": 7.301539474464159,
            "unit": "us/iter",
            "extra": "iterations: 84067\ncpu: 7.300614069730174 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_BOX_SPHERE/real_time",
            "value": 1.4114786716912564,
            "unit": "us/iter",
            "extra": "iterations: 475823\ncpu: 1.4113740151275045 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_BOX_CAPSULE/real_time",
            "value": 1.507031773007966,
            "unit": "us/iter",
            "extra": "iterations: 460737\ncpu: 1.5068026162430797 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_BOX_CYLINDER/real_time",
            "value": 6.907036418255024,
            "unit": "us/iter",
            "extra": "iterations: 97863\ncpu: 6.907077434781153 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CONE_BOX/real_time",
            "value": 7.810409930584525,
            "unit": "us/iter",
            "extra": "iterations: 90186\ncpu: 7.810369480850585 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CONE_CONE/real_time",
            "value": 42.54623730678018,
            "unit": "us/iter",
            "extra": "iterations: 16367\ncpu: 42.54642848414534 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CONE_SPHERE/real_time",
            "value": 4.119227788831289,
            "unit": "us/iter",
            "extra": "iterations: 169363\ncpu: 4.118319479461285 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CONE_CAPSULE/real_time",
            "value": 20.466564274903828,
            "unit": "us/iter",
            "extra": "iterations: 34368\ncpu: 20.46666163291375 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CONE_CYLINDER/real_time",
            "value": 22.43552132717284,
            "unit": "us/iter",
            "extra": "iterations: 30923\ncpu: 22.434359182486066 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_SPHERE_BOX/real_time",
            "value": 1.478019550173369,
            "unit": "us/iter",
            "extra": "iterations: 480763\ncpu: 1.4779990452676284 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_SPHERE_CONE/real_time",
            "value": 3.8065780079838376,
            "unit": "us/iter",
            "extra": "iterations: 181866\ncpu: 3.8060263050818426 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_SPHERE_SPHERE/real_time",
            "value": 0.7326373610602475,
            "unit": "us/iter",
            "extra": "iterations: 947714\ncpu: 0.7326414593432369 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_SPHERE_CAPSULE/real_time",
            "value": 0.7842080097399796,
            "unit": "us/iter",
            "extra": "iterations: 908419\ncpu: 0.7841977413506396 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_SPHERE_CYLINDER/real_time",
            "value": 24.692486207862377,
            "unit": "us/iter",
            "extra": "iterations: 28422\ncpu: 24.689487228203472 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CAPSULE_BOX/real_time",
            "value": 1.6186584609240215,
            "unit": "us/iter",
            "extra": "iterations: 425840\ncpu: 1.6186634674995084 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CONE/real_time",
            "value": 20.165022884303998,
            "unit": "us/iter",
            "extra": "iterations: 36182\ncpu: 20.161663617267916 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CAPSULE_SPHERE/real_time",
            "value": 0.7446774862499124,
            "unit": "us/iter",
            "extra": "iterations: 888728\ncpu: 0.7446805321763132 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CAPSULE/real_time",
            "value": 0.7383232516738374,
            "unit": "us/iter",
            "extra": "iterations: 953183\ncpu: 0.7383123859741395 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CYLINDER/real_time",
            "value": 24.188218785000583,
            "unit": "us/iter",
            "extra": "iterations: 28576\ncpu: 24.188073558231068 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CYLINDER_BOX/real_time",
            "value": 7.462854508957991,
            "unit": "us/iter",
            "extra": "iterations: 94157\ncpu: 7.462655564642177 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CONE/real_time",
            "value": 20.877732004562755,
            "unit": "us/iter",
            "extra": "iterations: 34217\ncpu: 20.87467714878574 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CYLINDER_SPHERE/real_time",
            "value": 26.325254076849582,
            "unit": "us/iter",
            "extra": "iterations: 27043\ncpu: 26.32534907369709 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CAPSULE/real_time",
            "value": 25.230059992900042,
            "unit": "us/iter",
            "extra": "iterations: 28220\ncpu: 25.226555457122753 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CYLINDER/real_time",
            "value": 5.288796446970227,
            "unit": "us/iter",
            "extra": "iterations: 130649\ncpu: 5.288508775421185 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_BOX_BOX/real_time",
            "value": 0.2001728030063979,
            "unit": "us/iter",
            "extra": "iterations: 3439564\ncpu: 0.20014083238457098 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_BOX_CONE/real_time",
            "value": 3.1203943012225412,
            "unit": "us/iter",
            "extra": "iterations: 219591\ncpu: 3.1204092790687783 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_BOX_SPHERE/real_time",
            "value": 1.2701035462662582,
            "unit": "us/iter",
            "extra": "iterations: 552835\ncpu: 1.2698725985149573 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_BOX_CAPSULE/real_time",
            "value": 1.3573179298860707,
            "unit": "us/iter",
            "extra": "iterations: 512764\ncpu: 1.3572979070293987 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_BOX_CYLINDER/real_time",
            "value": 2.3547879222131294,
            "unit": "us/iter",
            "extra": "iterations: 295882\ncpu: 2.3544019845750177 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CONE_BOX/real_time",
            "value": 3.9046975354148588,
            "unit": "us/iter",
            "extra": "iterations: 179016\ncpu: 3.9044832473074376 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CONE_CONE/real_time",
            "value": 3.846014756266565,
            "unit": "us/iter",
            "extra": "iterations: 185345\ncpu: 3.8455612991987222 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CONE_SPHERE/real_time",
            "value": 2.6107550884417394,
            "unit": "us/iter",
            "extra": "iterations: 270122\ncpu: 2.6106178948770595 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CONE_CAPSULE/real_time",
            "value": 4.45959604652626,
            "unit": "us/iter",
            "extra": "iterations: 155357\ncpu: 4.458635832308823 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CONE_CYLINDER/real_time",
            "value": 5.688376430032198,
            "unit": "us/iter",
            "extra": "iterations: 124735\ncpu: 5.68841849520984 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_SPHERE_BOX/real_time",
            "value": 1.307316470425432,
            "unit": "us/iter",
            "extra": "iterations: 535396\ncpu: 1.3071487814627158 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_SPHERE_CONE/real_time",
            "value": 2.2183135095153017,
            "unit": "us/iter",
            "extra": "iterations: 314941\ncpu: 2.2182722128907124 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_SPHERE_SPHERE/real_time",
            "value": 0.7903829144647888,
            "unit": "us/iter",
            "extra": "iterations: 892006\ncpu: 0.7903554561291976 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_SPHERE_CAPSULE/real_time",
            "value": 0.7992772681717517,
            "unit": "us/iter",
            "extra": "iterations: 872134\ncpu: 0.7991965259925747 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_SPHERE_CYLINDER/real_time",
            "value": 3.5047169394568867,
            "unit": "us/iter",
            "extra": "iterations: 198749\ncpu: 3.504731072860731 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CAPSULE_BOX/real_time",
            "value": 1.4837151311620371,
            "unit": "us/iter",
            "extra": "iterations: 474643\ncpu: 1.4834402361353727 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CAPSULE_CONE/real_time",
            "value": 4.044671780031376,
            "unit": "us/iter",
            "extra": "iterations: 175227\ncpu: 4.044574335005428 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CAPSULE_SPHERE/real_time",
            "value": 0.8350324415452531,
            "unit": "us/iter",
            "extra": "iterations: 853566\ncpu: 0.8349099202639146 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CAPSULE_CAPSULE/real_time",
            "value": 0.8056069458388434,
            "unit": "us/iter",
            "extra": "iterations: 857607\ncpu: 0.8056123725669136 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CAPSULE_CYLINDER/real_time",
            "value": 2.219741048300397,
            "unit": "us/iter",
            "extra": "iterations: 315024\ncpu: 2.219350598684518 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CYLINDER_BOX/real_time",
            "value": 2.030656753336181,
            "unit": "us/iter",
            "extra": "iterations: 346066\ncpu: 2.030664682459362 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CYLINDER_CONE/real_time",
            "value": 5.357829891685151,
            "unit": "us/iter",
            "extra": "iterations: 128330\ncpu: 5.357792456946922 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CYLINDER_SPHERE/real_time",
            "value": 3.547341859733694,
            "unit": "us/iter",
            "extra": "iterations: 197426\ncpu: 3.5472909140639866 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CYLINDER_CAPSULE/real_time",
            "value": 2.2035870811672176,
            "unit": "us/iter",
            "extra": "iterations: 303820\ncpu: 2.2035686294516315 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CYLINDER_CYLINDER/real_time",
            "value": 2.9322637705211525,
            "unit": "us/iter",
            "extra": "iterations: 237373\ncpu: 2.932278464694835 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_BOX_BOX/real_time",
            "value": 0.2100239684579198,
            "unit": "us/iter",
            "extra": "iterations: 3366925\ncpu: 0.21001728105021933 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_BOX_CONE/real_time",
            "value": 3.131385389630831,
            "unit": "us/iter",
            "extra": "iterations: 221158\ncpu: 3.1313493339603578 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_BOX_SPHERE/real_time",
            "value": 1.2161451582488552,
            "unit": "us/iter",
            "extra": "iterations: 567429\ncpu: 1.216126607910379 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_BOX_CAPSULE/real_time",
            "value": 1.3374715334354759,
            "unit": "us/iter",
            "extra": "iterations: 528304\ncpu: 1.3373953273115835 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_BOX_CYLINDER/real_time",
            "value": 2.313394902444994,
            "unit": "us/iter",
            "extra": "iterations: 310031\ncpu: 2.3134083688406135 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CONE_BOX/real_time",
            "value": 3.8531729273335262,
            "unit": "us/iter",
            "extra": "iterations: 180492\ncpu: 3.852978558606408 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CONE_CONE/real_time",
            "value": 3.643095763494073,
            "unit": "us/iter",
            "extra": "iterations: 189425\ncpu: 3.643111833179299 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CONE_SPHERE/real_time",
            "value": 2.4715932334914146,
            "unit": "us/iter",
            "extra": "iterations: 283514\ncpu: 2.4716045592104012 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CONE_CAPSULE/real_time",
            "value": 4.202365621981171,
            "unit": "us/iter",
            "extra": "iterations: 165600\ncpu: 4.20205983091789 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CONE_CYLINDER/real_time",
            "value": 5.524723200350822,
            "unit": "us/iter",
            "extra": "iterations: 124274\ncpu: 5.524240428408388 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_SPHERE_BOX/real_time",
            "value": 1.2099159323027653,
            "unit": "us/iter",
            "extra": "iterations: 579640\ncpu: 1.2099221741080621 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_SPHERE_CONE/real_time",
            "value": 2.0568326941147035,
            "unit": "us/iter",
            "extra": "iterations: 340520\ncpu: 2.056432702924956 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_SPHERE_SPHERE/real_time",
            "value": 0.7106398569044441,
            "unit": "us/iter",
            "extra": "iterations: 989826\ncpu: 0.710643322159659 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_SPHERE_CAPSULE/real_time",
            "value": 0.7466922534344722,
            "unit": "us/iter",
            "extra": "iterations: 932865\ncpu: 0.7466742165265073 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_SPHERE_CYLINDER/real_time",
            "value": 3.276542383019637,
            "unit": "us/iter",
            "extra": "iterations: 195609\ncpu: 3.2765570193601676 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CAPSULE_BOX/real_time",
            "value": 1.4284049602034208,
            "unit": "us/iter",
            "extra": "iterations: 503810\ncpu: 1.4283976260892495 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CAPSULE_CONE/real_time",
            "value": 3.7416564946633692,
            "unit": "us/iter",
            "extra": "iterations: 180987\ncpu: 3.7415939818882205 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CAPSULE_SPHERE/real_time",
            "value": 0.7504617874108492,
            "unit": "us/iter",
            "extra": "iterations: 927901\ncpu: 0.7504473289715177 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CAPSULE_CAPSULE/real_time",
            "value": 0.740883833549849,
            "unit": "us/iter",
            "extra": "iterations: 932963\ncpu: 0.7408874596312772 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CAPSULE_CYLINDER/real_time",
            "value": 2.1181562391874698,
            "unit": "us/iter",
            "extra": "iterations: 341054\ncpu: 2.1181239158608642 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CYLINDER_BOX/real_time",
            "value": 1.8973698509508357,
            "unit": "us/iter",
            "extra": "iterations: 371355\ncpu: 1.897358815688527 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CYLINDER_CONE/real_time",
            "value": 5.023653880002712,
            "unit": "us/iter",
            "extra": "iterations: 100000\ncpu: 5.023690300000112 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CYLINDER_SPHERE/real_time",
            "value": 3.3417258630735045,
            "unit": "us/iter",
            "extra": "iterations: 209078\ncpu: 3.341378045514181 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CYLINDER_CAPSULE/real_time",
            "value": 2.1652820250967384,
            "unit": "us/iter",
            "extra": "iterations: 340764\ncpu: 2.165250789402703 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CYLINDER_CYLINDER/real_time",
            "value": 2.7915062562569073,
            "unit": "us/iter",
            "extra": "iterations: 246713\ncpu: 2.7915243379959667 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_BOX_BOX/real_time",
            "value": 0.2040397438941031,
            "unit": "us/iter",
            "extra": "iterations: 3480434\ncpu: 0.2040285651157333 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_BOX_CONE/real_time",
            "value": 3.042878030303156,
            "unit": "us/iter",
            "extra": "iterations: 232320\ncpu: 3.042627772038601 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_BOX_SPHERE/real_time",
            "value": 1.2193337694011022,
            "unit": "us/iter",
            "extra": "iterations: 569483\ncpu: 1.2191766602339216 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_BOX_CAPSULE/real_time",
            "value": 1.2699041648566853,
            "unit": "us/iter",
            "extra": "iterations: 566118\ncpu: 1.2698953221766252 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_BOX_CYLINDER/real_time",
            "value": 2.1864141306352955,
            "unit": "us/iter",
            "extra": "iterations: 318641\ncpu: 2.1862391688452387 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CONE_BOX/real_time",
            "value": 3.6206479405196723,
            "unit": "us/iter",
            "extra": "iterations: 194345\ncpu: 3.6204004939669376 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CONE_CONE/real_time",
            "value": 3.578903262698429,
            "unit": "us/iter",
            "extra": "iterations: 189751\ncpu: 3.578741287265994 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CONE_SPHERE/real_time",
            "value": 2.470428908796169,
            "unit": "us/iter",
            "extra": "iterations: 296837\ncpu: 2.470441050138585 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CONE_CAPSULE/real_time",
            "value": 4.099946558925093,
            "unit": "us/iter",
            "extra": "iterations: 169046\ncpu: 4.099960915963659 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CONE_CYLINDER/real_time",
            "value": 5.119366109682892,
            "unit": "us/iter",
            "extra": "iterations: 137945\ncpu: 5.119320018848094 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_SPHERE_BOX/real_time",
            "value": 1.2025128257572018,
            "unit": "us/iter",
            "extra": "iterations: 576925\ncpu: 1.2023680530398257 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CONE/real_time",
            "value": 2.0783444029993197,
            "unit": "us/iter",
            "extra": "iterations: 342889\ncpu: 2.0783146965927983 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_SPHERE_SPHERE/real_time",
            "value": 0.7028650247499806,
            "unit": "us/iter",
            "extra": "iterations: 941217\ncpu: 0.7027905679561851 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CAPSULE/real_time",
            "value": 0.7602492862887583,
            "unit": "us/iter",
            "extra": "iterations: 942258\ncpu: 0.7602114123732644 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CYLINDER/real_time",
            "value": 3.2086822152758248,
            "unit": "us/iter",
            "extra": "iterations: 206042\ncpu: 3.2086575067218512 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_BOX/real_time",
            "value": 1.452381694982051,
            "unit": "us/iter",
            "extra": "iterations: 490554\ncpu: 1.4522798387130065 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CONE/real_time",
            "value": 3.9882994575136466,
            "unit": "us/iter",
            "extra": "iterations: 175120\ncpu: 3.9880858953860785 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_SPHERE/real_time",
            "value": 0.8177173683611592,
            "unit": "us/iter",
            "extra": "iterations: 862246\ncpu: 0.8177108157068881 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CAPSULE/real_time",
            "value": 0.8033189942540634,
            "unit": "us/iter",
            "extra": "iterations: 882251\ncpu: 0.8032894731771165 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CYLINDER/real_time",
            "value": 2.2113477481047323,
            "unit": "us/iter",
            "extra": "iterations: 317799\ncpu: 2.210886840424278 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_BOX/real_time",
            "value": 2.051969132337104,
            "unit": "us/iter",
            "extra": "iterations: 347451\ncpu: 2.051460571418712 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CONE/real_time",
            "value": 5.325573358455122,
            "unit": "us/iter",
            "extra": "iterations: 131096\ncpu: 5.325253196130963 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_SPHERE/real_time",
            "value": 3.5665712497650093,
            "unit": "us/iter",
            "extra": "iterations: 190148\ncpu: 3.5665408997199903 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CAPSULE/real_time",
            "value": 2.196094943250461,
            "unit": "us/iter",
            "extra": "iterations: 319296\ncpu: 2.195708289486912 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CYLINDER/real_time",
            "value": 2.926970233839383,
            "unit": "us/iter",
            "extra": "iterations: 239097\ncpu: 2.9269143694818855 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_BOX_BOX/real_time",
            "value": 0.21313094904589105,
            "unit": "us/iter",
            "extra": "iterations: 3312548\ncpu: 0.21311653416040763 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_BOX_CONE/real_time",
            "value": 3.1543583495115577,
            "unit": "us/iter",
            "extra": "iterations: 220977\ncpu: 3.1543772202535543 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_BOX_SPHERE/real_time",
            "value": 1.2570279765487329,
            "unit": "us/iter",
            "extra": "iterations: 563043\ncpu: 1.2567975678589662 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_BOX_CAPSULE/real_time",
            "value": 1.3653787373590187,
            "unit": "us/iter",
            "extra": "iterations: 491858\ncpu: 1.3653833443799088 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_BOX_CYLINDER/real_time",
            "value": 2.346690446264407,
            "unit": "us/iter",
            "extra": "iterations: 298365\ncpu: 2.346705200006779 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CONE_BOX/real_time",
            "value": 3.861189502280301,
            "unit": "us/iter",
            "extra": "iterations: 181106\ncpu: 3.8612114397094754 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CONE_CONE/real_time",
            "value": 3.776284297619031,
            "unit": "us/iter",
            "extra": "iterations: 185042\ncpu: 3.776016104452021 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CONE_SPHERE/real_time",
            "value": 2.629967284792008,
            "unit": "us/iter",
            "extra": "iterations: 267368\ncpu: 2.629827354058873 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CONE_CAPSULE/real_time",
            "value": 4.4930449210706955,
            "unit": "us/iter",
            "extra": "iterations: 155584\ncpu: 4.492153087720804 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CONE_CYLINDER/real_time",
            "value": 5.700727398338512,
            "unit": "us/iter",
            "extra": "iterations: 117967\ncpu: 5.700389320742382 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_SPHERE_BOX/real_time",
            "value": 1.3393339169002227,
            "unit": "us/iter",
            "extra": "iterations: 520363\ncpu: 1.3393220578711629 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_SPHERE_CONE/real_time",
            "value": 2.1992489420405694,
            "unit": "us/iter",
            "extra": "iterations: 298688\ncpu: 2.199263663086512 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_SPHERE_SPHERE/real_time",
            "value": 0.7955017658041976,
            "unit": "us/iter",
            "extra": "iterations: 879486\ncpu: 0.7955058682003537 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_SPHERE_CAPSULE/real_time",
            "value": 0.8284751591247966,
            "unit": "us/iter",
            "extra": "iterations: 838336\ncpu: 0.8284802072200481 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_SPHERE_CYLINDER/real_time",
            "value": 3.5151332406322666,
            "unit": "us/iter",
            "extra": "iterations: 199211\ncpu: 3.5149227000516867 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CAPSULE_BOX/real_time",
            "value": 1.497727722656611,
            "unit": "us/iter",
            "extra": "iterations: 469771\ncpu: 1.4974584999926324 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CONE/real_time",
            "value": 3.9749793236106234,
            "unit": "us/iter",
            "extra": "iterations: 174692\ncpu: 3.9749439184393025 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CAPSULE_SPHERE/real_time",
            "value": 0.8104832769428009,
            "unit": "us/iter",
            "extra": "iterations: 878697\ncpu: 0.8104451750716863 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CAPSULE/real_time",
            "value": 0.8086417332765388,
            "unit": "us/iter",
            "extra": "iterations: 844343\ncpu: 0.808646881658265 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CYLINDER/real_time",
            "value": 2.1892242042814183,
            "unit": "us/iter",
            "extra": "iterations: 316506\ncpu: 2.188965191813095 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CYLINDER_BOX/real_time",
            "value": 1.9801086773621797,
            "unit": "us/iter",
            "extra": "iterations: 352999\ncpu: 1.9801175159135733 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CONE/real_time",
            "value": 5.078426205681035,
            "unit": "us/iter",
            "extra": "iterations: 134841\ncpu: 5.078399070015753 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CYLINDER_SPHERE/real_time",
            "value": 3.454498336037364,
            "unit": "us/iter",
            "extra": "iterations: 197120\ncpu: 3.454513590706176 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CAPSULE/real_time",
            "value": 2.1411496283665383,
            "unit": "us/iter",
            "extra": "iterations: 329356\ncpu: 2.1410852421089035 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CYLINDER/real_time",
            "value": 2.8381851861106107,
            "unit": "us/iter",
            "extra": "iterations: 240018\ncpu: 2.838028043730105 us\nthreads: undefined"
          },
          {
            "name": "BM_SELECT_RANDOM_OBJECT/real_time",
            "value": 11.585721697449388,
            "unit": "ns/iter",
            "extra": "iterations: 62011657\ncpu: 11.585781637797558 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_2/real_time",
            "value": 45.865057257689635,
            "unit": "ns/iter",
            "extra": "iterations: 15432953\ncpu: 45.864515430066355 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_4/real_time",
            "value": 54.97928948820367,
            "unit": "ns/iter",
            "extra": "iterations: 12485592\ncpu: 54.978192223483425 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_8/real_time",
            "value": 64.20528154731538,
            "unit": "ns/iter",
            "extra": "iterations: 10891846\ncpu: 64.19897976890094 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_16/real_time",
            "value": 75.80544746647769,
            "unit": "ns/iter",
            "extra": "iterations: 8956090\ncpu: 75.80576110779985 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_32/real_time",
            "value": 83.25602376430687,
            "unit": "ns/iter",
            "extra": "iterations: 8516311\ncpu: 83.25018426405641 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_64/real_time",
            "value": 98.17481712376852,
            "unit": "ns/iter",
            "extra": "iterations: 6811438\ncpu: 98.16289805470679 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_128/real_time",
            "value": 114.7297009602974,
            "unit": "ns/iter",
            "extra": "iterations: 6190884\ncpu: 114.73011366389419 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_256/real_time",
            "value": 128.6299484517153,
            "unit": "ns/iter",
            "extra": "iterations: 5450619\ncpu: 128.622828893385 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_512/real_time",
            "value": 146.44424224839395,
            "unit": "ns/iter",
            "extra": "iterations: 4711049\ncpu: 146.4447907461824 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_2/real_time",
            "value": 59.504700499450216,
            "unit": "ns/iter",
            "extra": "iterations: 11622382\ncpu: 59.50495767563188 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_4/real_time",
            "value": 69.354882763563,
            "unit": "ns/iter",
            "extra": "iterations: 10185482\ncpu: 69.34922804831491 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_8/real_time",
            "value": 79.42380625615544,
            "unit": "ns/iter",
            "extra": "iterations: 8692715\ncpu: 79.42216913818184 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_16/real_time",
            "value": 89.15386674248876,
            "unit": "ns/iter",
            "extra": "iterations: 8017873\ncpu: 89.14829431695752 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_32/real_time",
            "value": 98.90580955241245,
            "unit": "ns/iter",
            "extra": "iterations: 7036308\ncpu: 98.90621786311425 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_64/real_time",
            "value": 112.45295056952,
            "unit": "ns/iter",
            "extra": "iterations: 6472225\ncpu: 112.45345920452591 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_128/real_time",
            "value": 131.9544519715787,
            "unit": "ns/iter",
            "extra": "iterations: 5524586\ncpu: 131.95504658629943 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_256/real_time",
            "value": 137.62805264341299,
            "unit": "ns/iter",
            "extra": "iterations: 4992763\ncpu: 137.62723185538633 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_512/real_time",
            "value": 151.54233019647177,
            "unit": "ns/iter",
            "extra": "iterations: 4628717\ncpu: 151.53568364624638 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_2/real_time",
            "value": 95.17841657972305,
            "unit": "ns/iter",
            "extra": "iterations: 6761894\ncpu: 95.17330809976612 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_4/real_time",
            "value": 168.61606315487185,
            "unit": "ns/iter",
            "extra": "iterations: 4271278\ncpu: 168.6008878373209 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_8/real_time",
            "value": 316.4734836500407,
            "unit": "ns/iter",
            "extra": "iterations: 2161572\ncpu: 316.4557770918428 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_16/real_time",
            "value": 677.7843096792101,
            "unit": "ns/iter",
            "extra": "iterations: 1085408\ncpu: 677.7240576815392 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_32/real_time",
            "value": 1543.8370926703635,
            "unit": "ns/iter",
            "extra": "iterations: 447242\ncpu: 1543.8415913532351 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_64/real_time",
            "value": 3308.573557858285,
            "unit": "ns/iter",
            "extra": "iterations: 206776\ncpu: 3308.5847003521158 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_128/real_time",
            "value": 8678.874307621318,
            "unit": "ns/iter",
            "extra": "iterations: 79798\ncpu: 8678.906651795916 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_256/real_time",
            "value": 23730.833361142963,
            "unit": "ns/iter",
            "extra": "iterations: 29969\ncpu: 23730.20668023576 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_512/real_time",
            "value": 59165.00320004162,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59161.05200000174 ns\nthreads: undefined"
          }
        ]
      }
    ]
  }
}