var app = angular.module("financialSquawk");
	
	app.controller("explore_stocksCtrl", function($scope, explore_stocksService) {

        $scope.init = function(ticker) {
            explore_stocksService.getTicker(ticker)
            .then(function(getTickerResultData) {
                console.log('service data: ', getTickerResultData);
                $scope.tickerGraph = c3.generate({
                    bindto: '#tickerGraph',
                    data: {
                        json: getTickerResultData,
                        keys: {
                            x: 'year',
                            value: ['totalassets', 'commonstock']
                        },
                        type: 'spline',
                        xFormat: '%Y'
                    },
                    axis: {
                        x: {
                            type: 'timeseries',
                            tick: {
                                format: '%Y'
                            }
                        }
                    },
                    padding: {
                        right: 10
                    }
                });
            });
        };

        $scope.enterTicker = function(ticker) {
            $scope.init(ticker)
        }
        // $scope.getTickerData = function(ticker) { //ticker is a placeholder for selected which is on my homeCtrl
        //     console.log('main_homeCtrl: ', ticker);
        // explore_stocksService.getTicker(ticker).then(function(data) {

            

            //returning promise which is .then, data is what htttp is going to get
            //$scope.showData = true;

            // $scope.tickerArray = data;
            //     console.log(tickerArray);
            //     console.log("data", data[0]);
               
        //     var totalAssets = function(arr) {
        //         var ta = ["Total Assets"]
        //         for (var i = 0; i < arr.length; i++) {
        //             ta.push(+(arr[i].totalassets));
        //         }
        //         console.log(ta);
        //         return ta;
        //     };
        //     $scope.totalAssets = totalAssets(data);
        // });
        //     $scope.totalAssets = data.map(function(i) {
        //         var ta = ["Total Assets"];
        //         ta.push(i.totalassets)
        //     })
        // };

        //$scope.showData = false;

        //AUTOCOMPLETE
		$scope.selected = undefined;
  		$scope.tickers = [

    "AUB.AX",

    "GLRE",

    "SFG",

    "AMIC",

    "GTS",

    "LRE.L",

    "EIG",

    "AIZ",

    "NHF.AX",

    "PRA",

    "TRUP",

    "AFL",

    "MIC.TO",

    "CNO",

    "UNM",

    "FAC",

    "SCRI",

    "DCS.MU",

    "XM8.F",

    "XBTC",

    "VISN",

    "QXQ.AX",

    "VEND",

    "DNAX",

    "IPG",

    "YUME",

    "PUB.PA",

    "MSHF",

    "SAX.BE",

    "TRS.L",

    "IDI",

    "CL2.SG",

    "XM8.SG",

    "0205.HK",

    "DEN.DU",

    "RVUE",

    "PHRM.L",

    "RLOC",

    "DCS.SG",

    "OMC",

    "DEC.PA",

    "CNET",

    "FUEL",

    "NMED",

    "SZMK",

    "SPN.V",

    "KITM",

    "WPP.L",

    "Y07.SI",

    "ZCNV.PA",

    "NOC",

    "MTX.DE",

    "RTN1.SG",

    "EAD.DE",

    "QY6.SG",

    "NTH.BE",

    "EAD.PA",

    "SWS.SG",

    "EOS.AX",

    "MAL.TO",

    "BA.L",

    "RR.L",

    "UEH.F",

    "NTH.DU",

    "MTX.F",

    "ZC.PA",

    "ZDC.BE",

    "QQ.L",

    "S51.SI",

    "EMRI",

    "EAC",

    "SDZ.V",

    "QHL.AX",

    "TIK",

    "B8O.F",

    "SDSS",

    "ZDC.F",

    "GDX.DU",

    "LAT.PA",

    "A04.SI",

    "S63.SI",

    "SAF.PA",

    "MGGT.L",

    "SNR.L",

    "ZDC.DU",

    "TXT",

    "BBD-B.TO",

    "GY",

    "SWS.BE",

    "HXL.PA",

    "ZDC.MU",

    "MICT",

    "FTG.TO",

    "BS6.SI",

    "ERJ",

    "TPAC",

    "COL",

    "TGI",

    "DCO",

    "UTX",

    "ESL",

    "TATT",

    "CVU",

    "MLER",

    "AIR",

    "BEAV",

    "HII",

    "SPR",

    "XLS",

    "TASR",

    "PIVN",

    "AIRI",

    "LMIA",

    "AVAV",

    "RGR",

    "HEI",

    "SWHC",

    "ATK",

    "GR.V",

    "DGI",

    "OKRG",

    "GD",

    "BUKS",

    "BZC",

    "ORB",

    "WWD",

    "BEA.V",

    "ATRO",

    "ISSC",

    "CAE",

    "ASTC",

    "BA",

    "TDG",

    "ACFN",

    "MOG-A",

    "HEI-A",

    "LMT",

    "HXL",

    "RTN",

    "KAMN",

    "LLL",

    "NPK",

    "CERE",

    "MAA.TO",

    "MOS",

    "MBII",

    "SMG",

    "AVD",

    "POT.TO",

    "MON",

    "RCF.NS",

    "AGU",

    "SYT",

    "CF",

    "FF5.MU",

    "XCLIND.BO",

    "NOEC",

    "1073.HK",

    "POC.MU",

    "WCQ1.F",

    "FF5.BE",

    "MEGH.NS",

    "ST.TO",

    "XCLCROP.BO",

    "POT",

    "NUF.AX",

    "CVAT",

    "POTN.MX",

    "GRVO.PA",

    "0809.HK",

    "RNF",

    "IPI",

    "DD",

    "X6S.SG",

    "IPL.AX",

    "FF5.SG",

    "AGU.TO",

    "FF5.F",

    "ICP.TO",

    "KRN.TO",

    "X6S.F",

    "GROG",

    "E6R.F",

    "NFL.BO",

    "GOP.V",

    "UAN",

    "YONGY",

    "MGO.TO",

    "MBC.TO",

    "TNH",

    "X6S.MU",

    "CGA",

    "JLWT",

    "EXPD",

    "JB1.MU",

    "UTW1.BE",

    "EW1.MU",

    "SINO",

    "AIRT",

    "FWRD",

    "GPW.V",

    "GND.PA",

    "NS8U.SI",

    "RRTS",

    "WNL.F",

    "NRINTER.BO",

    "CGOA.SG",

    "CNR",

    "TOL.AX",

    "XUN.SG",

    "P01.SI",

    "PVI.V",

    "XJL.F",

    "FRE.NZ",

    "K11.SI",

    "DPW.DE",

    "KPL.F",

    "KSC.AX",

    "MLNK",

    "MFT.NZ",

    "JB1.BE",

    "QUB.AX",

    "UPS",

    "JB1.F",

    "RLGT",

    "XPO",

    "HUBG",

    "ATSG",

    "CHRW",

    "UTIW",

    "XUN.F",

    "WGI.V",

    "RMG.L",

    "CONCOR.NS",

    "FDX",

    "0494.HK",

    "XUN.MU",

    "0885.HK",

    "MIC",

    "KLH.F",

    "JAGSONAI.BO",

    "FLW.DU",

    "W7L.SG",

    "W1J.SG",

    "ASR",

    "UZA.BE",

    "BBA.L",

    "UZA.F",

    "CJT.TO",

    "SKAS",

    "OMAB.MX",

    "TX3.BE",

    "W7L.F",

    "MLAAE.PA",

    "UZA.SG",

    "AAWW",

    "PAC",

    "PHII",

    "FLW.F",

    "AER",

    "PJT.V",

    "KFA.NS",

    "AIRM",

    "AIR.NZ",

    "ACH",

    "ORT.TO",

    "WMC.MU",

    "WMC.SG",

    "KLU1.SG",

    "K3HD.SI",

    "0CZ.F",

    "NOH1.DE",

    "R6L.SG",

    "4H6.BE",

    "NOR",

    "5EN.SI",

    "ACHN.MX",

    "1333.HK",

    "0486.HK",

    "HINDALCO.NS",

    "HINDALCO.BO",

    "AA",

    "MN5.SI",

    "CENX",

    "RUSAL.PA",

    "4H6.F",

    "NATIONALU.NS",

    "KALU",

    "0647.HK",

    "NXT.L",

    "CHS",

    "GPS.V",

    "GCO",

    "CBK",

    "MW",

    "VCH.MU",

    "SFH.AX",

    "GES",

    "URBN",

    "NXG.SG",

    "RET-A.TO",

    "O08.SI",

    "DSW",

    "IXD.SG",

    "1368.HK",

    "CATO",

    "ANN",

    "PLCE",

    "AEO",

    "GPS",

    "CHKE",

    "LB",

    "NWY",

    "SMRT",

    "ARO",

    "0238.HK",

    "4QI.F",

    "ULC.DE",

    "RSO.SG",

    "GMAN",

    "BEBE",

    "ASNA",

    "IXD.MU",

    "WTSL",

    "JYE.F",

    "KMD.AX",

    "YC8.F",

    "BKE",

    "DXLG",

    "EXPR",

    "ROST",

    "SSI",

    "ANF",

    "PSUN",

    "SCVL",

    "FRAN",

    "DEST",

    "TLYS",

    "BODY",

    "TTI.F",

    "JWN",

    "CTRN",

    "LUX",

    "IXD.DE",

    "CTU-A.TO",

    "CACH",

    "IRBT",

    "WHR",

    "AVRN",

    "IMMR",

    "EXNT",

    "PWEB",

    "RALY",

    "QADA",

    "MATR",

    "BNFT",

    "DWRE",

    "SQI",

    "CRM",

    "MBLY",

    "CHYR",

    "FALC",

    "FIVN",

    "VPIG",

    "OPWR",

    "CDK",

    "SSNT",

    "BIRT",

    "TXTR",

    "MEDA",

    "CMCM",

    "RP",

    "BSQR",

    "DTVI",

    "JIVE",

    "PRO",

    "FTNT",

    "UPIP",

    "FXIT",

    "DATA",

    "IMPV",

    "ORCL",

    "TISA",

    "BGNN",

    "SOFO",

    "ELLI",

    "TUBE",

    "XFCH",

    "MITK",

    "SNCR",

    "UPLD",

    "ACTA",

    "GOMO",

    "CTRX",

    "GLSO",

    "MOBL",

    "EXA",

    "STMP",

    "DTSI",

    "WNYN",

    "SWI",

    "AGYS",

    "SYNA",

    "GSB",

    "MOBI",

    "ZEN",

    "MUSS",

    "BLIN",

    "AMSWA",

    "GUID",

    "CATI",

    "SAP",

    "EIGI",

    "RNG",

    "MGIC",

    "MODN",

    "SRNA",

    "SAAX",

    "CVLT",

    "TYPE",

    "ADVS",

    "FLTX",

    "SLH",

    "EOPN",

    "PRGS",

    "EFUT",

    "CVT",

    "PCTY",

    "COVS",

    "CSOD",

    "MEDL",

    "ANSS",

    "AMAP",

    "LOCK",

    "FNJN",

    "BCOV",

    "PRLS",

    "MDRX",

    "ATEA",

    "SPSC",

    "VSMR",

    "BV",

    "PLUS",

    "MDSY",

    "ISNS",

    "MKTO",

    "CDNS",

    "NSIT",

    "CNIT",

    "EGOV",

    "AWRE",

    "ZIXI",

    "OTEX",

    "NQ",

    "CPWR",

    "FEYE",

    "TIGR",

    "SAAS",

    "AVG",

    "QLYS",

    "MANH",

    "MSTR",

    "APPO",

    "NUAN",

    "LYRI",

    "AVOI",

    "WDDD",

    "PFPT",

    "TSYS",

    "MTLS",

    "SEAC",

    "NTWK",

    "RUBI",

    "RHT",

    "MSCI",

    "ECOM",

    "MRIN",

    "CSLT",

    "LIQD",

    "SMSI",

    "HUBS",

    "AMBR",

    "STV",

    "KEYW",

    "TWOU",

    "OHGI",

    "RST",

    "XNET",

    "EAHC",

    "BSFT",

    "SPLK",

    "EPAZ",

    "IDN",

    "VMCI",

    "JNGW",

    "VCSY",

    "ARIS",

    "PAR",

    "LXFT",

    "ADBE",

    "DAEG",

    "WDAY",

    "LOGM",

    "YDLE",

    "XCLL",

    "INTU",

    "DPSI",

    "PAYC",

    "M6O.F",

    "BK",

    "JAN.DU",

    "4WM.DE",

    "MCGC",

    "FIG",

    "IHJ.MU",

    "WILLAMAGO.NS",

    "M3B.BE",

    "WHG",

    "AWN.AX",

    "XEK.MU",

    "XYM.TO",

    "WETF",

    "L1O.SG",

    "AHA.AX",

    "ZOF.MU",

    "KRD.F",

    "1036.HK",

    "VRTS",

    "ACAS",

    "BRW.L",

    "OSWALAG.BO",

    "VLR-H.V",

    "WCM-B.TO",

    "AQU.AX",

    "FII",

    "FNGN",

    "GAE.V",

    "0222.HK",

    "CG",

    "MCX.NS",

    "MC",

    "VTLN.F",

    "WP.V",

    "HDJ0.MU",

    "AB",

    "A50.SI",

    "MGP.AX",

    "GLJ.DU",

    "QVE.AX",

    "MA1.F",

    "VOYA",

    "0535.HK",

    "ZCT1.SG",

    "1140.HK",

    "CNS",

    "PGC.NZ",

    "BLK",

    "HNNA",

    "K01.SI",

    "OAK",

    "KKR",

    "M.V",

    "0111.HK",

    "IV6B.DU",

    "GS.TO",

    "SMCG",

    "XEK.SG",

    "ASA",

    "XEK.F",

    "ARES",

    "TCI.V",

    "0026.HK",

    "XS3A.F",

    "0068.HK",

    "LAZ",

    "INVP.L",

    "CET",

    "SDR.L",

    "FSZ.TO",

    "ZCT1.F",

    "8088.HK",

    "HDJ0.F",

    "IFL.AX",

    "1168.HK",

    "SGE.V",

    "KADVANI.BO",

    "BX",

    "B8A.SG",

    "SEIC",

    "GBL",

    "0095.HK",

    "MBB.DE",

    "0433.HK",

    "DHIL",

    "LAQ.V",

    "BN9.DU",

    "GCP.L",

    "NFX.V",

    "AMG",

    "0191.HK",

    "MERR",

    "STT",

    "NOAH",

    "ASX.AX",

    "WCM-A.TO",

    "INNO",

    "1383.HK",

    "TCN.TO",

    "DC-PB.TO",

    "SOFR.PA",

    "RE7.SG",

    "S68.SI",

    "AMP",

    "XA6.BE",

    "PZN",

    "RCP.L",

    "ECPG",

    "APAM",

    "REXI",

    "OZM",

    "SOHL",

    "CSWC",

    "IHJ.BE",

    "RILY",

    "PJR.SG",

    "NFD-A.V",

    "TSL.BO",

    "HRZN",

    "NNS.BE",

    "GLCH",

    "FRK.F",

    "L1O.DE",

    "HDJ0.BE",

    "0766.HK",

    "0356.HK",

    "0352.HK",

    "VTLN.SG",

    "CLIG.L",

    "XA6.MU",

    "BACT.L",

    "IV6B.MU",

    "JAF.BE",

    "MN",

    "0156.HK",

    "EV",

    "NNS.SG",

    "QB7.DU",

    "0733.HK",

    "0171.HK",

    "DP.PA",

    "SCIN.L",

    "KSP-UN.TO",

    "VRNL.PA",

    "SSI.V",

    "LWDB.L",

    "0258.HK",

    "GLJ.DE",

    "BN9.SG",

    "0281.HK",

    "TPOG.L",

    "IFIC.DU",

    "FGF.V",

    "XA6.SG",

    "ICOR",

    "LSE.L",

    "IUR.DU",

    "LM",

    "WSFIN.BO",

    "ZOF.F",

    "DC-A.TO",

    "CVG.TO",

    "4WM.F",

    "IVZ",

    "YBR.AX",

    "M41.SI",

    "IAM.TO",

    "TROW",

    "JAF.DU",

    "GIMB.BR",

    "ZYA.F",

    "CIX.TO",

    "M3B.F",

    "RELCAPITAL.BO",

    "FEE1.SG",

    "RE7.F",

    "0806.HK",

    "EVR",

    "RAND",

    "XS3A.SG",

    "MLVES.PA",

    "KBCA.BR",

    "AGF-B.TO",

    "BN9.MU",

    "L1OA.DE",

    "RAF.AX",

    "0172.HK",

    "ZYA.SG",

    "SIHL.L",

    "CIFC",

    "0169.HK",

    "GROW",

    "CLMS",

    "URB-A.TO",

    "AFI.AX",

    "0021.HK",

    "JAN.MU",

    "GVHIB",

    "SFE",

    "XS3A.BE",

    "WDR",

    "LIO.L",

    "NTRS",

    "VBDESAI.BO",

    "BEN",

    "JUP.L",

    "QB7.BE",

    "JNS",

    "HGG.L",

    "0480.HK",

    "0768.HK",

    "FBRC",

    "0337.HK",

    "AGOU.L",

    "0318.HK",

    "EAL.AX",

    "KBC.AX",

    "CGF.AX",

    "GPI",

    "KMX",

    "1828.HK",

    "SAH",

    "XA4.BE",

    "LAS",

    "ABG",

    "CRMT",

    "0881.HK",

    "RUSHB",

    "PDG.L",

    "AN",

    "IZO.SG",

    "IZO.BE",

    "CPRT",

    "AUTCF",

    "1728.HK",

    "ACQ.TO",

    "XA4.F",

    "LAD",

    "T15.SI",

    "PAG",

    "CALI",

    "AHE.AX",

    "UG.PA",

    "TOM.SG",

    "TTM",

    "BUS.V",

    "TOM.MU",

    "0175.HK",

    "SUK.BE",

    "HDM.MU",

    "F",

    "VOW5.BE",

    "YMA.MU",

    "PEU.SG",

    "HYU.DE",

    "GRV.SG",

    "HMO.DU",

    "NISA.F",

    "ZM7.F",

    "PEU.DE",

    "TOM.DU",

    "GRV.MU",

    "TAH.BE",

    "RNL.BE",

    "MMO.F",

    "VOW4.DE",

    "K8A.F",

    "VOW.DE",

    "YMA.SG",

    "TYT.L",

    "CYC.SG",

    "GM",

    "HMO.MU",

    "ISU.DU",

    "C07.SI",

    "KNDI",

    "ISU.SG",

    "ZAAP",

    "PAH3.DE",

    "NSU.DU",

    "RNO.MI",

    "NISA.DU",

    "BMW3.DE",

    "NISA.BE",

    "DAI.DE",

    "HMC",

    "BMW.F",

    "RNL.DE",

    "RNO.PA",

    "TSLA",

    "MZA.SG",

    "BMWA.DE",

    "MARUTI.NS",

    "ZNN.V",

    "ZM7.DU",

    "SORL",

    "TAH.F",

    "DMO.MU",

    "VOW3.BE",

    "VOW.BE",

    "SLNN",

    "HDM.SG",

    "YMA.BE",

    "ZM7.MU",

    "VKW.L",

    "PAH3.BE",

    "VOW3.DE",

    "TM",

    "TOM.F",

    "BMW.DE",

    "PIH.TO",

    "SPCL",

    "Y08.SI",

    "MTOR",

    "ZIL2.MU",

    "LKQ",

    "MNRO",

    "ZIL2.BE",

    "SIX.AX",

    "ECAU",

    "XDH.F",

    "ACGL.BO",

    "SFQ.DE",

    "QTWW",

    "LDL",

    "WHEELS.NS",

    "GKN.L",

    "QA4A.BE",

    "TUBEINVES.NS",

    "CAAS",

    "ALV",

    "FDOC",

    "SUP",

    "VOXX",

    "XDH.SG",

    "SONASTEER.NS",

    "ZIL2.DU",

    "COTE",

    "THRM",

    "0360.HK",

    "MLR.V",

    "K3A.BE",

    "LEO.DE",

    "2339.HK",

    "SAMKRG.BO",

    "JBML.BO",

    "KINETICE.BO",

    "1899.HK",

    "DORM",

    "UQM",

    "GMM.DE",

    "MOD",

    "MLSTR.PA",

    "TRW",

    "E94.SI",

    "FARE",

    "SW1.MU",

    "TOWR",

    "AXL",

    "NGK.MU",

    "PLOW",

    "ALSN",

    "FDML",

    "ZIL2.F",

    "MGIC.PA",

    "JCI",

    "EO.PA",

    "SYPR",

    "DLPH",

    "0872.HK",

    "ZIL2.HA",

    "SRI",

    "PFTI",

    "UNS.TO",

    "LR.MI",

    "SSWL.NS",

    "TUBEINVEST.BO",

    "BWA",

    "FSYS",

    "ACW",

    "ZFSTEER.BO",

    "JAYBARMAR.NS",

    "GNTX",

    "DAN",

    "MPAA",

    "CON.DE",

    "KEWIND.BO",

    "ZX",

    "BUR.PA",

    "RANEHOLDI.NS",

    "FR.PA",

    "MIRG.BA",

    "PGN.SG",

    "TXIC",

    "CPS",

    "SMP",

    "XTC.TO",

    "QGH.F",

    "MON.PA",

    "NHK.F",

    "RANEENGIN.NS",

    "OMAX.BO",

    "SWARAJENG.NS",

    "REMY",

    "MLR",

    "JCN.BE",

    "0425.HK",

    "MRE.TO",

    "VSA.BE",

    "TOVC",

    "WBC",

    "LEA",

    "SMP.V",

    "VC",

    "ATAR",

    "WPRT",

    "WPT.TO",

    "T42.SI",

    "POM.PA",

    "DNO.MU",

    "UCALFUEL.BO",

    "JAGANLAM.BO",

    "S29.SI",

    "STEELSTR.BO",

    "STRT",

    "FCV.F",

    "TEN",

    "AZO",

    "PBY",

    "PRTS",

    "ORLY",

    "AAP",

    "HITR",

    "MGA",

    "CRV",

    "CVGI",

    "AMCO",

    "GLP",

    "ERS",

    "MALA.PA",

    "BEZ3.DU",

    "BRB.TO",

    "LBR.MU",

    "BUD",

    "LBR.F",

    "TAP",

    "VCO",

    "ABEV3.SA",

    "LPE.PA",

    "SAM",

    "UBHOLDING.NS",

    "RADICO.BO",

    "ABW.BE",

    "BORN",

    "NY7.F",

    "BEZ3.HA",

    "RB.V",

    "CCU",

    "SOMDIST.BO",

    "LPE.SG",

    "UBL.NS",

    "FMX",

    "BREW",

    "SAB.L",

    "FEMSAUBD.MX",

    "JSDA",

    "BVIC.L",

    "CCE",

    "CRVP",

    "MOJO",

    "0345.HK",

    "LBIX",

    "SODA",

    "KOFM.BA",

    "AKO-A",

    "CELH",

    "SLNR",

    "PEP",

    "COT",

    "UPNT",

    "KRED",

    "MNST",

    "LAS-A.TO",

    "KO.MX",

    "WTER",

    "NLEF",

    "KOF",

    "KO",

    "REED",

    "ELDO",

    "COKE",

    "DRNK",

    "BRFH",

    "PEP.F",

    "FIZZ",

    "SPU",

    "FBEC",

    "PRMW",

    "PEP.MX",

    "KO.BA",

    "JWI.NZ",

    "DPS",

    "AKO-B",

    "DEO",

    "DGE.L",

    "DWS.V",

    "STZ",

    "Y92.SI",

    "WVVI",

    "RI.PA",

    "ESDI",

    "GJ8.SI",

    "HAW.DE",

    "TWE.AX",

    "ADW-B.TO",

    "CTE.F",

    "BF5B.BE",

    "0886.HK",

    "GKL.V",

    "RMC.F",

    "SWA.MU",

    "ROX",

    "RCO.PA",

    "THST",

    "TQLA",

    "BF-B",

    "HAW.SG",

    "AVG.AX",

    "KHODAY.BO",

    "DKAM",

    "INO",

    "MRNA",

    "DPRX",

    "TKAI",

    "XNCR",

    "COT.V",

    "ALNY",

    "PPHM",

    "OVAS",

    "APC.V",

    "BTX",

    "IMDZ",

    "ACOR",

    "EMIS",

    "QLT.TO",

    "NBY",

    "OPHT",

    "PETX",

    "GERN",

    "ICEL",

    "HEB",

    "PIP",

    "FOMX",

    "MRNS",

    "RHO6.DE",

    "KLH.V",

    "ZFGN",

    "ZEL.F",

    "CTIX",

    "FATE",

    "IDRA",

    "ARWR",

    "PLI.TO",

    "ABIO",

    "ECYT",

    "GBIM",

    "NTB.TO",

    "ATNM",

    "APDN",

    "ENUM",

    "RELV",

    "PRTK",

    "PCYC",

    "PDLI",

    "CMRX",

    "TTHI",

    "CORT",

    "DY8.MU",

    "OXB.L",

    "CRXM",

    "AEZ.TO",

    "HMGN",

    "AST",

    "OGEN",

    "CAPS",

    "TH.TO",

    "BIIB",

    "IMMY",

    "PARD",

    "VNDA",

    "VSTM",

    "OMED",

    "CTIC.MI",

    "CYTR",

    "IMUC",

    "ZSB.SG",

    "TPIV",

    "GE9.SG",

    "36V.F",

    "TNG.PA",

    "REPH",

    "NBS",

    "XMPA.MU",

    "VPI.V",

    "RCAR",

    "ISLT",

    "XENE",

    "ORPN",

    "ARNA",

    "XOMA",

    "VTAE",

    "CBST",

    "ZIOP",

    "MGN.MU",

    "AVXL",

    "VCEL",

    "NSTG",

    "SNSS",

    "NNF1.SG",

    "KITE",

    "YTS.SG",

    "RNN",

    "RCHA",

    "QLTI",

    "FOLD",

    "PANG",

    "RGEN",

    "BMRN",

    "ALXN",

    "RPRX",

    "WL6.SG",

    "HDVY",

    "GNCA",

    "RGIN",

    "ZSB.F",

    "NDRM",

    "AGEN",

    "IMGN",

    "CLTX",

    "RGLS",

    "FPRX",

    "VCC.BE",

    "PBMD",

    "ANIK",

    "WEK.BE",

    "VODG",

    "GNVC",

    "CTIC",

    "S7E.DU",

    "VPA.F",

    "ZVA.BE",

    "LPTN",

    "EGLT",

    "ADXS",

    "CGEN",

    "XMPA.BE",

    "PLX",

    "STML",

    "OPLI",

    "TSRO",

    "DYF.F",

    "B8F.DE",

    "YDO.SG",

    "CVM",

    "SNTA",

    "JAZZ",

    "KDUS",

    "LOXO",

    "AYJ.F",

    "TBPH",

    "FWP",

    "MDG1.F",

    "WL6.DE",

    "CCXI",

    "EPRS",

    "NVAX",

    "AFMD",

    "V3V.SG",

    "XLRN",

    "ORMP",

    "NNF1.BE",

    "CANF",

    "PFNX",

    "BSTC",

    "BCLI",

    "TYCHE.BO",

    "ENTA",

    "RTGN",

    "MACK",

    "XMPA.F",

    "TROV",

    "REGN",

    "NERV",

    "TTNP",

    "QLT.SG",

    "NSP.AX",

    "MPH.V",

    "ARIA",

    "VCYT",

    "GEVA",

    "ONBI",

    "OMMH",

    "GILD",

    "SRX.AX",

    "RGDO",

    "EXAS",

    "YB4N.SG",

    "DERM",

    "OMER",

    "IG",

    "SRNE",

    "PDP.V",

    "CLVS",

    "NAVB",

    "OCUL",

    "SQNM",

    "BPMX",

    "LJPC",

    "ALDR",

    "TKM.TO",

    "OSIR",

    "ZSB.BE",

    "BTHE",

    "KERX",

    "ONTX",

    "AGTC",

    "CBLI",

    "DYAX",

    "XBX.BE",

    "OGXI",

    "RNA",

    "SGMO",

    "IBIO",

    "RXII",

    "MDWD",

    "GALE",

    "AKAO",

    "TIG.BR",

    "MLM.MI",

    "XON",

    "MNOV",

    "LGND",

    "CNCE",

    "TENX",

    "SPL.AX",

    "QURE",

    "VSTA",

    "DGJI",

    "CNWK.F",

    "GOVX",

    "CASI",

    "CALA",

    "KIN",

    "LXRX",

    "ENZN",

    "ACAD",

    "VX1.BE",

    "MFS.V",

    "PRQR",

    "BCRX",

    "EPZM",

    "TLOG",

    "WL6.BE",

    "INCY",

    "YDO.F",

    "BPH.AX",

    "CYAN",

    "CBM",

    "PBT.AX",

    "TRGT",

    "B8F.SG",

    "CLSN",

    "ONY.BE",

    "YTS.MU",

    "CLRB",

    "CDXS",

    "THRX",

    "RVNC",

    "ESPR",

    "TNGN",

    "NEOT",

    "PTIE",

    "ADHD",

    "NRI.TO",

    "QPH.SG",

    "IMCL",

    "RLYP",

    "COX.PA",

    "XXII",

    "AVEO",

    "ARDX",

    "HALO",

    "MSB.AX",

    "ACST",

    "FGEN",

    "COV.V",

    "CERU",

    "OEZ.F",

    "ARQL",

    "ACHN",

    "NEU.AX",

    "SVA",

    "CYTX",

    "PTLA",

    "PLPL",

    "EBS",

    "CRIS",

    "GLMD",

    "VICL",

    "STEM",

    "OPXA",

    "HUI.BE",

    "MGNX",

    "AEGR",

    "PGNX",

    "NLNK",

    "WL6.DU",

    "GTXI",

    "AFFY",

    "SPPI",

    "RVX.TO",

    "1177.HK",

    "EVGN",

    "QPT.V",

    "V3V.F",

    "CNAT",

    "DSCO",

    "AAVL",

    "OMBP",

    "ISCO",

    "DRNA",

    "CYCC",

    "RHO5.DU",

    "ANAC",

    "INSM",

    "VX1.MU",

    "PRTA",

    "CLDX",

    "NOVA.DE",

    "SGEN",

    "AMBS",

    "QA9.F",

    "NLS.AX",

    "XNPT",

    "ILMN",

    "OXGN",

    "VLA.AX",

    "CEMP",

    "ALSE",

    "NKTR",

    "INSY",

    "QNMA.DU",

    "AMPE",

    "AYJ.BE",

    "MCUR",

    "OHRP",

    "WEK.F",

    "BHRT",

    "LIFS",

    "OCRX",

    "BOTA",

    "YB4N.BE",

    "CSL.AX",

    "ILNS",

    "CERS",

    "CUR",

    "NWBO",

    "NY2.BE",

    "EXEL",

    "YB4N.F",

    "PSTI",

    "ATHX",

    "RCPT",

    "THR.BR",

    "AEZS",

    "MGN.F",

    "PRTO",

    "RCPI",

    "ENZY",

    "CNDO",

    "HPTX",

    "SNGX",

    "MNKD",

    "XBX.F",

    "HSGX",

    "AKBA",

    "BLU.TO",

    "DMPI",

    "MSTX",

    "WEK.SG",

    "MRTX",

    "QPH.BE",

    "PTCT",

    "SHP.L",

    "VBIV",

    "BBP2.MU",

    "EBIO",

    "QNMA.F",

    "WL6.MU",

    "CRMD",

    "QNMA.SG",

    "KNE.V",

    "PBYI",

    "SIGA",

    "QNMA.MU",

    "ONTY",

    "RARE",

    "AMGN",

    "CELG",

    "DARA",

    "HTBX",

    "TECH",

    "VVUS",

    "PRGB",

    "SYN",

    "TXCL.PA",

    "MOR.F",

    "SRPT",

    "ZEL.BE",

    "RHO5.F",

    "ZVA.SG",

    "CSBR",

    "RXDX",

    "TGTX",

    "AMRI",

    "ICCC",

    "JSHY",

    "ARNI",

    "CLDN",

    "ANIP",

    "NPSP",

    "MLQGC.PA",

    "CYTK",

    "SAGE",

    "BDSI",

    "CARA",

    "ZEL.SG",

    "ONCS",

    "CHRS",

    "VTL",

    "AGIO",

    "TRVN",

    "CBPO",

    "IMMU",

    "PACB",

    "MDVN",

    "INFI",

    "ALDX",

    "ARRY",

    "ACR.AX",

    "THLD",

    "ADMA",

    "ASTM",

    "VRTX",

    "MGN.DE",

    "BLUE",

    "AJW.F",

    "MDGN",

    "BIND",

    "FPMI",

    "XSR.TO",

    "ROIAK",

    "SBSA",

    "ETM",

    "BBGI",

    "P",

    "TSQ",

    "NCC-B.TO",

    "SALM",

    "NCC-A.TO",

    "SGA",

    "EMMS",

    "CMLS",

    "SIRI",

    "SKM.BE",

    "EVC",

    "OLU.F",

    "SUNTV.BO",

    "NWSA",

    "PSM.DE",

    "JRN",

    "0082.HK",

    "MMT.PA",

    "SIGN",

    "RLJE",

    "SES.BE",

    "GTN",

    "NWS.AX",

    "SNI",

    "EV4.DU",

    "TVA-B.TO",

    "XXT.MU",

    "NLN.TO",

    "MIL.PA",

    "LIN",

    "TV",

    "SAT.V",

    "ITV.L",

    "SKYD.DU",

    "NXTV.PA",

    "CTCM",

    "TV.TO",

    "NPI.MI",

    "EV4.BE",

    "NTE.V",

    "LMCA",

    "AMCX",

    "JAINSTUD.BO",

    "GTN-A",

    "ZEEL.NS",

    "CETV",

    "SESG.PA",

    "NETWORK18.NS",

    "NTN",

    "TEN.AX",

    "NEC.AX",

    "CBS.V",

    "SBGI",

    "LVNTA",

    "UTV.L",

    "MEG",

    "MS.MI",

    "NOUVEAU.BO",

    "SKYD.DE",

    "NXST",

    "2008.HK",

    "XXT.SG",

    "LBRDK",

    "BXC",

    "LPX",

    "HBP",

    "KEQU",

    "TDF.F",

    "AVY",

    "CAJ",

    "PBI",

    "RIC1.SG",

    "RICO.L",

    "PAY",

    "DCMT",

    "8111.HK",

    "NEQ.BE",

    "DAR.DU",

    "UNIOFFICE.BO",

    "CNJ.MU",

    "KNL",

    "MLHR",

    "ROS.MI",

    "SCS",

    "HNI",

    "CNN1.F",

    "CNJ.BE",

    "KPI1.DU",

    "KILBURN.BO",

    "CHMP",

    "GEA.PA",

    "VF2.F",

    "NEO.PA",

    "ONYX",

    "BI5.SG",

    "VIRC",

    "DCOU",

    "WNS",

    "CLCT",

    "MHFI",

    "HCSG",

    "SFRX",

    "MNL.F",

    "TTEC",

    "ACTG",

    "GDL.NS",

    "VOIS",

    "ONC.AX",

    "AGK.L",

    "LIOX",

    "EXLS",

    "RSSS",

    "MRKT",

    "MGLT",

    "PTNT",

    "MRS.V",

    "CDII",

    "XCH.L",

    "BYW6.HA",

    "PCLN",

    "WAN.V",

    "KUT.V",

    "WDI.DE",

    "ITEX",

    "RDG.AX",

    "PLLX",

    "GMT.V",

    "RDTK",

    "FISV",

    "4BV.F",

    "CVO",

    "MNZS.L",

    "MCO",

    "0557.HK",

    "POWR",

    "ENIP",

    "SVE.F",

    "ASAE",

    "NSP",

    "J2B.F",

    "CVEO",

    "MMS",

    "DJSP",

    "ORGS",

    "FGD.V",

    "MPAY",

    "DL8.SG",

    "HPY",

    "ITEC",

    "NEWT",

    "MLPHW.PA",

    "ONVI",

    "ABM",

    "PRAA",

    "SVE.DU",

    "HTEE",

    "CXGP",

    "PCO",

    "MBDE",

    "EEFT",

    "0059.HK",

    "WDI.MU",

    "G",

    "VRNG",

    "SUVN.F",

    "GNPG",

    "J2B.SG",

    "VVI",

    "RUL.AX",

    "SPEX",

    "MMTRS",

    "MAN.PA",

    "BCKE",

    "SGRP",

    "ARC",

    "XREG",

    "DSS",

    "WDI.DU",

    "W9N.F",

    "RMLX",

    "PYDS",

    "WEX",

    "ENV",

    "ATK.L",

    "ZPCM",

    "TISI",

    "DUT.DU",

    "ZVTK",

    "REPRO.NS",

    "PDA.DE",

    "FJI.F",

    "VEC",

    "RTO.L",

    "KSC.BE",

    "PNX.L",

    "MZS.BE",

    "ASFI",

    "WHG.AX",

    "ISAT",

    "SRT",

    "PFSW",

    "THEP.PA",

    "INX.V",

    "JOX.BE",

    "RMGN",

    "CATM",

    "CCP.AX",

    "YASHMGM.BO",

    "RBA.TO",

    "X07.BE",

    "SSTK",

    "ENOC",

    "SCRH",

    "PRGX",

    "ASPS",

    "BDMS",

    "WLL.AX",

    "XWES",

    "SW.PA",

    "FLST",

    "8063.HK",

    "CHUM",

    "CTAS",

    "REC.AX",

    "SCOR",

    "KLSC",

    "CDCO",

    "WSTC",

    "ANOS",

    "ECF.DE",

    "TNET",

    "SDY.L",

    "DCLT",

    "ICPW",

    "GSOL",

    "RBA",

    "YARC.MI",

    "BYW6.F",

    "ADS",

    "ETST",

    "XHSA.F",

    "GXI.TO",

    "ABCO",

    "6W2.F",

    "KBL.TO",

    "CVG",

    "EXPN.L",

    "RRD",

    "SERV",

    "YOO.V",

    "NESCO.NS",

    "VRSK",

    "HOV.F",

    "GFK.DE",

    "BVI.PA",

    "VNTV",

    "FJI.DU",

    "4BV.DU",

    "PFMT",

    "MUN.PA",

    "IOT.F",

    "BYW6.DE",

    "J2B.DU",

    "PDII",

    "I04.SI",

    "CBZ",

    "CASS",

    "8321.HK",

    "ESY.BE",

    "8206.HK",

    "0752.HK",

    "ROKR",

    "ISV.TO",

    "LABL",

    "RXL.PA",

    "KJ9.SI",

    "CMPR",

    "PSPW",

    "ATTO",

    "MOLG",

    "4BV.SG",

    "MARA",

    "SUVN.MU",

    "FPH.F",

    "QUAD",

    "VGREF",

    "MLV4S.PA",

    "RPXC",

    "X07.F",

    "SJ7.F",

    "ITRK.L",

    "BTV.V",

    "INVU",

    "BYW6.MU",

    "RTO1.MU",

    "ALME",

    "MLLEM.PA",

    "HOUM",

    "RPS.L",

    "ITNM",

    "DIDG",

    "HMSY",

    "OMEX",

    "STN",

    "IILG",

    "SCDV.PA",

    "UEPS",

    "REIS",

    "SRP.L",

    "FLT",

    "SNX",

    "GPN",

    "ESE.V",

    "W8Z.DE",

    "OLDW",

    "ROL",

    "DLX",

    "RENT",

    "ONE",

    "IPRU",

    "AXR",

    "WDI.F",

    "QK9.F",

    "QTWO",

    "SABA",

    "ASUR",

    "DST",

    "PRFT",

    "SQS.F",

    "HWSA.HA",

    "EPAY",

    "CSGS",

    "O5H.MU",

    "DIRI",

    "MSFT",

    "ORC.DU",

    "SOG.PA",

    "VSPC",

    "LAT.NZ",

    "AVGG",

    "DTD2.F",

    "OTK.F",

    "O5H.DU",

    "MAMS",

    "CAFN",

    "ZTS.BR",

    "QK9.BE",

    "GVP",

    "EGAN",

    "XRO.NZ",

    "FORTY",

    "OFSS.NS",

    "GWRE",

    "LPSN",

    "PERI",

    "WIN.DE",

    "PKT",

    "CA",

    "CALD",

    "KONE",

    "PCYG",

    "SHF.DU",

    "SY.V",

    "COVR",

    "INFA",

    "CTSH",

    "SUM.TO",

    "WGSA.F",

    "SOW.DE",

    "PEGA",

    "SLP",

    "JSY.F",

    "TIG.L",

    "CLDS",

    "CTIG",

    "MLKIM.PA",

    "IRM",

    "FICO",

    "VRNT",

    "BLKB",

    "NTCT",

    "TSRI",

    "ADP",

    "UDWK",

    "QK9.SG",

    "IAIC",

    "SREV",

    "ONSM",

    "TNGO",

    "SOA.PA",

    "RWWI",

    "SAPE",

    "EBIX",

    "NRST.MI",

    "VGO.V",

    "BZF1.BE",

    "QIS.V",

    "IVX.DE",

    "TIBX",

    "DOX",

    "ININ",

    "N",

    "CYBR",

    "QLIK",

    "DTD2.BE",

    "CARB",

    "JGPK",

    "AZPN",

    "DWCH",

    "EVTC",

    "FFIV",

    "WIN.BE",

    "TPOI",

    "SPNS",

    "IFXY",

    "PSAN.MU",

    "JKHY",

    "TUP.AX",

    "CTXS",

    "SSNC",

    "LQDT",

    "DANG",

    "QVCA",

    "VIPS",

    "W",

    "LITB",

    "AMZN",

    "ATV.V",

    "EVLV",

    "DLIA",

    "OSTK",

    "GPDB",

    "GAIA",

    "ATV",

    "MELI",

    "LE",

    "BSY.L",

    "LBTYA",

    "NFLX",

    "SWC.MU",

    "WIG1.DE",

    "DISCA",

    "HMTV",

    "TIVO",

    "EOT.F",

    "DISH",

    "YOD",

    "CHTR",

    "TWC",

    "KD8.BE",

    "CVC",

    "CRWN",

    "DTV",

    "SJR",

    "IMDC",

    "PNTV",

    "1097.HK",

    "SJR-B.TO",

    "KD8.SG",

    "HINDUJAV.BO",

    "WIG1.BE",

    "CX",

    "EXP",

    "SMID",

    "CRH",

    "MCEM",

    "CRH.TO",

    "JHX",

    "CPAC",

    "5HH.SI",

    "BIOA",

    "BAK",

    "HUN",

    "TET.L",

    "GEVO",

    "ARG",

    "LIN.DU",

    "OOIL",

    "IU2.MU",

    "PX",

    "CAMPHOR.BO",

    "UNIPHOS.BO",

    "0362.HK",

    "JOCIL.NS",

    "QYM.DE",

    "ASAA.SG",

    "0609.HK",

    "SEH.SG",

    "A7Z.F",

    "FMC",

    "CE",

    "IZ8A.MU",

    "KANSANERO.BO",

    "0395.HK",

    "CDXC",

    "UBE.F",

    "ZIJB.SG",

    "A7Z.BE",

    "0827.HK",

    "IZ8A.F",

    "REC.BR",

    "SMM.MU",

    "0148.HK",

    "KGZ.BE",

    "HIM.BE",

    "KUY.F",

    "WCH.HA",

    "PURE",

    "SDF.DE",

    "OHZ.F",

    "ASH",

    "2168.HK",

    "RTK",

    "IU2.DE",

    "IU2.SG",

    "QYM.F",

    "WLKP",

    "I93.F",

    "MEIL",

    "ZIJB.F",

    "YIZH.BE",

    "IU2.F",

    "DOW",

    "OHZ.SG",

    "NSC.DU",

    "I93.MU",

    "SWD.BE",

    "EMN",

    "SREERAYA.BO",

    "WCH.F",

    "PUZ.SG",

    "BAS.DE",

    "WCH.SG",

    "M3C.BE",

    "LIN.F",

    "LXU",

    "PWNCA.AX",

    "NOCIL.BO",

    "LIN.DE",

    "RO5K.BE",

    "SHLM",

    "NATPEROX.BO",

    "VHI",

    "MTX",

    "ACET",

    "JAYCH.BO",

    "0408.HK",

    "SDF.F",

    "APD",

    "NPX.AX",

    "RYAM",

    "YIZH.MU",

    "KUY.BE",

    "FF",

    "SQM",

    "AI.PA",

    "TROX",

    "GODREJIND.BO",

    "MEXCHEM.MX",

    "BCPC",

    "LIN.HA",

    "OCIP",

    "V1S.DU",

    "YIZH.SG",

    "KANORICHE.NS",

    "ASAA.MU",

    "FPE.DU",

    "0868.HK",

    "TREC",

    "V1S.MU",

    "WCH.DE",

    "SEH.BE",

    "QYM.BE",

    "SGL.DE",

    "DIK.BE",

    "NPX.NZ",

    "IU2.BE",

    "VIVIDIND.BO",

    "TOS.DU",

    "RBT.PA",

    "EJF.MU",

    "VPCO",

    "LO",

    "BTI",

    "PM",

    "RAI",

    "MO",

    "VGR",

    "AHII",

    "VAPO",

    "TIS",

    "BLCK",

    "OBCI",

    "SCL",

    "ECL",

    "CHD",

    "ZEP",

    "SWSH",

    "KATY",

    "MHI.V",

    "MCI.V",

    "NAC.V",

    "SGM",

    "TICC",

    "EFR.TO",

    "VCV.V",

    "ADX",

    "TM.V",

    "PEO",

    "GPM.V",

    "GAM",

    "E.TO",

    "C5K.F",

    "CIEN",

    "FJK.BE",

    "ET.TO",

    "0303.HK",

    "RWC",

    "QCI.F",

    "EXF.TO",

    "OKI.BE",

    "YFI.V",

    "CMRO",

    "FJK.F",

    "FZM.DE",

    "IDSY",

    "WSTL",

    "IIJI",

    "LRD.L",

    "NMRX",

    "ZSTN",

    "NTC.AX",

    "XT2A.F",

    "XT2A.SG",

    "SONS",

    "INFN",

    "QCI.SG",

    "IKAN",

    "ENVI",

    "BB.TO",

    "8051.HK",

    "NVI.V",

    "MBQ.DE",

    "IFON",

    "ALLT",

    "VCRA",

    "CTV",

    "FZM.SG",

    "2018.HK",

    "ZOOM",

    "CDV.TO",

    "2618.HK",

    "SATS",

    "NOK",

    "CUDA",

    "D5N.SI",

    "QCOM",

    "PLCM",

    "DRWI",

    "FZM.MU",

    "FKWL",

    "VINDHYATE.NS",

    "NOA3.BE",

    "BDR",

    "MFON",

    "JCS",

    "EVTI",

    "HLIT",

    "PTSC",

    "RITT",

    "TLFN.SG",

    "CRNT",

    "2038.HK",

    "PNTR",

    "AVO.TO",

    "CALX",

    "HIPP",

    "KKE.BE",

    "DGDM",

    "BYL.TO",

    "NOA3.DE",

    "MSI",

    "I6I.F",

    "0877.HK",

    "AKSHOPTFBR.BO",

    "WSGI",

    "WAL.AX",

    "HRS",

    "MVNR",

    "2369.HK",

    "SVC.TO",

    "NTGR",

    "KVHI",

    "CLRO",

    "ATEN",

    "MNW.TO",

    "CMTL",

    "STC.V",

    "WTT",

    "GILT",

    "QCI.MU",

    "YTY.V",

    "F2Y.DE",

    "QCI.DE",

    "COMM",

    "ADTN",

    "TESS",

    "LORL",

    "PARRO.PA",

    "JDSU",

    "FZM.BE",

    "QCI.BE",

    "BLOX",

    "SHOR",

    "NOKN.MX",

    "ORCT",

    "ANDR",

    "CYNI",

    "NOAA.DE",

    "AXX.TO",

    "TLFN.F",

    "TTZ.V",

    "AUDC",

    "FEIM",

    "NII.TO",

    "ARRS",

    "HEAR",

    "TCCO",

    "SNA.V",

    "WRW.BE",

    "ZHNE",

    "ADV.BE",

    "VTC.L",

    "ALU",

    "QCOM.BA",

    "AKSHOPTFB.NS",

    "QCOM.MX",

    "TSTC",

    "HIVE",

    "KN",

    "CLFD",

    "WEW.TO",

    "AW5.SG",

    "OCC",

    "ENRG",

    "SW.TO",

    "0285.HK",

    "BLN.V",

    "FZM.F",

    "OINA.BE",

    "ETL.PA",

    "KUD.F",

    "WJL.SG",

    "AVNW",

    "MITL",

    "KKE.F",

    "VSAT",

    "ZENITCOM.BO",

    "KBC.DE",

    "P12.SI",

    "VCLD",

    "RSYS",

    "XTL.MU",

    "HWP.SG",

    "RKUS",

    "SSNI",

    "VX6.F",

    "DAKT",

    "SIO.V",

    "KBC.SG",

    "GWT.SG",

    "TECA.BE",

    "SE7.SG",

    "XTL.BE",

    "HWP.DE",

    "2382.HK",

    "WZM.F",

    "GWT.F",

    "LXK",

    "WZM.BE",

    "0125.HK",

    "SYR-H.V",

    "3336.HK",

    "0663.HK",

    "VJET",

    "ALOT",

    "DDD",

    "EFII",

    "RDCM",

    "HAUP",

    "TACT",

    "SCKT",

    "KTCC",

    "SSYS",

    "VIDE",

    "MRCY",

    "INPH",

    "RSKIA",

    "QUMU",

    "OLED",

    "MCZ",

    "EYE-A.V",

    "COYN",

    "USTR",

    "SPDC",

    "WSTG",

    "PCCC",

    "TECD",

    "M06.SI",

    "IM",

    "SZU.MU",

    "KOTARISUG.NS",

    "JEYPORE.NS",

    "HSY",

    "GFF.AX",

    "KMSUGAR.BO",

    "SZU.F",

    "LXU.F",

    "RMCF",

    "THL.L",

    "OUDH.BO",

    "KESARENT.NS",

    "DWARKESH.BO",

    "SZU.DE",

    "MDLZ",

    "BAJAJHIND.NS",

    "Q0W.SI",

    "BAJAJHIND.BO",

    "TR",

    "JEYPORE.BO",

    "JAMN",

    "DWARKESH.NS",

    "P34.SI",

    "FFI.AX",

    "SVW.AX",

    "ELRN",

    "MDDD",

    "YPPN",

    "TEXF.BR",

    "MBI.F",

    "J36.SI",

    "JACQ",

    "MPT.V",

    "HRG",

    "ZEXDONTR.BO",

    "ZMDC",

    "0656.HK",

    "MLTRA.PA",

    "RHL.AX",

    "FNAM",

    "1191.HK",

    "SHGT",

    "GPNE",

    "LPCN",

    "DMHI",

    "PID.BE",

    "XEB.F",

    "IOC.F",

    "CODI",

    "ESIV",

    "MOPF.BR",

    "U96.SI",

    "ALKM",

    "IEP",

    "GSPE",

    "APPG",

    "MWRX",

    "ZENO",

    "ZGG.V",

    "HBPE",

    "GOI-H.V",

    "AEXE",

    "CYNK",

    "N21.SI",

    "GDHC",

    "HBY.NZ",

    "VNTH",

    "MDRM",

    "IFAN",

    "KR.V",

    "SCO.DU",

    "SPT6.F",

    "WSGP",

    "REX",

    "BCG.V",

    "J37.SI",

    "SUMA.BE",

    "U04.SI",

    "POCO",

    "SAR.V",

    "HZNM",

    "0459.HK",

    "SPLP",

    "AEGA",

    "CEXE",

    "HTWO",

    "SCO.DE",

    "BOV-H.V",

    "OTCO.BO",

    "0392.HK",

    "SELT",

    "0242.HK",

    "HISP",

    "AUCT.L",

    "GNC.V",

    "OLIE",

    "SANB",

    "EAGL",

    "HKBT",

    "IMMA",

    "UTMR",

    "DIMN",

    "AUMA",

    "0053.HK",

    "TXSO",

    "1VS.DE",

    "C3T.SI",

    "LTNR",

    "CADT",

    "VLM.MU",

    "CADO5.BA",

    "VCMG",

    "MLTHA.PA",

    "SEB",

    "GDEF",

    "SECT",

    "CAGZ",

    "MOBO",

    "MARA.F",

    "AFAN",

    "DPSM",

    "STNG",

    "H4W.BE",

    "PTPF",

    "HOMR",

    "MDCN",

    "RIHT",

    "SPZR",

    "BNRM",

    "GARO.BA",

    "SMV-H.V",

    "PHOT",

    "MARA.BE",

    "PGG.V",

    "CANK",

    "MAGAA",

    "0043.HK",

    "BMMCF",

    "PICO",

    "HCTI",

    "HCAC",

    "RJDG",

    "OMVS",

    "MLNEI.PA",

    "ITEN",

    "PRLX",

    "ARAT",

    "MJMJ",

    "ESGI",

    "KHA.V",

    "1026.HK",

    "ALLM",

    "MMAM",

    "BLVD",

    "RII-B.V",

    "VSVS.L",

    "MCPI",

    "ESWB",

    "ROIQ",

    "SLOT",

    "VLM.BE",

    "BETV",

    "NC",

    "IDH-H.V",

    "JASN",

    "MZZL",

    "XEB.DU",

    "GSPH",

    "MARA.MU",

    "CRPT",

    "CACG",

    "JML.V",

    "PRKI",

    "0019.HK",

    "SMAC",

    "PZS.F",

    "GTSO",

    "GDEE",

    "8092.HK",

    "RFIE",

    "OPBL",

    "PRD.V",

    "OCX.TO",

    "PMO-H.V",

    "KAY.V",

    "TSTS",

    "VARDHCH.BO",

    "MSSD",

    "WLRH",

    "IMTC",

    "NTRI",

    "DOMK",

    "STB",

    "MYEC",

    "EVI",

    "CYU.AX",

    "0985.HK",

    "YBB.SG",

    "COL.V",

    "MGY.AX",

    "DNT.TO",

    "NSU",

    "IRN.AX",

    "CUU.V",

    "TAS.AX",

    "FG5.F",

    "JAG.AX",

    "PSF.AX",

    "VMS.AX",

    "ZCB.F",

    "NSU.TO",

    "PAN.AX",

    "JAL.AX",

    "MLX.AX",

    "CHZ.AX",

    "OZL.AX",

    "V7N.MU",

    "C1Z.F",

    "LIWA",

    "KAS.AX",

    "FCX",

    "YBB.F",

    "IMD.AX",

    "WRN.TO",

    "YM1.BE",

    "ZCB.BE",

    "RXM.AX",

    "YBB.BE",

    "ORL.TO",

    "V7N.SG",

    "CUO.V",

    "FXR.AX",

    "FG5.BE",

    "CUM.TO",

    "NCU.TO",

    "ZYT.SG",

    "MNM.AX",

    "KAT.TO",

    "ZYT.F",

    "PRECWIRE.BO",

    "ZNC.AX",

    "SXG.AX",

    "SCCO",

    "SRR.AX",

    "WCP.AX",

    "FG5.SG",

    "SMM.AX",

    "NDA.DE",

    "NIC.F",

    "YM1.MU",

    "NR4.F",

    "ARG.TO",

    "PRECWIRE.NS",

    "COF",

    "AAU.SG",

    "XOOM",

    "EFX",

    "CPSS",

    "ON.V",

    "EFN.TO",

    "WRLD",

    "OIX.SG",

    "CBL.TO",

    "CSH",

    "TRCFIN.BO",

    "TSS",

    "3V64.MU",

    "CSE.TO",

    "MGI",

    "HAWK",

    "DFS",

    "QF8.BE",

    "ATLCF",

    "AD.TO",

    "WU",

    "3V64.DE",

    "TCAP",

    "OIX.F",

    "W3U.MU",

    "AGM",

    "V.MX",

    "V",

    "CIT",

    "SLM",

    "SNFCA",

    "VARDHMNH.BO",

    "NICK",

    "SUNDARMFIN.BO",

    "JAYBHCR.BO",

    "QSV.SG",

    "ATLC",

    "QC9.MU",

    "OIT.F",

    "PHH",

    "FMD",

    "KNKT",

    "QIWI",

    "KWALITY.BO",

    "ENVA",

    "EDEN.PA",

    "AAU.F",

    "CACC",

    "GDOT",

    "OIT.MU",

    "NIKKIGL.BO",

    "NSX.AX",

    "EZPW",

    "AXP",

    "PFG.L",

    "NEWS",

    "GCA",

    "W3U.BE",

    "VINTAGES.BO",

    "SUNDARMFI.NS",

    "FCFS",

    "FXL.AX",

    "RONE",

    "QF8.F",

    "TFCILTD.NS",

    "IBCA",

    "VIEW",

    "QSV.MU",

    "NAVI",

    "ROSELABS.BO",

    "CFN.TO",

    "ACD.TO",

    "MA",

    "IX",

    "RM",

    "QSV.F",

    "QC9.F",

    "SHRIRAMCI.NS",

    "LOAN",

    "MFI",

    "JJFINCOR.BO",

    "TAXI",

    "SYF",

    "S41.SI",

    "LEAF",

    "NICCOUCO.BO",

    "QC9.DU",

    "NNI",

    "DF",

    "SYUT",

    "ALAN",

    "WDC",

    "DTLK",

    "HILL",

    "QNT1.BE",

    "QNT1.MU",

    "DRAM",

    "EMC",

    "STX",

    "VOLT",

    "IMN",

    "V33.F",

    "NMBL",

    "SNG.BE",

    "BRCD",

    "QNT1.SG",

    "QLG.SG",

    "QTM",

    "NTAP",

    "CRDS",

    "SNDK",

    "TDC",

    "SNDK.MX",

    "VMEM",

    "JUS1.BE",

    "PIK.BE",

    "KRK.NZ",

    "1700.HK",

    "MYR.AX",

    "HBC.TO",

    "5SR.SI",

    "HY7.SG",

    "GFAMSAA.MX",

    "WHS.NZ",

    "HUWA.BE",

    "SHLD",

    "ELEKTRA.MX",

    "TJX",

    "DEB.L",

    "QGI.SG",

    "BSI",

    "TKM.F",

    "HVN.AX",

    "SHOS",

    "HUWA.DE",

    "M",

    "0312.HK",

    "0984.HK",

    "SORIANAB.MX",

    "HY7.F",

    "1833.HK",

    "3308.HK",

    "KSS",

    "HUWA.DU",

    "HUWA.MU",

    "HUWH.F",

    "MKS.L",

    "BONT",

    "TKM.DU",

    "HY7.BE",

    "DDS",

    "NWM.F",

    "4HP.BE",

    "1212.HK",

    "NWM.SG",

    "3368.HK",

    "JUS1.MU",

    "MCLS.L",

    "JCP.BE",

    "QGI.F",

    "0848.HK",

    "SEE.DU",

    "JCP",

    "CEMI",

    "QDEL",

    "TRIB",

    "PTN",

    "SRDX",

    "CNSO",

    "NEOG",

    "IDXX",

    "OXFD",

    "APPY",

    "VRML",

    "CONX",

    "NYMX",

    "ATOS",

    "VIVO",

    "AMAG",

    "DOL.TO",

    "TUES",

    "WALM34.SA",

    "WMT",

    "BME.L",

    "HBH3.DU",

    "HBH3.DE",

    "WMT.DU",

    "WMT.SG",

    "ALCSQ",

    "TGT",

    "BIG",

    "HBH3.SG",

    "COST",

    "QJE.BE",

    "FAY.BE",

    "WMT.MX",

    "LAW.F",

    "HBH3.F",

    "CTO.MU",

    "FDO",

    "FRED",

    "QJE.F",

    "WMT.BA",

    "DLTR",

    "COST.MX",

    "CTO.BE",

    "DG",

    "ZU",

    "CTO.F",

    "TRS.AX",

    "BURL",

    "PSMT",

    "WALMEXV.MX",

    "4GN.F",

    "NSR",

    "TEO",

    "WIFI",

    "OIBR-C",

    "WPCS",

    "STRP",

    "TI",

    "GTT",

    "DCM",

    "CCI",

    "IGLD",

    "TWER",

    "TI-A",

    "MTSL",

    "EGHT",

    "MIFI",

    "OIBR",

    "PGI",

    "GLOW",

    "LMOS",

    "BCOM",

    "MNDL",

    "I",

    "LVLT",

    "IDT",

    "GOGO",

    "DDDC",

    "BT",

    "ORBC",

    "VLTC",

    "MSPC",

    "HCOM",

    "CCOI",

    "RRST",

    "TLK",

    "IRDM",

    "VG",

    "DBD",

    "HPQ",

    "IDEA",

    "WHHT",

    "SGI",

    "XPLR",

    "ANET",

    "CRAY",

    "MEI",

    "OSR.DE",

    "OSR.MU",

    "RTSPOWR.BO",

    "OIIM",

    "YSVA.SG",

    "AVX",

    "KEIND.BO",

    "NCE.V",

    "EW3.F",

    "OBD.BE",

    "DAIO",

    "VCV.BE",

    "NSYS",

    "MKRS",

    "LPL",

    "SPA",

    "FKA.SG",

    "CTO.V",

    "YEC.SG",

    "OESX",

    "MHTX",

    "THAES.BO",

    "CBAK",

    "WDT.NZ",

    "3QN.BE",

    "NTP",

    "QCTA.MU",

    "JEN.HA",

    "GLW",

    "OS2.DU",

    "TYC1.MU",

    "TYC1.DU",

    "CTRL",

    "SLI",

    "G9Y.SG",

    "LMP.TO",

    "MITA.MU",

    "V03.SI",

    "IS7.DE",

    "RVLT",

    "HPS-A.TO",

    "XPP.L",

    "FKA.F",

    "KAYCEEI.BO",

    "G9Y.MU",

    "G9Y.BE",

    "PRY.MI",

    "1808.HK",

    "ESP",

    "G9Y.F",

    "MIE1.BE",

    "PLNR",

    "1685.HK",

    "TYC1.BE",

    "APH",

    "XPH.F",

    "MEL.L",

    "WGA",

    "UNXL",

    "MFCO",

    "HTCH",

    "ALTI",

    "KEM",

    "PAY.BR",

    "TEL",

    "KE",

    "0903.HK",

    "DPW",

    "LED.V",

    "CTS",

    "YSVA.BE",

    "MRN.PA",

    "HUB-B",

    "RAK.NZ",

    "ITKG",

    "JEN.F",

    "G9Y.DU",

    "SPEC",

    "ORBT",

    "TCPI",

    "XPH.DU",

    "ZTX.F",

    "PULS",

    "PLUG",

    "AVX.V",

    "MAD.NZ",

    "SANM",

    "AFOP",

    "SIMO",

    "ZKL.V",

    "XPH.MU",

    "AYI",

    "ROH.DE",

    "ROG",

    "FJE.SG",

    "LR.PA",

    "0580.HK",

    "NNJ.MU",

    "MLCSP.PA",

    "BELFB",

    "INRD",

    "OGES",

    "DLB",

    "XAR.L",

    "JST",

    "NEON",

    "MIE1.DU",

    "QBAK",

    "KYO",

    "VLX.L",

    "3QN.SG",

    "NEWN",

    "ORBK",

    "QCTA.F",

    "SGR.MI",

    "TYC1.F",

    "VICR",

    "DEWY",

    "RFIL",

    "ZTX.SG",

    "WIRE",

    "MVIS",

    "YEC.MU",

    "MXWL",

    "AEIS",

    "SAR",

    "RBCF",

    "APO",

    "MCAR",

    "MCMV",

    "AGOE",

    "ROGI",

    "NRT",

    "TINY",

    "MARPS",

    "TELOZ",

    "MSB",

    "ICE",

    "SWKH",

    "CBOE",

    "GMEI",

    "NDAQ",

    "RHSC",

    "AMTC",

    "SPAG",

    "MTR",

    "GNGT",

    "ZDVN",

    "MABA",

    "DOM",

    "KHZM",

    "GREW",

    "TOMZ",

    "TIRTZ",

    "VPFG",

    "KCAP",

    "SGLB",

    "MAIN",

    "SBR",

    "WILD",

    "DMLP",

    "ESXB",

    "KAX2.MU",

    "PFV.DE",

    "0118.HK",

    "RSL2.DE",

    "WAN.F",

    "DRC",

    "LPK.DE",

    "CLNT",

    "EVTN",

    "HDD.DE",

    "VLN.TO",

    "OEE.V",

    "IP.MI",

    "PFV.BE",

    "BWEN",

    "TAYD",

    "SKB.DE",

    "QS2A.DU",

    "PWON",

    "SIE.MI",

    "RAVN",

    "PFV.F",

    "WMF.F",

    "CYD.F",

    "ADORWELD.NS",

    "TRIL.NS",

    "AP",

    "XBC.V",

    "SHR.F",

    "42W.DU",

    "IPWR",

    "JT5.F",

    "ITW",

    "KAI",

    "KSB.F",

    "BKN.AX",

    "SIE.L",

    "MIH.SG",

    "ADGE",

    "VDN.SG",

    "ZBRA",

    "TWIN",

    "FUC.BE",

    "OBH.SG",

    "WSCI",

    "TSB.F",

    "KIRLBROS.BO",

    "GLPW",

    "0445.HK",

    "GNRC",

    "KUBTF",

    "TPX.F",

    "LAXMIMACH.NS",

    "MY",

    "AZZ",

    "MNTX",

    "NSGP.PA",

    "QS2A.SG",

    "0687.HK",

    "KSB.MU",

    "M9F.SI",

    "NDX1.HA",

    "THER.PA",

    "CMUA.BE",

    "WI4.DE",

    "TIMKEN.BO",

    "KSB3.DU",

    "CFX",

    "KUBTY",

    "BLD.TO",

    "ROR.L",

    "8032.HK",

    "INS",

    "SIE.DE",

    "ACPW",

    "ATU",

    "KAX2.F",

    "CXGH.BE",

    "HON",

    "PPRW",

    "KRN.MU",

    "CUO",

    "NILE.BO",

    "42W.SG",

    "CXGH.MU",

    "PFV.DU",

    "0065.HK",

    "THTI",

    "WMF3.BE",

    "QS2A.MU",

    "0558.HK",

    "DKA.BE",

    "BWC",

    "DKA.F",

    "G1A.DE",

    "THR",

    "BGG",

    "XRM",

    "CXGH.F",

    "HI.V",

    "WUHN",

    "GGG.V",

    "SND.HA",

    "WAN.MU",

    "ZAR.MU",

    "KSBPUMPS.NS",

    "KC4.BE",

    "0039.HK",

    "NCO.V",

    "IWJ.F",

    "QMC.F",

    "QAT1.F",

    "SCT.NZ",

    "PFV.HA",

    "TLA.V",

    "FENR.L",

    "ROP",

    "OTI.AX",

    "KAX2.SG",

    "OBH.F",

    "DUE.DE",

    "MXH.DE",

    "JUN3.HA",

    "ZGL.AX",

    "OPTT",

    "NXS.MU",

    "RRE.V",

    "VWSA.DE",

    "MTU.PA",

    "TPE.DE",

    "KSB.BE",

    "NTN.F",

    "VSJ.BE",

    "IEX",

    "IBAL",

    "GSC1.BE",

    "JUN3.DU",

    "XYL",

    "PLL",

    "CVV",

    "PSIX",

    "DCI",

    "KCP.BO",

    "KSB3.SG",

    "XRF.AX",

    "KLBRENG-B.BO",

    "MRO.L",

    "NDX1.DE",

    "EKC.BO",

    "MMM",

    "ITT",

    "ANDREWYU.BO",

    "CMI",

    "GE",

    "SPW",

    "MLCTA.PA",

    "KU2.BE",

    "CMUA.SG",

    "VWSA.BE",

    "ABB",

    "VWS.F",

    "CYD",

    "JI8.F",

    "EEX.DE",

    "MIDD",

    "XB6.F",

    "UP7.DE",

    "TECU",

    "PFV.MU",

    "YUKEN.BO",

    "EEX.DU",

    "8068.HK",

    "IR",

    "DUE.DU",

    "VENUSUNI.BO",

    "CMUA.DE",

    "WMF.BE",

    "SIEMENS.NS",

    "ESPH",

    "KSB3.BE",

    "OKU.F",

    "IMI.L",

    "ADEP",

    "JUN3.MU",

    "KC4.MU",

    "JYOTI.BO",

    "ZAR.SG",

    "HN6.F",

    "AME",

    "LII",

    "2398.HK",

    "SU.PA",

    "NIB1.F",

    "HDSN",

    "JBT",

    "LXFR",

    "NDSN",

    "NACG",

    "SKFINDIA.NS",

    "QL2.MU",

    "CYD.SG",

    "XONE",

    "SUZLON.BO",

    "FLS",

    "GGG",

    "WSU.DE",

    "WMF.MU",

    "NGI.BE",

    "ROK",

    "NPS.TO",

    "1101.HK",

    "DANR.MI",

    "CXGH.SG",

    "TSE1.DU",

    "0822.HK",

    "AGFB.BR",

    "WAN.BE",

    "VOLTAMP.NS",

    "YKE.DU",

    "NTN.DU",

    "HG1.DE",

    "I7N.DE",

    "YKE.F",

    "MTA.MU",

    "ETN",

    "DHR",

    "KSB3.F",

    "SIE.F",

    "WEIR.L",

    "JUN3.SG",

    "POWL",

    "NEX.PA",

    "SIS.TO",

    "HDD.HA",

    "CW",

    "TSE1.SG",

    "TVLY.PA",

    "RXN",

    "ECTYQ",

    "PPO",

    "HI",

    "SMIN.L",

    "CR",

    "RBC",

    "X27.SI",

    "NGI.F",

    "CXGH.DE",

    "CMUA.F",

    "WAN.SG",

    "REK.V",

    "GRC",

    "TRIL.BO",

    "OCEL",

    "HDD.F",

    "VSJ.F",

    "WMF3.SG",

    "KRN.HA",

    "3339.HK",

    "DOV",

    "RHM.DE",

    "CYD.BE",

    "IWJ.BE",

    "VSJ.DE",

    "KRN.F",

    "VVC",

    "RWE.HA",

    "AVA",

    "OPL.V",

    "HK51.BE",

    "MDU",

    "YI2A.SG",

    "SWV.F",

    "0836.HK",

    "YG11.BE",

    "S92.HA",

    "FVR.V",

    "GTH.TO",

    "NTPC.BO",

    "RNW.TO",

    "ALE",

    "AQN.TO",

    "ZJS1.BE",

    "YI2A.DU",

    "CZZ",

    "AS1.DE",

    "RWE.DE",

    "MXG.TO",

    "VBK.BE",

    "HRP.MU",

    "SAG.DU",

    "RG2A.MU",

    "VBK.DE",

    "UGI",

    "ENEL.MI",

    "0182.HK",

    "IRE.MI",

    "NWE",

    "EXC",

    "KWK3.F",

    "TERP",

    "KTE.AX",

    "CWE.AX",

    "KNX.MI",

    "PEGI",

    "RWE.F",

    "SKYS",

    "BIP-UN.TO",

    "MGEE",

    "SWVK.HA",

    "NW9.F",

    "VQKA.F",

    "FNRG",

    "SPB.TO",

    "OEG.V",

    "ENEV3.SA",

    "DYE.AX",

    "NPI.TO",

    "0006.HK",

    "JSWENERGY.NS",

    "PEG.TO",

    "MVV1.DE",

    "BEP",

    "EMB.V",

    "S92.DE",

    "BIP",

    "PEG",

    "NTPC.NS",

    "MMMW",

    "LEC.V",

    "S92.F",

    "NEP",

    "JPPOWER.BO",

    "WP1.F",

    "EWC.AX",

    "YI2A.BE",

    "PRHL",

    "ZJS1.MU",

    "CU.TO",

    "SAG.SG",

    "EOAN.F",

    "0C2.DU",

    "RWE3.F",

    "RWEA.DE",

    "YG11.DU",

    "RWE3.SG",

    "YG11.MU",

    "QSPW",

    "DUK",

    "5IG.SI",

    "ENL.DE",

    "AKH.V",

    "AGK.AX",

    "WR",

    "FCEL",

    "CNA.L",

    "YG11.F",

    "A2A.MI",

    "CESC.NS",

    "EOAN.DE",

    "NRG",

    "KECIL.BO",

    "TEO.PA",

    "X04.SI",

    "JE.TO",

    "OTTR",

    "PNM",

    "SRE",

    "0712.HK",

    "0882.HK",

    "YG11.DE",

    "ETX.TO",

    "UTL",

    "TAC",

    "SFX.DE",

    "ETG.MU",

    "RPG.TO",

    "YI2A.MU",

    "E2F.DE",

    "ATP.TO",

    "SHL.BE",

    "NI",

    "RWE3.DU",

    "DRX.L",

    "VQKA.DE",

    "QCX.SG",

    "ETG.SG",

    "EBK.DU",

    "NU",

    "HTM",

    "EDF.PA",

    "RWE.SG",

    "SHX.SG",

    "EWW.F",

    "GSZ.PA",

    "JE",

    "FTL.MI",

    "TAC.V",

    "NG.L",

    "ALVER.PA",

    "SWW.MU",

    "PJC-A.TO",

    "PETS",

    "GNBT",

    "ELN.V",

    "ALKS",

    "INSV",

    "WGN.SG",

    "CBRX",

    "BPTH",

    "ARDM",

    "WGN.DE",

    "RADL3.SA",

    "WGN.F",

    "DCTH",

    "4HN.BE",

    "WGN.BE",

    "VRX",

    "FLML",

    "ACUR",

    "04CN.SG",

    "ADMP",

    "PFIZ34.SA",

    "IPXL",

    "RTRX",

    "XYXR.F",

    "8019.HK",

    "XIN.F",

    "BAYN.DE",

    "TTKHEALTH.NS",

    "JNJ",

    "YPH.DU",

    "ICPT",

    "ALQA",

    "BON.SG",

    "ZEG.DE",

    "ORTIN.BO",

    "PFIZER.NS",

    "JBCHEM.BO",

    "IMNP",

    "BMY",

    "NVGN",

    "AXN",

    "MRK",

    "ITCI",

    "ZEG.DU",

    "CIPLA.NS",

    "ASPX",

    "XYXR.SG",

    "TNXP",

    "LLY.DE",

    "AZN.L",

    "MLFER.PA",

    "PVCT",

    "ZEGA.SG",

    "KBIO",

    "JNJ.DU",

    "DPH.L",

    "WINTAC.BO",

    "JNJ.SG",

    "RMTI",

    "BSPM",

    "GSK",

    "KOPRAN.BO",

    "JNJ.MU",

    "JNJ.BE",

    "TXMD",

    "AZN.V",

    "GWPH",

    "X64.SI",

    "NNVC",

    "PFE",

    "D4S.SG",

    "SZD.F",

    "LILY34.SA",

    "NVS",

    "E02.SI",

    "GOGC",

    "KILITCH.NS",

    "YPH.F",

    "3933.HK",

    "ABBV",

    "RX.V",

    "VENUSREM.NS",

    "NOT.DE",

    "YPH.MU",

    "SNW.DE",

    "ZGNX",

    "ALIM",

    "YPH.SG",

    "1093.HK",

    "0867.HK",

    "TTPH",

    "XIN.SG",

    "INNV",

    "VSC.AX",

    "SNW.SG",

    "VETO.PA",

    "ANTH",

    "ZYDEN.BO",

    "NATCAPSUQ.BO",

    "ZENITHHE.BO",

    "SAN.PA",

    "PHRMASI.BO",

    "AZN",

    "AERI",

    "ZSPH",

    "JZHG",

    "8225.HK",

    "KILITCHD.BO",

    "ECTE",

    "GSK.L",

    "GODAVARI.BO",

    "NOTA.DE",

    "ZEGA.MU",

    "SNY",

    "HRTX",

    "VEC.L",

    "JNJ.DE",

    "CPHI",

    "NRT.AX",

    "LLY",

    "SKBI",

    "ZEGA.F",

    "ZEGA.BE",

    "NOT.MU",

    "KYTH",

    "ZEG.BE",

    "RPTP",

    "PCRX",

    "1889.HK",

    "NTRR",

    "AHS.V",

    "ZU1.F",

    "SGYP",

    "MEIP",

    "RGRX",

    "CRME",

    "BIOD",

    "AGN",

    "AMPH",

    "DRRX",

    "TPI",

    "POZN",

    "PRTX",

    "DEPO",

    "APRI",

    "ELTP",

    "TEVA",

    "ISIS",

    "NUIN",

    "ARYX",

    "ACUS",

    "UTHR",

    "PTX",

    "OREX",

    "DVAX",

    "RDY",

    "SCLN",

    "AMRN",

    "ENDP",

    "ALXA",

    "NVO",

    "CPIX",

    "HRBR",

    "AHRO",

    "TARO",

    "SCMP",

    "AUXL",

    "RBCL",

    "NRTI",

    "NAII",

    "PRGO",

    "CTDH",

    "PRPH",

    "USNA",

    "COCP",

    "NPD",

    "CJJD",

    "PMC",

    "GNC",

    "WAG",

    "RAD",

    "DND.TO",

    "GALT",

    "VISTAPH.BO",

    "HZNP",

    "XP2.SG",

    "ABT",

    "MDCO",

    "1LP.F",

    "IPN.PA",

    "TEV.DE",

    "XP2.F",

    "SCYX",

    "VRX.TO",

    "ACT",

    "RLMD",

    "INNL",

    "MNK",

    "IRWD",

    "TRGM",

    "AKRX",

    "SLXP",

    "MYL",

    "PSDV",

    "AGRX",

    "ROSE.BA",

    "TBET",

    "CAN.V",

    "NB3.MU",

    "CTLT",

    "ADMS",

    "DPLO",

    "VSAR",

    "TKD.F",

    "CPXX",

    "HMU.DU",

    "MRK.DE",

    "LUPIN.BO",

    "CPRX",

    "2877.HK",

    "TKD.MU",

    "SPHS",

    "VNSN",

    "SMRUTHI.BO",

    "XP2.BE",

    "EGRX",

    "JXS.F",

    "EVT.DE",

    "LDZA.F",

    "SAZ.DU",

    "KIS.BE",

    "GUD.TO",

    "P7C.F",

    "AQXP",

    "CANV",

    "MNTA",

    "DPA.F",

    "LDZA.SG",

    "NATR",

    "AVNR",

    "EVOK",

    "FLXN",

    "SUPN",

    "MRK.SG",

    "FCSC",

    "PARN",

    "RIGL",

    "QRX.AX",

    "LCI",

    "EVT.SG",

    "KPTI",

    "OCLS",

    "HIK.L",

    "SGNT",

    "C1S.BE",

    "ZTS",

    "NRX",

    "NBIX",

    "MYRX",

    "MYOS",

    "HSP",

    "SAZ.DE",

    "0503.HK",

    "P7C.BE",

    "GEKA.F",

    "TRIMURTHI.BO",

    "T14.SI",

    "HJOE",

    "TKD.BE",

    "MITD",

    "MCK",

    "ABC",

    "CAH",

    "VIG.AX",

    "SPRO",

    "UTI",

    "GPX",

    "EDU",

    "KME.AX",

    "XUE",

    "ABCD",

    "STRA",

    "TEDU",

    "EDMC",

    "LRN",

    "ATAI",

    "NORD",

    "SCHS",

    "NAUH",

    "ASPU",

    "DL",

    "BPI",

    "LINC",

    "SLC.V",

    "ESI",

    "CAST",

    "FC",

    "HMHC",

    "RSWN",

    "LTRE",

    "MKHD",

    "CPLA",

    "LOPE",

    "APOL",

    "VISUINTL.BO",

    "SGU.AX",

    "DV",

    "APEI",

    "SEER3.SA",

    "SCIL",

    "EPAX",

    "XRS",

    "WIEI",

    "PCSV",

    "CECO",

    "COCO",

    "MBA.TO",

    "CHN.V",

    "GEM.AX",

    "QQ.V",

    "POWERGRID.BO",

    "ENERGYDEV.NS",

    "KPO.SG",

    "EDE",

    "SKI.AX",

    "CNL",

    "GDY.AX",

    "HE",

    "PNE3.MU",

    "POWERGRID.NS",

    "NER.F",

    "PCG",

    "NHPC.NS",

    "LNT",

    "KOP.BE",

    "CPN",

    "WEC",

    "NEE.V",

    "PWVI",

    "NYLD",

    "EIX",

    "FJG.BE",

    "PNE3.SG",

    "OGE",

    "ABY",

    "NENE",

    "OEWA.F",

    "ORR.BE",

    "KALPOWR.BO",

    "KOP.SG",

    "GXP",

    "OEWA.DE",

    "SPKE",

    "BKH",

    "HNP",

    "PNE3.F",

    "VCT.NZ",

    "SO",

    "GEIG",

    "POM",

    "KRE.MI",

    "FKZ.SG",

    "KPO.BE",

    "CMS",

    "KPO.F",

    "NEE",

    "HYSR",

    "CIGCF",

    "VLTSA.PA",

    "TE",

    "JEL.L",

    "CPX.TO",

    "AEE",

    "VVIT",

    "OEWA.BE",

    "AES",

    "L3XB.F",

    "EEEL4.SA",

    "EQST",

    "TPW.NZ",

    "PAM",

    "0987.HK",

    "ELLO",

    "ITC",

    "DYN",

    "XEL",

    "NEYVELILI.NS",

    "KEP",

    "ED",

    "FTS.TO",

    "EPW.AX",

    "AT",

    "ORR.F",

    "DTE",

    "EDN",

    "EBR",

    "ETR",

    "PPL",

    "ELI.BR",

    "SSOL",

    "NRN.MU",

    "ERJ.AX",

    "TRN.MI",

    "EE",

    "SCG",

    "KSK.NS",

    "PNW",

    "D",

    "0002.HK",

    "ELP",

    "POR",

    "PWC.F",

    "REO.V",

    "AEP",

    "ORA",

    "NEYVELILIG.BO",

    "MLVLT.PA",

    "EOC",

    "PNE3.DU",

    "FE",

    "NRN.BE",

    "XCN.F",

    "PIO.BE",

    "2389.HK",

    "SON1.MU",

    "FEV.DE",

    "FUX.BE",

    "2878.HK",

    "1185.HK",

    "BN2.SI",

    "NICE.MI",

    "WHR.F",

    "MAT1.BE",

    "0351.HK",

    "PHG",

    "XCN.MU",

    "EDIG",

    "1195.HK",

    "P82.SI",

    "WHR.DE",

    "JXR.PA",

    "WHIRLPOOL.NS",

    "0248.HK",

    "MCIG",

    "SCE.DE",

    "CAC1.BE",

    "SRP.BE",

    "0986.HK",

    "8226.HK",

    "S1A.SG",

    "KOSS",

    "SON.L",

    "WAT.AX",

    "LACR.PA",

    "VUZI",

    "MAT1.DU",

    "SGOC",

    "FN",

    "HAR",

    "0978.HK",

    "0889.HK",

    "PHIA.DU",

    "TXA.DU",

    "AFC.SI",

    "SNE",

    "0735.HK",

    "1888.HK",

    "SKUL",

    "XCN.DU",

    "0669.HK",

    "HOD.F",

    "HNL.DE",

    "KYW.MU",

    "KYW.F",

    "UEIC",

    "TXA.BE",

    "PHIA.MI",

    "0732.HK",

    "0283.HK",

    "WATT",

    "MAT1.MU",

    "0469.HK",

    "WHIRLPOOL.BO",

    "0698.HK",

    "KODK",

    "SRP.F",

    "AAPL",

    "VGUARD.NS",

    "AURZ",

    "LEX.PA",

    "VIDEOCON.BO",

    "2788.HK",

    "XCN.BE",

    "BUOB.SG",

    "VIDEOIND.NS",

    "0515.HK",

    "MSN",

    "ARCI",

    "RSH",

    "CONN",

    "BBY",

    "GME",

    "LFUS",

    "T9Z.MU",

    "HYB.F",

    "T9Z.F",

    "AEY",

    "AVT",

    "WEST",

    "WSO",

    "UPGI",

    "T9Z.DU",

    "TAIT",

    "WC3.MU",

    "ARW",

    "RELL",

    "RADA",

    "PRT.MI",

    "ZNCM",

    "PFL.L",

    "WSO.PA",

    "T9Z.BE",

    "8167.HK",

    "SMN1.DE",

    "2366.HK",

    "DIS",

    "XHNA.BE",

    "YT2A.F",

    "FOXA",

    "TCH.PA",

    "RTV.SG",

    "CBS",

    "VRL.AX",

    "QP2.F",

    "CJR-B.TO",

    "DENG",

    "BFLD",

    "CIDM",

    "WDP.HA",

    "VCXA.F",

    "KIN.BR",

    "STRZA",

    "DIALF",

    "JMDTELEFILM.BO",

    "VIAB",

    "LYV",

    "WDP.F",

    "XHN1.MU",

    "XHNA.F",

    "RWMI",

    "MCS",

    "BONA",

    "KUTV",

    "VCXA.SG",

    "RTV.BE",

    "1070.HK",

    "1009.HK",

    "XHNA.SG",

    "FIM.PA",

    "0200.HK",

    "KHYATI.BO",

    "TNM1.F",

    "SSET",

    "BFS.V",

    "REDG",

    "MDNT",

    "NGHT",

    "EVD.MU",

    "IMAX",

    "ITN.DU",

    "RTV.F",

    "ENT",

    "WIZD",

    "8220.HK",

    "TFGB.DE",

    "CCPI",

    "MEGACPO.MX",

    "IDC.TO",

    "TOE.F",

    "WDP.DU",

    "SPM.BE",

    "GCLA.BA",

    "0419.HK",

    "NXWB.F",

    "MSG",

    "NXW2.F",

    "NXW2.SG",

    "8173.HK",

    "CMCSA",

    "WDP.DE",

    "MERL.L",

    "TWX",

    "WWE",

    "YT2A.SG",

    "DIS.MX",

    "ETO.L",

    "MME.DU",

    "XHN1.F",

    "SAHARA.BO",

    "YXS.SG",

    "YXS.F",

    "X1T.SG",

    "KF4.SI",

    "WAC.HA",

    "GENC",

    "JAINIRRIG.BO",

    "CAT",

    "YXS.BE",

    "DE",

    "JO3.SG",

    "NHLE",

    "LNN",

    "ASTE",

    "ARTW",

    "ACE.BO",

    "TRTC",

    "MTW",

    "X1T.F",

    "AGCO",

    "CMCO",

    "TWI",

    "B2K.BE",

    "ALG",

    "KUO1.MU",

    "X1T.BE",

    "CNHI",

    "0631.HK",

    "B2K.F",

    "BWOWF",

    "JOY",

    "AGRO.BA",

    "TEX",

    "YXS.MU",

    "KWS.DE",

    "ADM",

    "BG",

    "STEV",

    "NRX.PA",

    "ZVF.F",

    "552.SI",

    "F34.SI",

    "BBTC.NS",

    "K6J.SI",

    "ZTHO",

    "NVAV.F",

    "OMEAG.BO",

    "OSW.SG",

    "SIP.BR",

    "ELD.AX",

    "QPJ.BE",

    "NBP.L",

    "ABAC",

    "LAKSHMIO.BO",

    "FRN.V",

    "E5H.SI",

    "YEWB",

    "LMNR",

    "KAKU.L",

    "PABL",

    "AGRC",

    "GDMS.PA",

    "TUR.NZ",

    "ZVF.MU",

    "SANWARIA.BO",

    "FDP",

    "FDM.F",

    "SNF.V",

    "VENKYS.BO",

    "MGW.V",

    "WARRENT.BO",

    "TURV",

    "SUNILAGR.BO",

    "KFBL.BO",

    "TF7A.SG",

    "IBA",

    "CLAD",

    "CVGW",

    "KARUTGLOB.BO",

    "39O.SG",

    "GLG.TO",

    "ANDE",

    "GRO",

    "AAC.AX",

    "LWP.TO",

    "AGRO",

    "GTK.DE",

    "ZVF.SG",

    "GNC.AX",

    "LNDC",

    "DEYU",

    "WBA.AX",

    "CQB",

    "ABG.V",

    "1117.HK",

    "KSCL.NS",

    "SANW",

    "4HL.BE",

    "SEED",

    "5JS.SI",

    "BF.MI",

    "AGT.TO",

    "PME",

    "LIC.NZ",

    "KSCL.BO",

    "KRITINUT.BO",

    "MC7.SI",

    "NBPO.L",

    "ALCO",

    "Z01.SI",

    "SCL.NZ",

    "ZVF.BE",

    "YZA.MU",

    "0322.HK",

    "AJI.MU",

    "T4B.SI",

    "Z85.SG",

    "2349.HK",

    "VIS.DU",

    "GNC.L",

    "KWZ2.F",

    "PPC",

    "WWAV",

    "RCL.TO",

    "CZZ.AX",

    "CALM",

    "BN.PA",

    "0MJA.BE",

    "P74.SI",

    "7KT.DU",

    "VIS.SG",

    "KIK.BE",

    "NESM.F",

    "NFR.DU",

    "NESTLEIND.NS",

    "KRFT",

    "C7Y.F",

    "0829.HK",

    "0151.HK",

    "SAP.TO",

    "NESR.F",

    "AVTNPL.NS",

    "POST",

    "PFL.AX",

    "KIK.F",

    "1076.HK",

    "Z1L.F",

    "Y03.SI",

    "NESR.DE",

    "DVO.L",

    "C7Y.SG",

    "SAFM",

    "UG5A.F",

    "YZA.F",

    "BTHR",

    "KWALITY.NS",

    "ZSK.F",

    "ZMF.SG",

    "L46.SI",

    "JVLAGRO.BO",

    "ZMF.F",

    "MFI.TO",

    "VIKASGRAN.BO",

    "ZZ8.F",

    "YZA.DU",

    "VLS.MI",

    "PATY.BA",

    "B0Z.SI",

    "LWAY",

    "ZO1.DU",

    "8269.HK",

    "SABE.PA",

    "HERDEZ.MX",

    "TATACOFFE.NS",

    "D03.SI",

    "PBH.TO",

    "YUII",

    "UG5A.SG",

    "ZSK.DU",

    "ZMF.BE",

    "YZA.SG",

    "RIBT",

    "UG5A.BE",

    "4HQ.F",

    "KSELTD.BO",

    "RAJOIL.BO",

    "BIMBOA.MX",

    "S10.SI",

    "GM2.SG",

    "YZA.BE",

    "LANC",

    "NSP.V",

    "C7Y.BE",

    "DUC.PA",

    "KYGA.L",

    "PF",

    "ZO1.SG",

    "KRBL.NS",

    "ZSK.BE",

    "KANELOIL.BO",

    "3M0.DU",

    "FRPT",

    "ZZ8.SG",

    "MINSAB.MX",

    "1717.HK",

    "MMMB",

    "TPK.TO",

    "Z1L.DE",

    "KCPSUGIND.NS",

    "WILC",

    "XYL.V",

    "0841.HK",

    "MCX.DU",

    "1006.HK",

    "3M0.F",

    "ZO1.BE",

    "1174.HK",

    "VIS.F",

    "3838.HK",

    "0220.HK",

    "TATE.L",

    "C7Y.MU",

    "PFD.L",

    "U01.SI",

    "H2R.DE",

    "VIMALOILQ.BO",

    "CLR.TO",

    "ZO1.MU",

    "KWZ2.MU",

    "TOF",

    "KEL.DE",

    "KSE.NS",

    "VADILINDQ.BO",

    "WATER.BO",

    "ABF.L",

    "1230.HK",

    "7KT.DE",

    "ANFI",

    "2319.HK",

    "KOHINOOR.NS",

    "ZO1.HA",

    "1068.HK",

    "HINDIND.BO",

    "Q01.SI",

    "1886.HK",

    "CENT",

    "VIRATCRA.BO",

    "NI3.DU",

    "KRBL.BO",

    "Z85.F",

    "CHEF",

    "SPTN",

    "HAIN",

    "DIT",

    "0374.HK",

    "CORE",

    "O32.SI",

    "ALHER.PA",

    "T16.SI",

    "NWF.L",

    "GCL.TO",

    "MLSRP.PA",

    "MIKO.BR",

    "K03.SI",

    "SYY",

    "HPG1.F",

    "0197.HK",

    "0060.HK",

    "UNFI",

    "LYG",

    "WBK",

    "HSBC",

    "SAN",

    "UBS",

    "SFBS",

    "BLX",

    "CS",

    "EWBC",

    "BCS",

    "BCA",

    "WF",

    "BBVA",

    "BSBR",

    "BFR",

    "BBDO",

    "DB",

    "CIB",

    "BPOP",

    "HDB",

    "IRE",

    "FBP",

    "BCH",

    "KB",

    "BSMX",

    "GGAL",

    "SMFG",

    "BBD",

    "NBCB",

    "ITUB",

    "BMA",

    "SHG",

    "MFG",

    "ENI",

    "CPL",

    "AYA.TO",

    "TIM.SG",

    "8198.HK",

    "TTS.AX",

    "LAD.L",

    "TIM.DU",

    "SGMS",

    "PYD.V",

    "TAH.AX",

    "HWC.BE",

    "AGI.AX",

    "GC.TO",

    "DEQ.V",

    "CPHC",

    "TIM.BE",

    "WBAI",

    "KING",

    "PTEC.L",

    "TIM.F",

    "TWOC",

    "DDE",

    "IKGH",

    "N4G.BE",

    "WMH.L",

    "MGAM",

    "WORD.SG",

    "CHDN",

    "APU",

    "SMLP",

    "UIL",

    "DGAS",

    "SXE",

    "0003.HK",

    "ATO",

    "J4S.F",

    "XSG.F",

    "QUS.F",

    "SWX",

    "STR",

    "WGL",

    "NKA",

    "CNP",

    "NJ1.F",

    "LG",

    "CPK",

    "SPH",

    "NGG",

    "TEG",

    "SJI",

    "CQH",

    "NWN",

    "1083.HK",

    "CFY.V",

    "AJ2.SI",

    "W-PH.TO",

    "VNR.TO",

    "2688.HK",

    "CLNE",

    "EGAS",

    "QUS.BE",

    "TOG.BE",

    "RGCO",

    "GAS",

    "OKE",

    "GUJRATGAS.NS",

    "PNY",

    "GKG.BE",

    "TGS",

    "NJR",

    "MAS",

    "HW",

    "CCCL",

    "CSTE",

    "TREX",

    "CBPX",

    "JHX.AX",

    "CIL.F",

    "HIL.AX",

    "VCT.PA",

    "CADC",

    "STCK",

    "NXR.L",

    "91A.BE",

    "1313.HK",

    "CCOM",

    "CTLE",

    "NITCO.BO",

    "HEI.SG",

    "NCLIND.BO",

    "JENSONIC.BO",

    "NCS",

    "VMMA.PA",

    "APOG",

    "SHREECEM.BO",

    "WIB.DE",

    "NI9.F",

    "NTK",

    "XI9.F",

    "AAON",

    "VMC.F",

    "INH.DE",

    "PGEM",

    "5S2.F",

    "2233.HK",

    "OZV2.SG",

    "TPK.L",

    "SGO.PA",

    "WOS.L",

    "USCR",

    "XST.BE",

    "LG.PA",

    "CWX.TO",

    "ASPN",

    "KGP.L",

    "FBU.NZ",

    "USLM",

    "BECN",

    "VIC.TO",

    "OZV2.F",

    "TGLS",

    "CRH.L",

    "LAMOSA.MX",

    "DOOR",

    "RGSE",

    "OC",

    "PLS.TO",

    "AWI",

    "D3I.F",

    "GFF",

    "JKCEM.BO",

    "MLM",

    "OLH.AX",

    "USG",

    "SINTEX.BO",

    "AXIH",

    "FERR.BA",

    "MADHAV.NS",

    "MSLH.L",

    "OKJ.AX",

    "INH.BE",

    "BZUR.MI",

    "N02.SI",

    "HEI.DE",

    "WIB.SG",

    "TH7.F",

    "P52.SI",

    "VMC",

    "TIE.BE",

    "1136.HK",

    "NX",

    "PGTI",

    "UFPI",

    "STO3.F",

    "91A.F",

    "IBP",

    "KAKATCEM.NS",

    "GCC.MX",

    "OCL.NS",

    "VMC.SG",

    "Z59.SI",

    "IESC",

    "ASHRAM.BO",

    "VJC.SG",

    "OBA.F",

    "JPASSOCIA.NS",

    "FWI.BE",

    "OKA.F",

    "LT.NS",

    "KNRCON.NS",

    "M6Q.SG",

    "ICA.MX",

    "YV4.F",

    "DOW.AX",

    "M6Q.BE",

    "KLR.L",

    "WSP.TO",

    "VTQ.SG",

    "KAJ.F",

    "KEP1.SG",

    "1318.HK",

    "BN4.SI",

    "OTC.AX",

    "EN.PA",

    "ICSA.F",

    "3303.HK",

    "FIX",

    "XD4.MU",

    "AYO.DE",

    "VJC.BE",

    "VIE.AX",

    "JP2.F",

    "XSZ.F",

    "KNRCON.BO",

    "G7Y.F",

    "TFI.MI",

    "YIT.SG",

    "WDS.AX",

    "5AA.BE",

    "UGL.AX",

    "VMG.AX",

    "XD4.SG",

    "YIT.DU",

    "MAH.AX",

    "AREVA.PA",

    "EME",

    "K1Q.SI",

    "F1E.SI",

    "QF6.SI",

    "OCI1.DE",

    "TKK1.SG",

    "LDYA.F",

    "VASCONEQ.NS",

    "MYRG",

    "E3B.SI",

    "OCI1.BE",

    "SEC.PA",

    "CKK.V",

    "WID.F",

    "LEI.AX",

    "LAM.L",

    "SQU.BE",

    "DG.PA",

    "VALECHEN.BO",

    "KEDIACN.BO",

    "QAA.SG",

    "KJ5.SI",

    "SNC.TO",

    "OBA.DU",

    "UG8K.MU",

    "GKX.V",

    "G6N.F",

    "JEG.F",

    "YIT.F",

    "FWI.F",

    "YRM.MI",

    "QAA.F",

    "NYVK.F",

    "JEG.SG",

    "SOX.TO",

    "VSFPROJ.BO",

    "TSE.AX",

    "WTB3.MU",

    "PIKE",

    "2288.HK",

    "BAD.TO",

    "MGNS.L",

    "SQU.SG",

    "CBI",

    "QCQ.F",

    "RGI.V",

    "UG8K.F",

    "STEWARTQ.BO",

    "PWR",

    "0190.HK",

    "KAJ.SG",

    "PRXG",

    "GWBU",

    "SQU.MU",

    "5DL.SI",

    "Q0X.SI",

    "CUQ.TO",

    "XD4.F",

    "B7P.F",

    "ARE.TO",

    "DRT.TO",

    "Y02.SI",

    "YIT.MU",

    "BDT.TO",

    "G7Y.SG",

    "0947.HK",

    "01K.F",

    "XD4.DU",

    "FWI.DU",

    "UNITY.BO",

    "YIT.BE",

    "KIE.L",

    "BYG.MU",

    "LDYA.BE",

    "OCI1.SG",

    "K6B.BE",

    "5AA.F",

    "VTQ.BE",

    "XSZ.BE",

    "XD4.BE",

    "WTP.AX",

    "O05.SI",

    "MLLEO.PA",

    "SLT.DE",

    "5CF.SI",

    "QAA.DU",

    "XSZ.DU",

    "POLL.BA",

    "QUNR",

    "SNOW",

    "SIX",

    "OWW",

    "VGGL",

    "FUN",

    "PRXI",

    "MMYT",

    "SOMD",

    "SFXE",

    "TIXC",

    "CUK",

    "RBY",

    "MDW",

    "WAC.AX",

    "OBF.BE",

    "PRU.TO",

    "ETF.V",

    "TDC.V",

    "GSE.V",

    "XGC.F",

    "WFP.V",

    "TLR.V",

    "RNY.F",

    "VVI.V",

    "RG.V",

    "TAM.AX",

    "THM",

    "HMY",

    "EGI",

    "OSTO",

    "SAND",

    "EDGA.MU",

    "KN6.SG",

    "LAN.V",

    "POG.L",

    "NG",

    "SSV.V",

    "9IS.F",

    "GLD.V",

    "MSR.AX",

    "VGZ",

    "PTQ.TO",

    "WAF.V",

    "MTO.V",

    "XRC.TO",

    "AOD1.SG",

    "SBW.V",

    "KIN2.DE",

    "KGD.AX",

    "KGC.V",

    "SAR.AX",

    "AGI",

    "GV.V",

    "EDG.DE",

    "TRX",

    "TGM.V",

    "CAL.TO",

    "AEM.TO",

    "AU",

    "EGO",

    "ORE.TO",

    "XGC.BE",

    "DPM.TO",

    "EDW.V",

    "DUO.AX",

    "PLG.TO",

    "CAY.AX",

    "CDX.V",

    "OXU.BE",

    "BOW.V",

    "GHDC",

    "KCN.AX",

    "GFI",

    "AOD1.MU",

    "MLDUR.PA",

    "VKA.AX",

    "GSS",

    "MBG.V",

    "NGN.V",

    "RMS.AX",

    "SA",

    "GUY.TO",

    "VIT.V",

    "RIC",

    "SLR.AX",

    "OVXA.F",

    "NWR.AX",

    "RXL.AX",

    "SGN.V",

    "OOO.V",

    "RNY.MU",

    "OWC.BE",

    "LSG.TO",

    "TNX.TO",

    "KGL.V",

    "EDGA.BE",

    "ABX.TO",

    "EVR.AX",

    "RML.V",

    "GRZG",

    "SRM.F",

    "BG.V",

    "NEM",

    "AGL.V",

    "MGH",

    "ELY.V",

    "NEV.V",

    "GBZ.AX",

    "ICG.V",

    "VG.TO",

    "DGC.TO",

    "AUY",

    "3V4.F",

    "NIO.AX",

    "AMX.V",

    "CXD.V",

    "CTGO",

    "JEJ.BE",

    "RNY.BE",

    "NGD.TO",

    "SA.V",

    "MOZ.TO",

    "TBR.AX",

    "TGD",

    "AIVN",

    "GSV",

    "GTU",

    "MEI.AX",

    "IBG.AX",

    "QGR.V",

    "G.TO",

    "DNG.TO",

    "NMM.F",

    "CGE.V",

    "XPL",

    "TRA.V",

    "CRJ.TO",

    "DRA.AX",

    "LODE",

    "SMF.TO",

    "EMR.V",

    "SIP.V",

    "WGF.V",

    "KCN.BE",

    "FNV",

    "OVXA.BE",

    "OXU.F",

    "LSG",

    "SBB.TO",

    "RUP.V",

    "3V3.SG",

    "EGX.V",

    "DNA.TO",

    "NVX.V",

    "KGN.TO",

    "BSR.AX",

    "AAU",

    "NCM.AX",

    "RPM.V",

    "ORS.AX",

    "BTG",

    "QS7.F",

    "TXG.TO",

    "CDA.V",

    "SEA.TO",

    "DUB1.F",

    "YRB-A.TO",

    "KG.V",

    "KIN2.F",

    "AUQ",

    "SLR.TO",

    "TMM.TO",

    "CEE.TO",

    "YRI.TO",

    "3V4.BE",

    "KGI.TO",

    "IMII",

    "E5Y.F",

    "CLD.V",

    "RDU.V",

    "SBU.AX",

    "RNY.DU",

    "RBX.V",

    "WDO.TO",

    "RPR.V",

    "1194.HK",

    "AAR.AX",

    "PPP",

    "TTG.V",

    "ABI.V",

    "LGM.AX",

    "OGC.AX",

    "SUP.V",

    "CEY.L",

    "MAE.V",

    "RYSMF",

    "RRL.AX",

    "GRO.V",

    "ZVL.SG",

    "TNR.V",

    "SVV.V",

    "K1IA.F",

    "SPA.V",

    "AVI.BE",

    "XGC.SG",

    "3V4.MU",

    "KGJI",

    "CD.V",

    "RRS.L",

    "SVLC",

    "NGD",

    "HMX.V",

    "TXR.V",

    "AZ.TO",

    "KGL.AX",

    "VE7.F",

    "BAA",

    "Q9I.SG",

    "MYNG",

    "ZON.V",

    "RGLD",

    "IAU.AX",

    "TKK.V",

    "PGLC",

    "GME.AX",

    "XME.V",

    "MQR.V",

    "SGA.V",

    "EUR.PA",

    "IAG",

    "KER.TO",

    "NGM.V",

    "PGOL",

    "XRA",

    "UGD.V",

    "SBGL",

    "DRD",

    "SGR.TO",

    "OBS.AX",

    "SIH.MU",

    "OE6.MU",

    "OGC.TO",

    "AU.V",

    "HAM1.MU",

    "CZ.V",

    "KAM.V",

    "HRC.V",

    "GCMN",

    "JEJ.SG",

    "SCA.V",

    "ECR.V",

    "LVCA",

    "P.TO",

    "3V4.SG",

    "ABS.V",

    "OGC.NZ",

    "NBU.V",

    "HYK.BE",

    "HAM1.F",

    "RRHI",

    "EDGA.SG",

    "KOR.TO",

    "CLH.V",

    "ANV",

    "DUB1.MU",

    "CCM.TO",

    "DUB1.SG",

    "ABX",

    "HAW.AX",

    "OL1.SG",

    "GMV.V",

    "JEJ.F",

    "GCU.V",

    "NBRI",

    "GDX.V",

    "OPW.V",

    "OE6.SG",

    "ASW.V",

    "RNY.DE",

    "LG.V",

    "ORA.TO",

    "OR.TO",

    "LEX.TO",

    "OP6.SG",

    "NCM.V",

    "AOD1.BE",

    "RGL.TO",

    "CPN.TO",

    "MML.AX",

    "TG5.F",

    "TOE.V",

    "WRP.V",

    "FNV.TO",

    "NST.AX",

    "GG",

    "RV0.F",

    "ATN.TO",

    "AUQ.TO",

    "VVC.V",

    "GORO",

    "HAM1.SG",

    "LAD.V",

    "CWG.AX",

    "TME.V",

    "WDG.V",

    "RCT.V",

    "MAX.TO",

    "NSX.V",

    "MGG.V",

    "ORO.V",

    "MCK.V",

    "AOD1.F",

    "PPP.V",

    "UR2.BE",

    "AOD1.DU",

    "AKG",

    "BTO.TO",

    "AGD.L",

    "SSP.V",

    "NCG.V",

    "KGC",

    "6AZ.DE",

    "SOH.V",

    "VL5.F",

    "OX.V",

    "NAG.AX",

    "AGI.TO",

    "NME.AX",

    "AEM",

    "VLGEA",

    "WMK",

    "SFM",

    "S6M.BE",

    "OCDO.L",

    "SWY",

    "SBRY.L",

    "QKLS",

    "CHDRAUIB.MX",

    "WF3.F",

    "SVU",

    "WWR.SG",

    "EMP-A.TO",

    "PJP.SG",

    "PJP.MU",

    "YSON.F",

    "ATD-B.TO",

    "PJP.BE",

    "CA.PA",

    "MZP.SG",

    "WWR.MU",

    "NGVC",

    "MRW.L",

    "WOW.AX",

    "FWM",

    "SFS",

    "NWC.TO",

    "AHOB.DE",

    "TSCO.L",

    "PJP.F",

    "CO.PA",

    "S6M.DU",

    "CBD",

    "WN.TO",

    "DEG",

    "WWR.F",

    "PCAR4.SA",

    "KR",

    "TFM",

    "WFM.BE",

    "AH.MI",

    "WFM",

    "IMKTA",

    "RNDY",

    "CASY",

    "HUM",

    "MOH",

    "MHH.DE",

    "HNT",

    "MGLN",

    "NXG.V",

    "PYHH",

    "QUAL3.SA",

    "CVS",

    "ESRX",

    "ANTM",

    "WCG",

    "CI",

    "UNH",

    "AET",

    "WLP.MX",

    "HRAA",

    "HIIQ",

    "GD6.SG",

    "MHH.BE",

    "CNC",

    "UAM",

    "HQY",

    "MDSO",

    "VEEV",

    "MRJ.BE",

    "STRM",

    "MED.PA",

    "MDFI",

    "IMPR",

    "BGAT",

    "SDT.PA",

    "MTBC",

    "ADAT",

    "QY1.BE",

    "MDAS",

    "PVTA",

    "OC9.F",

    "NGH.V",

    "OMCL",

    "ATHN",

    "VHGI",

    "IS8.DE",

    "DIGP",

    "TCEC",

    "CGM.PA",

    "COO.AX",

    "CGS.AX",

    "PINC",

    "HSTM",

    "OMCM",

    "WBSI",

    "MRGE",

    "QSII",

    "CLRX",

    "WBMD",

    "CERN",

    "GLH.AX",

    "MWX.V",

    "CNAB",

    "CPSI",

    "ICA",

    "WEQ.TO",

    "AEGN",

    "CIIC",

    "ZHEH.L",

    "PO6.F",

    "MTZ",

    "GV",

    "LAYN",

    "ZHJ.SG",

    "ZHJ.F",

    "ZHJ.MU",

    "OEST.BA",

    "DY",

    "UFG.BE",

    "GLDD",

    "ORN",

    "TCL.AX",

    "PO6.BE",

    "TPC",

    "JPINFRATE.NS",

    "FLR",

    "PRIM",

    "IRB.NS",

    "YOGISUNG.BO",

    "STRL",

    "AGX",

    "MQA.AX",

    "GVA",

    "KIRK",

    "RH",

    "BBBY",

    "WSM",

    "HVT",

    "PIR",

    "AMWD",

    "QTM.AX",

    "OXV.BE",

    "OXV.F",

    "BSET",

    "0607.HK",

    "DEER",

    "0837.HK",

    "NVFY",

    "VARUN.BO",

    "WUG3.BE",

    "VIB3.DE",

    "OXV.SG",

    "MHK",

    "LNF.TO",

    "STLY",

    "JY8.DU",

    "1169.HK",

    "JY8.SG",

    "FLXS",

    "HBM.DU",

    "SO.PA",

    "0531.HK",

    "JAIPAN.BO",

    "FBHS",

    "0724.HK",

    "AAM.BE",

    "0477.HK",

    "NTZ",

    "0713.HK",

    "JA3.F",

    "SCSS",

    "VASCONI.MX",

    "JA3.BE",

    "QD4.F",

    "NDH1.F",

    "LEG",

    "CWA.TO",

    "WUG.DU",

    "MVN.NZ",

    "LZB",

    "JY8.F",

    "GKE.BE",

    "TPX",

    "EFOI",

    "AFBG",

    "NCFT",

    "DOME.BA",

    "WUG3.SG",

    "HOFT",

    "SYMPHONY.BO",

    "PTE.V",

    "LBY",

    "EVRY",

    "RCH.TO",

    "1198.HK",

    "ETH",

    "UDIS.PA",

    "WUG.DE",

    "HASC",

    "LHCG",

    "GTIV",

    "ADUS",

    "CHE",

    "BIOS",

    "AMED",

    "AFAM",

    "TBL.TO",

    "AMZZ",

    "HD.BA",

    "HD",

    "KFI1.BE",

    "LL",

    "TTS",

    "BLDR",

    "HD.MX",

    "LOW",

    "KO2.SG",

    "BRC.AX",

    "THC",

    "P47.SI",

    "SNZ.AX",

    "PHG.AX",

    "YCR.F",

    "MKAN.DE",

    "KOVAI.NS",

    "NHC.TO",

    "LPNT",

    "MAK.F",

    "SPI.L",

    "DYII",

    "CCM",

    "MKAN.DU",

    "RHK.DE",

    "L53.F",

    "FME.DE",

    "VRT.AX",

    "SHL.AX",

    "SSY",

    "JYNT",

    "GXL.AX",

    "USMD",

    "ZDHJERK.BO",

    "L53.SG",

    "QC7.SI",

    "TRL.BE",

    "MED.F",

    "AHI.V",

    "SYR.L",

    "ADPT",

    "MAK.HA",

    "PRY.AX",

    "FRE.DE",

    "KO2.BE",

    "FME.MU",

    "VCA.F",

    "RHC.AX",

    "HCA",

    "AMSG",

    "SEM",

    "CYH",

    "UHS",

    "CLX",

    "NWL",

    "ACU",

    "LCUT",

    "JAH",

    "HELE",

    "EGN",

    "OEL.AX",

    "RAI.AX",

    "GTE.TO",

    "I8U.BE",

    "SLG.V",

    "MPO",

    "KEC.V",

    "SGY.TO",

    "NAMG",

    "IE.TO",

    "3VNA.BE",

    "DXE.V",

    "LEI",

    "RSRV",

    "PSH.V",

    "APC",

    "DLOV",

    "BRPC",

    "CWQ.V",

    "PMO.L",

    "CEGX",

    "MEI.V",

    "NZ.V",

    "YUMA",

    "BEN.V",

    "LOGL",

    "VII.TO",

    "NQQ.F",

    "ATH.TO",

    "AZA.V",

    "KUB.V",

    "COP",

    "AE-A.V",

    "Q9H1.DE",

    "CCR.V",

    "IPRC",

    "BNP.TO",

    "GENL.L",

    "KIJ.F",

    "POU.TO",

    "MCF",

    "VNOM",

    "NDRO",

    "PEH.V",

    "AOS.V",

    "ROC.AX",

    "EPD",

    "BECC",

    "FPP",

    "PNRG",

    "QE1.F",

    "AJQ.AX",

    "702A.F",

    "CYG.V",

    "SRN.V",

    "NZO.NZ",

    "XCQ.BE",

    "STP.TO",

    "ORC-B.V",

    "FRU.TO",

    "AOW.AX",

    "EPS.TO",

    "OPC.DU",

    "NUK.V",

    "STO.AX",

    "SGY",

    "Q9H1.MU",

    "SEN.TO",

    "OIL.V",

    "PTV.V",

    "TPN.V",

    "RIOB",

    "PVE.AX",

    "SARA",

    "FEEC",

    "PXL.V",

    "EEQ",

    "PNE.V",

    "ATPGQ",

    "GBR",

    "COG",

    "ARX.TO",

    "RTK.TO",

    "EOG",

    "ESSE",

    "OXY",

    "CJ.TO",

    "MTDR",

    "PXD",

    "PCO.V",

    "ABL.V",

    "MNH.V",

    "USO.V",

    "NE.V",

    "HN.V",

    "QGEP3.SA",

    "SLK.V",

    "C68.SI",

    "TPL.TO",

    "WEB.V",

    "FXEN",

    "ECCE",

    "SRX.V",

    "KEL.TO",

    "44W.F",

    "ROSE",

    "WPL.AX",

    "PPP.AX",

    "EXXI",

    "RE.TO",

    "TNP.TO",

    "HINDOILEXP.BO",

    "MCEP",

    "RICE",

    "CDB.V",

    "TAE.V",

    "CNQ",

    "TEG.AX",

    "CPG",

    "NC2B.DU",

    "SGL.TO",

    "BPT.AX",

    "DLS.AX",

    "OEX.AX",

    "JONE",

    "TDO.AX",

    "NOG.V",

    "XCO",

    "ENSV",

    "YQJ1.BE",

    "TGL.TO",

    "EQU.TO",

    "ZTA.AX",

    "EGO.AX",

    "CNQ.TO",

    "PNK.MU",

    "RAW.AX",

    "MUR",

    "SAH.V",

    "DKL",

    "0883.HK",

    "NVAL.SG",

    "OS7.SG",

    "EOG.V",

    "XEC",

    "CNX",

    "CMT.AX",

    "OYL.V",

    "SU",

    "YQJ1.SG",

    "VGN.V",

    "OGI.AX",

    "3899.HK",

    "CPE",

    "TPT.AX",

    "EE.TO",

    "TET.TO",

    "LRE.TO",

    "MVO",

    "RMP.TO",

    "DVN",

    "3PW.BE",

    "OIL.NS",

    "PHX",

    "SDE.V",

    "HEI.V",

    "I8U.DU",

    "BKX.TO",

    "JKX.SG",

    "CHK",

    "WPX",

    "MEMP",

    "Q9H1.SG",

    "SNV.V",

    "LPI",

    "RRC",

    "CVI-A.TO",

    "MMT.TO",

    "CPPXF",

    "SFT.V",

    "QEGY",

    "MPET",

    "GXE.TO",

    "OAKR",

    "EPE",

    "TSV.AX",

    "OAS",

    "ARP",

    "WCE.V",

    "BTE.TO",

    "I7R.F",

    "PXX.TO",

    "TMV.V",

    "PDCE",

    "3PW.MU",

    "NFX",

    "BNK.TO",

    "VOIL",

    "POE.V",

    "CRBO",

    "MEG.TO",

    "XCQ.DU",

    "FST",

    "BWPC",

    "SEH.AX",

    "FANG",

    "AOC.AX",

    "T13.SI",

    "RRX.TO",

    "TGC",

    "SDR",

    "OXX.AX",

    "CRK",

    "SM",

    "CAZ.TO",

    "LNCO",

    "ALTX",

    "EGY",

    "PRY.V",

    "NGMC",

    "TLM.TO",

    "NORX",

    "WHZ",

    "NSRS",

    "CR.TO",

    "XOP.V",

    "BAS.AX",

    "DNR",

    "CRS.V",

    "HUGE",

    "LOI.V",

    "AAV.TO",

    "MXC",

    "JPR.AX",

    "AEN.V",

    "WHX",

    "YGK.F",

    "MEP",

    "VET.TO",

    "HZN.AX",

    "PCL.AX",

    "ENLK",

    "IOG.V",

    "AOIL",

    "TLM",

    "I8U.F",

    "MQL.V",

    "STX.AX",

    "MOC.V",

    "VUL.V",

    "QE1.SG",

    "NFG",

    "JOY.TO",

    "NVA.TO",

    "MILL",

    "APA",

    "TENG",

    "BCEI",

    "HUSA",

    "BTE",

    "FAC.DE",

    "ZN",

    "MET.TO",

    "APAGF",

    "CWV.V",

    "ANG.V",

    "CLR",

    "NSE.AX",

    "BXE",

    "SDX.V",

    "CWEI",

    "PTA.V",

    "LNR.AX",

    "ARH.V",

    "OPC.MU",

    "CKE.TO",

    "QRE.V",

    "GUL.V",

    "EPM",

    "3QO.SG",

    "MLDYX.PA",

    "JNX.V",

    "BX.TO",

    "AXAS",

    "NWN.V",

    "ARN.V",

    "KIK.AX",

    "BG.L",

    "GTE",

    "SCP.TO",

    "HPGS",

    "NZO.AX",

    "MPGS",

    "COD.AX",

    "TLW.L",

    "CIE",

    "WSE.V",

    "SFY",

    "Q9H1.BE",

    "COQ.V",

    "CHKR",

    "OGNG",

    "COE.AX",

    "ESCR",

    "PER",

    "DBRM",

    "YCP.DU",

    "PT0.SG",

    "AXL.TO",

    "YCP.DE",

    "NFG.F",

    "CAK",

    "OPHR.L",

    "TVOC",

    "NSLP",

    "HNR",

    "CBV.V",

    "CQE.TO",

    "BRN",

    "C8K.F",

    "OEC.V",

    "PE",

    "ECR",

    "REN",

    "ROYL",

    "CRZO",

    "MRO",

    "PSA.AX",

    "SELAN.NS",

    "ROYT",

    "EQT",

    "SPS.AX",

    "ALV.V",

    "NKO.TO",

    "SHM.V",

    "BDCO",

    "IAE.TO",

    "ESTE",

    "PEII",

    "MXM.V",

    "SPI.V",

    "AEDC",

    "NGE.AX",

    "AMZG",

    "WLR.AX",

    "PVA",

    "ERF.TO",

    "PBT",

    "SJT",

    "SOG.V",

    "SFPI",

    "BOE.V",

    "AFR.L",

    "ECA.TO",

    "BRS.V",

    "ACK.F",

    "TOU.TO",

    "WHN.AX",

    "YCP.SG",

    "DCK.V",

    "OIL.BO",

    "QSR.F",

    "JKX.F",

    "PXT.TO",

    "LRE",

    "AVD.AX",

    "SIA.L",

    "XCQ.SG",

    "MVN.V",

    "IOG.AX",

    "FECOF",

    "OXC.TO",

    "PQ",

    "LINE",

    "GPOR",

    "PNO.F",

    "GDP",

    "BWPCE",

    "TMK.AX",

    "BRHM",

    "XEL.V",

    "CBNR",

    "TBE.TO",

    "XCQ.F",

    "FTTN",

    "DXA.V",

    "EOPT",

    "TT.TO",

    "SNM.V",

    "EOX",

    "SWN",

    "UPL",

    "HES",

    "SEPL.L",

    "WRES",

    "WVR.V",

    "BXE.TO",

    "QEC.TO",

    "OSH.AX",

    "XCQ.MU",

    "TNP.AX",

    "DVC-H.V",

    "TGA",

    "EBY.V",

    "CPG.TO",

    "EFLO",

    "PWT.TO",

    "ROE.V",

    "KFG.V",

    "AET-UN.TO",

    "TCF.V",

    "PMT.TO",

    "MEN.V",

    "PTR.V",

    "TUS.V",

    "ERHE",

    "GNE",

    "VOC",

    "RFE.AX",

    "SN",

    "LEG.TO",

    "SPP",

    "CQM.V",

    "SDT",

    "PCQ.V",

    "MMR.AX",

    "MTS1.DU",

    "KWK",

    "WDN.TO",

    "PRL.AX",

    "GST",

    "TVL.V",

    "ZAR.TO",

    "TPLM",

    "TTE.AX",

    "DEE.TO",

    "SPE.TO",

    "NBL",

    "QPN.AX",

    "SUO.TO",

    "PFC.V",

    "KEY.AX",

    "PGF.TO",

    "PRE.TO",

    "NX9.F",

    "DEJ",

    "CRC",

    "PSSS",

    "OGY.AX",

    "USEG",

    "PPY.TO",

    "HEL.V",

    "NGY.V",

    "SPND",

    "BBLS",

    "TEXS",

    "HDY",

    "CN9.SG",

    "MPG.V",

    "KOS",

    "PLPC",

    "CSTU",

    "ABAT",

    "ARTX",

    "ULBI",

    "AMOT",

    "CAPC",

    "FELE",

    "MAG",

    "MMED",

    "HPJ",

    "BNSO",

    "BLDP",

    "GAI",

    "SVT",

    "XIDEQ",

    "CETC",

    "BDC",

    "RTBC",

    "AOS",

    "ZBB",

    "CPST",

    "GTI",

    "CUI",

    "LGL",

    "OSIS",

    "LPTH",

    "LSCG",

    "AETI",

    "AMSC",

    "NJ",

    "NPWZ",

    "LYTS",

    "HYGS",

    "AXPW",

    "EMR",

    "AUSI",

    "LIME",

    "APWC",

    "ENS",

    "AIMC",

    "REFR",

    "HOLI",

    "HEAT",

    "SNHY",

    "HNH",

    "ZERO",

    "NFEC",

    "BGC",

    "NPO",

    "PNR",

    "TRS",

    "OFLX",

    "CIR",

    "MWA",

    "CTEI",

    "CVVT",

    "PH",

    "CCF",

    "SXI",

    "WTS",

    "B",

    "NL",

    "FAST",

    "AIT",

    "WP7.MU",

    "QIG.F",

    "KWG.DU",

    "WAIR",

    "NEWP",

    "KWG.F",

    "WHBRADY.BO",

    "1001.HK",

    "AXE",

    "KWG.DE",

    "ECM.L",

    "LAWS",

    "SAMS.PA",

    "SLTZ",

    "X7C.F",

    "FTT.TO",

    "PATELSAI.BO",

    "PKOH",

    "WP7.F",

    "HWD.TO",

    "1039.HK",

    "WCC",

    "MPS.BE",

    "MSM",

    "TITN",

    "HWCC",

    "WJX.TO",

    "VALV",

    "RAA.DE",

    "HDS",

    "DXPE",

    "GWW",

    "MLFRC.PA",

    "OMH.AX",

    "NOV.V",

    "JOR.V",

    "RVM.TO",

    "RVA.V",

    "QR2.SG",

    "ZVW.F",

    "GPO.V",

    "GSH.V",

    "CNY.V",

    "SVB.TO",

    "BLT.L",

    "EMXX",

    "NCF.TO",

    "FSY.TO",

    "BIZ.F",

    "PLL.V",

    "X9X.MU",

    "CL.V",

    "WSE.F",

    "VGQ.TO",

    "MTRN",

    "X9CN.SG",

    "SB.V",

    "MDO.V",

    "OD8.F",

    "TKO.TO",

    "RU7.F",

    "NED.V",

    "0975.HK",

    "VNP.TO",

    "CKR.V",

    "URC.V",

    "PEM.V",

    "WHC.AX",

    "ZVW.BE",

    "BVQ.V",

    "GXY.AX",

    "A7L.F",

    "OCC.V",

    "WEY.V",

    "IRL.TO",

    "APGA",

    "JAU.V",

    "TYE.V",

    "WG3.F",

    "ERD.TO",

    "DMI.BE",

    "ZINC",

    "FRO.TO",

    "ALI.V",

    "RDI.TO",

    "ZAZ.TO",

    "JMI.SG",

    "PCV.V",

    "EJZ.MU",

    "BCM.V",

    "1733.HK",

    "JM4A.SG",

    "RIO.TO",

    "LTH.V",

    "COR.V",

    "GMX.TO",

    "CGG.TO",

    "AML.V",

    "BEX.V",

    "FJZ.F",

    "CVLB.F",

    "RRI.V",

    "CMP",

    "CYU.V",

    "AUV.V",

    "SOI.V",

    "PAL",

    "HAS.AX",

    "MUX",

    "JMC.V",

    "GWM.DE",

    "SLCA",

    "VLA.V",

    "NVY.V",

    "GCX.V",

    "FDR.V",

    "6IZ.F",

    "QG1.F",

    "KMT.V",

    "JMSN",

    "O6M.BE",

    "TCK-A.TO",

    "AUMN",

    "NOC.BE",

    "TLR",

    "REG.V",

    "YGL.F",

    "ZRL.AX",

    "TTS.V",

    "CRB.V",

    "XAM.AX",

    "VALE3.PA",

    "SWA.V",

    "BESE",

    "UCD.SG",

    "RZ.V",

    "TALV.L",

    "33X1.F",

    "URG",

    "SLVH",

    "BMIX",

    "0319.HK",

    "HSC",

    "BLV.V",

    "GPH.AX",

    "RIO.AX",

    "SRI.V",

    "PVG",

    "KDX.TO",

    "OGD.TO",

    "GRR.V",

    "GCR.V",

    "EPO.V",

    "AME.V",

    "DNN",

    "POLY.L",

    "QR2.F",

    "NCX.V",

    "CDV.AX",

    "XTT.V",

    "GBB.V",

    "B.V",

    "DYL.AX",

    "QU5A.F",

    "33X1.SG",

    "CWM.V",

    "RF9.F",

    "LUN.TO",

    "RIO.L",

    "PMA.V",

    "KCP.F",

    "KRB.AX",

    "PZG.TO",

    "XZP.F",

    "NGE.V",

    "OAA.SG",

    "FMR.V",

    "ATL",

    "NGC.V",

    "MFX.V",

    "DVN.V",

    "KSK.V",

    "CYL.AX",

    "WTT.BE",

    "CCJ",

    "NWR.L",

    "RAE.BE",

    "PDL.TO",

    "SNR.V",

    "LGO.V",

    "KLM.V",

    "S5M.F",

    "AHE.SG",

    "TGX.V",

    "ABN.V",

    "KM.V",

    "LAT.V",

    "RAE.MU",

    "ARI.V",

    "SLVM",

    "PLY.V",

    "VTM.MU",

    "KRR.V",

    "NGLC.SG",

    "JMI.F",

    "IUQ.MU",

    "W0I.F",

    "RYMM",

    "KLG.V",

    "AAL.L",

    "NNA.V",

    "SWD.TO",

    "KB2.MU",

    "INV.TO",

    "EB9.BE",

    "NR.V",

    "KUI.F",

    "FLPC",

    "ALG.V",

    "ZEN.V",

    "CVL.F",

    "CVLB.MU",

    "MGA.TO",

    "TC",

    "GFM-H.V",

    "DDRI",

    "ORR.AX",

    "TLG.AX",

    "ZAM.AX",

    "AXX",

    "NRC.V",

    "MGR.V",

    "RRC.V",

    "SGZ.V",

    "ELT.V",

    "NOT.V",

    "QPMC.BE",

    "PBM.V",

    "ASKE",

    "VRX.AX",

    "TAS",

    "CLV.V",

    "SSE.V",

    "VR9.SG",

    "POS.AX",

    "PRR.V",

    "OLG.MU",

    "PSL.V",

    "TMZ.AX",

    "URE.TO",

    "OLM.F",

    "UWE.TO",

    "KUI.SG",

    "AGA.V",

    "STVF",

    "IPHB.SG",

    "QG1.MU",

    "X9CN.F",

    "ARR.V",

    "YRS.F",

    "RPX.V",

    "PZG",

    "RIO",

    "PBX.V",

    "AHE.BE",

    "WLV.V",

    "CFM.V",

    "LRS.AX",

    "NAR.V",

    "ZNR.V",

    "NI.TO",

    "UCU.V",

    "SWR.V",

    "WTE.TO",

    "UD7A.F",

    "PAN.V",

    "SUH.AX",

    "AKV.V",

    "NQ.V",

    "ZAD.V",

    "CHL.TO",

    "IB.V",

    "REE",

    "XPK.BE",

    "UC.V",

    "URZ.TO",

    "ANE.V",

    "MRN.TO",

    "CNTO",

    "6D7.F",

    "SAN.V",

    "NER.V",

    "AXU",

    "WER.V",

    "GEO.TO",

    "WEL.V",

    "DAU.V",

    "MMG.F",

    "ASX.V",

    "UAMY",

    "AVL",

    "STBR",

    "AGIN",

    "OWW.SG",

    "OU6.F",

    "JM4A.F",

    "SGH.V",

    "U.TO",

    "ZIM.AX",

    "MWOG",

    "PTM.TO",

    "PEL.AX",

    "0629.HK",

    "FNI.TO",

    "PX.V",

    "SGF.TO",

    "SDL.AX",

    "QPMC.SG",

    "PBM",

    "CMM.V",

    "GRM.AX",

    "URRE",

    "WOMENNET.BO",

    "HCLP",

    "TUO.V",

    "CBG.V",

    "0976.HK",

    "DSN.AX",

    "KE.V",

    "EPC.V",

    "58X.F",

    "PVX.V",

    "BHP.AX",

    "OCIR",

    "NXM.AX",

    "PUC.V",

    "WPR.V",

    "WCB.V",

    "TRY.TO",

    "SWC",

    "WAL.SG",

    "YDAB.F",

    "ODN.V",

    "CBE.V",

    "RIE.AX",

    "CCO.TO",

    "STH.V",

    "JZR.V",

    "KIV.V",

    "ORAC",

    "KD7.F",

    "DOT.V",

    "FMC.TO",

    "KQ1.F",

    "FRI.V",

    "QU5A.SG",

    "CFO.V",

    "PSR.TO",

    "TYP.V",

    "XRG.TO",

    "GZD.V",

    "QRO.V",

    "EUK.V",

    "NK6.F",

    "PCI.V",

    "SRJ.V",

    "CCC.V",

    "SCIO",

    "SMN.V",

    "XKI.F",

    "CVLC.F",

    "TCK-B.TO",

    "CXU.AX",

    "AUX.V",

    "YDAB.MU",

    "NAK",

    "HBK.V",

    "UVN.V",

    "GOM.V",

    "FM.TO",

    "NRZ-H.V",

    "OBN.V",

    "GTC.V",

    "WML.V",

    "NVM.V",

    "TSG.V",

    "DMI.F",

    "SME.V",

    "CTM.AX",

    "XAG.V",

    "QTMM",

    "FT.TO",

    "WAL.F",

    "HKUP",

    "WLF.AX",

    "MIL",

    "LIR.V",

    "IDI.V",

    "USR.V",

    "OR6.F",

    "RPHA.BE",

    "KIS.AX",

    "IZ1.SG",

    "YZC.DE",

    "QM0.F",

    "MAT.V",

    "PVG.TO",

    "MCR.AX",

    "NRE.TO",

    "SVBL",

    "ORY.BE",

    "POM.TO",

    "JYA.F",

    "PGRX",

    "NW.V",

    "ABE.V",

    "NJ2.F",

    "MJT.DE",

    "POI.V",

    "DAN.V",

    "KIT.V",

    "GHR.V",

    "NFR.V",

    "ZIM.V",

    "T62.BE",

    "YZCA.F",

    "RUN.V",

    "ARU.AX",

    "HGR.SG",

    "NDM.TO",

    "WCX.V",

    "KTN.V",

    "KORX",

    "SRL.V",

    "RQM.F",

    "WRM.AX",

    "GMO.TO",

    "PLR.V",

    "ACS.AX",

    "OI8.F",

    "GMO",

    "UEC",

    "GMEXICOB.MX",

    "OLG.F",

    "MD.V",

    "LYC.AX",

    "AQP.L",

    "MUX.TO",

    "FJZ.DU",

    "KNA.V",

    "VTM.SG",

    "WC2.F",

    "POC.V",

    "JI5.SG",

    "FCV.V",

    "GPH.V",

    "EMX.V",

    "RSV.V",

    "ALN.V",

    "DGO.V",

    "NRN.V",

    "MDN.TO",

    "VSR.V",

    "MDV.V",

    "RTH.V",

    "FQM.L",

    "PRK.TO",

    "R1E.SG",

    "WAI.V",

    "III.TO",

    "MRR.AX",

    "IGC.V",

    "GV7.BE",

    "UEX.TO",

    "OCO.V",

    "MIX.V",

    "HOR.AX",

    "JAX.V",

    "WKT.AX",

    "SWR.AX",

    "EB9.SG",

    "WMQ.F",

    "TSN.V",

    "LDM.V",

    "ZEU.AX",

    "VALEN.MX",

    "GEMD.L",

    "TBR.V",

    "QF7.F",

    "AAN.V",

    "BOB.V",

    "QFB.BE",

    "VAN.V",

    "VOL.V",

    "EJZ.F",

    "GVG.V",

    "GWG.V",

    "RIOM",

    "SFEG",

    "SRC.V",

    "NRP",

    "ILU.AX",

    "DEC.V",

    "ZNC.TO",

    "MAU.DU",

    "GOG.V",

    "UNX.AX",

    "PLG",

    "CDC.V",

    "TRO.V",

    "S.TO",

    "SNG.V",

    "MCP",

    "OWW.F",

    "LCQ.MU",

    "FVL.TO",

    "IZ1.BE",

    "ADZ.V",

    "KAS.V",

    "RMX.TO",

    "MPG.MU",

    "ZORM",

    "ALS.TO",

    "GQM.TO",

    "RNX.TO",

    "FIS.AX",

    "GBU.TO",

    "NX.V",

    "WEC.AX",

    "KMI.V",

    "SMC.AX",

    "TRS.V",

    "CS.TO",

    "THO.TO",

    "CY.V",

    "PMD.V",

    "FTR.V",

    "TRQ.TO",

    "BEL.V",

    "NVI.AX",

    "DVR.V",

    "BHP",

    "ANR",

    "VVN.V",

    "WST.V",

    "BBL",

    "WHN.V",

    "MPS.V",

    "1205.HK",

    "RVM",

    "MDI.TO",

    "CVLC.BE",

    "WG3.SG",

    "CTR.V",

    "DNI.V",

    "FRC.AX",

    "D7H.F",

    "NTU.AX",

    "COP.TO",

    "KDI.V",

    "ROT.V",

    "8GC.SG",

    "BVN",

    "FMSA",

    "WPX.TO",

    "GNI",

    "GQR.F",

    "CZN.TO",

    "PGD.TO",

    "VIO.BR",

    "TGD.V",

    "YE5.SG",

    "AXQ.V",

    "YRS.SG",

    "U9V.F",

    "SMD.V",

    "IOH.AX",

    "KRA.AX",

    "YGL.BE",

    "GEM.V",

    "KNX.V",

    "RMR.V",

    "ARLP",

    "CHNR",

    "U9U.F",

    "SGQ.TO",

    "QU5A.MU",

    "PF.V",

    "DHL.F",

    "CHGS",

    "PLH.AX",

    "M9R.F",

    "WM.TO",

    "1051.HK",

    "CTN.V",

    "TIG.AX",

    "CCU.V",

    "LMR.V",

    "QM0.SG",

    "OMM.V",

    "NTR.V",

    "NHC.AX",

    "V1RA.BE",

    "MC.V",

    "RRS.V",

    "RDK.TO",

    "PGX.V",

    "EB9.MU",

    "YZCA.DE",

    "HINDZINC.NS",

    "VMC.AX",

    "KQ1.MU",

    "SELR",

    "RZT.F",

    "AOZ.V",

    "MGX.AX",

    "VAL.V",

    "X9CN.BE",

    "SVO.V",

    "DCGD",

    "BOZ.V",

    "LQMT",

    "YE5.F",

    "QTA.V",

    "QMC.V",

    "LHC.V",

    "RSC.TO",

    "USPR",

    "M9R.BE",

    "NIK.V",

    "NOX.V",

    "GSM",

    "FJZ.SG",

    "JT7.F",

    "HMNC",

    "DYG.V",

    "NG.TO",

    "YRR.AX",

    "VR.V",

    "WYM.V",

    "GGS.V",

    "GSR.F",

    "PLM",

    "GQ.V",

    "TUF.V",

    "VLV.V",

    "WAL.MU",

    "QPMC.MU",

    "GGI.V",

    "ASM",

    "CYD.V",

    "DBL.V",

    "X9X.SG",

    "KWG.V",

    "GTA.V",

    "AGN.V",

    "NES.V",

    "SRS.SG",

    "2362.HK",

    "M9R.SG",

    "INM.V",

    "REX.V",

    "NRM.V",

    "NFE.V",

    "MMV.V",

    "SQA.V",

    "PRS-H.V",

    "QRM",

    "GWR.AX",

    "LJ.V",

    "CBA.V",

    "KHR.SG",

    "DZX.F",

    "CLF",

    "TSD.V",

    "AVL.TO",

    "ATU.AX",

    "TAHO",

    "CVLA.F",

    "SYH.V",

    "SMO.V",

    "NOU.V",

    "ACI",

    "MDL.AX",

    "OPXS",

    "SBR.TO",

    "OZ4.SG",

    "NAP.DU",

    "NVAC.MU",

    "NJMC",

    "NYR.BR",

    "JMI.BE",

    "IVN.TO",

    "NCQ",

    "WRY.V",

    "RGZ.V",

    "RAE.DE",

    "QBL.AX",

    "MBMI",

    "ADI.V",

    "EME.AX",

    "CPS.V",

    "BHT.V",

    "TML.TO",

    "ISM.TO",

    "WSR.AX",

    "VUI.V",

    "SWVI",

    "ABR.V",

    "MWE.TO",

    "NPK.F",

    "GGD.TO",

    "RZZ.V",

    "SVG.V",

    "TRF.AX",

    "QG1.SG",

    "HLM.V",

    "LBSR",

    "CO.V",

    "MML.V",

    "GNG.V",

    "0769.HK",

    "OKV7.F",

    "QRL.AX",

    "KBT.V",

    "EXS.V",

    "KZD.V",

    "REON",

    "MIN.V",

    "VHMC",

    "NBR.V",

    "LL.V",

    "CSVN",

    "AVC.V",

    "LCY.AX",

    "GLEN.L",

    "RMO.V",

    "URZ",

    "DML.TO",

    "YEL.V",

    "HWY.V",

    "NRT.V",

    "ELR.TO",

    "X9X.BE",

    "YZC.SG",

    "RUG.V",

    "TRQ",

    "NNIA.MU",

    "WMR.V",

    "FER.TO",

    "X9X.F",

    "FAR.TO",

    "VALE",

    "B5G.F",

    "TCC.V",

    "BWR.V",

    "LEU",

    "WMN.AX",

    "MIO.V",

    "WMTN",

    "KOR.AX",

    "QM0.BE",

    "NPK.TO",

    "TRX.V",

    "BML.V",

    "WPQ.V",

    "ASN.V",

    "VZZ.V",

    "SNKTY",

    "VXL.AX",

    "MMC.AX",

    "JPEX",

    "TCK",

    "3RU.BE",

    "BTU",

    "ANF.V",

    "BFD.BE",

    "3HC.F",

    "LA.V",

    "LCQ.BE",

    "VRCV",

    "BPC.V",

    "WAR.V",

    "HBM",

    "YZC.MU",

    "BRI.V",

    "RHC.V",

    "HOC.L",

    "ORM.AX",

    "OCN.V",

    "TGB",

    "IML.V",

    "CSL.V",

    "MUJ.BE",

    "NMD.V",

    "AQ.V",

    "NXE.V",

    "SIR.V",

    "JE9N.F",

    "XTM.V",

    "FRES.L",

    "RKR.V",

    "AHE.F",

    "EOM.TO",

    "WLT",

    "CLZ.AX",

    "WVL.AX",

    "FX9.BE",

    "FMG.AX",

    "NVT.V",

    "CRO.F",

    "NWX.V",

    "VMS.V",

    "BFD.V",

    "GNH.V",

    "LAM.TO",

    "SHJ.V",

    "IGO.AX",

    "MFM.V",

    "33X1.MU",

    "P7J.F",

    "DOX.V",

    "QLDN.F",

    "G4O1.F",

    "SWN.V",

    "YZC.F",

    "ORD.AX",

    "NK.V",

    "VP6.MU",

    "GXM.V",

    "SOL.V",

    "WC7.MU",

    "UQ.V",

    "EV.V",

    "APN.V",

    "KZX.V",

    "RMK.V",

    "YAL.AX",

    "EAS.V",

    "CEC.V",

    "JE4.F",

    "CLD",

    "WMM.V",

    "SWY.TO",

    "ARL.TO",

    "CVN.V",

    "ROSV",

    "NCR.V",

    "LAC.TO",

    "FV.V",

    "QFP.SG",

    "RYE.V",

    "NZZ.V",

    "CRWG",

    "DOGO",

    "MORN",

    "BR",

    "FDS",

    "DNB",

    "LDOS",

    "NLSN",

    "NXOI",

    "IHS",

    "ONTRACK.BO",

    "YOS.SG",

    "HCI.TO",

    "ACN",

    "KEY.PA",

    "ZGY.BE",

    "UIS",

    "Q6IA.F",

    "RC.TO",

    "GIB-A.TO",

    "SYZ.DE",

    "CAP.PA",

    "FEW.F",

    "TCS.NS",

    "XRXB34.SA",

    "TV.MI",

    "RIA.PA",

    "SPBU",

    "SYNT",

    "WYY",

    "NCR",

    "LTE.PA",

    "NCIT",

    "MDA.TO",

    "MLQ2.BE",

    "IGTE",

    "EPAM",

    "IXX.MU",

    "VNET",

    "Q6IA.SG",

    "0354.HK",

    "JINDONL.BO",

    "ODS.V",

    "YOS.DU",

    "ORA.F",

    "0618.HK",

    "PRW.L",

    "XIM.F",

    "HMNY",

    "ISDR",

    "FIS",

    "NIITLTD.NS",

    "XIS.BE",

    "ENG.MI",

    "CDW",

    "0596.HK",

    "NUCLEUS.NS",

    "ISW.F",

    "DVT.F",

    "CACI",

    "PXL.DE",

    "FUJ1.DU",

    "CBR",

    "Q6IA.BE",

    "WIPRO.NS",

    "SYT.DE",

    "LCO.PA",

    "SYKE",

    "ASMTEC.BO",

    "DVT.PA",

    "CSPI",

    "EXE",

    "EUCA.MU",

    "SHWK.DE",

    "SFD1.BE",

    "TIER",

    "CHGT",

    "Q6IA.MU",

    "PKK.V",

    "VISESHIN.BO",

    "ETEC",

    "QIHU",

    "MAGIS.PA",

    "UBIC",

    "RDWR",

    "RTC.F",

    "IT",

    "ZENSARTEC.NS",

    "XCC.SG",

    "GLOB",

    "XIM.SG",

    "IBM",

    "SABR",

    "ZMX.BE",

    "NOW",

    "ZENSAR.BO",

    "ZMX.F",

    "VWA.DE",

    "RAX",

    "RVBD",

    "SPIN",

    "SB3.DU",

    "IMS",

    "0061.HK",

    "Q6IA.DE",

    "MLCNT.PA",

    "EDGW",

    "HIA1.DU",

    "WIT",

    "QUINTEGRA.NS",

    "EPIQ",

    "VALUEMART.BO",

    "HIA1.BE",

    "GTL.BO",

    "CT71.BE",

    "CTG",

    "SYT.SG",

    "DMRC",

    "CBX.V",

    "CCZ.TO",

    "VRTU",

    "0299.HK",

    "ACXM",

    "YOS.MU",

    "SHWK.F",

    "XPR.MI",

    "BOSC",

    "QFOR",

    "ICLD",

    "FUJ1.MU",

    "NCR1.MU",

    "QUINTEGRA.BO",

    "QCH.BE",

    "SAIC",

    "DWS.AX",

    "HIA1.F",

    "MNDO",

    "CSC",

    "XRX",

    "IE7.F",

    "RTC.DE",

    "WIOA.BE",

    "XCC.F",

    "ERIE",

    "AON",

    "EHTH",

    "TWYF",

    "VVV3.DE",

    "BRO",

    "YVI.V",

    "CRVL",

    "CISG",

    "EXAM",

    "JLT.F",

    "MMC",

    "CRD-B",

    "WSH",

    "AJG",

    "SDF.AX",

    "O1BC.BE",

    "AT.V",

    "YDX.MU",

    "0543.HK",

    "NFLX34.SA",

    "YNDX",

    "YHOO",

    "QUOR",

    "CIIX",

    "HYQ.DE",

    "XOU.F",

    "8071.HK",

    "MONY.L",

    "KIWB",

    "DLPM",

    "SBID",

    "WBXU",

    "TST",

    "TV0.DE",

    "PAYM",

    "O1BC.DE",

    "MEET",

    "BITA",

    "ZPLA.L",

    "0700.HK",

    "YHO.F",

    "RATE",

    "YOJ.MU",

    "AOL",

    "XOU.MU",

    "SEK.AX",

    "EVDY",

    "YHO.DU",

    "NNW.SG",

    "JRJC",

    "CNVR",

    "XOU.BE",

    "LIVE",

    "YOJ.SG",

    "JD",

    "TWTR",

    "YHO.SG",

    "NAME",

    "WWWW",

    "WIX",

    "LLNW",

    "YOJ.DU",

    "TCX",

    "YDX.DE",

    "YHO.DE",

    "VCHS",

    "5Q8.F",

    "YHOO.BA",

    "CRTO",

    "FENG",

    "NNNC.SG",

    "TV0.DU",

    "MLNEO.PA",

    "YHO.BE",

    "TWTR34.SA",

    "GOOG",

    "O1BC.DU",

    "VRSN",

    "YOJ.F",

    "CRCM",

    "TZOO",

    "LNKD",

    "SYNC",

    "TRIP",

    "NNW.F",

    "FB2A.DE",

    "GOOG34.SA",

    "AKM.V",

    "FSW.V",

    "NEH.SG",

    "AWAY",

    "YHO.MU",

    "TAOM",

    "SQI.PA",

    "YIN.BE",

    "FB",

    "ALGUI.PA",

    "ABTL",

    "Y9L.SG",

    "ENGA",

    "BCOR",

    "GOOG.MX",

    "VDTN.F",

    "WUBA",

    "O1BC.SG",

    "ATHM",

    "AKAM",

    "ARD.V",

    "YHOO.MX",

    "SFUN",

    "O1BC.MU",

    "Y9L.F",

    "VRW.V",

    "ALWEB.PA",

    "LOCM",

    "MDF.TO",

    "REDF",

    "GRPN",

    "CCIH",

    "GRUB",

    "SOHU",

    "MARK",

    "DA.MI",

    "YIN.F",

    "XOU.SG",

    "DATE",

    "NPA.V",

    "BIDU",

    "YELP",

    "YOKU",

    "PRSS",

    "GOOGL",

    "8041.HK",

    "KEK.V",

    "TC.TO",

    "BRDR",

    "YOJ.BE",

    "IPDN",

    "MMRF",

    "LOOK",

    "YY",

    "YDX.F",

    "PZOO",

    "YDX.SG",

    "YIN.MU",

    "ALMAX.PA",

    "WB",

    "OTQ.MU",

    "VDTN.BE",

    "TTGT",

    "LNK.F",

    "IACI",

    "GAWK",

    "UNTD",

    "CHIO",

    "WSCO",

    "LOV",

    "SMTP",

    "SIFY",

    "TRLA",

    "DLTZ",

    "ITSI",

    "FULO",

    "WESC",

    "GPCM",

    "GASE",

    "TRUE",

    "CRMZ",

    "IZEA",

    "EQIX",

    "SLNM",

    "GIB",

    "TNAV",

    "SLTC",

    "TRAK",

    "COUP",

    "DMD",

    "ALYI",

    "NTES",

    "RENN",

    "QMCI",

    "CKSW",

    "SPRT",

    "ULTI",

    "INXN",

    "GKNT",

    "VAE.V",

    "TRMR",

    "DRIV",

    "WORX",

    "NETE",

    "JCDAF",

    "VHC",

    "STVI",

    "BVSN",

    "SINA",

    "XXIA",

    "JCOM",

    "LONG",

    "ANGI",

    "INAP",

    "UBIQ",

    "QNST",

    "TAYN.PA",

    "LPLA",

    "JAYAMEL.BO",

    "JRG.BO",

    "CME",

    "VEH.F",

    "COWN",

    "INVEXA.MX",

    "AMRK",

    "BHAGYFN.BO",

    "XI.V",

    "GCAP",

    "0064.HK",

    "RCAP",

    "NETWORTH.BO",

    "LTS",

    "0290.HK",

    "0665.HK",

    "NMR",

    "0428.HK",

    "LUK",

    "0279.HK",

    "PAOR.PA",

    "T2G.BE",

    "QST.AX",

    "JMFINAN.BO",

    "0619.HK",

    "OKN.MU",

    "MCH.AX",

    "MS",

    "KCG",

    "MTW.BE",

    "MKTX",

    "NSE.SG",

    "WFG.V",

    "GBNA.BE",

    "VEH.SG",

    "WALLFORT.BO",

    "IFMI",

    "BCO.V",

    "JOINDRE.BO",

    "0717.HK",

    "FXCM",

    "LUS.DU",

    "JHACC.BO",

    "VANTAGE.BO",

    "VERTEX.BO",

    "VEH.MU",

    "IBKR",

    "NTFL",

    "WHF.AX",

    "DSINVEST.BO",

    "AMTD",

    "GFIG",

    "KOTHARIPR.NS",

    "PNP.TO",

    "GS",

    "CAPP",

    "SJZN.SG",

    "0218.HK",

    "NSE.F",

    "VALUEGFO.MX",

    "1428.HK",

    "MEFCOMCAP.BO",

    "NSEA.BE",

    "0821.HK",

    "VLSFIN.BO",

    "FNG.BE",

    "SCHW",

    "ETFC",

    "O4B.SG",

    "DSE.MU",

    "GEB.SG",

    "MWB.F",

    "MSBR34.SA",

    "JPTSEC.BO",

    "INTL",

    "JMP",

    "BGCP",

    "FNG.SG",

    "MWB.MU",

    "LKPFIN.BO",

    "SWS",

    "SF",

    "SF.V",

    "GHL",

    "SIEB",

    "PJC",

    "ITG",

    "RJF",

    "OPY",

    "DGSE",

    "CTZ.MU",

    "RITN.F",

    "0513.HK",

    "CHOO.L",

    "BRBY.L",

    "RMS.PA",

    "GJF.F",

    "0860.HK",

    "0116.HK",

    "SIG",

    "ZODJRDMKJ.NS",

    "MDNL",

    "WHITEDIA.BO",

    "TIF",

    "CTZ.BE",

    "MOH.MU",

    "0475.HK",

    "MOH.DE",

    "SIG.L",

    "CTHR",

    "SGJHL.BO",

    "NUVL",

    "0444.HK",

    "BGI",

    "KDDL.BO",

    "CDI.PA",

    "MINID.BO",

    "E9L.SI",

    "SOVERDIA.BO",

    "MC.PA",

    "NILE",

    "LVMH.MI",

    "IFT",

    "PRI",

    "PNX",

    "UTGN",

    "PUK",

    "AAME",

    "36P.F",

    "XNP.DU",

    "QHH.F",

    "OHH.MU",

    "CIA",

    "LNC",

    "LA6A.BE",

    "WLV2.BE",

    "MFC",

    "XNP.BE",

    "STJ.L",

    "MFC.TO",

    "LKG.F",

    "XNP.MU",

    "SYA",

    "FFG",

    "1299.HK",

    "RGA",

    "XNP.SG",

    "LFC",

    "AV",

    "PHNX.L",

    "QHH.MU",

    "IHC",

    "TMK",

    "LCO.SG",

    "GNW",

    "NWLI",

    "LPHI",

    "PFG",

    "PL",

    "LA6A.F",

    "QHH.BE",

    "WLV2.F",

    "PWF.TO",

    "OML.L",

    "WLV2.SG",

    "PRU.MX",

    "SL.L",

    "AEL",

    "TIPT",

    "ALSO",

    "PRU",

    "MET",

    "GWO.TO",

    "KCLI",

    "IHRC",

    "WLV2.DU",

    "QHH.SG",

    "RELIABVEN.BO",

    "OVZ3.F",

    "MCKPAZ.NZ",

    "PV6.F",

    "STAY",

    "JET.AX",

    "MHGC",

    "LHR.V",

    "CTRP",

    "IHG",

    "DNA.AX",

    "HLC.TO",

    "BESTEAST.BO",

    "HLT",

    "MCKPA.NZ",

    "KAMATHOTE.NS",

    "VAC.PA",

    "BEL",

    "IHG.L",

    "MCKZ.NZ",

    "WD5.DU",

    "HTHT",

    "CHH",

    "HOT",

    "H12.SI",

    "LJ3.SI",

    "TAJGVK.BO",

    "WYN",

    "MAR",

    "S1V.DU",

    "WD5.MU",

    "EXPE",

    "PV6.SG",

    "0266.HK",

    "HDP.PA",

    "CAGU",

    "OUE1.BE",

    "RAYALEMA.BO",

    "TULIPSTA.BO",

    "1HTA.SG",

    "H",

    "MLC.L",

    "RLH",

    "HMIN",

    "TAJGVK.NS",

    "ALW.V",

    "1221.HK",

    "ETAK",

    "GNCMA",

    "RLC.TO",

    "EVHC",

    "REG.AX",

    "LW.TO",

    "NHC",

    "ACC.TO",

    "1112.HK",

    "SKH",

    "CIVI",

    "FVE",

    "ADK",

    "CSU",

    "BKD",

    "ENSG",

    "KND",

    "KWA.V",

    "DVCR",

    "EXE.TO",

    "RYM.NZ",

    "PCH",

    "AERT",

    "CTT",

    "PATK",

    "0910.HK",

    "E6R.SI",

    "RYN",

    "CFF.TO",

    "0269.HK",

    "WFT.TO",

    "NBD.TO",

    "WEF.TO",

    "WHC.DU",

    "8163.HK",

    "NKC.F",

    "POPE",

    "ANS.TO",

    "BCC",

    "GDL.TO",

    "PCL",

    "QXP1.F",

    "SIPH.PA",

    "WHC.SG",

    "0094.HK",

    "DEL",

    "IFP.TO",

    "WY",

    "CFP.TO",

    "JCTCF",

    "MPE.V",

    "VRD.V",

    "TKR",

    "GIL.DE",

    "TIB1.MU",

    "VBH.DU",

    "EIN3.F",

    "VBH.F",

    "EIN3.DE",

    "BLT.V",

    "CVR",

    "HDNG",

    "KMT",

    "ROLL",

    "NO4.F",

    "BLT",

    "N0L.SI",

    "WENDT.BO",

    "PRLB",

    "NNBR",

    "RYO1.F",

    "SWK",

    "UAL",

    "ZNHH.MU",

    "ANCA.F",

    "QAN.BE",

    "JAW.MU",

    "JETAIRWAY.NS",

    "0293.HK",

    "JAW.SG",

    "DAL",

    "AFR.MU",

    "WJA-A.TO",

    "ANCA.DU",

    "ZNHH.DE",

    "AFR.F",

    "LHA.DE",

    "REX.AX",

    "0670.HK",

    "AF.PA",

    "QAN.MU",

    "J7X.SI",

    "QAN.AX",

    "ZNH.MU",

    "QAN.F",

    "RYA.L",

    "AAL",

    "EZJ.L",

    "ZNH.F",

    "NVPE.MU",

    "WJA.TO",

    "ZNH",

    "QAN.SG",

    "CEA",

    "JAW.F",

    "NVPE.F",

    "ZNH.BE",

    "AFR.SG",

    "VLRS",

    "IAG.L",

    "EIF.TO",

    "SAVE",

    "XONA.BE",

    "YPFD.BA",

    "LNG.AX",

    "RRMS",

    "PETR4.SA",

    "PESA.BA",

    "TGRO",

    "XOM.MX",

    "KEYP",

    "OJS1.BE",

    "ORG.AX",

    "XOM.BA",

    "R6C.MU",

    "XL.V",

    "XONA.HA",

    "ERG.MI",

    "TOTB.HA",

    "RRL.V",

    "CLL.TO",

    "TOT",

    "OJS1.SG",

    "NBZ.TO",

    "XONA.DE",

    "R6C.DE",

    "RDS-B",

    "BP.L",

    "CVE.TO",

    "ECA",

    "E",

    "ONGC.BO",

    "EC",

    "ORL.F",

    "ANW",

    "EQM",

    "FP.PA",

    "SSL",

    "XONA.SG",

    "PTR",

    "XOM",

    "CTI.V",

    "VNGE",

    "PZE",

    "YPF",

    "CAIRN.NS",

    "EASTERNGAS.BO",

    "SU.TO",

    "RDSB.L",

    "STO",

    "ECP.TO",

    "IMP.MU",

    "IMO.TO",

    "XONA.DU",

    "ESSAROIL.BO",

    "COS.TO",

    "MNGA",

    "TTA.L",

    "WOF.AX",

    "ENI.MI",

    "PC6.DE",

    "BP",

    "TOTB.F",

    "IMP.SG",

    "RDSA.L",

    "HSE.TO",

    "IMO",

    "SNP",

    "CVX",

    "SAOA.SG",

    "ORL.SG",

    "EXPO",

    "CEB",

    "TAYO",

    "ICFI",

    "WHLM",

    "CDOM",

    "RMKR",

    "HIL",

    "TW",

    "NCI",

    "FPCG",

    "III",

    "WAGE",

    "HCKT",

    "BAH",

    "MSGO",

    "OGSM",

    "FCN",

    "CRAI",

    "HURN",

    "NOBH",

    "SKY",

    "DVLY",

    "YOC.F",

    "MM",

    "MOBQ",

    "CVSL",

    "NCMI",

    "AMCN",

    "YOC.SG",

    "YOC.DU",

    "MCHX",

    "SALE",

    "IPS.PA",

    "ITM.V",

    "CCO",

    "SNK.NZ",

    "SPRZ",

    "YOC.BE",

    "TPNI",

    "HHS",

    "GYST",

    "PVHO",

    "INT.V",

    "LOGG",

    "ALSOL.PA",

    "TTK.F",

    "DXM",

    "MLOPT.PA",

    "VIZC",

    "UBM.L",

    "ACTL",

    "YOC.DE",

    "ISIG",

    "CTCT",

    "BCYP",

    "BRFS",

    "BRID",

    "SMKY",

    "TSN",

    "CSWG",

    "HRL",

    "WMGI",

    "EYES",

    "HOLX",

    "ARAY",

    "EUZ.DE",

    "DRAD",

    "WGB.F",

    "VASO",

    "BSX",

    "MF6.F",

    "IVC",

    "HNSN",

    "OPK",

    "SIRO",

    "OC5.F",

    "STJ",

    "ESMC",

    "MSON",

    "ZYXI",

    "GB",

    "ACAR",

    "KTWO",

    "STNT.PA",

    "PHM.V",

    "RMD",

    "VICA",

    "CGHC",

    "TEN.SG",

    "VSUL",

    "VASC",

    "SBS.MU",

    "SPNC",

    "ELOS",

    "DRW3.F",

    "PBIO",

    "JUD.F",

    "BQE.L",

    "XEJ.BE",

    "MSTY.PA",

    "MASI",

    "NSPR",

    "EVAR",

    "LCDX",

    "VAR",

    "VOLC",

    "VA4.F",

    "FONR",

    "W1I.F",

    "MGCD",

    "EDAP",

    "BLFS",

    "ZLTQ",

    "ARTH",

    "ZIM.BE",

    "SVA.AX",

    "VSCP",

    "ACRX",

    "RWLK",

    "EUZ.MU",

    "MF6.DU",

    "MRIC",

    "SBS.DE",

    "ISRG",

    "SMLR",

    "ELX.AX",

    "NVIV",

    "ZIM.MU",

    "SPAN",

    "OWX.SG",

    "MKEA.PA",

    "ALVMG.PA",

    "SYK",

    "JC8.BE",

    "HTL.V",

    "ALGN",

    "BSDM",

    "VRS.V",

    "ZIM.SG",

    "W1I.MU",

    "SURG",

    "EXAC",

    "ETRM",

    "CYBX",

    "UPI",

    "W1I.DU",

    "TLT.V",

    "PHMD",

    "SNN",

    "EW",

    "LDRH",

    "XEJ.SG",

    "PUMD",

    "SSH",

    "AMDA",

    "RTIX",

    "DYNT",

    "CSII",

    "EUZ.DU",

    "EUZ.F",

    "0853.HK",

    "XEJ.F",

    "DHRM",

    "IVOB",

    "ZMH",

    "UMS.DE",

    "SCIE",

    "IRIX",

    "NIMU",

    "LMNS",

    "NUVA",

    "PYT.V",

    "AEMD",

    "CRY",

    "W1I.BE",

    "J8D.F",

    "OC5.SG",

    "MAKO",

    "RVA.AX",

    "VSCI",

    "DRW8.DE",

    "BONE",

    "CAMH",

    "MDT",

    "ULGX",

    "CYNO",

    "TMD.TO",

    "EUZ.BE",

    "MDXG",

    "UBI.AX",

    "SN.L",

    "MF6.BE",

    "AXGN",

    "OPTS.L",

    "W1I.SG",

    "STE",

    "AHPI",

    "NXTM",

    "OWX.BE",

    "APT",

    "ZIM.DU",

    "OFIX",

    "HRT",

    "GTHP",

    "OXYS",

    "STXS",

    "GMED",

    "MF6.DE",

    "CNMD",

    "NVRO",

    "VNM.DU",

    "XENT",

    "QUA.PA",

    "BABY",

    "EC8.BE",

    "SNWV",

    "CSDT",

    "ELMD",

    "KOOL",

    "GNMK",

    "KIPS",

    "WNDM",

    "ABMD",

    "SNYR",

    "PDCO",

    "HSIC",

    "SNC3.DU",

    "X2S.MU",

    "GDLM",

    "X2S.BE",

    "MWIV",

    "OMI.TO",

    "PBH",

    "EBM.V",

    "OMI",

    "PODD",

    "QS5.F",

    "HYH",

    "REPR",

    "RXT.F",

    "IV1.SG",

    "THOR",

    "ANGO",

    "ELGX",

    "TUO.F",

    "DXR",

    "CMN",

    "ALVXM.PA",

    "BVX",

    "TRNX",

    "QS5.SG",

    "ISR",

    "HRC",

    "CPCF",

    "BIOL",

    "LBMH",

    "WAZ.MU",

    "OSUR",

    "RVP",

    "MLAB",

    "HBIO",

    "XRAY",

    "0455.HK",

    "EKSO",

    "ERG.V",

    "PDEX",

    "REMI",

    "GXI.HA",

    "LMAT",

    "0801.HK",

    "SSRG",

    "MELA",

    "PEYE",

    "MTD",

    "ICUI",

    "VPT.V",

    "BDX",

    "RMCP",

    "OLY1.F",

    "QS5.MU",

    "NEPH",

    "ATRC",

    "BCR",

    "TNDM",

    "INFU",

    "HAE",

    "ERB",

    "TFX",

    "ATRS",

    "NSPH",

    "MPSP",

    "ATEC",

    "IART",

    "NURO",

    "MR",

    "VGL.V",

    "QS5.BE",

    "MMSI",

    "UTMD",

    "MLA.AX",

    "NLB1.DE",

    "WAZ.F",

    "0570.HK",

    "QS5.DU",

    "BAX",

    "TUO.BE",

    "UNIS",

    "OMI.AX",

    "COV",

    "QTXB",

    "TRXC",

    "CASM",

    "LAKE",

    "CRDC",

    "WAT",

    "COO",

    "OLY1.DU",

    "ECIA",

    "TRIV",

    "CFN",

    "OLY1.MU",

    "DSCI",

    "HTWR",

    "EI.PA",

    "WST",

    "STAA",

    "1149.HK",

    "MDHI",

    "UEEC",

    "LMNX",

    "HDII",

    "DXCM",

    "ATRI",

    "CANL",

    "SDI.TO",

    "ABAX",

    "XEP.SG",

    "BRKR",

    "WYETH.BO",

    "ALOG",

    "DDXS",

    "RGDX",

    "LIO1.F",

    "CRL",

    "8250.HK",

    "ENZ",

    "LO3.DU",

    "BIO",

    "AXDX",

    "FMI",

    "TEAR",

    "AFX.MU",

    "ALIPS.PA",

    "OXIS",

    "IPK.F",

    "PUS.DE",

    "RDNT",

    "XSQ.F",

    "QDI.MU",

    "ERF.PA",

    "CGIX",

    "Q",

    "SVA.V",

    "XEP.F",

    "HSKA",

    "BRLI",

    "DGX",

    "KANG",

    "WYETH.NS",

    "QIA.MU",

    "WX",

    "QIA.DU",

    "NEO",

    "PSID",

    "BGMD",

    "LH",

    "PKI",

    "ONVO",

    "CBIS",

    "NN6.DE",

    "CTSOD",

    "FLDM",

    "CTSO",

    "QIA.BE",

    "PRXL",

    "SGNL",

    "AFX.F",

    "ICLR",

    "BIOC",

    "LIO1.DE",

    "IPK.BE",

    "AFX.DE",

    "QL1.F",

    "QIA.DE",

    "2898.HK",

    "CO",

    "AFX.HA",

    "NDQ.TO",

    "ROKA",

    "QIA.HA",

    "QIA.SG",

    "PMD",

    "KAN.BE",

    "AFX.DU",

    "AIQ",

    "MMTC",

    "DRIO",

    "ALR",

    "TMO",

    "GHDX",

    "PRAH",

    "CVD",

    "VIMTALABS.NS",

    "A",

    "ROSG",

    "SQD.V",

    "GBSN",

    "AFX.SG",

    "XEP.MU",

    "NVDQ",

    "QDI.SG",

    "LMNK",

    "CAS",

    "1020.HK",

    "MEA.MU",

    "ARCW",

    "GTLS",

    "VISHMEL.BO",

    "M1P.SI",

    "PCP",

    "C50.SI",

    "ATI",

    "ZENITH.BO",

    "CRS",

    "RTI",

    "5GF.SI",

    "HIHO",

    "SIF",

    "NOEJ.DU",

    "TS",

    "BEKB.BR",

    "0505.HK",

    "KIRLFER.BO",

    "HAYN",

    "MEA",

    "CSTM",

    "VMI",

    "HIIT",

    "MLI",

    "MLFTC.PA",

    "MEA.SG",

    "NSK.SG",

    "GHM",

    "SHLO",

    "BRSS",

    "BOOM",

    "DRX.TO",

    "ZENITHBIR.NS",

    "UBRA.MU",

    "NCBS",

    "CAF.PA",

    "STBZ",

    "BARC.L",

    "RY2.F",

    "SBIN.NS",

    "GGAL.BA",

    "BIR.DU",

    "RY",

    "BRIO.BA",

    "MAHABANK.NS",

    "BMO",

    "BZZ.MU",

    "PWB.TO",

    "GWB",

    "SQBK",

    "RNST",

    "PWC.TO",

    "BKN.BE",

    "BAC",

    "C",

    "NBZF.SG",

    "CECB",

    "XCA.HA",

    "JPM.MX",

    "WFC.BA",

    "C.BA",

    "HEOP",

    "BAC.MX",

    "BNS.MX",

    "OAKV",

    "CRTO.PA",

    "BHBK",

    "FBNK",

    "FSRA.BE",

    "BNC.L",

    "MTU",

    "NXH.BE",

    "VG8.F",

    "CMC.DE",

    "NWT.BE",

    "OKB.BE",

    "BIR.SG",

    "NAL.BE",

    "FRC",

    "DXB.SG",

    "SIBC",

    "GLE.PA",

    "NCB.DE",

    "UBOH",

    "BLMT",

    "WUW.BE",

    "TSB.L",

    "YOK.DU",

    "CMC.SG",

    "CVAL.MI",

    "CYN",

    "CBA.AX",

    "UNTY",

    "NBA.F",

    "RBS.L",

    "NBG",

    "BBVA.MX",

    "HBC2.MU",

    "PEL.MI",

    "TFBF.DU",

    "OFG",

    "CM.TO",

    "OLCB",

    "W8V.F",

    "KN.PA",

    "O39.SI",

    "NXH.SG",

    "CM",

    "SFNC",

    "UOB.SG",

    "DW1.MU",

    "BANKBAROD.NS",

    "BSAC",

    "KBC.BR",

    "DENABANK.NS",

    "MAHABANK.BO",

    "LCJ.BE",

    "BAP",

    "SBBJ.NS",

    "C4C.MU",

    "MIU.F",

    "KYM1.F",

    "NA.TO",

    "LAKSHVILA.NS",

    "HSBA.L",

    "WBKC",

    "PNC",

    "UCG.MI",

    "3VF.BE",

    "STAN.L",

    "MFZA.F",

    "MFZ.SG",

    "CHEV",

    "FMER",

    "UNITEDBNK.NS",

    "TD",

    "3VF.F",

    "CWB.TO",

    "VIJAYABANK.BO",

    "GFNORTEO.MX",

    "OBC.BO",

    "BP.MI",

    "TCB",

    "MPI1.DE",

    "SBI.BO",

    "AON.F",

    "XCA.DE",

    "FCVA",

    "WBC.AX",

    "DW1.BE",

    "KOTAKBANK.NS",

    "BGEO.L",

    "IBN",

    "BMO.TO",

    "NVPI.MU",

    "JPM",

    "NWT.DE",

    "CENTRALBK.NS",

    "KTKBANK.NS",

    "RIVR",

    "UCOBANK.NS",

    "RY-PE.TO",

    "UNIONBANK.NS",

    "UZC.SG",

    "NBA.SG",

    "LAKSHVILAS.BO",

    "SGE.SG",

    "0011.HK",

    "CMA",

    "XCA.F",

    "RYS1.F",

    "FMTB",

    "GNBC",

    "WFCO34.SA",

    "XMF.DU",

    "NBOH",

    "INGVYSYAB.NS",

    "XMF.F",

    "KYM1.DE",

    "BBCN",

    "BANKINDIA.NS",

    "YESBANK.BO",

    "NXH.MU",

    "VG8.DE",

    "W8V.BE",

    "SKC2.F",

    "WFC.MX",

    "XCA.BE",

    "PMI.MI",

    "ALLB",

    "BOQ.AX",

    "BNS.TO",

    "SFBC",

    "OPB",

    "JYS1.F",

    "NVPB.F",

    "HOMB",

    "BNS",

    "JPM.L",

    "DBK.DE",

    "DRL",

    "DW1.SG",

    "BAC.L",

    "LB.TO",

    "SANMEXB.MX",

    "BNP.PA",

    "TLMR",

    "TSC",

    "STI",

    "IOB.BO",

    "2388.HK",

    "BXZ.SG",

    "NCB.F",

    "D05.SI",

    "SFST",

    "NABCD.AX",

    "0005.HK",

    "VA9.DU",

    "FSRA.SG",

    "CBK.DE",

    "JYS1.SG",

    "CMC.MU",

    "RY-PB.TO",

    "LCJ.MU",

    "UZC.F",

    "YOK.F",

    "JGE.DU",

    "BYLK",

    "WFC",

    "XCA.SG",

    "BXZ.F",

    "HBK",

    "ACA.PA",

    "SUBK",

    "LCJ.SG",

    "LLOY.L",

    "VAT.DU",

    "RY.TO",

    "TD.TO",

    "NCO.SG",

    "BDB.MI",

    "YESBANK.NS",

    "2888.HK",

    "ENDV",

    "FC.TO",

    "HLSS",

    "SREINFRA.NS",

    "HVCW",

    "JGW",

    "BRT",

    "ALLY",

    "TREE",

    "HDFC.NS",

    "WARNER.BO",

    "WB7.SG",

    "QIT1.F",

    "SAHARAHOUS.BO",

    "FN.TO",

    "WMC",

    "PSMH",

    "0388.HK",

    "ESNT",

    "HALN",

    "HTGC",

    "OSCAR.BO",

    "WD",

    "HTH",

    "FNMA",

    "QIT1.SG",

    "AI",

    "MLKRI.PA",

    "WAC",

    "NSM",

    "PFSI",

    "HDFC.BO",

    "FMCC",

    "VRTA",

    "VRTB",

    "PAG.L",

    "SC",

    "BLBLNIN.BO",

    "OCN",

    "GRC.V",

    "ATAX",

    "S35.SI",

    "WB7.F",

    "HCG.TO",

    "MKP.TO",

    "MLHBB.PA",

    "EFC",

    "MRLN",

    "IMH",

    "CNK",

    "GBHL",

    "IFLM",

    "RGC",

    "AMC",

    "RLD",

    "DWA",

    "LGF",

    "LGF.V",

    "PTSX",

    "LYFE",

    "BTOW",

    "CKEC",

    "RDI",

    "EROS",

    "LVH.V",

    "UBI.PA",

    "AVID",

    "XAE1.DU",

    "RNWK",

    "XAE1.MU",

    "CYOU",

    "XAE1.F",

    "GIGM",

    "NTO.DU",

    "GAME",

    "ZY3.MU",

    "XAE1.DE",

    "KOA.MU",

    "HOA.MU",

    "ROVI",

    "STIE",

    "KOA.BE",

    "GRVY",

    "RYU.F",

    "TTWO",

    "PWRD",

    "F2P.DE",

    "EA",

    "ZY3.SG",

    "FRZT",

    "36Z.BE",

    "MGT",

    "3ND.BE",

    "1282.HK",

    "ZY3.F",

    "0777.HK",

    "GLUU",

    "ZY3.DE",

    "XAE1.SG",

    "SOUL",

    "ZY3.BE",

    "3ND.F",

    "NCTY",

    "COOL",

    "36Z.F",

    "ATVI",

    "KNM",

    "CPK.F",

    "IGT",

    "CMGE",

    "ZNGA",

    "NTO.BE",

    "KZ",

    "3ND.SG",

    "TWMC",

    "ASKH",

    "ESYS",

    "DGII",

    "LTRX",

    "ZAYO",

    "CNTF",

    "EXTR",

    "PANW",

    "LTTC",

    "SMCI",

    "CSCO",

    "JNPR",

    "FNSR",

    "BBOX",

    "ARUN",

    "OPLK",

    "VGTL",

    "ELON",

    "SILC",

    "GIMO",

    "SCMR",

    "AHGP",

    "MMEX",

    "HNRG",

    "SRCH",

    "RNO",

    "WLB",

    "OXF",

    "YZC",

    "SCOK",

    "FELP",

    "DDC",

    "SXCP",

    "LLEN",

    "MDM",

    "OSLH",

    "EBF",

    "ACCO",

    "SR",

    "CVE",

    "HWK-A.V",

    "ZAZA",

    "TEGY",

    "BPZ",

    "DO.MX",

    "SSN",

    "HWKR",

    "DO1.F",

    "OEDV",

    "PGSI",

    "HERO",

    "ESI.TO",

    "UNT",

    "AWZ.SG",

    "JINDRILL.NS",

    "XBOR",

    "ONGC.NS",

    "PBR-A",

    "DO",

    "TTN.AX",

    "HENC",

    "HGT",

    "ABAN.NS",

    "FQQ.F",

    "TDG.TO",

    "RIG",

    "WTI",

    "FQ7.SI",

    "PTRC",

    "CXO",

    "PSTR",

    "GDG.L",

    "PGH",

    "AOGN",

    "ICD",

    "RDC",

    "PSUR.BA",

    "SIBN",

    "AR.TO",

    "SRGG",

    "AAV",

    "QI.V",

    "SDRL",

    "FORC",

    "OMV.F",

    "HK",

    "PTEN",

    "EGYH",

    "CEU.TO",

    "MAD.AX",

    "BLR.V",

    "ORIG",

    "VET",

    "JDOGQ",

    "RSPP",

    "NBR",

    "XDC.TO",

    "RGFR",

    "YGO.F",

    "LGCY",

    "SDLP",

    "JYHW",

    "ATW",

    "ECT",

    "PGN",

    "VTG",

    "MGUY",

    "NOG",

    "NE",

    "PES",

    "SPX.V",

    "BBG",

    "HP",

    "AOGC",

    "ERF",

    "AR",

    "TDH.F",

    "VO9.F",

    "SVY.TO",

    "AREX",

    "AMSE",

    "MRD",

    "GKP.L",

    "OMV.DE",

    "WLL",

    "REI",

    "JINDRILL.BO",

    "JP9.F",

    "EVEP",

    "SOIGF",

    "GMET",

    "VNR",

    "CEO",

    "ESV",

    "BBEP",

    "PACD",

    "DUNR",

    "SD",

    "MHR",

    "TXHG",

    "AKVA",

    "TAT",

    "ATW.V",

    "RIGP",

    "GPRK",

    "NAEY",

    "PWE",

    "CRT",

    "REXX",

    "5CQ.SI",

    "MDR",

    "SYRG",

    "TEC.PA",

    "TRB.V",

    "CAM",

    "O7N.F",

    "OII.SG",

    "O2C.HA",

    "NOA",

    "WG",

    "NMS.AX",

    "PROP",

    "TCW.TO",

    "AMEC.L",

    "EXLP",

    "ENGT",

    "GIFI",

    "ERA",

    "MTL.TO",

    "HJ2.F",

    "OI2.MU",

    "CFW.TO",

    "VTTI",

    "SES.TO",

    "TXL.TO",

    "5CF.F",

    "HYD.TO",

    "CRR",

    "CELP",

    "TDW.V",

    "TGE",

    "SDY.TO",

    "PD.TO",

    "1600.HK",

    "KET.F",

    "OII.F",

    "FES",

    "TVK.TO",

    "BRS",

    "CCLP",

    "CJES",

    "BLY.AX",

    "PDS",

    "EMES",

    "PRW.TO",

    "TDW",

    "SLL.DE",

    "PKD",

    "SCL.L",

    "GLF",

    "DU4.SI",

    "SDPI",

    "VMX.AX",

    "KET.BE",

    "CLB",

    "TESO",

    "HELI",

    "SSE",

    "FTI",

    "HTG.L",

    "LSI.V",

    "PAD.F",

    "RES",

    "HE.TO",

    "DT2.SI",

    "BAS",

    "FRC.TO",

    "ZCL.TO",

    "NOA.TO",

    "DNOW",

    "8212.HK",

    "IHCB.F",

    "CGG",

    "IHCB.SG",

    "EESI",

    "PFIE",

    "IO",

    "FTK",

    "DTRO",

    "GEOS",

    "TLLP",

    "AQ4.F",

    "PBFX",

    "RCON",

    "HJ2.SG",

    "OIS",

    "WF9.F",

    "WG.L",

    "MRC",

    "0554.HK",

    "PSI.TO",

    "SLBN.MX",

    "SEW.V",

    "NR",

    "GLFH",

    "1938.HK",

    "NOV",

    "OII",

    "EXH",

    "WFT",

    "MTRX",

    "HTC.V",

    "NGS",

    "SPM.MI",

    "SLB",

    "5ME.SI",

    "DWSN",

    "CKH",

    "UNIDT.BO",

    "HLX",

    "WOR.AX",

    "1080.HK",

    "PED",

    "DRQ",

    "GLRI",

    "5DN.SI",

    "FET",

    "BHI",

    "0852.HK",

    "KEG",

    "DPDW",

    "HDX.AX",

    "TTI",

    "SAEX",

    "HAL",

    "ACMP",

    "NO8.F",

    "SPN",

    "DUKEOFS.BO",

    "MXX.V",

    "AMCF",

    "HOS",

    "FI",

    "CEQP",

    "3NZ.BE",

    "JPEP",

    "VLP",

    "TLP",

    "WES",

    "IPL.TO",

    "BPL",

    "PAA",

    "ENB.TO",

    "TRGP",

    "MWE",

    "PPL.TO",

    "ARCXF",

    "LNG",

    "GEI.TO",

    "SEMG",

    "ENBL",

    "CQP",

    "TEP",

    "ETE",

    "VL2.F",

    "WGP",

    "CNNX",

    "OILT",

    "DPM",

    "NBQ.MU",

    "SRG.MI",

    "EEP",

    "GEL",

    "WP8.F",

    "WNRL",

    "ARCX",

    "NGLS",

    "ENF.TO",

    "Q8Q.F",

    "SXL",

    "AMID",

    "NSH",

    "DM",

    "SE",

    "KMI",

    "KEY.TO",

    "MPLX",

    "BKEP",

    "QEP",

    "AM",

    "WPT",

    "SEP",

    "MMLP",

    "VSN.TO",

    "TRP",

    "WMB",

    "APL",

    "SGU",

    "WEP.F",

    "QEPM",

    "SHLX",

    "ALA.TO",

    "CMLP",

    "Q8Q.BE",

    "OKS",

    "TRP.TO",

    "USAC",

    "PAGP",

    "ATLS",

    "PBA",

    "WMB.DU",

    "NS",

    "MMP",

    "BWP",

    "ETP",

    "ENB",

    "FISH",

    "RGP",

    "HEP",

    "TCP",

    "SHI",

    "BPT",

    "UGP",

    "INT",

    "NTI",

    "JHJ.SG",

    "CBEH",

    "WPZ",

    "G92.SI",

    "VLE.DU",

    "ALDW",

    "ENRJ",

    "IOC",

    "WFK.BE",

    "SAHPETRO.BO",

    "ENLC",

    "VLE.BE",

    "VLO",

    "SZYM",

    "JAV2.SG",

    "CALSREF.BO",

    "MPC",

    "PKI.TO",

    "WNR",

    "CVRR",

    "NEF.F",

    "XKK.F",

    "DEAC",

    "FGP",

    "EROC",

    "CLMT",

    "REGI",

    "FTO.L",

    "TSO",

    "XKK.DU",

    "CAPL",

    "5AU.SI",

    "PBF",

    "IOC.NS",

    "ALJ",

    "CVI",

    "HFC",

    "LQZ1.MU",

    "IOC.BO",

    "I7B.F",

    "VLO.MX",

    "NEF.DU",

    "NGL",

    "DK",

    "PSX",

    "AE",

    "PSXP",

    "NZR.NZ",

    "SRLP",

    "XKK.MU",

    "PGH.AX",

    "PKG",

    "1008.HK",

    "ATR",

    "ZVB.BE",

    "RTG.F",

    "WPK.TO",

    "BERY",

    "CPGI",

    "IP",

    "UFPT",

    "RPI-UN.TO",

    "F18.SI",

    "RKT",

    "MYM.BE",

    "PURITY.BO",

    "AMC.AX",

    "MLSOL.PA",

    "CCL-B.TO",

    "MYM.DE",

    "CCK",

    "FFHL",

    "ESSDEE.BO",

    "PARAL.NS",

    "SEE",

    "VITROA.MX",

    "SKG.L",

    "JUMBOBA.BO",

    "ZVB.F",

    "RPC.L",

    "XCLGLASS.BO",

    "0468.HK",

    "OI",

    "CLTR",

    "VRTV",

    "SON",

    "BLL",

    "BMS",

    "DECPO.BO",

    "GPK",

    "BEST",

    "ZVB.SG",

    "EMMBI.NS",

    "KARURKCP.NS",

    "MWV",

    "KARUKCP.BO",

    "ZV.MI",

    "GEF",

    "SL3.F",

    "TUP",

    "MINI",

    "YASHRAJC.BO",

    "JMGCORP.BO",

    "TQN.DU",

    "QUANTDIA.BO",

    "RWH.AX",

    "SLGN",

    "FTP.TO",

    "TMB.TO",

    "UFS",

    "RPL.SG",

    "VOITHPAPR.BO",

    "YB1.BE",

    "3366.HK",

    "HEZ.DU",

    "CLW",

    "3331.HK",

    "WSQ.BE",

    "TNPL.NS",

    "NP",

    "SWM",

    "SIRPAPER.NS",

    "TNPL.BO",

    "MNDI.L",

    "LMP.BE",

    "UFS.TO",

    "2314.HK",

    "OJI.BE",

    "MERC",

    "FBR",

    "CYT.TO",

    "RFP",

    "KTU.F",

    "NK2A.DE",

    "N3Y.BE",

    "WPP",

    "HPE.F",

    "MPX.F",

    "0794.HK",

    "RFP.TO",

    "SXP.TO",

    "SRPML.BO",

    "RM.MI",

    "YB1.DU",

    "ONP",

    "8011.HK",

    "2002.HK",

    "VCLC.MU",

    "ORIENTP.BO",

    "PPX.AX",

    "KS",

    "JKPPRQ.BO",

    "SHREYANIN.NS",

    "YB1.DE",

    "OJI.F",

    "GLT",

    "JKPAPER.NS",

    "VRS",

    "BTH",

    "AVP",

    "HOO.MU",

    "OR.MI",

    "LEI.F",

    "0919.HK",

    "COC.F",

    "3318.HK",

    "BMW.V",

    "NUS.MU",

    "OR.PA",

    "JHS.BO",

    "OFC.F",

    "ULVR.L",

    "ULDV.PA",

    "JLMORI.BO",

    "LEBL.PA",

    "HEN3.DE",

    "KAO.SG",

    "HEN3.BE",

    "KAO.DU",

    "MLTRC.PA",

    "PGHH.NS",

    "KAO.F",

    "31V.BE",

    "ITP.PA",

    "KPT.TO",

    "HEN.DE",

    "CL",

    "ZYDUSWELL.BO",

    "ENR",

    "NUS",

    "FHCO",

    "8200.HK",

    "0925.HK",

    "Y35.SI",

    "GKB.BO",

    "UL",

    "LFVN",

    "IPAR",

    "REV",

    "5ER.SI",

    "6BK.MU",

    "EL",

    "SHD.SG",

    "NUVI",

    "HLF",

    "ZYDUSWELL.NS",

    "QEBR",

    "MTEX",

    "BLBK",

    "HOO.DE",

    "MDAV",

    "NUTR",

    "RB.L",

    "GUYD.PA",

    "RDEN",

    "LOC.F",

    "JYOTHYLAB.NS",

    "DSKX",

    "8176.HK",

    "NAPO",

    "KMY.MU",

    "SPB",

    "HGNC.SG",

    "KOY.F",

    "SUMR",

    "SHD.F",

    "SWI.TO",

    "UN",

    "KMB",

    "MAGNA.BO",

    "RCGP",

    "COTY",

    "PG",

    "UN4.BE",

    "UG",

    "STON",

    "8085.HK",

    "MSLP",

    "TAX",

    "0922.HK",

    "OA4.SG",

    "XSL.F",

    "WTW",

    "WOOF",

    "SHJ.AX",

    "HRB",

    "RGS",

    "ASCC",

    "STNR",

    "SCI",

    "SFLY",

    "ASCCF",

    "OA4.MU",

    "CSV",

    "CNYD",

    "BFAM",

    "CBDS",

    "ONVC",

    "MATW",

    "GK",

    "PKT.V",

    "GPRO",

    "EXAD",

    "BTN",

    "ABHD",

    "CLC",

    "BQE.TO",

    "SDS.V",

    "600.SI",

    "UL5.F",

    "TNC",

    "GNV.AX",

    "HEO.V",

    "UVFT",

    "ESR.V",

    "CLIR",

    "KWI.BE",

    "RCM.AX",

    "NVIC",

    "HCCI",

    "A5F.F",

    "PFSD",

    "FSS",

    "ENP.V",

    "BNET",

    "KWI.HA",

    "FTEK",

    "9EA.SG",

    "LIQT",

    "ADES",

    "N2H.SI",

    "SYEV",

    "GSPT",

    "CCC",

    "ERII",

    "IONEX.BO",

    "APL.V",

    "GRH",

    "FFM.V",

    "AWGI",

    "QST.V",

    "PMFG",

    "AQE.V",

    "CECE",

    "ESI.AX",

    "CLWT",

    "MFRI",

    "BBLU",

    "CDTI",

    "J03.SI",

    "H16.SI",

    "FLEX",

    "PLXS",

    "SGMA",

    "JBL",

    "TTMI",

    "Y45.SI",

    "ELTK",

    "KCE1.MU",

    "SMTX",

    "PMFI",

    "JBL.MU",

    "VIAS",

    "CLS",

    "IBI.BE",

    "MFLX",

    "IEC",

    "KBAL",

    "ZTE.V",

    "AUS.DE",

    "JBL.F",

    "BHE",

    "KCE1.SG",

    "VY7.F",

    "XM91.F",

    "VTMS",

    "ALN",

    "LNCE",

    "MKC",

    "GMK",

    "SJM",

    "K",

    "THS",

    "FVRG",

    "GLDC",

    "NUZE",

    "JVA",

    "JJSF",

    "SENEA",

    "SNAK",

    "GIS",

    "OPCO",

    "BGS",

    "CPB",

    "INGR",

    "DMND",

    "MJN",

    "KTEC",

    "FLO",

    "MGPI",

    "GMCR",

    "SENEB",

    "CAG",

    "JBSS",

    "FARM",

    "OME",

    "BDBD",

    "CSRH",

    "OTIV",

    "EDCI",

    "SAJA",

    "PLT",

    "CLGX",

    "ZFIN.MU",

    "SAFT",

    "ZFIN.F",

    "WRB",

    "MKL",

    "RE",

    "G.MI",

    "SLF-PE.TO",

    "CINF",

    "ALV.DE",

    "ANAT",

    "BCRH",

    "KFS",

    "DGICB",

    "UIHC",

    "ZFIN.BE",

    "AWH",

    "KMPR",

    "SLW.DE",

    "MUV2.DE",

    "PIH",

    "RNR",

    "MUV2.MI",

    "ZFIN.DE",

    "VR",

    "HIG",

    "PTP",

    "HRTG",

    "ORI",

    "L",

    "IFC.TO",

    "MBI",

    "KINS",

    "ZFI1.BE",

    "PRE",

    "QBE.AX",

    "NSEC",

    "AFFM",

    "MCY",

    "SIGI",

    "ALL",

    "HCI",

    "PGR",

    "AFH",

    "AMSF",

    "AFG",

    "RDN",

    "UVE",

    "AHL",

    "NGHC",

    "MHLD",

    "POW.TO",

    "BRK-A",

    "STC",

    "QBE.F",

    "SLF.TO",

    "T2V.DU",

    "IAG.AX",

    "ESUR.L",

    "AFSI",

    "GBLI",

    "AGII",

    "EMCI",

    "ZFIN.SG",

    "XL",

    "TPRE",

    "UNAM",

    "ZFI1.DE",

    "XLG.BE",

    "EFH.TO",

    "RSA.L",

    "BWINB",

    "TIL.V",

    "STFC",

    "ZFIN.DU",

    "HMN",

    "HNR1.HA",

    "RLI",

    "SNC",

    "CB",

    "BEZ.L",

    "MRH",

    "MTG",

    "KFS.TO",

    "SR9.MU",

    "ZFI1.F",

    "Y",

    "ZAS.MU",

    "IAG.TO",

    "THG",

    "SR9.DU",

    "WSV2.BE",

    "NAVG",

    "SLF",

    "CNA",

    "SMPA.F",

    "ENH",

    "MIG",

    "TRV",

    "NATL",

    "AIG",

    "CS.PA",

    "SCR.PA",

    "HCC",

    "UFCS",

    "WTM",

    "POW-PE.TO",

    "IPCC",

    "TWR.AX",

    "MXD.SG",

    "HALL",

    "ESGR",

    "ACGL",

    "ZAS.F",

    "ACE",

    "VAS.MI",

    "FNHC",

    "AXS",

    "FAF",

    "CVW.AX",

    "M1H.MU",

    "1125.HK",

    "MCO.L",

    "4D7.BE",

    "WMEG",

    "UOS.AX",

    "ADC",

    "JLL",

    "ROYE",

    "APSA",

    "RZU.BE",

    "QED.L",

    "LEJU",

    "HOFD",

    "TRC",

    "INTG",

    "CSGP",

    "YUI.F",

    "RMAX",

    "RQX.F",

    "HMTF",

    "EH5.SI",

    "VIA.HA",

    "H19.SI",

    "VIA.BE",

    "RMV.L",

    "IEI.V",

    "LMW.AX",

    "RLGY",

    "YIV.MI",

    "CBG",

    "BIW.F",

    "WSP.L",

    "RL2.DU",

    "AKR",

    "CKX",

    "SPB.F",

    "ZANUKCOM.BO",

    "4D7.F",

    "O5G.DU",

    "0960.HK",

    "MRC.TO",

    "LMRK",

    "FCR.TO",

    "WRN.L",

    "0208.HK",

    "RL2.F",

    "YSG.F",

    "GRI.L",

    "BPO-PH.TO",

    "ARL",

    "PQL.SG",

    "Y34.SI",

    "HRF.F",

    "0004.HK",

    "FLK.AX",

    "BBX",

    "NXI.PA",

    "RP.V",

    "VOX.V",

    "FCE-A",

    "PGEI",

    "HZJ.F",

    "XCP.V",

    "GRIF",

    "HZJ.DU",

    "AMRE",

    "OP4.F",

    "VIVR3.SA",

    "KW",

    "0519.HK",

    "EJ",

    "Z25.SI",

    "RSE",

    "O5P.F",

    "SFEF",

    "WESB.BR",

    "M35.SI",

    "O5G.DE",

    "VIA.DE",

    "MARC.BR",

    "WPG",

    "CTC",

    "YAK.V",

    "WESL.BR",

    "BIW.SG",

    "QU4B.F",

    "ORC.PA",

    "MAYS",

    "OUT",

    "BIW.DU",

    "MLSIC.PA",

    "HF",

    "CANN",

    "HZJ.MU",

    "DGTC",

    "PLAZ.L",

    "TPFZ.L",

    "L25.SI",

    "4J2.F",

    "AOXY",

    "VLW.AX",

    "ZEN.BR",

    "RZU.F",

    "Z",

    "T24.SI",

    "RAINBOWF.BO",

    "0088.HK",

    "WFC.TO",

    "AJMERA.BO",

    "LND",

    "BRE.TO",

    "OBAS",

    "DGH.AX",

    "JW-A",

    "EDUC",

    "CRRC",

    "PSO",

    "SCHL",

    "PEDH",

    "NYT.SG",

    "SPR.DE",

    "SGP1.BE",

    "TS-B.TO",

    "JPR.L",

    "TCL-A.TO",

    "MNI",

    "TRCO",

    "MPSLTD.BO",

    "8137.HK",

    "POPR.MI",

    "HMVL.BO",

    "NYT.BE",

    "ESTR.BA",

    "NYT.F",

    "XPG.MU",

    "DJCO",

    "LAG.MU",

    "MLV.F",

    "NYT.MU",

    "2IF.F",

    "ROU.BR",

    "XPG.BE",

    "LEE",

    "MMB.PA",

    "PSON.L",

    "MON.MI",

    "NYT",

    "FXJ.AX",

    "SSP",

    "TRI.TO",

    "TPUB",

    "8155.HK",

    "AHC",

    "QS3.SG",

    "OPG.AX",

    "Y.TO",

    "VITA.MI",

    "FP.TO",

    "NYT.DU",

    "SANDESH.NS",

    "0423.HK",

    "WOSB.F",

    "GCI",

    "SPR.DU",

    "REL.L",

    "4IL.F",

    "T39.SI",

    "XPG.SG",

    "0426.HK",

    "QRT.L",

    "JAGRAN.BO",

    "NEWM",

    "MLEST.PA",

    "JPR.F",

    "MDP",

    "TIME",

    "MSO",

    "PRVT",

    "RUK",

    "ENL",

    "MFST",

    "TRI",

    "VALU",

    "GWR",

    "FSTR",

    "STF.PA",

    "USDP",

    "UNP",

    "VOS.DU",

    "EJR.HA",

    "CSX",

    "INTSTOIL.BO",

    "TRN",

    "CP.TO",

    "GBX",

    "CNR.TO",

    "KEI.DU",

    "01T.F",

    "JAP.F",

    "WEJ.BE",

    "0066.HK",

    "NSC",

    "PWX",

    "ARII",

    "RAIL",

    "STB.TO",

    "V8H.F",

    "VOS.DE",

    "VOS.HA",

    "XTRN",

    "GOG.L",

    "KSU",

    "VOS.BE",

    "W9X.MU",

    "CP",

    "WB2.F",

    "CNI",

    "GSH",

    "WAB",

    "AFRB.L",

    "IOT",

    "IWB.SG",

    "KBU.DE",

    "0604.HK",

    "GRBK",

    "1918.HK",

    "GIC.V",

    "KOH.F",

    "0054.HK",

    "FOR",

    "CHLN",

    "S20.SI",

    "0123.HK",

    "WEG1.DE",

    "B2X.SI",

    "TII.V",

    "KBU.DU",

    "UANC.L",

    "YMO.F",

    "ZANDUREAL.BO",

    "1387.HK",

    "GDC.TO",

    "LIC.AX",

    "KAMANWALA.BO",

    "FQK.MU",

    "OMAG",

    "ORIA.PA",

    "STRS",

    "3900.HK",

    "CHE.SG",

    "XIN",

    "GZT",

    "0813.HK",

    "TPL",

    "CPP.MU",

    "OMAXE.BO",

    "XEUA.SG",

    "PBD.AX",

    "0016.HK",

    "ZYW.F",

    "ON7.SI",

    "0012.HK",

    "BAM",

    "H78.SI",

    "0410.HK",

    "P1Z.DE",

    "VIH.DE",

    "NWO.F",

    "1638.HK",

    "GUZ.F",

    "CHE.MU",

    "ORBITCORP.NS",

    "3XRA.MU",

    "KPE.F",

    "NNP.V",

    "K17.SI",

    "HGSH",

    "3XRA.F",

    "DWNI.HA",

    "CTO",

    "VIPUL.NS",

    "ZANDUREAL.NS",

    "K2M.SI",

    "1777.HK",

    "QHI.MU",

    "0017.HK",

    "0014.HK",

    "MRD.TO",

    "LGIH",

    "DVN.AX",

    "BPY",

    "CRZ.BE",

    "VIJSHAN.NS",

    "IRSA.BA",

    "FQK.F",

    "GUZ.SG",

    "0035.HK",

    "MLPRI.PA",

    "MMI",

    "XSA.MU",

    "1813.HK",

    "OMAXE.NS",

    "KBU.BE",

    "0917.HK",

    "1109.HK",

    "KOU.SG",

    "IWB.DE",

    "MLFIH.PA",

    "PRIMEPRO.BO",

    "NEN",

    "MLP",

    "USH.F",

    "1222.HK",

    "H4I.DE",

    "CCS",

    "KW2.F",

    "G7B.DE",

    "DLF.NS",

    "IRS",

    "XSA.F",

    "ADQU.SI",

    "D4N.SI",

    "45S.SG",

    "SDG.AX",

    "NLL.V",

    "MFU.BE",

    "C31.SI",

    "3383.HK",

    "IWB.BE",

    "KGF.V",

    "PSK.TO",

    "2007.HK",

    "XEUA.F",

    "XSA.SG",

    "G10.SI",

    "E8Z.SI",

    "FT7.F",

    "BAM-A.TO",

    "WOLE.BR",

    "XEUA.BE",

    "BRP",

    "FET.F",

    "NWO.BE",

    "MFU.MU",

    "KR3.F",

    "0845.HK",

    "ZIPR",

    "KOLTEPATI.BO",

    "KOLTEPATI.NS",

    "INN",

    "JOE",

    "ALEX",

    "1238.HK",

    "HHC",

    "XEUA.MU",

    "1966.HK",

    "LTF.F",

    "OGG1.SG",

    "3VZ1.SG",

    "EPGG",

    "JUVE.MI",

    "TT.L",

    "SHM.BE",

    "FLT.AX",

    "LTRPA",

    "EDL.DE",

    "TUI1.DE",

    "WGF1.DE",

    "AAD.AX",

    "FOSL",

    "EGT.V",

    "JUVE.MU",

    "YHA.BE",

    "2309.HK",

    "WGF1.F",

    "NKN.MU",

    "TJY.SG",

    "GAW.L",

    "THOMASCOO.NS",

    "TCG.L",

    "36L.F",

    "GLXZ",

    "TOUR",

    "BVB.DE",

    "32O.SG",

    "JUVE.F",

    "MOV",

    "1361.HK",

    "PCLN.MX",

    "ASR.MI",

    "HAS.F",

    "ASI1.SG",

    "AJXA.DU",

    "KT9.SI",

    "SHM.HA",

    "OKPLA.BO",

    "WGF1.BE",

    "EDL.PA",

    "TRI.PA",

    "NKN.F",

    "SHOW3.SA",

    "MLANT.PA",

    "DOO.TO",

    "TVPT",

    "NKN.SG",

    "ATX.V",

    "EDIA.BE",

    "VEII",

    "MLCMB.PA",

    "SHM.SG",

    "OLL.BE",

    "BC",

    "BVB.F",

    "YHA.F",

    "YHA.DU",

    "EGT",

    "HOG",

    "VMT.AX",

    "WI1.F",

    "PII",

    "POIL",

    "FOXF",

    "WGO",

    "ACAT",

    "DW",

    "MPX",

    "THO",

    "TERX",

    "0422.HK",

    "SLG.NZ",

    "FXNC",

    "BVFL",

    "VABK",

    "SMMF",

    "SONA",

    "ANCX",

    "VYFC",

    "AMNB",

    "FBNC",

    "BOMK",

    "GLBZ",

    "CHFN",

    "WSBC",

    "BNCN",

    "HBMD",

    "FMARQ",

    "SBSI",

    "FDVA",

    "NBBC",

    "BCAR",

    "CROL",

    "FRBA",

    "CHCO",

    "FCBC",

    "UBSH",

    "GBNK",

    "CTOT",

    "CZYB",

    "MBVA",

    "OPOF",

    "JAXB",

    "BYBK",

    "UCBI",

    "VBFC",

    "BANR",

    "NSBC",

    "WFBI",

    "CBAN",

    "ITBC",

    "CCBG",

    "OLBK",

    "COB",

    "ABCB",

    "BKOR",

    "LION",

    "PEBK",

    "TDBK",

    "CFFI",

    "MDSN",

    "BOCH",

    "TMAK",

    "SASR",

    "FMBM",

    "TBBK",

    "SBNY",

    "ABTO",

    "DNBF",

    "SNV",

    "SVBI",

    "PKWY",

    "SUSQ",

    "UBSI",

    "MBRG",

    "BAYK",

    "SLCT",

    "BOTJ",

    "FSRL",

    "PWOD",

    "BMTC",

    "EGBN",

    "SBFC",

    "FUNC",

    "ASBB",

    "CBCO",

    "SGB",

    "FNFG",

    "BVA",

    "NKSH",

    "HCFB",

    "FCNCA",

    "BKSC",

    "SBCP",

    "SHBI",

    "XBKS",

    "TOWN",

    "CZBT",

    "CART",

    "OPHC",

    "FWV",

    "CZNC",

    "FISI",

    "HMPR",

    "SBCF",

    "SSB",

    "YDKN",

    "LCNB",

    "SRYB",

    "WSFS",

    "CLBH",

    "HBOS",

    "TCFC",

    "CARO",

    "BKU",

    "MNRK",

    "UBCP",

    "BUSE",

    "WEIN",

    "HBIA",

    "CZWI",

    "FSFG",

    "SBFG",

    "HBAN",

    "FFBC",

    "FBIZ",

    "WIBC",

    "HCBN",

    "RLBS",

    "NBHC",

    "FFWM",

    "GABC",

    "CHFC",

    "FMAO",

    "FITB",

    "STBI",

    "DEAR",

    "TFSL",

    "IBCP",

    "CBIN",

    "HLAN",

    "CBU",

    "TWCF",

    "RN7.F",

    "TAYC",

    "KEY",

    "BBBI",

    "FNHM",

    "BVBC",

    "ZB1.F",

    "MSFG",

    "OXBC",

    "SRCE",

    "FMBH",

    "VNB.F",

    "PVTB",

    "WTFC",

    "MBWM",

    "FFNM",

    "THFF",

    "ONB",

    "SOMC",

    "CNAF",

    "OVBC",

    "FMNB",

    "BFFI",

    "LNBB",

    "USB",

    "MCBK",

    "MBFI",

    "YBA.F",

    "NSFC",

    "TFC.F",

    "CBSH",

    "PRK",

    "MCBF",

    "PEBO",

    "CHBH",

    "MCBC",

    "INBK",

    "LKFN",

    "KLIB",

    "OSBC",

    "PNBC",

    "FRME",

    "FMBI",

    "ASBC",

    "OTTW",

    "QRRY",

    "MFSF",

    "ZB1.SG",

    "FLIC",

    "FKYS",

    "RBPAA",

    "ORRF",

    "CUBI",

    "FRBK",

    "UVSP",

    "PKBK",

    "METR",

    "WBS",

    "FNLC",

    "ENBP",

    "EMCF",

    "ORPB",

    "HTBI",

    "QNBC",

    "HARL",

    "SNBC",

    "MPB",

    "OSHC",

    "UNB",

    "HBNK",

    "BDGE",

    "EMPK",

    "JFBC",

    "SSFN",

    "PFBX",

    "CBFV",

    "TMP",

    "MTB",

    "NFBK",

    "NBN",

    "CBNY",

    "AVLY",

    "STBA",

    "ESBK",

    "JUVF",

    "CNBKA",

    "CNOB",

    "ORIT",

    "STND",

    "NWFL",

    "BCBP",

    "VLY",

    "LBAI",

    "COBK",

    "VSBN",

    "WFD",

    "SAL",

    "HBNC",

    "CAC",

    "BNCL",

    "BHB",

    "CFIC",

    "ASRV",

    "CMTB",

    "BPFH",

    "CVLY",

    "CBNJ",

    "WEBK",

    "KTHN",

    "FULT",

    "WMPN",

    "PEOP",

    "NBTB",

    "AROW",

    "MBTF",

    "INDB",

    "HWBK",

    "QNTO",

    "PGC",

    "LYBC",

    "WASH",

    "PNBK",

    "FCCY",

    "MELR",

    "BWFG",

    "PTBS",

    "TRST",

    "CCNE",

    "HSBK",

    "WBB",

    "DIMC",

    "KTYB",

    "FDBC",

    "MGYR",

    "ATLO",

    "TRCB",

    "ENBN",

    "HVB",

    "MBVT",

    "FCF",

    "PFIS",

    "EVBN",

    "NPBC",

    "SBBX",

    "CIZN",

    "BOH",

    "UMPQ",

    "BSCA",

    "PPBI",

    "FOLB",

    "OCBB",

    "WAL",

    "GBCI",

    "MVLY",

    "FCZA",

    "PBNK",

    "FMBP",

    "PCBK",

    "CWBC",

    "FFNW",

    "ARBV",

    "PZBW",

    "ORBN",

    "SCCB",

    "PFLC",

    "CABB",

    "CFNB",

    "ZION",

    "MBNC",

    "PLBC",

    "AMRB",

    "HFWA",

    "FBAK",

    "HTBK",

    "NBCT",

    "OVLY",

    "SGBP",

    "CCBC",

    "PMBC",

    "CWBK",

    "WABC",

    "BSRR",

    "PVLY",

    "PMRA",

    "BBNK",

    "SAGN",

    "PFBC",

    "MFBP",

    "FNBG",

    "CUNB",

    "PUGB",

    "FIBK",

    "BANC",

    "LGHT",

    "SBAZ",

    "UBFO",

    "SNLS",

    "PACW",

    "PVBK",

    "FCTY",

    "SDPB",

    "TBNK",

    "NRIM",

    "CABC",

    "RWCB",

    "CATY",

    "CACB",

    "FCSB",

    "CVCY",

    "EXSR",

    "UIFC",

    "SSBI",

    "CTBP",

    "EBMT",

    "FSBW",

    "CHMG",

    "SIVB",

    "FBBN",

    "OJCB",

    "VCBC",

    "CPF",

    "MCHB",

    "NCAL",

    "HAFC",

    "BMRC",

    "TCBK",

    "SFGP",

    "NRLB",

    "VCBP",

    "BNNP",

    "FISB",

    "CVBF",

    "PFBI",

    "CTBI",

    "SSNF",

    "FFKY",

    "SYBT",

    "BXS",

    "ACFC",

    "IBTX",

    "FRNK",

    "FCB",

    "CFNL",

    "TRMK",

    "FBMS",

    "BKYF",

    "AFCB",

    "UBAB",

    "BBT",

    "NBTF",

    "FFKT",

    "FRCV",

    "MSL",

    "CBF",

    "CZFC",

    "EVER",

    "PNFP",

    "HBKS",

    "FNB",

    "FHN",

    "FABK",

    "AUBN",

    "HBHC",

    "ENFC",

    "EVBS",

    "PSTB",

    "OZRK",

    "IBKC",

    "PBIB",

    "USBI",

    "SOCB",

    "PLMT",

    "FBSS",

    "RF",

    "BNK",

    "CSFL",

    "RBCAA",

    "SGBK",

    "GSBC",

    "FFIN",

    "QCRH",

    "UMBF",

    "CSHB",

    "FCCO",

    "HTLF",

    "TBNC",

    "OKSB",

    "TBK",

    "IBOC",

    "WTBA",

    "PB",

    "BANF",

    "ISTR",

    "MFNC",

    "COBZ",

    "VBTX",

    "MOFG",

    "GFED",

    "TRVR",

    "LARK",

    "ACNB",

    "OABC",

    "TYBT",

    "CFR",

    "BOKF",

    "TCBI",

    "EFSC",

    "SLRK",

    "ALK",

    "GOL",

    "SKYW",

    "CPA",

    "LUV",

    "RJET",

    "JBLU",

    "ALGT",

    "GLUX",

    "VA",

    "BLTA",

    "HA",

    "LFL",

    "MRT-UN.TO",

    "NLY",

    "VSP.BE",

    "ZFC",

    "PSB",

    "TCI",

    "WEHB.BR",

    "CRR-UN.TO",

    "WXC.F",

    "LRT-UN.TO",

    "BMNM",

    "DEI",

    "GLPI",

    "GPT.AX",

    "ABR",

    "SMWN.F",

    "NNN",

    "CLNY",

    "CCG",

    "JMI",

    "BLKASHYAP.NS",

    "ARCP",

    "FVI.DE",

    "MITT",

    "CUZ",

    "WKP.L",

    "HR-UN.TO",

    "LAMR",

    "IVG.DE",

    "FVI.F",

    "WSR",

    "CYS",

    "FPI",

    "GPT",

    "LXP",

    "OLP",

    "VNO",

    "RCU.AX",

    "STWD",

    "NCT",

    "GOOD",

    "RDI.L",

    "ARI",

    "FUR",

    "IVR",

    "AMT",

    "PW",

    "ACRE",

    "IRET",

    "SGP.AX",

    "HASI",

    "CIM",

    "EXL",

    "SRC",

    "MTGE",

    "CONE",

    "BXMT",

    "AHH",

    "ESRT",

    "PMT",

    "UMH",

    "STAR",

    "ANH",

    "CMO",

    "OWQ.F",

    "BDN",

    "LAND",

    "SMWN.SG",

    "WPC",

    "CXW",

    "RWT",

    "MFA",

    "4V1.F",

    "RAS",

    "SWAY",

    "SNH",

    "WX4.SG",

    "WY8.F",

    "NWH-UN.TO",

    "MPW",

    "GEO",

    "HCN",

    "HCP",

    "PHP.L",

    "AVIV",

    "VTR",

    "HTA",

    "LTC",

    "HCT",

    "NHI",

    "SBRA",

    "DOC",

    "OHI",

    "UHT",

    "HR",

    "SPPR",

    "AHT",

    "DRH",

    "RHP",

    "HT",

    "IHT",

    "BEE",

    "CLDT",

    "TPH.TO",

    "INN-UN.TO",

    "J85.SI",

    "SOHO",

    "PEB",

    "RLJ",

    "SHO",

    "HST",

    "CHSP",

    "FCH",

    "FMU.PA",

    "LHO",

    "SOHOF",

    "AHP",

    "EXR",

    "HSTN.L",

    "SSS",

    "K2LU.SI",

    "STAG",

    "T8B.SI",

    "DCT",

    "DRE",

    "CUBE",

    "J91U.SI",

    "CMCT",

    "FR",

    "PLD",

    "QTS",

    "REXR",

    "MNR",

    "TRNO",

    "BYG.L",

    "WDP.BR",

    "WEB.BR",

    "MONT.BR",

    "PSA",

    "EGP",

    "A7RU.SI",

    "WRE",

    "LAND.L",

    "VJ6.DU",

    "KRC",

    "OFC",

    "WY7.F",

    "ESBA",

    "ORM",

    "DFT",

    "D8K.F",

    "LPT",

    "MGR.AX",

    "ND8U.SI",

    "D-UN.TO",

    "MPG",

    "EIFF.PA",

    "JUA.SG",

    "CLI",

    "UVA.MU",

    "BXP",

    "BOX-UN.TO",

    "BOXC",

    "BMR",

    "AP-UN.TO",

    "PDM",

    "COR",

    "FSP",

    "BEFB.BR",

    "FPO",

    "ARE",

    "GYRO",

    "NYRT",

    "FLY.PA",

    "HPP",

    "CSG",

    "GOV",

    "AOX.DE",

    "PKY",

    "CXP",

    "DLR",

    "HIW",

    "CPT",

    "ACC",

    "ARR",

    "AEC",

    "EDR",

    "UDR",

    "NRZ",

    "UDF",

    "AMH",

    "OAKS",

    "RVEND",

    "RESI",

    "AMTG",

    "EQR",

    "HME",

    "NYMT",

    "PPS",

    "SUI",

    "AGNC",

    "TWO",

    "EARN",

    "AIV",

    "ALTA.PA",

    "SBY",

    "MAA",

    "CHMI",

    "RSO",

    "ARPI",

    "BEI-UN.TO",

    "HTS",

    "FREVS",

    "RVEN",

    "AMH.V",

    "AVB",

    "ESS",

    "DX",

    "ELS",

    "TCO",

    "TSRE",

    "SLG",

    "GRT",

    "FRT",

    "GTY",

    "BRX",

    "KIM",

    "ROIC",

    "MAC",

    "HPT",

    "WRI",

    "WP4.MU",

    "CDR",

    "BLND.L",

    "DDR",

    "GGP",

    "LI.PA",

    "O",

    "ALX",

    "CBL",

    "RPT",

    "AAT",

    "REG",

    "KRG",

    "WX2.F",

    "RPAI",

    "N4S.F",

    "CWT-UN.TO",

    "IRC",

    "EQY",

    "RRC.F",

    "WHLR",

    "UBL.DE",

    "HMSO.L",

    "MERY.PA",

    "UBA",

    "HMG",

    "SCP.AX",

    "PEI",

    "NRF",

    "EPR",

    "0823.HK",

    "BFS",

    "UBL.F",

    "SKT",

    "RPI",

    "SPG",

    "REI-UN.TO",

    "CAR",

    "MLES",

    "AL",

    "ESSX",

    "BWO.L",

    "TGH",

    "EHIC",

    "FLY",

    "ECI.TO",

    "GFN",

    "0936.HK",

    "CFL.V",

    "VP.L",

    "ACY",

    "GFN.V",

    "HTZ",

    "AYR",

    "CHW.TO",

    "HEES",

    "LVD.L",

    "SIX3.DE",

    "R",

    "XBIO",

    "URI",

    "AAN",

    "UHAL",

    "T06.SI",

    "T03.SI",

    "GMT",

    "NEFF",

    "WLFC",

    "MGRC",

    "NTG.L",

    "TGA.AX",

    "BDI.TO",

    "SBAC",

    "ELRC",

    "TAL",

    "FORR",

    "INCR",

    "QGEN",

    "MYGN",

    "BASI",

    "NRCIB",

    "MFC.PA",

    "NARPROP.BO",

    "HS6.F",

    "SPF.V",

    "KBH",

    "HOV",

    "TULIVE.BO",

    "LEN",

    "KBH.MU",

    "DHI",

    "SPH1.SG",

    "JMM.SG",

    "UCP",

    "TPH",

    "KPH.DU",

    "UNRH",

    "NVR",

    "MDC",

    "BKG.L",

    "SPF",

    "CHCI",

    "ISRB",

    "MTH.V",

    "HOGARB.MX",

    "RYG.F",

    "TOL",

    "MTH",

    "TMHC",

    "JMM.F",

    "BWY.L",

    "TW.L",

    "SAREB.MX",

    "RYL",

    "NWHM",

    "MHO",

    "AVHI",

    "SPH1.MU",

    "NVE.F",

    "CVCO",

    "PHM",

    "BZH",

    "GFA",

    "1128.HK",

    "0027.HK",

    "SKC.AX",

    "MTN",

    "DRII",

    "CWN.AX",

    "BYD",

    "1928.HK",

    "CNTY",

    "WB.TO",

    "WYNN",

    "TBTC",

    "WYR.MU",

    "LVS",

    "WYR.BE",

    "LACO",

    "VAC",

    "LCR.F",

    "0070.HK",

    "8WY.F",

    "ISLE",

    "CACQ",

    "LCR.BE",

    "RCL",

    "TNA.V",

    "ERI",

    "PNK",

    "CCL",

    "0880.HK",

    "CZR",

    "PENN",

    "MX7A.SG",

    "FLL",

    "SKC.NZ",

    "NYNY",

    "MGM",

    "MCRI",

    "TVRB.PA",

    "LQ",

    "UWN",

    "GBCS",

    "KW9A.SG",

    "G13.SI",

    "MPEL",

    "LCR.DE",

    "WYR.SG",

    "MTY.TO",

    "KEG-UN.TO",

    "DFRG",

    "COSI",

    "DENN",

    "TGR.MU",

    "NATH",

    "RRGB",

    "JMBA",

    "ZOES",

    "YTC.F",

    "WTB.L",

    "MLTBM.PA",

    "RUTH",

    "ALSEA.MX",

    "THI.TO",

    "WHF4.DU",

    "BAGR",

    "BKW",

    "BBRG",

    "FRGI",

    "BWLD",

    "BOBE",

    "GCFB",

    "BH",

    "LUB",

    "TGR.DE",

    "SRB.DE",

    "HABT",

    "SONC",

    "1175.HK",

    "SRV-UN.TO",

    "YUM",

    "DIN",

    "DPZ",

    "JUBLFOOD.NS",

    "RFG.AX",

    "DAVE",

    "SSPG.L",

    "PZA.TO",

    "CCSC",

    "RICK",

    "BLUU",

    "TXRH",

    "JOES",

    "THI",

    "ARKR",

    "WEN",

    "SCU.TO",

    "JBX.F",

    "MCD",

    "JACK",

    "LOCO",

    "IRG",

    "CBRL",

    "KONA",

    "SPP.V",

    "HOTR",

    "NROM",

    "DNKN",

    "CHUY",

    "BPF-UN.TO",

    "OLD.F",

    "DRI",

    "BFW.NZ",

    "GTIM",

    "EAT",

    "TGR.BE",

    "CMG",

    "BJRI",

    "CAKE",

    "GNK.L",

    "RTN.L",

    "XCD.SG",

    "TAST",

    "PZZI",

    "PLKI",

    "RT",

    "JUBLFOOD.BO",

    "NDLS",

    "BLMN",

    "0538.HK",

    "STRZ",

    "JBX.BE",

    "IRG.TO",

    "KKD",

    "FRS",

    "0228.HK",

    "TYR.SG",

    "F13.SI",

    "CTIB",

    "STRI",

    "WMS",

    "T35.SI",

    "ML.PA",

    "1991.HK",

    "GTR.DU",

    "CSL",

    "VYST",

    "2128.HK",

    "MACPLASQ.BO",

    "N7G.F",

    "MYE",

    "BAF.DE",

    "DSWL",

    "RUBFILA.BO",

    "NZE.F",

    "AEPI",

    "PVL.PA",

    "JKTYREIND.BO",

    "CTB",

    "YRB.DU",

    "VAMSHIRU.BO",

    "GT",

    "MZX.DE",

    "BOS.TO",

    "0833.HK",

    "YRB.SG",

    "PC.MI",

    "TG",

    "JKTYRE.NS",

    "CXDC",

    "YRB.BE",

    "1050.HK",

    "MCH.MU",

    "JAICORPLT.NS",

    "ROYALCU.BO",

    "MRF.BO",

    "02Y.SG",

    "KESORAMIND.BO",

    "NILKAMAL.NS",

    "02Y.BE",

    "BGT.DU",

    "KESORAMIN.NS",

    "8117.HK",

    "STCC",

    "CMT",

    "1002.HK",

    "YRB.F",

    "LSBK",

    "HMNF",

    "OCFC",

    "NWIN",

    "PBSK",

    "0626.HK",

    "ABPA",

    "AMFC",

    "CBNK",

    "GRBS",

    "BKMU",

    "VERF",

    "TSBK",

    "ONFC",

    "HCBK",

    "SFDL",

    "FFIC",

    "BYFC",

    "NASB",

    "EBTC",

    "HBCP",

    "BSF",

    "FSGI",

    "LOGN",

    "OFED",

    "BFIN",

    "CARV",

    "WSBF",

    "PBHC",

    "JXSB",

    "BKJ",

    "BRBI",

    "WAYN",

    "BOFI",

    "AF",

    "ZNIVEMER.BO",

    "QC1.BE",

    "FXCB",

    "0900.HK",

    "NWBI",

    "SIFI",

    "STL",

    "CFBK",

    "NYCB",

    "KSBI",

    "FFDF",

    "LABC",

    "PULB",

    "GCBC",

    "HMST",

    "NECB",

    "PBCO",

    "SMPL",

    "HFBC",

    "HNZ.NZ",

    "NVSL",

    "FSBK",

    "FDNB",

    "MSBF",

    "NIDB",

    "RYFL",

    "ESSA",

    "HLFN",

    "COLB",

    "ABCW",

    "GTWN",

    "SMBC",

    "HFFC",

    "PFS",

    "WAFD",

    "QC1.F",

    "FBC",

    "ANCB",

    "EBSB",

    "LADR",

    "FDEF",

    "ESBF",

    "HWEN",

    "PBIP",

    "UBNK",

    "ASBI",

    "MLVF",

    "BRKL",

    "BHLB",

    "PBCP",

    "FFWC",

    "QCCO",

    "SRNN",

    "UCFC",

    "HIFS",

    "CSBK",

    "NHTB",

    "HFBL",

    "CFFN",

    "PSBH",

    "LPSB",

    "KRNY",

    "RVSB",

    "KFFB",

    "PROV",

    "FBSI",

    "TDCB",

    "ISBC",

    "UCBA",

    "FBPI",

    "DCOM",

    "WVFC",

    "GTPS",

    "FCAP",

    "PBCT",

    "FCLF",

    "MFDB",

    "CMSB",

    "PATD",

    "EKFC",

    "CASH",

    "WGBS",

    "P4O.SG",

    "AJA.BE",

    "CLIRF",

    "WELX",

    "V6C.HA",

    "MKSI",

    "BMI",

    "U77.SI",

    "JTC.V",

    "LDR",

    "SMN.AX",

    "CGNX",

    "TBIO",

    "V6C.F",

    "TDY",

    "SRT.DE",

    "SRT3.DE",

    "KEYS",

    "V6C.BE",

    "FARO",

    "ITRI",

    "SOEN",

    "OEM.DU",

    "GRMN",

    "AJA.DU",

    "MIND",

    "HDZ.F",

    "MOCO",

    "UNDT",

    "RTEC",

    "PUR.TO",

    "V6A.F",

    "MDX.V",

    "COHR",

    "SMIT",

    "DYSL",

    "HURC",

    "DGLY",

    "ORFR",

    "TRNS",

    "ZYG.MU",

    "LUNA",

    "STRN",

    "VPG",

    "ZYG.DU",

    "FLXT",

    "GIGA",

    "ELSE",

    "RSTI",

    "01H.DU",

    "MTSC",

    "LRAD",

    "TB5.F",

    "FLIR",

    "RSI.DE",

    "SRMC",

    "GOE.PA",

    "TKOI",

    "AFFX",

    "OIL.AX",

    "FEIC",

    "CYBE",

    "CPHD",

    "ST",

    "PRCP",

    "V6C.DE",

    "SRT3.SG",

    "ESE",

    "ASEI",

    "GSIG",

    "CUB",

    "OPS.V",

    "ZYG.F",

    "XSNX",

    "JAEN",

    "TRMB",

    "ESV.V",

    "MG",

    "BCO",

    "XNNH",

    "NXTD",

    "ADT",

    "XX.V",

    "TYC",

    "INKS",

    "XSC.DU",

    "CIX",

    "APVS",

    "GRDH",

    "IDW.V",

    "HNIN",

    "PCPZ",

    "CKP",

    "XTE.AX",

    "UUU",

    "NSSC",

    "NTS.V",

    "ASCMA",

    "VINTRON.BO",

    "ZICOM.BO",

    "MAGS",

    "ZICOM.NS",

    "LOJN",

    "MOC",

    "KTOS",

    "WF5A.F",

    "SMME",

    "XSC.BE",

    "MSA",

    "GFS.L",

    "WAVX",

    "BCDI",

    "SYMC",

    "BRC",

    "VSYM",

    "VII",

    "NTIP",

    "CHKP",

    "ASIA",

    "IL",

    "DTST",

    "VLDI",

    "SPCB",

    "MANT",

    "CYRN",

    "VDSI",

    "INTC.MX",

    "XIX.MU",

    "MLNX",

    "AUO",

    "QKL.BE",

    "CY",

    "SLX.AX",

    "AVGO",

    "XSK.F",

    "ATML",

    "ENTR",

    "MHC.F",

    "MXIM",

    "ARM.L",

    "MKN.F",

    "STM",

    "NXPI",

    "ROM.MU",

    "ATNY",

    "PWI.F",

    "FORM",

    "AMD",

    "MANY",

    "NVD.DU",

    "ZZE.F",

    "IPHI",

    "SPIR",

    "GSIT",

    "QKL.SG",

    "SGM.SG",

    "KOC.SG",

    "STM.PA",

    "VSW.MU",

    "ZZE.SG",

    "XS4.MU",

    "AOY.BE",

    "SIMG",

    "NXT.V",

    "KOPN",

    "INTC",

    "CAVM",

    "ISIL",

    "OM3.BE",

    "ONNN",

    "NPTN",

    "SGM.DE",

    "VSW.DU",

    "IDTI",

    "0981.HK",

    "IDT.SG",

    "XS4.SG",

    "FSL",

    "QKL.F",

    "NEN.BE",

    "VTSN.F",

    "MORGANITE.BO",

    "NEN.MU",

    "VSH",

    "IFX.DE",

    "XSK.SG",

    "ALDOL.PA",

    "ZZE.BE",

    "XIX.DU",

    "ROM.SG",

    "MTSI",

    "TXN",

    "MTLK",

    "POWI",

    "INVN",

    "SATCQ",

    "SMI",

    "SQNS",

    "MRVL",

    "BRCM",

    "ADI",

    "SEV",

    "SCIA",

    "TSM",

    "SMTC",

    "MRVC",

    "VTSS",

    "ESIO",

    "AAOI",

    "EZCH",

    "MSCC",

    "TQNT",

    "CCMP",

    "PRKR",

    "DSPG",

    "MPAD",

    "ADNC",

    "API",

    "TSEM",

    "PMCS",

    "RESN",

    "RFMD",

    "PSMI",

    "AXTI",

    "SCON",

    "QLGC",

    "PXLW",

    "SLAB",

    "QUIK",

    "MCRL",

    "PSEM",

    "SWKS",

    "INTT",

    "MMTIF",

    "EXAR",

    "XLNX",

    "ANAD",

    "AMKR",

    "DIOD",

    "AMCC",

    "CSUN",

    "MOSY",

    "SUNE",

    "OVTI",

    "FCS",

    "EMKR",

    "IRF",

    "CRUS",

    "FSLR",

    "ALTR",

    "ASTI",

    "YGE",

    "EBODF",

    "SVLT",

    "ACTS",

    "SCTY",

    "AOSL",

    "IXYS",

    "HSOL",

    "OPTI",

    "VIMC",

    "SPWR",

    "HIMX",

    "CBDE",

    "CEVA",

    "JKS",

    "LSCC",

    "EVSI",

    "CSIQ",

    "UCTT",

    "MCHP",

    "SIGM",

    "HORI",

    "VSLR",

    "TSL",

    "DION",

    "LLTC",

    "DSTI",

    "NVDA",

    "MPWR",

    "LOGC",

    "SOL",

    "MX",

    "JASO",

    "AKDS",

    "NVEC",

    "WSTI",

    "SLTD",

    "CAMT",

    "NVMI",

    "MLFAC.PA",

    "UTEK",

    "WFR.BE",

    "BTUI",

    "XCRA",

    "2336.HK",

    "GIG",

    "VXS.TO",

    "VEO.F",

    "ACLS",

    "TKY.BE",

    "R3Q.DE",

    "TER",

    "ENPH",

    "VAN.SG",

    "VAN.F",

    "VECO",

    "AMBA",

    "XXA.BE",

    "RBCN",

    "SEV.V",

    "0522.HK",

    "SODI",

    "TTDA.F",

    "NANO",

    "VAN.DU",

    "ATE",

    "ASYS",

    "CREE",

    "OKC.SG",

    "S3X.MU",

    "XXA.MU",

    "IMG.L",

    "ENTG",

    "BRKS",

    "VEO.DE",

    "MJ3.F",

    "KLIC",

    "SNPS",

    "EMAN",

    "ASX",

    "AEHR",

    "TTDA.MU",

    "E13.SI",

    "WFR.SG",

    "UCE.SG",

    "PKE",

    "ELG.F",

    "XXA.F",

    "TKY.SG",

    "AMAT",

    "UMC",

    "MTSN",

    "RIB.PA",

    "KU1.MU",

    "0527.HK",

    "LRCX",

    "COHU",

    "TTDA.BE",

    "ATRM",

    "PLAB",

    "SOPW",

    "TRT",

    "CSCD",

    "TSRA",

    "OCLR",

    "KLAC",

    "VAN.BE",

    "MJ3.SG",

    "DQ",

    "IMOS",

    "MXL",

    "IPGP",

    "MU.MX",

    "LEDS",

    "SEMI",

    "MU",

    "XAB.SG",

    "CODE",

    "RMBS",

    "XAB.F",

    "NLST",

    "ISSI",

    "XAB.BE",

    "KEX",

    "HIFH.SG",

    "SPN.NZ",

    "SALT",

    "HHFA.DE",

    "0517.HK",

    "FRO",

    "1308.HK",

    "KLI1.F",

    "KNOP",

    "NYKA.F",

    "XRG.F",

    "SB",

    "NM",

    "ASC",

    "NAP",

    "CMRE",

    "KIY.F",

    "TOO",

    "0144.HK",

    "TK",

    "GASS",

    "NAO",

    "GLOP",

    "NNA",

    "MRM.AX",

    "TNK",

    "NMM",

    "DCIX",

    "KLI1.BE",

    "ZUW.BE",

    "SCI.NS",

    "D5C.BE",

    "DSX",

    "TOPS",

    "VLCCF",

    "TGP",

    "3DW.MU",

    "SBLK",

    "NVGS",

    "ZUW.F",

    "3DW.SG",

    "RLOG",

    "FRO.L",

    "EGLE",

    "GLNG",

    "J10.SI",

    "DRYS",

    "DLNG",

    "EXM.BR",

    "E91.SI",

    "FREE",

    "TEU",

    "ULTR",

    "EUK3.F",

    "NYKA.DU",

    "3DW.F",

    "3382.HK",

    "LGT-A.TO",

    "FRL.BE",

    "EUK3.MU",

    "P13.SI",

    "XRG.SG",

    "ALC.TO",

    "PANL",

    "OSGB",

    "SHIP",

    "T8V.SI",

    "O2I.SI",

    "FRL.MU",

    "SCI.BO",

    "SSW",

    "GLBS",

    "NAT",

    "PRGN",

    "DAC",

    "ISH",

    "NTH.NZ",

    "ESEA",

    "EG0.SI",

    "TNP",

    "BALT",

    "CPLP",

    "ZUW.SG",

    "OCN.L",

    "NYKA.BE",

    "SFL",

    "8233.HK",

    "GLOG",

    "NEWL",

    "MATX",

    "DIS.MI",

    "N03.SI",

    "GSKNF",

    "GSL",

    "DHT",

    "XRG.BE",

    "KS.V",

    "MVG",

    "ZSV.F",

    "ZSV.DE",

    "SSRI",

    "ZSV.BE",

    "DV.V",

    "CMB.V",

    "GPL.V",

    "EXN.TO",

    "GPL",

    "HDA.V",

    "MSV.TO",

    "SLW.TO",

    "XYD.MU",

    "ZSV.MU",

    "ZSV.DU",

    "AG",

    "SII.DE",

    "ZSV.SG",

    "XYD.F",

    "TWR.V",

    "ZM5.BE",

    "SLW",

    "FR.TO",

    "SSO.TO",

    "SVM",

    "SVM.TO",

    "PAA.TO",

    "FSM",

    "MGN",

    "CDE",

    "XYD.BE",

    "HL",

    "MYA.V",

    "XYD.SG",

    "EXK",

    "MGT.TO",

    "EML",

    "LECO",

    "TTC",

    "SSD",

    "PFIN",

    "SCX",

    "SNA",

    "AERO",

    "AAC",

    "FMS",

    "HH",

    "AMS",

    "IPCM",

    "PRSC",

    "ACHC",

    "OVIT",

    "HLS",

    "OCR",

    "BEAT",

    "AHS",

    "USPH",

    "CCEL",

    "MD",

    "HWAY",

    "DVA",

    "AMEH",

    "ANCI",

    "PAHC",

    "PFHO",

    "HGR",

    "DYNPRO.BO",

    "ELM.L",

    "SOTL.NS",

    "SADHNANIQ.BO",

    "AMRS",

    "TIJ.F",

    "KRA",

    "SIKOZY.BO",

    "ORAP.PA",

    "CYT",

    "SY1.DE",

    "NXX.V",

    "PEIX",

    "DBT.PA",

    "LXS.F",

    "0640.HK",

    "AMAL.BO",

    "LYB",

    "LWLG",

    "ORGCOAT.BO",

    "SOTL.BO",

    "BFLS",

    "GRA",

    "LXS.DE",

    "0AW.F",

    "GURE",

    "ZTF.L",

    "OCT.F",

    "OMN",

    "POL",

    "GRA.SG",

    "VISHNU.BO",

    "AXTA",

    "MBLX",

    "FWK.V",

    "WDFC",

    "IFF",

    "SXT",

    "RP8.F",

    "NNC.F",

    "JMAT.L",

    "KMG",

    "OLN",

    "IPHS",

    "KOP",

    "R6H.F",

    "NTIC",

    "TORM",

    "GRA.MU",

    "NIKHILAD.BO",

    "VAL",

    "ALB",

    "DPN.F",

    "FSI.V",

    "IFF.F",

    "NPV.F",

    "CHE-UN.TO",

    "FOE",

    "SIAL",

    "AMTX",

    "JYOTIRES.BO",

    "PAH",

    "CUS.TO",

    "CHMT",

    "SYMX",

    "SHW",

    "QUC.F",

    "ZPPOLYSA.BO",

    "KRO",

    "OEC",

    "MACE",

    "CNO.V",

    "ROC",

    "VINYL.BO",

    "GPRE",

    "PPG",

    "TO7.DU",

    "PENX",

    "FUL",

    "BFRE",

    "DYNAMIND.BO",

    "OMN.TO",

    "RPM",

    "AFSE",

    "OMG",

    "NEU",

    "2198.HK",

    "ESPI",

    "AKU.F",

    "NI7.BE",

    "JINDALPOL.NS",

    "CBT",

    "ECO.TO",

    "CLTH",

    "HWKN",

    "KAP.F",

    "ODC",

    "0951.HK",

    "XPROINDIA.NS",

    "KWR",

    "WLK",

    "JAYAGROGN.NS",

    "MEOH",

    "FSI",

    "SNMX",

    "ALFAA.MX",

    "LPAD",

    "PZZA",

    "FRSH",

    "SBUX",

    "SOUP",

    "PBPB",

    "PNRA",

    "BDL",

    "ARMK",

    "USE.DE",

    "SBYA.F",

    "1003.HK",

    "EBA.F",

    "MCOX",

    "XKR.BE",

    "YAAA.MU",

    "ZA2.F",

    "XYUA.SG",

    "SACI.PA",

    "ZPF.MU",

    "1161.HK",

    "ZPF.DE",

    "ZPFK.MU",

    "ZAL.HA",

    "ZUMZ",

    "HGG",

    "MOW.NZ",

    "YOOX.MI",

    "0381.HK",

    "0653.HK",

    "ZVX.DU",

    "0931.HK",

    "YME.F",

    "ZAL.MU",

    "XOXO",

    "SPD.L",

    "YX3.DU",

    "ZAL.DE",

    "PCMI",

    "MFRM",

    "0595.HK",

    "ZPF.F",

    "VTG.AX",

    "RAK.SG",

    "MEO.SG",

    "MEO.DE",

    "GPC",

    "LDL.PA",

    "BAMM",

    "ZA2.BE",

    "HADV",

    "0856.HK",

    "WINA",

    "TIRFOAM.BO",

    "PERF",

    "YX3.SG",

    "TCS",

    "SMWH.L",

    "ZVX.F",

    "VSI",

    "O23.SI",

    "CTC.TO",

    "XYUA.F",

    "ODP.MX",

    "PRA.DE",

    "BCI.TO",

    "ODP",

    "KE4.DU",

    "QFX.AX",

    "JBH.AX",

    "CNV",

    "NCK.AX",

    "SBH",

    "LIQ.TO",

    "EBAY",

    "ZPFK.BE",

    "VLON.SG",

    "ZVX.SG",

    "RAK.BE",

    "BWNG.L",

    "PETM",

    "LQD.V",

    "G2M.MU",

    "TGE.F",

    "AMZO34.SA",

    "JB3.SG",

    "ZAL.SG",

    "JMEI",

    "WMAR",

    "EBAY34.SA",

    "ZPF.DU",

    "CST.V",

    "KAR",

    "BABA",

    "CST",

    "PETS.L",

    "TUMI",

    "BKS",

    "FLWS",

    "ZA2.SG",

    "RAK.MU",

    "SCY.NZ",

    "ZAL.BE",

    "HZO",

    "FIVE",

    "PTRY",

    "0348.HK",

    "ARP.AX",

    "CTC-A.TO",

    "FINL",

    "ZAGG",

    "OVER.F",

    "MED",

    "NNRX",

    "CS5.SG",

    "MIK",

    "0493.HK",

    "ZPFK.DU",

    "FBI.V",

    "N32.SI",

    "CNCO",

    "ZM3.F",

    "MUSA",

    "TUMIF",

    "ALVDI.PA",

    "ZAL.DU",

    "FTD",

    "CPW.L",

    "HOLL",

    "VITC",

    "IDG.TO",

    "SPLS",

    "EH.TO",

    "YX3.BE",

    "ZPF.SG",

    "CSS",

    "ULTA",

    "G2M.F",

    "ZM3.SG",

    "3389.HK",

    "TSCO",

    "XKR.F",

    "ZPF.BE",

    "TF3A.F",

    "RCII",

    "MIZ.SG",

    "BID",

    "MIZ.BE",

    "HSNI",

    "PZR.BE",

    "1280.HK",

    "OUTR",

    "JD.L",

    "TA",

    "SEAS",

    "CLUB",

    "GNTP",

    "TRK",

    "DVD",

    "MANU",

    "MYCC",

    "ISCA",

    "VTMB",

    "LTM",

    "XSPY",

    "POOL",

    "BDE",

    "NLS",

    "ESCA",

    "ELY",

    "SPWH",

    "JOUT",

    "HIBB",

    "SMAK",

    "SPCHB",

    "DOVR",

    "BGFV",

    "DKS",

    "CAB",

    "IWQ.SG",

    "TMW.SG",

    "TBI",

    "HSII",

    "DHX",

    "HSON",

    "TMH",

    "MWW",

    "XXY.F",

    "STAF",

    "RHI",

    "KELYA",

    "IWQ.MU",

    "SDG.PA",

    "CRRS",

    "MAN",

    "RECN",

    "KFRC",

    "JOB",

    "BBSI",

    "KFY",

    "ASGN",

    "CCRN",

    "ZPIN",

    "PRG.AX",

    "CCNI",

    "VISI",

    "MPI.L",

    "MHH",

    "ECHI",

    "PAYX",

    "DLHC",

    "MSI.TO",

    "CDI",

    "BGSF",

    "SFN",

    "CTP",

    "RCMT",

    "JOBS",

    "JFR.SG",

    "GSI",

    "ZEUS",

    "VISASTEEL.NS",

    "PYV.DU",

    "HIGA.F",

    "KST.BE",

    "KST.F",

    "SYNL",

    "SXC",

    "ICHB.MX",

    "STLD",

    "TKA.DE",

    "GGB",

    "CPSL",

    "RKKK.MU",

    "SZG.DE",

    "ISC1.MU",

    "VAS.DE",

    "MTL",

    "SCHN",

    "TX",

    "CMC",

    "ISC1.F",

    "MT",

    "TOK.F",

    "YMT.F",

    "AK2.DU",

    "ROCK",

    "JSL.BO",

    "AKS",

    "AGO.AX",

    "SUTR",

    "ISC1.SG",

    "NUE",

    "VAS.F",

    "TX.TO",

    "VAS.BE",

    "X",

    "CV8S.F",

    "G60.F",

    "SSLT",

    "ARI.AX",

    "VK.PA",

    "SAIL.NS",

    "FRD",

    "YMT.BE",

    "KCO.F",

    "NWPX",

    "VAC.F",

    "YM9A.BE",

    "OUTA.F",

    "SID",

    "0267.HK",

    "PYV.MU",

    "DDL.F",

    "RTS2.DE",

    "ISWL.BO",

    "TKA.F",

    "WOR",

    "0893.HK",

    "VAC.DE",

    "RUCHISTR.BO",

    "STLD.MX",

    "SIM",

    "PKX",

    "FXPO.L",

    "USAP",

    "TMST",

    "G60.SG",

    "VAC.MU",

    "CHOP",

    "ERAR.BA",

    "RAJGLOWIR.BO",

    "TINPLATE.NS",

    "TINPLATE.BO",

    "OUTA.SG",

    "OSN",

    "DDL.BE",

    "NPS.SG",

    "BCI.AX",

    "SSN.BE",

    "NMDC.NS",

    "IGC",

    "RS",

    "LIF.TO",

    "0826.HK",

    "31Y.F",

    "U1S1.SG",

    "X.MX",

    "0103.HK",

    "VARDHINDQ.BO",

    "RUS.TO",

    "STU.NZ",

    "CV8S.SG",

    "HIGA.BE",

    "YM9A.SG",

    "CX5.SI",

    "JFR.F",

    "IIIN",

    "31Y.SG",

    "AMBC",

    "ITIC",

    "OB",

    "AGO",

    "NMIH",

    "JFGI",

    "FNF",

    "KBLB",

    "LTBR",

    "TSE",

    "AXLL",

    "SCEI",

    "GLTC",

    "SYX",

    "ADK.V",

    "DSY.BE",

    "SAP.DE",

    "INFY",

    "MENT",

    "MGX.SG",

    "YDL.F",

    "DSY1.F",

    "SWP.PA",

    "OTC.TO",

    "QS6.SG",

    "NEM.DE",

    "PAY.NZ",

    "IRE.AX",

    "LDV.MU",

    "VIZ.F",

    "EVOL",

    "GKS.MU",

    "PROL.PA",

    "FJH.BE",

    "MCRO.L",

    "0800.HK",

    "ICAD",

    "MLPAC.PA",

    "XOINFO.BO",

    "VQS.V",

    "TYL",

    "SDL.L",

    "ISH2.DU",

    "ABT.TO",

    "ELX",

    "YSN.MU",

    "V3S.DU",

    "V3S.BE",

    "TNE.AX",

    "IW3.F",

    "CMY.BE",

    "IVU.BE",

    "SGE.L",

    "V3S.DE",

    "GLOG.BR",

    "KDIC.F",

    "IGE.PA",

    "DSG.TO",

    "PDFS",

    "NATI",

    "VV.V",

    "THP.V",

    "VGI.AX",

    "OS3.F",

    "KERNEX.NS",

    "TMI.DU",

    "ADSK",

    "OTX.MU",

    "ADA.AX",

    "KFX.L",

    "MGX.F",

    "QNA.AX",

    "ESP.TO",

    "ODYSSEY.BO",

    "INW.DE",

    "VGL.NZ",

    "JCS.AX",

    "TMI.SG",

    "CSU.TO",

    "TXT.MI",

    "RKN.TO",

    "DSY.PA",

    "RIV.BE",

    "KXS.TO",

    "YSN.SG",

    "TMI.F",

    "YSN.BE",

    "ERMS",

    "VMW",

    "ACIW",

    "CMY.MU",

    "PPA.SG",

    "USAT",

    "OCJ.MU",

    "ISD.V",

    "BRN.F",

    "YDL.SG",

    "ZYLOG.BO",

    "SCSC",

    "OHT.BE",

    "ILA.V",

    "ESL.TO",

    "PNG.MU",

    "VRNS",

    "ATTU",

    "LDV.SG",

    "CMY.F",

    "ROI.V",

    "NXJ.TO",

    "LDV.F",

    "CNQR",

    "0268.HK",

    "TCS.TO",

    "CIMT",

    "ITW.MI",

    "RKET.DE",

    "NEM.HA",

    "OCL.AX",

    "MOQ.AX",

    "QHR.V",

    "8081.HK",

    "PTC",

    "IVU.F",

    "IQ.V",

    "ISR.MU",

    "CMG.TO",

    "GKS.DE",

    "MIXT",

    "E5C.SG",

    "WYN.NZ",

    "YSN.F",

    "CMY.SG",

    "CXG-A.V",

    "ABMKNO.BO",

    "3888.HK",

    "CAS.PA",

    "VIS.V",

    "QTG.AX",

    "HPTO",

    "JEC.TO",

    "NVEE",

    "VSR",

    "WLDN",

    "TXGE",

    "CCGM",

    "KBR",

    "CESX",

    "AMRC",

    "ACM",

    "FRM",

    "DYNV",

    "JEC",

    "ENG",

    "GRAM",

    "EGL",

    "VSEC",

    "TTEK",

    "INVT",

    "ATNI",

    "CBB",

    "CTL",

    "WIN",

    "FRP",

    "T",

    "SHEN",

    "CHT",

    "CEL",

    "ALSK",

    "ELNK",

    "FTR",

    "ALTV",

    "CALL",

    "OTEL",

    "VZ",

    "BCE",

    "CNSL",

    "RPID",

    "CHA",

    "KT",

    "TEF",

    "PHI",

    "PHI.V",

    "ORAN",

    "NTT",

    "NULM",

    "NTL",

    "IPAS",

    "PAGEIND.BO",

    "EVK",

    "RL",

    "ZODIACLOT.NS",

    "QKS.F",

    "VC8.F",

    "3818.HK",

    "0333.HK",

    "KMD.NZ",

    "0928.HK",

    "KAZI.PA",

    "KBSF",

    "FCCN.L",

    "BANG.NS",

    "GUN.F",

    "FT8.F",

    "KORS",

    "IVO.F",

    "CRI",

    "OWK.F",

    "ZA",

    "HBI",

    "AAH3.BE",

    "AAH3.SG",

    "XNY",

    "MLPPI.PA",

    "GIL.TO",

    "ROCP",

    "0746.HK",

    "STEFR.MI",

    "RYUN",

    "VC8.DE",

    "APP",

    "QKS.MU",

    "1968.HK",

    "SQBG",

    "XELB",

    "COLM",

    "0311.HK",

    "HHWW",

    "0496.HK",

    "UNF",

    "ZQK",

    "GWI1.DE",

    "OXM",

    "GWI1.SG",

    "0264.HK",

    "2331.HK",

    "PERY",

    "ZODIAC.BO",

    "1173.HK",

    "0608.HK",

    "KPRMILL.NS",

    "VC8.SG",

    "VC8.BE",

    "GIL",

    "UA",

    "0483.HK",

    "VAN.BR",

    "QKS.SG",

    "KKL.BE",

    "VFC",

    "DLA",

    "1234.HK",

    "0216.HK",

    "KATE",

    "PBG.AX",

    "GIII",

    "IFA.V",

    "QKS.BE",

    "SGC",

    "PVH",

    "JOEZ",

    "RTRO",

    "VNCE",

    "AAH3.F",

    "OWK.BE",

    "LULU",

    "BOOT",

    "BWS",

    "PSX.BE",

    "FL",

    "WWLEATH.BO",

    "EDS",

    "AS7.F",

    "RELAXO.BO",

    "WEYS",

    "PSX.SG",

    "ICON",

    "SKX",

    "0660.HK",

    "PPX.DE",

    "FCA.DE",

    "0210.HK",

    "US5.DE",

    "WOO.BE",

    "WWW",

    "PPX.DU",

    "VRA",

    "DECK",

    "1386.HK",

    "PUM.DE",

    "NKE.HA",

    "ADS.DE",

    "NKE.DU",

    "1836.HK",

    "SHOO",

    "WOO.SG",

    "COH",

    "FORD",

    "NKE.BA",

    "NKE",

    "1880.HK",

    "0551.HK",

    "WOO.MU",

    "TLF",

    "RCKY",

    "YUE1.BE",

    "CROX",

    "LTAN.PA",

    "VIPIND.BO",

    "2307.HK",

    "0364.HK",

    "I9T.SI",

    "WEZ.MU",

    "KANCOENT.BO",

    "0565.HK",

    "TOR1.DU",

    "LUDLOWJUT.BO",

    "0873.HK",

    "GOKAKTEX.BO",

    "JAMSHRI.BO",

    "SKUMARN.BO",

    "SCDU.PA",

    "SRINACHA.BO",

    "2228.HK",

    "WIREFABR.BO",

    "2313.HK",

    "JAIHINDS.BO",

    "AIN",

    "SHARDFI.BO",

    "0528.HK",

    "UTN.BE",

    "UFI",

    "WELSPSY.BO",

    "OMKAR.BO",

    "VIPPYSP.BO",

    "CFI",

    "OXFORDIN.BO",

    "ZENITHEX.BO",

    "GSLNOVA.BO",

    "ENTRINT.BO",

    "GELWOOL.BO",

    "WEZ.BE",

    "DXYN",

    "WINSOMY.BO",

    "IVDN",

    "K7A.F",

    "TOR1.SG",

    "MHLXMIRU.BO",

    "WINSOMTX.BO",

    "TILE",

    "0420.HK",

    "JCTLTD.BO",

    "SRF.NS",

    "ORBTEXP.BO",

    "TATIAGLOB.BO",

    "2678.HK",

    "PUGE",

    "KAKTEX.BO",

    "WHE.F",

    "HANUNG.NS",

    "J18.SI",

    "JAGJANANI.BO",

    "1382.HK",

    "DONEAR.BO",

    "ZUCR.MI",

    "SWASTIVI.BO",

    "UVV",

    "JAT.DU",

    "JAT.F",

    "ITC.NS",

    "BATS.L",

    "VSTIND.NS",

    "VST.BO",

    "IMT.L",

    "AOI",

    "BBW",

    "GPIC",

    "LF",

    "HAS",

    "JAKK",

    "MAT",

    "USAK",

    "YRCW",

    "YTT.DU",

    "0077.HK",

    "8022.HK",

    "QLTY",

    "FRPH",

    "ARCB",

    "WERN",

    "PATR",

    "YTT.SG",

    "SWFT",

    "ECHO",

    "TMA.TO",

    "LSTR",

    "HTLD",

    "IFCR",

    "CVTI",

    "YTT.F",

    "PTSI",

    "JBHT",

    "MRTN",

    "CGI",

    "UACL",

    "CNW",

    "KNX",

    "SAIA",

    "ODFL",

    "KLXIV",

    "YTT.MU",

    "HY",

    "WNC",

    "KGX.F",

    "VPWI",

    "STS.V",

    "NAV.V",

    "SPAR",

    "OSK",

    "MAN3.MU",

    "NAV",

    "MAN.DE",

    "STS",

    "KGX.SG",

    "QIN.SG",

    "QIN.MU",

    "PCAR",

    "QIN.BE",

    "VOL3.BE",

    "VOL1.SG",

    "QIN.F",

    "VOL3.F",

    "GSEN",

    "VIE.PA",

    "PESI",

    "8128.HK",

    "VCI.V",

    "VVD.DE",

    "0309.HK",

    "AWX",

    "RAPT",

    "NAL.TO",

    "GLYE",

    "CWST",

    "CREG",

    "WMT.V",

    "IDSA",

    "SCHP.PA",

    "NOE.AX",

    "VTNR",

    "ZEF.F",

    "BIN.TO",

    "VVDH.F",

    "CLH",

    "TMR.F",

    "BARZ",

    "EEI",

    "GCEI",

    "LT5.SG",

    "3989.HK",

    "BSHF",

    "CVR.V",

    "GPRC",

    "TMR.SG",

    "BARA",

    "VVD.SG",

    "CVA",

    "NES",

    "DBG.PA",

    "BIN",

    "VVD.DU",

    "PYR.V",

    "TRR",

    "WCN",

    "WM",

    "SCB.F",

    "SMED",

    "ZEF.SG",

    "CLI.V",

    "ZEF.MU",

    "HZS.BE",

    "RSG",

    "ECOL",

    "CXEE",

    "ZEF.DE",

    "NVJN.MU",

    "HZS.DU",

    "ZEF.DU",

    "VE",

    "HZS.F",

    "GPE.PA",

    "0923.HK",

    "SKS.L",

    "SLNX",

    "SRCL",

    "DAR",

    "COM.PA",

    "VVDH.BE",

    "AWC.SG",

    "WTR",

    "WWG.F",

    "UU.L",

    "DVWA.L",

    "SBS",

    "STWS",

    "CWT",

    "ACP.MI",

    "SJW",

    "CW2.SG",

    "PCYO",

    "MSEX",

    "AWK",

    "ARTNA",

    "YORW",

    "DVW.L",

    "AWR",

    "GWR.TO",

    "SEV.PA",

    "CWCO",

    "CTWS",

    "PAOS",

    "5VD.F",

    "NWT.AX",

    "LL6.F",

    "TNE2.SG",

    "RTL.F",

    "REF.AX",

    "0524.HK",

    "XCIA.BE",

    "REU1.F",

    "HIK.DU",

    "LL6.BE",

    "PROTODEV.BO",

    "OTE.F",

    "QBR-A.TO",

    "N1M.DE",

    "GLN.TO",

    "NUM.PA",

    "QSC.F",

    "TU",

    "NZTA.BE",

    "1883.HK",

    "UTDI.DE",

    "QSC.SG",

    "KPNB.DE",

    "ZCHA.MU",

    "DTE.F",

    "4GK.F",

    "IKH.DU",

    "IOI.DU",

    "USM",

    "BCE-PY.TO",

    "SCG.V",

    "CWC.L",

    "VVU.MU",

    "RNET",

    "DTEA.DE",

    "QSC.DE",

    "XGTI",

    "GOK.V",

    "DTE.DE",

    "CWLR.DU",

    "UBNT",

    "T.TO",

    "O2D.F",

    "VERZ34.SA",

    "VFX.V",

    "VZ.BA",

    "DIP.MU",

    "XMC.BE",

    "S",

    "4GK.MU",

    "TGO.TO",

    "FTE.SG",

    "TIT.MI",

    "0013.HK",

    "CIGW",

    "ZCH.SG",

    "O2D.DE",

    "FRE.AX",

    "QBR-B.TO",

    "MTNL.NS",

    "TDS",

    "MCN.BE",

    "HIK.MU",

    "IQNT",

    "0762.HK",

    "NCI.V",

    "ZCH.F",

    "O2D.DU",

    "N3S.F",

    "Z78.SI",

    "MNW.AX",

    "RCI-B.TO",

    "CAMP",

    "GSAT",

    "IL2.MU",

    "BCE.TO",

    "LSX.DE",

    "VIVT4.SA",

    "V1Y.BE",

    "FSNN",

    "SKM",

    "8337.HK",

    "ONMOBILE.BO",

    "BAC.DU",

    "PCTI",

    "ZCH.DE",

    "TPM.AX",

    "O2D.MU",

    "IQ3.F",

    "PTNR",

    "0941.HK",

    "VIV",

    "V1Y.F",

    "QSC.MU",

    "IIN.AX",

    "ZCHA.SG",

    "5VD.SG",

    "17GK.L",

    "MBT.TO",

    "TNET.BR",

    "TGT.DE",

    "NTLS",

    "ALKEY.PA",

    "ZCH.BE",

    "4GK.BE",

    "AMX",

    "IDCC",

    "TSU",

    "PRXM",

    "ZCH.MU",

    "XMC.F",

    "KO71.F",

    "BAC.DE",

    "LL6.MU",

    "K3PD.SI",

    "FTE1.DE",

    "SPY.NZ",

    "8256.HK",

    "E5F.SG",

    "SFT.F",

    "TQIR.F",

    "CHU",

    "MERU",

    "XCI.DE",

    "NZTA.SG",

    "ONMOBILE.NS",

    "NTT.F",

    "CWLR.MU",

    "VIP",

    "TDE.L",

    "TKC",

    "KTC.SG",

    "SFT.DE",

    "UTSI",

    "KEYO",

    "VVU.F",

    "CWLR.SG",

    "E5F.MU",

    "DIRV",

    "O2D.HA",

    "SITO",

    "G11.SI",

    "OGM1.BE",

    "FNTN.DE",

    "VVU.DE",

    "VIV.PA",

    "MCN.DU",

    "AXTELCPO.MX",

    "2342.HK",

    "E4C.DE",

    "SOBA.HA",

    "MBT",

    "AMXL.MX",

    "SPOK",

    "ERFB",

    "TMUS",

    "OTES.BE",

    "VVU.SG",

    "VODH.DE",

    "VOD.L",

    "PT",

    "BCE-PA.TO",

    "TNE2.MU",

    "RCI",

    "CWLR.F",

    "CHL",

    "XCI.SG",

    "NORT6.BA",

    "VZ.MX",

    "QSC.HA",

    "35V.DU",

    "XSVT",

    "QP.L",

    "SF-H.V",

    "ADRO.JK",

    "HMTLF",

    "TLPH",

    "CPL.MC",

    "DTCY3F.SA",

    "VBO.F",

    "MFC-PM.TO",

    "KAJMF",

    "ASML",

    "ORK.F",

    "SSF-UN.TO",

    "BRL1.MU",

    "NIF-UN.TO",

    "ET81.F",

    "NSHBY",

    "TFIFF",

    "OMPS",

    "GGE",

    "EVCI",

    "122450.KQ",

    "PZC",

    "WEWWD.PK",

    "KYOCF.PK",

    "JMT",

    "TETHF.PK",

    "BMDPF",

    "KRMINT-.BO",

    "POMO4F.SA",

    "SNWAF",

    "SNEY",

    "SDISY",

    "KGHZF",

    "2010.TW",

    "6272.TWO",

    "XXAAY",

    "MWTCF",

    "HWRI",

    "DSF.V",

    "BMTP.L",

    "ERH",

    "THG.V",

    "TBPHV",

    "E1:Q01.SI",

    "VJBA.CO",

    "JFC.TO",

    "MXSG",

    "SSFC.OB",

    "CKGT",

    "XZJCF",

    "SYNB",

    "VNO-PI",

    "GPFOY",

    "JOGENG.BO",

    "7130.KL",

    "2340.TW",

    "WCSY",

    "STBFY",

    "XCY.BE",

    "SRPTW",

    "HNDAF.PK",

    "VONE",

    "ZIONW",

    "IEAM",

    "XTP.BE",

    "JDSHF",

    "QSI.SG",

    "ZODFF.PK",

    "UEPEP",

    "VLS.L",

    "MXMTY",

    "OPWEF",

    "HTCMF",

    "MHR-PC",

    "ECX.F",

    "APEOF",

    "ONV.HM",

    "DYSOY",

    "WW7.BE",

    "VODI.MU",

    "MXN",

    "XT1.F",

    "JBNK.TA",

    "XTD-A.OOR",

    "OGKJL.PK",

    "FNMAH",

    "YMZBY.PK",

    "WELPROJ.NS",

    "GOAS.PK",

    "WTSHF.PK",

    "WKBT",

    "NKT.CO",

    "KAKKF",

    "BGH",

    "TOWR.JK",

    "XAARF",

    "ELBA.AT",

    "NXIDP.PK",

    "YARO.ST",

    "APXZF",

    "3668.HK",

    "6277.TW",

    "3666-OL.HK",

    "DJM15-C.CBT",

    "VERIZ.AS",

    "VIVEF",

    "BLH",

    "FVBI11B.SA",

    "NFDSD.PK",

    "10V.BE",

    "WAX.AX",

    "OBSJF",

    "NEO-H.V",

    "YULE@NG.JK",

    "PBKOF",

    "AISCF",

    "BKAYY",

    "E1:RQ1.SI",

    "KESWASY.BO",

    "E2:MC7.SI",

    "LPG",

    "PINS",

    "QNTQF.PK",

    "DOLV",

    "COG.V",

    "TCYBF",

    "MRWSY.PK",

    "ASTY",

    "VOHO",

    "XCHANGING.BO",

    "JFWV",

    "VDL.BE",

    "DNP",

    "X.BA",

    "RXD-U.TO",

    "ROSV.PK",

    "FSRV",

    "BBLKF",

    "PPL-W.TO",

    "XELB.OB",

    "PSSGF.PK",

    "8CYN.SG",

    "GCOM",

    "1736.TW",

    "3608.HK",

    "VBND",

    "ECRY",

    "NNUTU",

    "YCRG",

    "EM.V",

    "RBN.NS",

    "1278-OL.HK",

    "INGVYSYABK6.BO",

    "DLGEF.PK",

    "TOELY",

    "CITIZYN.BO",

    "VRHD.PK",

    "QNC1.BE",

    "LBRDA",

    "BAC-PE",

    "THNRF.PK",

    "VBREE",

    "NIBA",

    "LPVO",

    "X7F.SG",

    "7111@OM.KL",

    "ZENITHBIR-EQ.NS",

    "NDEKF",

    "AMBI",

    "PTPP.JK",

    "1ZY.SG",

    "DBDIF",

    "PEL1.BE",

    "VAZ.BE",

    "5255@BN.KL",

    "QJYMF",

    "ZHEMHOLD.BO",

    "NTEK",

    "URGYF",

    "VBLX",

    "Z.V",

    "LNXGF",

    "YTRGF.PK",

    "UG6.HM",

    "AMPD",

    "H8N.F",

    "GUMRY",

    "TITXF",

    "SSPXF",

    "VELPM",

    "SPRD",

    "MADGQ",

    "BAC-PW",

    "NWPP",

    "NYTAB",

    "ISD",

    "M6F.BE",

    "ODMTY",

    "JBKT.TA",

    "000660.KS",

    "ZYB.BE",

    "2223.HK",

    "WLYW",

    "DE2A.F",

    "NPGW",

    "ZAV.DE",

    "GFIOF",

    "4677@OM.KL",

    "CTT.V",

    "ZPGU.L",

    "SDAXF",

    "MBIF",

    "AQUUU",

    "035610.KQ",

    "NTCEF",

    "DDJHF",

    "WYETHSL.BO",

    "QRS.V",

    "81A.F",

    "VTXPF",

    "HDIV.L",

    "PWNNY",

    "8273-OL.HK",

    "NPFT.OB",

    "JII.L",

    "3099-OL.HK",

    "IPSEF",

    "VIA.AX",

    "SGHGF.PK",

    "BPFHW",

    "CMDKF",

    "BTEL.JK",

    "WFS.SG",

    "CFSO",

    "NCT.L",

    "LKOD.IL",

    "VMARTQF.BO",

    "XL9A.MU",

    "3020-OL.HK",

    "WCRX",

    "JESC.L",

    "IUE.SG",

    "TAP-A",

    "MAWHY.PK",

    "WERA.F",

    "TNEYF.PK",

    "SOPEF",

    "ROICU",

    "CWIR",

    "PSB-PR",

    "ORXCF",

    "SBMAF",

    "PLNA-M.TA",

    "VIICQ",

    "PGP",

    "QEC.OL",

    "BABP.JK",

    "EKTAY",

    "JC6.SI",

    "OXDG",

    "CGLO",

    "7078OR.KL",

    "IEH",

    "1866-OL.HK",

    "SKJJF",

    "WATERBASELR.BO",

    "KENS",

    "NISUY",

    "86CL.L",

    "1831-OL.HK",

    "VT5A.SG",

    "CHSP-PA",

    "EXMGF",

    "MIESF.PK",

    "ZIJMY",

    "OCR-PB",

    "CEP",

    "AVSC.PK",

    "RSNHF",

    "GLTEF",

    "5EG.SI",

    "FREJP",

    "ESCRP",

    "ZUO.BE",

    "BNDX",

    "WVT",

    "NX8.MU",

    "SBGOF.PK",

    "BBO.TO",

    "SDWHF",

    "BMRI.JK",

    "ZGZ18-C.NYB",

    "TARSF",

    "SIHI",

    "TELIO.OL",

    "SIICF",

    "KPCKF.PK",

    "CDVI",

    "LZAGY",

    "CSHZ",

    "GHI",

    "GLNCY",

    "ZEEENTERQF.BO",

    "FRCOF",

    "ITVPF",

    "NGELY",

    "DTTLF.PK",

    "CMFN",

    "PRSG",

    "B9R.SI",

    "BOQKMP-A.A",

    "WLUC.PK",

    "8315.HK",

    "JPAD",

    "XMTTF",

    "SWW.HM",

    "EEKAF.PK",

    "JINDPOLYFSL.BO",

    "NISUF",

    "JPST.PK",

    "ZYDUSWELLSL.BO",

    "QUES",

    "N84.F",

    "XXBNA.PK",

    "DEXB.BR",

    "LTKBF",

    "LLTHF",

    "YSM.BE",

    "7078@BN.KL",

    "LVLV",

    "HJJ",

    "WFCO34F.SA",

    "MGYTF",

    "VOEL",

    "UNCHF",

    "WYNMF",

    "VXM-B.TO",

    "MSOAD",

    "TNEYD.PK",

    "ACSAY",

    "2608.TW",

    "SPPRO",

    "GHDN.BE",

    "VIDG",

    "UERLF",

    "ATLN.VX",

    "ODMO",

    "ESSI",

    "AGC",

    "BPO-PT.TO",

    "OART",

    "TACI",

    "SSI6.BO",

    "SGLRF",

    "QFI.F",

    "CHEUY",

    "WMRSD",

    "LGVWF",

    "GJB.V",

    "02480014.KQ",

    "TRMK.ME",

    "MUT3.F",

    "000815.KS",

    "KBDHY",

    "JROOF",

    "VSMR.PK",

    "VLPNY",

    "TKMJF",

    "ELWD",

    "FGL",

    "GOGR",

    "CTRA.JK",

    "BYDDF",

    "ZIGGO.AS",

    "OPERA.OL",

    "PALTF.OB",

    "GLAD",

    "HGMCF",

    "PDESF.PK",

    "LSTMF",

    "FMCCL.OB",

    "133716.L",

    "2788-OL.HK",

    "CMDRF",

    "KEWL",

    "508.SI",

    "4538.TWO",

    "8143-OL.HK",

    "010960.KS",

    "LQWC",

    "AELEF",

    "0035@BN.KL",

    "038950.KQ",

    "WBK.BA",

    "OMIP.L",

    "U0Y.SI",

    "NUSMF",

    "TWMJF",

    "RY5.SG",

    "FKR.SG",

    "MFC-PB.TO",

    "YIN14-C.NYB",

    "ZDPY",

    "MGDDY",

    "DUAVF",

    "TEPBF",

    "KURU",

    "79HP.SG",

    "N2R.MU",

    "CMVEV.PK",

    "082740.KS",

    "HENKF.PK",

    "YWGRF.PK",

    "FAS.L",

    "LMW.SG",

    "SBW",

    "GDVRF",

    "8291.HK",

    "ARCPP",

    "YMDAF",

    "CHDX",

    "ZPPB.OB",

    "SK3.IR",

    "TMKOL",

    "ORFG.PK",

    "ECRY.OB",

    "MLPVG.PA",

    "AFGRF.PK",

    "ZUY.MU",

    "CMGMF",

    "WJAVF",

    "RCCMF",

    "CGUIF",

    "0153.HK",

    "RCZRF",

    "LCGP@NG.JK",

    "SAA-A.V",

    "DMB",

    "WHFBL",

    "GJT",

    "GCO.MC",

    "HPS",

    "ZENTEC6.BO",

    "WFTSF",

    "YGZ15-C.NYB",

    "IWSY",

    "SHKLY",

    "TEMN",

    "SHLDZ",

    "PUR.L",

    "COGO",

    "WNXDF",

    "6556.KL",

    "WESC-TR.ST",

    "175330.KS",

    "JINFF",

    "SETO",

    "CLPBF",

    "0798.HK",

    "Z02.SI",

    "AEB",

    "VDMCY",

    "ZGG.MU",

    "AIR.PA",

    "YHOO.SW",

    "DMTGF",

    "CXPO",

    "MOBAF",

    "VOYJF",

    "NOVC.DU",

    "RPGRF",

    "PTAUF.PK",

    "E1:Z01.SI",

    "YHOF.EX",

    "GMWKF",

    "GRFS",

    "FOTB",

    "SONT",

    "ZZE-P.V",

    "FYFFF",

    "ANAV",

    "JDORGOCHEM-EQ.NS",

    "PXBP",

    "QCM16-C.CMX",

    "SHREEASHTA-EQ.NS",

    "IPLB",

    "MNODF",

    "WTFSE.OB",

    "E2:5RJ.SI",

    "CLST.L",

    "ZIGMASOF.BO",

    "SOKF",

    "RDVY",

    "ZSILF.PK",

    "VELPI",

    "TVLF.PK",

    "HE-PU",

    "AMSLF",

    "LBIO",

    "YMAIF.PK",

    "OSKIF.PK",

    "CL1A.SG",

    "VNWTF",

    "RGX.TO",

    "RSTI.ME",

    "PRPCF",

    "CJN.F",

    "6GC.F",

    "KSU-P",

    "CMK",

    "MDEVF",

    "DYDIF",

    "1297.HK",

    "ISAT.JK",

    "JPST",

    "7231.KL",

    "KGSDF.PK",

    "EVN",

    "AUNFF",

    "ZOLT",

    "LMCB",

    "SBLKL",

    "GLEC",

    "TMWEF.PK",

    "EQI.TO",

    "0183.HK",

    "MAUSY",

    "HHY.AX",

    "PRFC",

    "7293.KL",

    "DTLJF.PK",

    "FPAFY",

    "LK4B.MU",

    "SGPRY",

    "STVAF.PK",

    "JAGMF",

    "MUTHOOTFIN-N4.NS",

    "HAXS",

    "E1:W05.SI",

    "1L2.F",

    "VRCFF",

    "TKHVF.PK",

    "KAHL",

    "BNS-PT.TO",

    "CICN.SW",

    "WIDMF.PK",

    "IGE.OL",

    "SVVZF",

    "JBDU1.SA",

    "WFMC.PK",

    "HICKA",

    "MLYSH.PA",

    "EPGL",

    "RNCH",

    "SIBE",

    "FMLCF.PK",

    "WABAGSL.BO",

    "MIG1.L",

    "MLSPF",

    "FRMO",

    "QGS.SG",

    "JPRS.JK",

    "FCP.LS",

    "RY-PG.TO",

    "IBT.L",

    "DTEGY",

    "1263.HK",

    "PJUF.BE",

    "ANDA",

    "RUSFF",

    "PVS-PD.TO",

    "JADE",

    "MEURV.AS",

    "OFS",

    "SCHYF",

    "5OG.SG",

    "TVK1.SG",

    "BXYA.MU",

    "VL1.SG",

    "BVC8O.BA",

    "QOWI",

    "CYAGF",

    "HCACU",

    "PBU-UN.TO",

    "E1:J36.SI",

    "PALAY",

    "PLCC",

    "FINGF",

    "STPJF",

    "FPRUF",

    "PNCGF",

    "PLCSF",

    "WANHF.PK",

    "ZYTO",

    "RKUNF",

    "GJST",

    "E1M.BE",

    "MMT.V",

    "CANWF.PK",

    "ZAAP.PK",

    "006805.KS",

    "060250.KQ",

    "CUAEF",

    "VDG.BE",

    "2342.TW",

    "OPHRY",

    "OCFN",

    "ZCLCF",

    "HYB-UN.TO",

    "PVNX",

    "BTHRD",

    "DNI",

    "EXLLF",

    "STEI",

    "SOPEF.PK",

    "OM6.DU",

    "CAML.L",

    "FIEU",

    "2698-OL.HK",

    "BAFBF",

    "ROIL",

    "MZHOF",

    "NMZ",

    "HPAC",

    "4XI.SG",

    "VS2.F",

    "ORPGF",

    "MHY",

    "GDZD.F",

    "HRTCF",

    "DRGDF",

    "MXCYY",

    "OFSS.BO",

    "2823-OL.HK",

    "INGVYSYABK.BO",

    "OGZPY",

    "FPEZ.L",

    "JFBHF",

    "WOSB.HM",

    "PHF",

    "TLSRP",

    "PCF",

    "EVV",

    "UNLRF",

    "JMG.L",

    "NZTCF",

    "LUNMF",

    "ZMR1.F",

    "WHYRF",

    "KOKUYOCMLN.BO",

    "BTT",

    "PR15.BA",

    "WMXG",

    "NVEEW",

    "QMBN.F",

    "ZOL.L",

    "ZEP.F",

    "A1JUPZ.BE",

    "QRHC",

    "RSC6O.BA",

    "DALT",

    "MCTYF",

    "5285.TW",

    "E1:J17.SI",

    "ATEA.OL",

    "KMPPF",

    "OSTNO",

    "V8V1.F",

    "NOKBF",

    "OMVKY",

    "7S8.F",

    "SUWN",

    "MTVAF",

    "AMDWF",

    "HRZL",

    "071055.KS",

    "MTNOF.PK",

    "SHESF",

    "TMICF.PK",

    "GTGP",

    "SFTBF",

    "LAMDA.AT",

    "SKG-UN.TO",

    "XTRND.PK",

    "ABPI",

    "YKHTF",

    "SFRGY",

    "TQQQ",

    "HAU2.SG",

    "NBW",

    "Y2I.F",

    "AUDVF.PK",

    "VAGR3F.SA",

    "SOQ",

    "LEHNQ",

    "MOG-B",

    "MCUIF",

    "BRL1.F",

    "VSEC-BTA.ST",

    "JMD.F",

    "YO-T4-97-7.AX",

    "QEDN",

    "QSN.MU",

    "ETRXF",

    "CFRHF",

    "WDP.HM",

    "ZENTECBBPH.BO",

    "71Q1.SG",

    "0981-OL.HK",

    "3056.TW",

    "25541433.DU",

    "LTUS",

    "NWS",

    "CDYCF",

    "BIEL",

    "RGRNF",

    "6ZA.F",

    "QSGA.BE",

    "DGRS",

    "WBTMU",

    "PNE3.HM",

    "NHF",

    "5284.TWO",

    "TWTRQ.PK",

    "ABLYF",

    "TCA.L",

    "AELIY",

    "JS8.SI",

    "QWTR",

    "RH9N.BE",

    "OBV.VI",

    "G11.F",

    "GWRRF",

    "NVG",

    "XEL-PA",

    "TAOIF",

    "CDPYF",

    "MLJSA.PA",

    "YM2A.F",

    "105560.KS",

    "PFNA.BE",

    "MDURP",

    "UTF",

    "FEVR.L",

    "DLEXY",

    "GLOBALVECT.BO",

    "AF-PC",

    "WMITF",

    "VDR.AS",

    "EVBEF",

    "ANZFF.PK",

    "1428-OL.HK",

    "VEIFF",

    "TEL2-B.ST",

    "YX3F.EX",

    "LEDMV",

    "SKFRY",

    "FRFHF",

    "BYLOF.PK",

    "YIPI.PK",

    "ZNCMD.PK",

    "BIREF",

    "QIS.BE",

    "4BW.BE",

    "SQIDF",

    "MNHD",

    "NWTLF",

    "PKPYY",

    "3029-OL.HK",

    "BTKC.SG",

    "INTP.JK",

    "FAVS",

    "ZEG.HM",

    "GOLD",

    "PVTD",

    "ERRCF",

    "PORK.EX",

    "JSWHL6.BO",

    "PBG.TO",

    "RVRLF",

    "INC-UN.TO",

    "4197.TWO",

    "QFI.BE",

    "XGEN.PK",

    "SGIOF",

    "BLRX",

    "EBKDY",

    "VMRI.OB",

    "OSBI",

    "OADA.SG",

    "JMT.LS",

    "RISHYRN.BO",

    "8312-OL.HK",

    "VTCHD.OB",

    "E2:CX5.SI",

    "0080.KL",

    "RSE.L",

    "HEMP",

    "JRFOODS.BO",

    "EDVMF",

    "BRS.PA",

    "BAMXY",

    "XOM.SG",

    "TSCDY",

    "XXJVA",

    "KTN",

    "KPR.AX",

    "JAMTF",

    "WRPSF",

    "CAOVF",

    "PCT.NZ",

    "ZLDPF.PK",

    "8193.HK",

    "NKWEY.PK",

    "JTP",

    "SQNXF",

    "WEA",

    "EMO.V",

    "E1:EG0.SI",

    "CYXN",

    "OLJ.MU",

    "DDV1.L",

    "PDRDF",

    "MIESF",

    "SLE.L",

    "ZIQ14-C.NYB",

    "CRMWQ",

    "ZNK.MC",

    "AMWK",

    "FELTF",

    "NIHD.MX",

    "KRNLF",

    "BMDPD",

    "JOYREALTY.BO",

    "006260.KS",

    "EVERESTO.BO",

    "AMFG.JK",

    "XPC.BE",

    "TBAC",

    "WLH",

    "ZSHGY",

    "ELOGF",

    "PCOGF",

    "CUV.TO",

    "0831.HK",

    "086790.KS",

    "RHHBF",

    "OCINY",

    "YIU15-C.NYB",

    "URAGD",

    "CRF",

    "XPGA11.SA",

    "MRZLF",

    "REMPF",

    "STMN.SW",

    "DVHL",

    "N3F.BE",

    "VIY.L",

    "XWND.OB",

    "DSSPF",

    "VIZC.PK",

    "E1:AFXR.SI",

    "Z1O.BE",

    "3363-OL.HK",

    "J69U.SI",

    "81JK.L",

    "SGB.SG",

    "YKH17-C.CBT",

    "BMC",

    "IF",

    "TPNTF",

    "0842-OL.HK",

    "03025X.TW",

    "CAMJF.PK",

    "VEXPQ",

    "ZUK.SG",

    "GTATQ",

    "QUPPF",

    "FONTF",

    "GPAGF",

    "TRHIF",

    "CHOR",

    "033560.KQ",

    "NKOUF",

    "HBCGF",

    "MGCV",

    "5RK.SI",

    "00632R.TW",

    "032640.KS",

    "AAUKF.PK",

    "FFPM",

    "036090.KQ",

    "WWPW",

    "XQB.F",

    "NUFMF",

    "003000.KS",

    "EIKA.BE",

    "XE7A.F",

    "KATFF",

    "VOD",

    "PAWH.PK",

    "SWNG",

    "RGTB",

    "MVTGE",

    "OSG.F",

    "BCD.BE",

    "WPTH.PK",

    "QTX.L",

    "JSPRF",

    "DTQ",

    "62P1.BE",

    "SRV",

    "T7F1.F",

    "8176.TWO",

    "DYAP",

    "DNO.OL",

    "NQ4.BE",

    "XTLBD.PK",

    "2349-OL.HK",

    "ETVMF.PK",

    "GHA.BE",

    "SKXJF",

    "VOD.BA",

    "TPZ",

    "EOPSF.PK",

    "VBI.V",

    "QUTIF",

    "BGX",

    "SNPTF.PK",

    "NBD",

    "DICP.BA",

    "NRK",

    "BHPLF",

    "ZYCI.PK",

    "HIPH",

    "W01.SI",

    "CEF",

    "SBSNF",

    "XCHANGING-BE.NS",

    "CHND",

    "MBFJF.PK",

    "NDA-SEK.ST",

    "VSG.BE",

    "O3B.F",

    "NI6.F",

    "REG.L",

    "FESTF",

    "PBTY.L",

    "WPRFF",

    "ZIONZ",

    "ZMMR.TA",

    "JIHD.JK",

    "RMG.F",

    "TCA-PY.TO",

    "HTMMF",

    "IMYSF",

    "MURSF",

    "BLOZF",

    "ITTOF",

    "ZGC.F",

    "LOKCF",

    "BCNAF",

    "TNT-UN.TO",

    "FTSL",

    "HKSHY",

    "BQH",

    "HOI.BE",

    "JASN.SG",

    "MBYMF",

    "BYLOF",

    "PFH",

    "59M.F",

    "KRFIL6.BO",

    "ZDLA.PK",

    "WKU.BE",

    "CSWG.PK",

    "JOES.PK",

    "E2:FQ7.SI",

    "WEBC.PK",

    "YWZ16-C.CBT",

    "QNGP",

    "E1:MN5.SI",

    "WIIM",

    "MYHI",

    "SIDO@NG.JK",

    "ISHG",

    "MHLDO",

    "TNEYF",

    "AQX.BE",

    "JNRFY.PK",

    "YZCHF",

    "ABDC",

    "NSEEY.PK",

    "ITNRF",

    "3822-OL.HK",

    "MGHOF",

    "TYHOF.PK",

    "LNTP",

    "WFCOL.PK",

    "MILL-PD",

    "STK.V",

    "NXI-H.V",

    "OUTB",

    "HNA.OL",

    "NVLX",

    "WEGE3.SA",

    "EDNMF",

    "SOHOL",

    "5099.KL",

    "GUA",

    "AIW",

    "ORZCF",

    "FNDOY",

    "GLO",

    "YP9.F",

    "CFQSF",

    "SFBK",

    "TYFG",

    "ABGOF",

    "VLCJF",

    "VSTR",

    "020560.KS",

    "QHRTF",

    "XTN-L4-97.AX",

    "FDK.BE",

    "MAXD",

    "VPTOF.PK",

    "ONE.SG",

    "KRZZF",

    "OAO.MU",

    "1436.TW",

    "WISA3F.SA",

    "0LZ.F",

    "204620.KQ",

    "TFVC.TA",

    "HYM-UN.TO",

    "UZAPF",

    "IDWAF.PK",

    "ECWZ.L",

    "WSCRF",

    "WMMVY.PK",

    "E1:5I0.SI",

    "BZM",

    "FDU.MU",

    "VRSCD",

    "MULCOFF.BO",

    "JAK1.BE",

    "MHCC",

    "2WP.F",

    "CMNO.PK",

    "NIPPF",

    "RMGI",

    "MMTOF.PK",

    "5062@BN.KL",

    "EPLZ15-C.CME",

    "TBLMF.PK",

    "RUKEF",

    "EMITF",

    "UWEFF",

    "OHAI",

    "PTLF",

    "ZLCS",

    "GELYF",

    "023530.KS",

    "8185.HK",

    "CAJFF",

    "SZUKF",

    "DNPUF",

    "RVVY",

    "FDRVF",

    "OTSKF",

    "PXH.F",

    "JOBI.PK",

    "VAALF.PK",

    "ORXE",

    "GRF.MC",

    "KGKC.ME",

    "MGOR.TA",

    "E2:B49.SI",

    "ARY",

    "BPHX",

    "DUVNF",

    "NMGRF",

    "XBOV11.SA",

    "IGA",

    "XMF-PC.TO",

    "RDUFF",

    "WPTIF",

    "ANTM.JK",

    "XER.HM",

    "MSC.AX",

    "0288.HK",

    "NZEOY.PK",

    "SGEF-U.TI",

    "SAS.ST",

    "TWGP",

    "0125-OL.HK",

    "ODPVY",

    "XTN-L4-95-5.AX",

    "EEVNF",

    "SPE.L",

    "PACI",

    "UREE",

    "VEST",

    "LMTCF",

    "JUBILANT6.BO",

    "QRSM.PK",

    "6889-OL.HK",

    "GHC",

    "SAIDF",

    "RCS",

    "ZG.SW",

    "BJURF",

    "WFU4.BE",

    "DBOEY",

    "2640129.HM",

    "WEQ-DBB.TO",

    "NSLYF",

    "AIA.V",

    "PAXN.SW",

    "WESDA.AX",

    "TVFZF",

    "OL2A.BE",

    "APDNW",

    "FJTNF",

    "BCSB",

    "XTE.BE",

    "INN-PB",

    "ABRN",

    "QNIIF",

    "XCX.V",

    "JSPT.JK",

    "INZ",

    "SGKBF",

    "003600.KS",

    "TRRU",

    "RNSDF",

    "FRCOF.PK",

    "1589.KL",

    "YTHL.PK",

    "AMIQF",

    "VELPP",

    "JSL6.BO",

    "ENAKF",

    "TRKP.OB",

    "DYLLF",

    "ZLPSF",

    "LFDEF",

    "VLX1.DU",

    "XGJ.F",

    "SVLKF",

    "068760.KQ",

    "010130.KS",

    "0400-OL.HK",

    "0SG.F",

    "CLAS-B.ST",

    "WOL.VI",

    "SAL.MI",

    "MEGEF",

    "IDBH.TA",

    "BSV-P.V",

    "TAMG",

    "1380.HK",

    "E35A.MU",

    "HGM16-C.CMX",

    "CVVT.PK",

    "RAMAVISION.BO",

    "CHTP",

    "WF2.F",

    "1251.HK",

    "CJEWF",

    "RTXB",

    "ASMVY",

    "OGLDF.PK",

    "VETO-SM.NS",

    "VRACY",

    "KNBA",

    "JBAXY",

    "ENCR",

    "0871.HK",

    "YGU14-C.NYB",

    "3011-OL.HK",

    "NWPG",

    "INZZZ",

    "SPPJY",

    "GOV380.NZ",

    "PSCT",

    "RKWBF",

    "YJ3A.BE",

    "ERW",

    "BKIWF",

    "005690.KS",

    "AMRWF",

    "MDABY",

    "TGSGY",

    "5FA.SI",

    "XJOKME-A.A",

    "4Q2.F",

    "NTSC",

    "IFSL",

    "AC.TO",

    "KAN.ST",

    "BGLEP",

    "DCUC",

    "MRLLF",

    "YGQ15-C.NYB",

    "XYTS",

    "TBLE3.SA",

    "ADRU",

    "1CY.SG",

    "PHT",

    "1191-OL.HK",

    "IRAVF",

    "AGUA",

    "NLY-PD",

    "WABCOSL.BO",

    "EVSI.OB",

    "ZIONO.PK",

    "ZPGZ.L",

    "ZGN-H.V",

    "MISH.TA",

    "ADKT",

    "RIVE",

    "040670.KQ",

    "YU4.SG",

    "UREQF",

    "MPEFF",

    "TPMT",

    "ZUD.BE",

    "8120-OL.HK",

    "MDVPF",

    "XTLB",

    "WFC.F",

    "LINK",

    "EDVVF",

    "011170.KS",

    "ELB",

    "HYI",

    "CAOLF.PK",

    "MTLQU.PK",

    "XMF-PB.TO",

    "DQJCF.PK",

    "053595.KQ",

    "ENGFF",

    "ECX-H.V",

    "JSHG",

    "USG1.F",

    "DYAP.PK",

    "THVGF",

    "JBFCF.PK",

    "MLLYP.PA",

    "VOELD",

    "PNL.AS",

    "NT5.F",

    "RGRE",

    "PLPE",

    "MVCB",

    "XJOKMU-A.A",

    "L1O.HM",

    "ING",

    "ZIPG.PK",

    "REDPF.PK",

    "2168-OL.HK",

    "VGID",

    "2211-OL.HK",

    "WTON.JK",

    "NZERF",

    "036570.KS",

    "JPZ",

    "RDS-A",

    "KABHF",

    "VRBCF",

    "FLSW",

    "BNKR.L",

    "SZHFF.PK",

    "VALE-DEB83L1.SA",

    "WIND.L",

    "IM.AS",

    "IPXHF.PK",

    "NGKSF.PK",

    "DOFFF.PK",

    "EVSP",

    "GDVTZ",

    "EMGL",

    "KIPO",

    "CH",

    "U1L.SI",

    "ADRA",

    "SUMM.L",

    "KMGA.L",

    "7323.KL",

    "TRAP.L",

    "NID",

    "YNGFD.PK",

    "AHF.TO",

    "2213.HK",

    "GPIPF.PK",

    "052400.KQ",

    "ZGJ15-C.NYB",

    "XT3B.MU",

    "CLAC",

    "BANFP",

    "SUUIF",

    "TPVG",

    "NABA",

    "BA47.L",

    "WQNI",

    "BOMXF",

    "LFGEF",

    "DTVMF",

    "VGGGF",

    "AZSEY",

    "PNMLF",

    "RTZ.BE",

    "GRH-PC",

    "ANLY",

    "TTCS",

    "BEMG",

    "SEB-A.ST",

    "GTWCF",

    "PLWTF.PK",

    "CCME",

    "TCRTS",

    "EGF",

    "SRC.L",

    "KLKBY",

    "AEEI",

    "YKQ17-1.CBT",

    "TKRFF.PK",

    "CZMWY",

    "USPS",

    "YSC-H.V",

    "COHG",

    "FSQ.F",

    "RWCI.PK",

    "KATX.PK",

    "NRF-PC",

    "AINC",

    "GDLNF",

    "OFR-UN.TO",

    "KANOPLA.BO",

    "VSTFF.PK",

    "TCPC",

    "JGSHF",

    "RFT",

    "NNGPF",

    "SEG-H.V",

    "OKIEF",

    "HYSNY.PK",

    "YAM.BE",

    "IMTFF",

    "ANIMF.PK",

    "FXCNF",

    "WACMY.PK",

    "RGHLF",

    "ZNMNF.PK",

    "NIHDQ",

    "OMRNY",

    "PGS.OL",

    "VAKRANGEE.BO",

    "LYRSY",

    "THC1.MU",

    "SHWDY.PK",

    "012630.KS",

    "6947@BN.KL",

    "STRN.SW",

    "OPAY.L",

    "DIV.TO",

    "FNMAN",

    "MGU",

    "YSM.F",

    "JFTTL.PK",

    "5RA.SI",

    "MPEVF",

    "3272.TWO",

    "FTS-PJ.TO",

    "XRGYF",

    "AM3.SI",

    "4XN.BE",

    "SOBGF.PK",

    "AISLF",

    "LEDIF",

    "BIR.IR",

    "ZVTK.PK",

    "79Q.F",

    "YTAA.BE",

    "XCRP",

    "FCSS.L",

    "6449.TWO",

    "OBTLY",

    "LHMAF",

    "VALUEIND.BO",

    "012330.KS",

    "UTLE.L",

    "3XM.F",

    "UCAP",

    "KIBO.L",

    "STWC",

    "K70N.BE",

    "NGDAF",

    "1410.TW",

    "WNX-H.V",

    "GRP-U",

    "SVIN",

    "011930.KS",

    "PTAWF.PK",

    "YTBLQ",

    "MCFUF",

    "UTG",

    "NAN",

    "NMXS",

    "TOSCF",

    "NFRGF",

    "DYU.V",

    "MKGAY",

    "FOGL.L",

    "7003@BN.KL",

    "WLMIY",

    "LGUAD",

    "CX6.F",

    "TVPP.BA",

    "AMEN",

    "OMAXAUTO.BO",

    "GLBXF",

    "EVJ",

    "MNOIY",

    "ATKXF",

    "EMIF",

    "QDTA.PK",

    "XRTX",

    "MZTLF",

    "BVBJ.DE",

    "QMM",

    "2XI.SG",

    "MJC",

    "OHAQ",

    "PACT",

    "WPSHF",

    "BRGXF",

    "7109@BN.KL",

    "KMDA",

    "SKRUF.PK",

    "CDLVF",

    "HITT",

    "CXBMF",

    "CRESY",

    "LYPSAGEMS-EQ.NS",

    "XDM.V",

    "WLCDF",

    "SZC",

    "BRDCF",

    "2283@OM.KL",

    "6194.TWO",

    "RICY.JK",

    "MTFC",

    "COCBF",

    "MST-UN.TO",

    "SMAWF",

    "03014X.TW",

    "DTG.L",

    "CBGDF",

    "XTIC",

    "WFSCE.OB",

    "LOGI",

    "KEPL11.SA",

    "3474.L",

    "NRBAY",

    "SHB-A.ST",

    "JETAIRWAYSL.BO",

    "JISLDVREQS.BO",

    "LTS-PA",

    "CRBJF.PK",

    "RXEEY",

    "JSMR.JK",

    "SU3.BE",

    "ZGV14-C.NYB",

    "VOSSY",

    "EADSY",

    "KRISHNA.BO",

    "042660.KS",

    "ILADF",

    "RGRP",

    "TVOG",

    "NNX.V",

    "ARGS",

    "MTSFF.PK",

    "KSKTF",

    "PCG-PH",

    "VICTENT.BO",

    "DNDN",

    "ZEGG.PK",

    "NRCA.JK",

    "SMTD",

    "003555.KS",

    "RIBS",

    "XREGE.OB",

    "JEV.IR",

    "SVNWF",

    "ZEH.SW",

    "1366.HK",

    "Q7W.SI",

    "WMMVY",

    "HBAPF",

    "AVXT",

    "JRC.SG",

    "YMTKF",

    "MXDHF",

    "YPCUC.BA",

    "EMU15-C.CME",

    "HVLM",

    "NHTC",

    "JISLJALEQS.BO",

    "NSTFF",

    "XLENERGY.BO",

    "PCRTF",

    "1504.TW",

    "43W1.BE",

    "UCBJF",

    "YPSN.SW",

    "JIL.BE",

    "EVRC",

    "VTMEF",

    "BKK",

    "ETWA@TN.JK",

    "TMOAF",

    "PTF.V",

    "7050@BN.KL",

    "ZHEXY.PK",

    "XTXI",

    "NIO",

    "ZRDZF",

    "OSUP9.BA",

    "YHIIF",

    "ONDOF",

    "1822.HK",

    "1036-OL.HK",

    "VALE5.SA",

    "YSR.BE",

    "SMM",

    "ORK.OL",

    "4243@OM.KL",

    "PGAS.JK",

    "2609.TW",

    "ZIMCF.PK",

    "RWNEF",

    "EQTXF",

    "VLG.MC",

    "OUBS",

    "YBLT.PK",

    "AH.TI",

    "IGHOF",

    "QSURF.PK",

    "PTXAF",

    "PNDORA.CO",

    "1439.TW",

    "STEC",

    "DIGX",

    "ORSUF",

    "AJMPF",

    "UEPEN",

    "URA.MC",

    "DUBL",

    "046890.KQ",

    "VOCS",

    "TAPR",

    "MUTHOOTFIN-N5.NS",

    "RVL1.F",

    "WYETH6.BO",

    "GUORF.PK",

    "ZNCMP",

    "HOTL.JK",

    "JSCPF",

    "WALCHANNAG.BO",

    "BEER",

    "DIVO11.SA",

    "IKSGY",

    "1222-OL.HK",

    "FCOGF",

    "DLPX",

    "NREOF",

    "PAWH",

    "NVCP",

    "FSAM",

    "HYEA.F",

    "YSFT.MI",

    "AOL1.HM",

    "PKSVF",

    "XY8.F",

    "5878.KL",

    "BLVDU",

    "X.TO",

    "KOZAY",

    "V0Y.F",

    "FCCTP",

    "TRYRF",

    "NETO",

    "KHNTF",

    "02X.F",

    "E2:5DM.SI",

    "ZYN-A.TO",

    "QIW.SG",

    "161390.KS",

    "1201.KL",

    "KSIH",

    "9121@BN.KL",

    "OINK",

    "KWHAF",

    "XRMB.PK",

    "SRGRF",

    "INFX",

    "MAOFF",

    "MZAV",

    "SJMHF",

    "8996.TW",

    "CHSO",

    "WEQL",

    "HTY",

    "TRAC",

    "URBDF",

    "ZH5.SG",

    "ELEEF",

    "8145.HK",

    "4995.KL",

    "PHD.L",

    "XXIC.L",

    "DIAV5L.SA",

    "WHGPF.PK",

    "TAXA89L.SA",

    "SMMYY",

    "LOONF",

    "QYM.L",

    "LWSCF",

    "GWMCF",

    "MTMC",

    "BNS-PP.TO",

    "GWOX",

    "VNMHF.PK",

    "KNCRF",

    "XEPRF",

    "NKG",

    "NHV.BE",

    "AGHEF.PK",

    "WELLD",

    "GENE",

    "XNC2O.BA",

    "BBR.SG",

    "YTHL",

    "2063.TWO",

    "1363.HK",

    "ETWA.JK",

    "B2Y1.BE",

    "QE.V",

    "NKOSF",

    "064290.KQ",

    "KLBAY",

    "XCNGF.PK",

    "SECVY",

    "KNBWF",

    "CHKVZ",

    "IIFLFIN-N4.NS",

    "GLFPN",

    "E90.SI",

    "2492.TW",

    "HYTM.OB",

    "OTCL",

    "SGEN4F.SA",

    "GNPT",

    "1181-OL.HK",

    "YASKF",

    "PEGRF",

    "NYTAB.PK",

    "SCT",

    "PENGF",

    "QACL.HA",

    "MCM.MC",

    "ONE.TO",

    "CBUPF",

    "CANWF",

    "ZENI.ST",

    "ORSCY",

    "TSRYY",

    "QALB",

    "TERRF",

    "KVCPF",

    "JLM.SG",

    "DPG",

    "NEGY",

    "NETYF",

    "RTOBF",

    "2577.KL",

    "ROTH",

    "LXB.L",

    "LSANF",

    "ZDOI.EX",

    "K71U.SI",

    "FRCL.L",

    "JHS",

    "XXFFR.PK",

    "VIK.V",

    "BSTO",

    "IMV.V",

    "TBYH",

    "WHF",

    "PBIX",

    "VIPCORP.BO",

    "HWIFF",

    "ZCC.F",

    "CSNG.PK",

    "4995@BN.KL",

    "VVAR4F.SA",

    "GRWESIN.BO",

    "DHIFF",

    "086830.KQ",

    "EVT",

    "UNTDV",

    "M7Q4.F",

    "ORFLY",

    "VII.AX",

    "OODH",

    "EWCLF.PK",

    "PARA",

    "7199.KL",

    "DHG",

    "JUBLFOODSL.BO",

    "OCYO.ST",

    "ZENZYTECH.BO",

    "CIA.TO",

    "FHZN.SW",

    "WKOF.L",

    "SRIA.L",

    "CABJF",

    "OPSSF",

    "SBMO.AS",

    "VWK.HM",

    "OMMEINFRASL.BO",

    "O4E.SG",

    "BKEAY",

    "VLRT.SW",

    "JWG1.DU",

    "KHKSF",

    "NFSB",

    "BCS-P",

    "ASYKY",

    "KCC.V",

    "FMO",

    "IPWLO",

    "GWEFF",

    "EVRTF.PK",

    "SFIGA",

    "DFP",

    "IBYNF",

    "VULC",

    "8420.TWO",

    "NWVCF",

    "PWON.JK",

    "MLGE.PA",

    "DAXXF",

    "YAB2.SG",

    "YJ3A.SG",

    "GLCNF.PK",

    "SUSA",

    "ADIMF",

    "OT7.F",

    "GBOOY",

    "FFEX",

    "WNTR",

    "3948-OL.HK",

    "ASTV",

    "HAMT",

    "FEOVF",

    "SRSC",

    "QMIS.PK",

    "SGL",

    "DTXMF.PK",

    "MZEI.OB",

    "VIE.SG",

    "WJAVF.PK",

    "NVGT",

    "JSWENERGY4.BO",

    "KIQ",

    "1WT.F",

    "VNH.L",

    "ORX.ST",

    "PSA-PY",

    "MQLXF",

    "NTII.PK",

    "NEL-UN.V",

    "NGCG",

    "ESKYF",

    "WNXXF",

    "HNW",

    "MTB-P",

    "YK3.MU",

    "WGNAP",

    "KIKOF",

    "3231.TW",

    "JSSZ.L",

    "HENKY",

    "MPI2.F",

    "JSFCF",

    "QSGIQ.PK",

    "FTN.TO",

    "TAV.HM",

    "U9N.SI",

    "SPIL",

    "GNZR",

    "MKTAY",

    "VCV",

    "IRIG",

    "002380.KS",

    "VTDI",

    "NWF.F",

    "IIM",

    "WEWWF.PK",

    "BAC-PL",

    "SGAMY",

    "OSM",

    "TPHS",

    "DGRW",

    "POW-PD.TO",

    "TCC1.BE",

    "BIGRF",

    "LRZZF",

    "WRAP",

    "21555.IL",

    "CHPFF",

    "MDMEF",

    "0066.KL",

    "WKCMF.PK",

    "HNDI",

    "0755-OL.HK",

    "SANN.SW",

    "VLNSF",

    "YACAF",

    "NEE-PH",

    "ZKOVALIN.BO",

    "MYPRF",

    "ZH5.MU",

    "ZPPB.PK",

    "BRGXF.PK",

    "FEEXF",

    "7178.KL",

    "DKILY",

    "MCN",

    "126880.KQ",

    "FSNUY",

    "FMFN",

    "ZRSCF",

    "TTEG.OB",

    "ONVRF",

    "CWIXF",

    "RGEDF.PK",

    "MMLTF",

    "WHYRF.PK",

    "SPC.V",

    "YKK17-1.CBT",

    "ICLN",

    "WMBY3.SA",

    "ZIZ15-C.NYB",

    "HIZ.MU",

    "UNEGF",

    "OCG.L",

    "YLDGF",

    "HERB",

    "WTKD.IL",

    "066350.KQ",

    "AWRY",

    "WTBCY.PK",

    "CNC.L",

    "3029.TW",

    "3581.TWO",

    "IHAI",

    "FYRTF.PK",

    "BORK",

    "QGEP3F.SA",

    "WY2.F",

    "XMF-C.OOR",

    "PIL.NZ",

    "YONG",

    "CRVYF.PK",

    "HIW.MU",

    "OFG-PB",

    "WHLKY.PK",

    "GDO",

    "7LM.SG",

    "053810.KQ",

    "MH-PA",

    "PMTRF",

    "ORRCF",

    "JC7A.BE",

    "ZNIVITRD.BO",

    "SYTRF",

    "5173.KL",

    "DORLO",

    "GRTYA",

    "JSN.F",

    "REZ.TO",

    "EMBFF",

    "RTHA.HM",

    "QCJ16-C.CMX",

    "OCPNY",

    "EOAN.HM",

    "VUA.DU",

    "PGUZ",

    "VGPR",

    "QPRC",

    "RXHSF.PK",

    "BTVCY",

    "EXU.SG",

    "JXHLY.PK",

    "FRR.L",

    "RTBRF",

    "005180.KS",

    "KENS.PK",

    "AMKAF",

    "KIORQ",

    "EMMLF.PK",

    "SHNVF",

    "JRHIF",

    "NSC.V",

    "XLENERGY.NS",

    "IBB",

    "BAYP",

    "YEVN",

    "ADAM.L",

    "R9X.BE",

    "002000.KS",

    "MFLR",

    "WX7.F",

    "TACYY",

    "NHNKF",

    "010460.KS",

    "HYLS",

    "3031-OL.HK",

    "VSMO.ME",

    "2838.TW",

    "EBRPY",

    "ABLZF.PK",

    "CNU12.BA",

    "VDA-P.V",

    "WMR.DU",

    "HOFJF.PK",

    "JBN",

    "WYGPF",

    "POYYF.PK",

    "JPEXE",

    "HUSI-PF",

    "VASWANI.NS",

    "EFR",

    "CTAX4F.SA",

    "RSGUF",

    "AIE.BE",

    "SCHO.CO",

    "OVX-H.V",

    "44SA.BE",

    "XNGIF",

    "KBDCF.PK",

    "SPDE",

    "YKLTY.PK",

    "MQT",

    "WXF.VI",

    "SBKFF",

    "IGFUF",

    "PJS",

    "ORA.AX",

    "ODF.BE",

    "TRAM.JK",

    "DSE",

    "MCVT",

    "VNLDF",

    "WGXLF.PK",

    "QTL.BE",

    "ZNEWSAGA.BO",

    "MZRTF",

    "87UC.L",

    "MERCATOR.NS",

    "NTFU",

    "NUO",

    "AIXG",

    "EVOTF",

    "BZCN",

    "CWGL",

    "NAS.OL",

    "UND.AX",

    "013120.KQ",

    "CNBC",

    "03010X.TW",

    "008290.KQ",

    "W2P.F",

    "NLTBF",

    "TS2.SI",

    "WHLME.OB",

    "NEFB",

    "SFOSF",

    "NBDD.L",

    "QEDND.PK",

    "GAGA",

    "AISA.JK",

    "LEDCF",

    "E1:UD2.SI",

    "KGHI",

    "CFO",

    "SKVKY",

    "SCUN.HM",

    "JAWA.JK",

    "MIF-UN.TO",

    "INXSF",

    "6429.TWO",

    "HEROMOTOC.NS",

    "ACHI",

    "AXVEF",

    "SYIEF",

    "RGTX",

    "VLX1.F",

    "XIA.V",

    "IGHOF.PK",

    "XTPT",

    "GRX",

    "YKHTF.PK",

    "QTNTW",

    "6131.TW",

    "PJAA.JK",

    "RZA",

    "RCLHF",

    "1778.HK",

    "HM-B.ST",

    "VIAP",

    "NKRSF",

    "ZLUE.PK",

    "2113978.MA",

    "HOOB",

    "TAM.V",

    "ENLB",

    "RNEW11.SA",

    "XYIGF.PK",

    "FCMUF",

    "066570.KS",

    "WOSYY",

    "LFYC",

    "ATL.TO",

    "SEDF",

    "WLFDF",

    "WMFWF",

    "ADDYY",

    "EQB.TO",

    "9907.TW",

    "YRLLF.PK",

    "NRSRF",

    "17E.F",

    "WLYG.EX",

    "SWTUY",

    "BIF",

    "HWSA.HM",

    "SCBT",

    "TOSBF.PK",

    "DRU",

    "PLTM",

    "PSCM",

    "PPAMF",

    "003520.KS",

    "DLMV",

    "NUTT",

    "063080.KQ",

    "ASNCF",

    "TWAC",

    "KNDR",

    "NAUK.ME",

    "GAMA.L",

    "NBHGY",

    "ALNXF",

    "0794-OL.HK",

    "UBSN.VX",

    "BMO-PJ.TO",

    "YRSL.ME",

    "BBK",

    "ATSKF",

    "KRNGF",

    "KAG.IL",

    "PGLO",

    "DEPCF.AS",

    "S8G1.BE",

    "SHGKY",

    "EU445.SW",

    "SNLKF",

    "CMXHF",

    "OGF-UN.TO",

    "F5B.BE",

    "VOF.L",

    "ERCHF",

    "SDF1.BE",

    "JP1.F",

    "NHEGY",

    "0800-OL.HK",

    "YQGA.F",

    "SGPPF",

    "WOTC",

    "QUMIE",

    "PXL.HM",

    "JPHNF.PK",

    "SWWI",

    "KRKN.ME",

    "ECVTF.PK",

    "LHA.HM",

    "PHXXF",

    "LGCUF.PK",

    "E2:545.SI",

    "ZWC1.F",

    "RDIAF",

    "JVCZY",

    "ARET",

    "JGH",

    "WOOLWAY.BO",

    "QCD.F",

    "XER.MU",

    "RTSO",

    "BOCA",

    "NITMF",

    "JAHI.PK",

    "KD8.HM",

    "FBOO.PK",

    "LIOPF.PK",

    "6286.TW",

    "PMHV",

    "DTEGF",

    "MTL.L",

    "VIDEOIND6.BO",

    "EDOLF",

    "BIGG",

    "BMTL",

    "MEJHF.PK",

    "7178@BN.KL",

    "PIMO",

    "WNRC",

    "DGTLF",

    "WGLD.PK",

    "TAI",

    "AAMAF",

    "SNUYF",

    "0165@BN.KL",

    "ZZZZQ.OB",

    "WSSRD",

    "NOEE",

    "MGHTF",

    "SDEV",

    "JNP.SG",

    "DBL",

    "OBDCF",

    "UROFF.PK",

    "MNHFY.PK",

    "T5W.MU",

    "SKVI",

    "ROBO",

    "CFI.V",

    "KINNF",

    "Y3L.BE",

    "HGWEF.PK",

    "VTA",

    "TRYLF",

    "YCNGD.OB",

    "OTMN",

    "DTT",

    "VOLVF",

    "1143.HK",

    "SKSJF",

    "ARGKF",

    "BXYA.F",

    "RZTIQ",

    "FOE.OL",

    "MTE.L",

    "WARRENTEA.BO",

    "GZPFY",

    "M4D.F",

    "RBEOF",

    "AZUMF",

    "MAURF",

    "SGSN.VX",

    "SKHSY",

    "LWI.L",

    "SHEKF.PK",

    "ACSF",

    "UVRBY",

    "0ZE.SG",

    "EBRPF",

    "PLT-UN.TO",

    "ZMU.TO",

    "NICE",

    "DMO",

    "YLG.SG",

    "014940.KQ",

    "EVSNF.PK",

    "BCBHF",

    "TWEKA.AS",

    "KY2E.F",

    "WFU4.F",

    "WIMHF.PK",

    "NGG.BA",

    "O2T.F",

    "RUSPF",

    "WLOC",

    "GDMOF",

    "WPSL.PK",

    "EQPI",

    "ENTP",

    "069640.KS",

    "DVT.V",

    "BBAL",

    "JPM-PD",

    "RDO.SG",

    "YGDC",

    "OPCO.ST",

    "NCBC",

    "PGDIF",

    "OY.V",

    "KONN.BE",

    "J74.SI",

    "AXXU",

    "YUEXF.PK",

    "E1:E94.SI",

    "SRJTC.BO",

    "E2:F13.SI",

    "XTIC.PK",

    "EGRTF",

    "FIRRY",

    "VQSLF",

    "SRK.V",

    "MEDI.TA",

    "011160.KS",

    "SHVTF",

    "OXFCF.PK",

    "RDSMY",

    "SBI",

    "XOM.MU",

    "0596-OL.HK",

    "080030.KS",

    "NFLX34F.SA",

    "GDL.L",

    "GRPH",

    "ZOT.MC",

    "FAC.IR",

    "TELNY",

    "NXFI",

    "HYH-WI",

    "LYPSAGEMS.BO",

    "QQEW",

    "IDIX",

    "1300.HK",

    "010580.KS",

    "NCAP",

    "RXHKF",

    "ZMNO.L",

    "KEA.L",

    "RHA.V",

    "ETFM",

    "DXIN",

    "M04.SG",

    "1787.TWO",

    "1190.HK",

    "ARC.V",

    "KBKCP",

    "TFG",

    "YRBAF",

    "ADIMF.PK",

    "GOAS",

    "NNLX",

    "OGFGF.PK",

    "PFODF",

    "011210.KS",

    "WEIZFIN.BO",

    "BAXSQ",

    "AQPVF",

    "SMCB.JK",

    "WISKF",

    "CUBA",

    "FTT",

    "TMEEF",

    "NMGL.PK",

    "YKF17-1.CBT",

    "WRTBY",

    "VDOLEASEQF.BO",

    "VTXPF.PK",

    "ICHBF",

    "JSEJF.PK",

    "ZHEXY",

    "NDHLF",

    "MELCA.NZ",

    "RDHL",

    "SCPZF",

    "C15.SG",

    "PYHPF",

    "3AI.SG",

    "ONXX",

    "KEC6.BO",

    "ZLIXF.PK",

    "DALT.PK",

    "CGEMY",

    "TSUKF",

    "VW-V.SW",

    "WALK.PK",

    "9IVA.SG",

    "OROCF.PK",

    "JSCPY",

    "5VE.F",

    "VSTTILLERS.BO",

    "CMOXF",

    "NGRC",

    "SJR-B.ST",

    "IO.V",

    "YXEN.BE",

    "034830.KQ",

    "ZGOLDINV.BO",

    "JAZ.MC",

    "WSBLD.PK",

    "FFN",

    "1818-OL.HK",

    "MRDH",

    "YYSSL.PK",

    "5312.TWO",

    "7PW.MU",

    "MLCFI.PA",

    "KGTFF",

    "ZPG.L",

    "NPSKF.PK",

    "GODYF",

    "PNA.BE",

    "CPGT.JK",

    "MVT",

    "D3H.MU",

    "CRWN.L",

    "SIL.PA",

    "051910.KS",

    "CEM",

    "VOLTAS4.BO",

    "DAWIF",

    "IRL",

    "GEF-B",

    "TGASF",

    "047050.KS",

    "AVACF",

    "SYMZF",

    "ZKHANDEN.BO",

    "XBTC.PK",

    "XXBBR",

    "2615.TW",

    "XXMMF.PK",

    "ZIM14-C.NYB",

    "036010.KQ",

    "DACHF",

    "XBTC.OB",

    "EMD",

    "HEGIF.PK",

    "ZGSI",

    "CKGT.PK",

    "DRCSY",

    "NRCIA",

    "VLCR",

    "LGI",

    "NORTF",

    "RPL.V",

    "SMCVF",

    "SZM.BE",

    "YGM14-C.NYB",

    "ITONF",

    "N9A.F",

    "MAPI.JK",

    "FWLWE.OB",

    "QPAC",

    "EKDKQ",

    "E1:E02.SI",

    "PTOS",

    "EPLYF",

    "CPEQF",

    "BOR.V",

    "OSF-UN.TO",

    "PTVL",

    "LXP1.SG",

    "SRHGF",

    "QLA.F",

    "NWSTF",

    "XGEN",

    "AUGUF",

    "QTVLF",

    "LAHO",

    "OMI.L",

    "KFS-WTU.TO",

    "0YL.F",

    "VTSYF",

    "NRDEF",

    "BZHGY",

    "MAAL",

    "AOIFF",

    "TNSX.PK",

    "E2:B9R.SI",

    "MVBF",

    "AOFC.L",

    "EXXI.L",

    "JMC.L",

    "OPA-H.V",

    "QKFXF.PK",

    "BANX",

    "LMS.V",

    "GWSAF",

    "NWIN.OB",

    "SIX3.HM",

    "QIC-U.V",

    "NGPHF",

    "WDMG",

    "QTVLF.PK",

    "HTGY",

    "EKDKQ.PK",

    "NVP8.SG",

    "TKHVY.PK",

    "SAABF",

    "MGHZ.L",

    "VRTC",

    "XNGSY.PK",

    "OTSUF",

    "AULGF",

    "5159.KL",

    "PLZH16-C.CME",

    "K1L.BE",

    "13X.SG",

    "FLNXF",

    "TOCOF.PK",

    "HESF.EX",

    "PCDAF",

    "FAX",

    "TMPHF",

    "QACL.F",

    "AHOND",

    "TIRXF",

    "JPS",

    "CFGE",

    "IRLTY",

    "LEHJQ",

    "OSZG.F",

    "ZENITHSTL.BO",

    "1GE.MU",

    "AGM-A",

    "1237.HK",

    "EMF",

    "ZTHO.PK",

    "STT-PE",

    "CBNC",

    "068790.KQ",

    "BF-A",

    "TOSYY",

    "HOKCF",

    "SEIL",

    "OPESF",

    "UPPR",

    "ROC.V",

    "SHRVINDPPR.BO",

    "SADL",

    "084990.KQ",

    "AOIL.OB",

    "JRPT.JK",

    "PDSMFL-BE.NS",

    "RTAS",

    "VIZ.OL",

    "APTPF.PK",

    "MOL.AX",

    "001880.KS",

    "YRBAF.PK",

    "XXJVA.PK",

    "RNEW11F.SA",

    "KESAF.PK",

    "ZMZNP.ME",

    "MBCN",

    "4729.TWO",

    "PPLL",

    "DSX-PB",

    "OXO1BC.SW",

    "7BF.F",

    "WANHF",

    "YGV15-C.NYB",

    "AZNCF",

    "1453.TW",

    "TKNOF.PK",

    "FGH.V",

    "2114.TW",

    "CNE.TO",

    "HOCPF.PK",

    "LMSC",

    "SAUHF",

    "VCANF.PK",

    "CEN",

    "YPF.BE",

    "GVR.V",

    "KEYS-WI",

    "NBFJF",

    "GRYEF",

    "BO.CO",

    "4723.KL",

    "QTNTU",

    "YAB2.F",

    "5V6.SG",

    "HKTGF",

    "WT5.BE",

    "OLTO.ST",

    "BGCA",

    "PYN",

    "Z18.DE",

    "SWPIF",

    "AFLYY",

    "GWLLY",

    "134126.L",

    "TSLX",

    "0484-OL.HK",

    "PDI",

    "WNARF.PK",

    "CEI.V",

    "BRMS.JK",

    "VUX.V",

    "TWOC.PK",

    "TSDRF",

    "KDEV.ST",

    "CVXHF",

    "DSNY",

    "BJZ",

    "AOIFF.PK",

    "9RC.F",

    "XS8.BE",

    "PLHCF",

    "PSA-PO",

    "LPCUF",

    "6742@OM.KL",

    "TSNU",

    "KBCSY",

    "BANC-PC",

    "KPPLF",

    "YCM-PA.TO",

    "3623.HK",

    "QALB.PK",

    "NBA.LS",

    "SCW-UN.TO",

    "HYUHF",

    "GNT",

    "NYVH.SG",

    "SPM16-C.CME",

    "NVAB.SG",

    "VALUE.AS",

    "145995.KS",

    "EXD",

    "GEOB.MX",

    "GSP.V",

    "AR-WT.TO",

    "NEH16-C.CME",

    "WBAPA.AX",

    "ZSHERAPR.BO",

    "MIUFF.PK",

    "WBCWF.PK",

    "TKA.HM",

    "NAVZF",

    "ZOE.SG",

    "RYP-H.V",

    "RDSPY",

    "3622.TW",

    "SLET.L",

    "M8V.F",

    "NIM",

    "PTKFY",

    "QCU19-C.CMX",

    "3207.TWO",

    "KYZN",

    "IFLEXQF.BO",

    "7066@BN.KL",

    "CASO.ST",

    "LDIS",

    "PSCD",

    "7111.KL",

    "RUR.L",

    "PNCHD",

    "2789.HK",

    "ASP.ST",

    "RROS.ST",

    "CGT.L",

    "SWET",

    "TRII.OB",

    "NRRP.L",

    "090150.KQ",

    "0YL.BE",

    "2985-OL.HK",

    "NRKBF",

    "ZGOLDHOL.BO",

    "NPTOF",

    "03003X.TW",

    "TMED",

    "ADMC",

    "WFAM.PK",

    "FRSHF",

    "5173@BN.KL",

    "GSJK",

    "HCHMY",

    "RTNB",

    "AMC.L",

    "NWTUF",

    "NA-PL.TO",

    "KNYJF",

    "KWH-UN.TO",

    "OSKA",

    "OGCP",

    "HZOZD",

    "TCTZD",

    "VPB.SW",

    "LTGHF.PK",

    "SUPX",

    "NTLK",

    "MLD.L",

    "ZENO.PK",

    "CTZR",

    "JFLABS.BO",

    "QCP.VI",

    "1455.TW",

    "BPOPN",

    "HI9.MU",

    "VDAHY",

    "BCXQL",

    "EZYYF",

    "VTUS",

    "XUII",

    "QMXGF.PK",

    "KBPH",

    "BCP.LS",

    "RUDR",

    "HHY",

    "CZASF",

    "WFF.SG",

    "WIQ.MU",

    "PPIZF.PK",

    "7ES1.F",

    "SRSN",

    "SOHMF.PK",

    "SB-PB",

    "NGCRY",

    "NANM",

    "BOOM.L",

    "FTCS",

    "ADDXF",

    "QL1.SI",

    "ITRN",

    "WCBOD",

    "QRNNF",

    "URPLF",

    "XXCDE",

    "NWPN",

    "VCBI",

    "BDJ",

    "VSDCONF.BO",

    "FMPG.L",

    "2299.HK",

    "FTGC",

    "0434.HK",

    "PAYDE",

    "SLGYF",

    "005930.KS",

    "HKHKF.PK",

    "BVINV.PA",

    "NOEEE",

    "TLVA",

    "FSOYF",

    "SUPI",

    "RING.OL",

    "ZONOP.LS",

    "CBX",

    "XOHO.OB",

    "VRYAF.PK",

    "2327.TW",

    "SPTYF",

    "3553.TWO",

    "HINKY.PK",

    "AGGFF",

    "TTRHF",

    "KIRI",

    "GMLFF",

    "MCVED",

    "MXTOF",

    "GRNL",

    "TINTF",

    "HJR",

    "ONE.L",

    "SOSCF.PK",

    "KLBF.JK",

    "OTT.L",

    "VIKASWSP6.BO",

    "WPC.SG",

    "E7S.HM",

    "TXIC.PK",

    "OCAT",

    "DUA",

    "ZWINMOTR.BO",

    "YKF17-C.CBT",

    "CWB-PB.TO",

    "JMPCAST.BO",

    "LOKAF",

    "GVLMF.PK",

    "CVRS",

    "AROFF",

    "YIU14-C.NYB",

    "FCPG",

    "TRCY",

    "NBB",

    "WZL.TO",

    "YKLTY",

    "XJNGF",

    "SMGIU",

    "PORBF",

    "GNVN",

    "TCOR",

    "91ID.L",

    "1565.TWO",

    "SPBV",

    "BZI.F",

    "ZVVG.BE",

    "MAHLY",

    "GENT",

    "VCISY",

    "NMHDF",

    "PKPL",

    "DVID",

    "TWRFF",

    "VED.AX",

    "YNSKF",

    "NESW",

    "NCT-PD",

    "QCE.MU",

    "1713.TW",

    "XSSI",

    "UNTK",

    "E1:AFC.SI",

    "GNMSF",

    "JJO.MU",

    "LQRCD.PK",

    "CDI.AX",

    "OTGI.PK",

    "WFMC",

    "PLWTY",

    "JOHB.F",

    "VNLEF",

    "5048.KL",

    "6411.TWO",

    "ETV",

    "BKIC.L",

    "THOGF.PK",

    "LBRMF",

    "4137.TW",

    "QEN.F",

    "ANK.V",

    "MFOYY",

    "ZSOMESCE.BO",

    "SMDZF",

    "6742.KL",

    "XAC.MU",

    "YCZ.DU",

    "NA-PS.TO",

    "WYG.L",

    "IXMDD",

    "OM8.SG",

    "ZEO.F",

    "3393-OL.HK",

    "5607.TW",

    "AIRR",

    "ZWC1.BE",

    "NZEOY",

    "IGR",

    "SHMZF",

    "ETV-P.V",

    "PLCSD",

    "6418.TWO",

    "VPOR.PK",

    "FLMCQ",

    "VNSNE.OB",

    "KLEG",

    "FAY-U.TO",

    "SJQU",

    "GSAC",

    "GLPEY",

    "MVC",

    "JIM.DU",

    "CHQ.V",

    "NWBD.L",

    "VAPE",

    "7121.KL",

    "BMQZF.PK",

    "GBERF.PK",

    "EW.V",

    "SIDO.JK",

    "CVBK",

    "SAAFF",

    "NAPRF",

    "NOM-PC",

    "KVLQF",

    "DIIBF",

    "MBVX",

    "PLWTF",

    "JMPLY",

    "COBJF.PK",

    "BLKG",

    "NOD.OL",

    "AIOTF",

    "KD9.F",

    "6247.TWO",

    "SSJ.SG",

    "ZTSTF",

    "MTU.L",

    "AMHPF.PK",

    "BCV",

    "ETJ",

    "N4O.SG",

    "2GW.BE",

    "LIV.L",

    "1991-OL.HK",

    "EONGY",

    "UDSB.ME",

    "ZBRA.JK",

    "HSFC-PB",

    "YP1.BE",

    "PPII",

    "MKE.SG",

    "GLOH",

    "MLFNF",

    "JCE",

    "VGBK.PK",

    "RSG.V",

    "POSTU",

    "XMEX",

    "HTO.AT",

    "NSAM",

    "HYSNY",

    "LEFUF",

    "POETF",

    "RTXB.PK",

    "RBWNY",

    "702B.F",

    "VALUEIND-BE.NS",

    "VELTF.PK",

    "AES-PC",

    "IDL.TO",

    "TIACF",

    "VDMRF",

    "PSG.MC",

    "6CK.SG",

    "PGRE",

    "0032.KL",

    "AMLLF.PK",

    "PROT",

    "PLLRF",

    "SMFKY",

    "5222.KL",

    "MEGGY",

    "CALLN.MX",

    "WEFP.PK",

    "PARY.BA",

    "TGONF",

    "KROT3.SA",

    "ZEELEARN.BO",

    "ELMUF",

    "HIX",

    "KEYN",

    "MSTO34.SA",

    "KAEPF",

    "TMICF",

    "21565.L",

    "POW-PG.TO",

    "134790.KS",

    "EGI.AX",

    "PCN",

    "ORSX",

    "JYOTHI.BO",

    "GWRRF.PK",

    "WLXMF",

    "MSUXF.PK",

    "KMNFD",

    "SBNYW",

    "Q86.MU",

    "LFGP",

    "HHWWD.OB",

    "ADEC",

    "DVLN.PK",

    "ADZ.MC",

    "WDDD.OB",

    "ORXCF.PK",

    "ADPMF",

    "BZU.BE",

    "VTKT.PK",

    "AGRIP",

    "TQY.F",

    "QBEIF.PK",

    "MEMS",

    "HR2A.L",

    "SSUR",

    "SRQ.V",

    "NEM.HM",

    "MNILY",

    "MTCN.L",

    "PBRX.JK",

    "CWKNF.PK",

    "IFT070.NZ",

    "RVREF.PK",

    "LTRPB",

    "RO.SW",

    "RDO.DU",

    "XKN18-1.CBT",

    "KJWNF.PK",

    "MRIC.OB",

    "PHALF",

    "TEC.MC",

    "FMCC.OB",

    "SLTB",

    "PDO",

    "UGARSUGAR.BO",

    "PIPKY",

    "BRK-B",

    "VNMCD",

    "WGCBP",

    "WI0.F",

    "EWLCF.PK",

    "LATF-B.ST",

    "TPE.HM",

    "NPNZF.PK",

    "ECRTF",

    "SBRCY",

    "CXEE.OB",

    "TRMLF",

    "MJMD",

    "VLV.BR",

    "YPFSF",

    "HDRAU",

    "QU8.SG",

    "SSW-PD",

    "MATA.SG",

    "RNFTF",

    "XCD.AX",

    "IDMNF",

    "GUAZY",

    "RSASF",

    "EVO",

    "VAERF",

    "ZNAE",

    "KNTZF.PK",

    "YBET",

    "JTXMF",

    "HLLXF.PK",

    "EDPFY",

    "JMT1.SG",

    "WM8.SG",

    "FOSUF",

    "GGZ",

    "YBIN",

    "SCM",

    "NCC.AX",

    "ZIOBL.PK",

    "PMI.SW",

    "A1OS.DE",

    "NGX",

    "KBGCF",

    "AWF",

    "SSEBF",

    "QMCQF",

    "ZFPPF",

    "088980.KS",

    "ZONMY",

    "2825-OL.HK",

    "NPMRF",

    "ZUY.SG",

    "KKOYY",

    "KOTMY",

    "NWID.PK",

    "N5W1.SG",

    "VBRCF",

    "GOODN",

    "AFRAF.PK",

    "SNTS",

    "ZBI-L.TA",

    "2121-OL.HK",

    "ZWBC",

    "ALPMY",

    "NKX",

    "EMO",

    "MNVN",

    "VPGC",

    "QAI-P.V",

    "INVEXCOA.MX",

    "STRZB",

    "HSNGY",

    "AOL1.MU",

    "1316.TW",

    "RAQUF",

    "FKKFF.PK",

    "053350.KQ",

    "TZHGF",

    "VRS.MU",

    "PAF.AX",

    "XFMYD.PK",

    "QTEC",

    "NEA.AX",

    "ROKO",

    "CTAX3F.SA",

    "EWLCF",

    "CHAR.L",

    "AVV",

    "SHMHF",

    "RDO.F",

    "ATQP.BE",

    "WALK",

    "KRYAF",

    "108670.KS",

    "DRX.IR",

    "RPPTF",

    "SGPPF.PK",

    "ZENITHEXPO-EQ.NS",

    "CDYC",

    "NEWEN",

    "JSD",

    "0695.HK",

    "ZPTAF.PK",

    "1312.HK",

    "MR8.DE",

    "PEMC.PK",

    "UNIGD",

    "MPIX",

    "IFN",

    "ZETFM.BO",

    "E1:5EG.SI",

    "04496014.KQ",

    "GMALY",

    "O31.SI",

    "KYCCF.PK",

    "NSC.TO",

    "SIPN",

    "OLGXF",

    "QMKR",

    "YDWAF.PK",

    "RICOP.PA",

    "CYMNF",

    "KOUTONS.BO",

    "JETI.L",

    "JRONY",

    "0346-OL.HK",

    "ZIPZD.PK",

    "WOLTF",

    "VNRX",

    "MOPN",

    "HGHUF",

    "IRNNQ",

    "0660-OL.HK",

    "IDL.V",

    "001550.KS",

    "SMTGF",

    "KIM-PJ",

    "HLUKF",

    "0699.HK",

    "OPMC",

    "LWSOF.PK",

    "TDJ",

    "GVCM",

    "0820EA@OM.KL",

    "ACEL",

    "LMQN.F",

    "2393.HK",

    "NMPWP",

    "ARMF",

    "SWH.TO",

    "LBU.BE",

    "FCGD",

    "VRDSF",

    "NAKD",

    "QRXPF.PK",

    "3666.HK",

    "XBOV.SA",

    "NOM.BE",

    "BKAHF",

    "PVEIF",

    "PZE.SG",

    "TVLF",

    "RIT",

    "QPTRF",

    "BNHLF",

    "GXI.HM",

    "SBDG",

    "EEXXF.PK",

    "CZAVF.PK",

    "YAMCY",

    "SENR",

    "GWLLY.PK",

    "JYMHF",

    "CDVIF",

    "CBB-PB",

    "BLJZY",

    "5247.KL",

    "KOG.OL",

    "SOON.VX",

    "KKKUF",

    "060310.KQ",

    "GTS.L",

    "AA2.F",

    "NST.V",

    "IQE.L",

    "PFG.MI",

    "KPJHF",

    "8928.TWO",

    "VRCH.PK",

    "WLOCD",

    "FJBHF.PK",

    "WGNR.PK",

    "9431@BN.KL",

    "VER.L",

    "CYY.AX",

    "FMCQF",

    "JZK",

    "NGHI.OB",

    "YNGDF",

    "CAF.MC",

    "AWTRF",

    "7189.KL",

    "1XM.SG",

    "LEAL.L",

    "HXGBF",

    "GGAC",

    "RESCU",

    "YTRGF",

    "SCIV",

    "KGRSY",

    "MNTR.PK",

    "LASR.PK",

    "HAWKQ",

    "X1X.BE",

    "VRO.TO",

    "WHWRF.PK",

    "KGNX",

    "XPOM11.SA",

    "CELM",

    "DHCC",

    "ZHUZF.PK",

    "3663.TWO",

    "SLHGF",

    "UNC-PC.TO",

    "CIIG",

    "JRVS.L",

    "YIZ14-C.NYB",

    "FSCE",

    "LIOPF",

    "PNQI",

    "OTMN.PK",

    "NMGNF",

    "YYEQF.PK",

    "XENO",

    "PPERF",

    "SGAMF",

    "IMPUF.PK",

    "THNRF",

    "PNLYY",

    "7167@BN.KL",

    "RANEENGINE-BE.NS",

    "STAEF",

    "WYGPY.PK",

    "CRNZF",

    "NRF-PD",

    "VIH.HM",

    "II6.BE",

    "ZIONL.PK",

    "VIAP.PK",

    "DSKY",

    "VZRZP.ME",

    "LVR.TA",

    "SCNR.F",

    "WEGOF.PK",

    "ROHCF",

    "NIE",

    "GJT.AX",

    "FTFTF12CGR-MF.NS",

    "NEEB",

    "4734.TWO",

    "QATAF.PK",

    "LAC.PA",

    "E1:M9F.SI",

    "TUFUF",

    "7TA.SG",

    "BMC6O.BA",

    "RONAF",

    "WH1C.SG",

    "XRP1.BE",

    "BAGL",

    "WIPSM",

    "ALJJ",

    "OVRL",

    "CRD-A",

    "NTRNP",

    "YDIV",

    "Q86.SG",

    "OBYCF",

    "0868-OL.HK",

    "TCISF",

    "SNYYF",

    "2XU.BE",

    "PYOIF",

    "CADAD",

    "OLMIY",

    "IIFLFIN-N7.NS",

    "WFTSF.PK",

    "CGPI",

    "AMPLQ",

    "TSRYF.PK",

    "LTTTF",

    "PVS-PC.TO",

    "IRHC.OB",

    "SIVE",

    "RIT-UN.TO",

    "SLVFF",

    "GOV360.NZ",

    "CROCF",

    "FCH-PA",

    "ZGM18-C.NYB",

    "1457.TW",

    "MRFG3.SA",

    "31E.F",

    "NQU",

    "WFT.PA",

    "KB9.SG",

    "MMMW.PK",

    "001529.KS",

    "40JP.L",

    "HHILF",

    "KBA-P.V",

    "DKT",

    "ITOCF",

    "OPGYF",

    "2035.TWO",

    "OHIPP",

    "MRMBF",

    "3608-OL.HK",

    "SYXXF",

    "YIP.BE",

    "UVIC.PK",

    "QGJ.BE",

    "GCCO",

    "HVEL",

    "HXWWF.PK",

    "VNNHF",

    "YGM15-C.NYB",

    "RYOYF.PK",

    "SPSC.L",

    "0279-OL.HK",

    "QNTQY",

    "PTJSF.PK",

    "FRILF",

    "VBO.SG",

    "AW6.BE",

    "XER.HA",

    "YCA1O.BA",

    "4BW.F",

    "KDNG",

    "OXS.L",

    "LZENF",

    "SHPGF",

    "PHWBF",

    "VARUNSHIP-BE.NS",

    "MOHCF",

    "AZTEF.PK",

    "CTEK.L",

    "FNVRF",

    "PHK",

    "OAP3.L",

    "H2K1.F",

    "XXLO.ST",

    "CZMWF.PK",

    "AXESCPH.MX",

    "E2:5ER.SI",

    "YZCHF.PK",

    "SSUMY",

    "EMI",

    "IGI",

    "005860.KQ",

    "KAY-P.V",

    "TZF",

    "DTE.AX",

    "XER.SG",

    "CMKG",

    "BGB",

    "WYR.HM",

    "WBNK",

    "MCPOF",

    "WBR.V",

    "DCTFF",

    "PCI.L",

    "AQU",

    "ENTWW.PK",

    "LRCDF",

    "MOIL.L",

    "WLFDY",

    "UNTR.JK",

    "ELK.BE",

    "114090.KS",

    "E2:M9F.SI",

    "2XX.F",

    "Z3S.F",

    "PDMDF",

    "GYC",

    "ACCA",

    "VIRPP.BO",

    "TTYGF",

    "SUMCF",

    "ABTZY",

    "WHLRF",

    "EPGNF",

    "PCM",

    "NOM.OL",

    "FFA",

    "SACRF.PK",

    "TSUAF",

    "4949.TWO",

    "JLFNF.PK",

    "GJP",

    "2606.TW",

    "6888.HK",

    "APTS",

    "CNRD",

    "FTRRF",

    "CHVX34F.SA",

    "DSFGY",

    "XCHANGING.NS",

    "XE9.F",

    "ELTY.JK",

    "AFZ.SG",

    "ELXS.PK",

    "RBTK.PK",

    "GBHD",

    "PNTA",

    "ECYIF",

    "MAI.V",

    "JMSNE",

    "BCCDF",

    "ACLTF",

    "TRI-PB.TO",

    "KGDEF.PK",

    "WFS-PA.TO",

    "NT1.F",

    "SPHRY",

    "YHO.HM",

    "ANFC",

    "YG4.BE",

    "KMLK.MU",

    "TOKUF",

    "HA0.BE",

    "FPFI",

    "YTC-H.V",

    "EQS.DU",

    "ROXIF",

    "ZHLD",

    "KYS.V",

    "XCRA.SG",

    "3868-OL.HK",

    "E2:AJ2.SI",

    "NESTLEIND.BO",

    "INCO.JK",

    "VNWTF.PK",

    "TSOCF",

    "RPT-PD",

    "YGYI",

    "VGSH",

    "QSRBF",

    "VIMALOIL.BO",

    "CDCTF",

    "PNTC",

    "E2:B2X.SI",

    "BLVDW",

    "HUWHY",

    "1Q8.SG",

    "LSLCF",

    "DTRX",

    "2283.KL",

    "NAGDRUG.BO",

    "SECX",

    "SMFNF",

    "VWSYF",

    "5820.TWO",

    "CGMFF",

    "ZGOLKOND.BO",

    "RNMBF",

    "CTAX3.SA",

    "NULGF",

    "OFH.BE",

    "MNHFY",

    "KBWA.DU",

    "SNHLF.PK",

    "U1J.SI",

    "VLLX",

    "1277.HK",

    "MYC",

    "YAMHF.PK",

    "STAR-PD",

    "I3ES.EX",

    "OCANF",

    "JPC",

    "CIADF",

    "FSV.L",

    "TVTV",

    "WMK.AX",

    "KWIPF",

    "NVTL",

    "OCWSF",

    "SCH.L",

    "POP.V",

    "CWEY",

    "XIC.F",

    "3057-OL.HK",

    "VARUN-BZ.NS",

    "NTII",

    "NWDMF",

    "QRTA.L",

    "0107.KL",

    "ARCL.L",

    "001820.KS",

    "SFB",

    "GRRBP",

    "HPR.MU",

    "WINH",

    "NMK-PB",

    "MSZ",

    "WCTP.AX",

    "XEA-H.V",

    "BKTOF",

    "VB2.F",

    "UNRDY",

    "ENRG.JK",

    "LRAXF",

    "VESTF",

    "3777.HK",

    "MITUF",

    "GRUPF",

    "MDCI",

    "TOUMF",

    "SIMH",

    "3045-OL.HK",

    "SYNM",

    "NMB",

    "KGSPF",

    "0SG.SG",

    "MYI",

    "VPTDF",

    "ZSQ17-1.CBT",

    "ZTY.SG",

    "NCWAF",

    "0067.HK",

    "LGCYP",

    "CMPRF",

    "X06.SI",

    "CFGMF",

    "MURZY",

    "RKUNY",

    "GWLLF.PK",

    "OKSKF",

    "VELPN",

    "008000.KS",

    "6SL.F",

    "LGWXY",

    "TCRX",

    "TLXLF.PK",

    "WFCNP",

    "VRAL.PK",

    "KRC-PG",

    "1057-OL.HK",

    "MBCFF",

    "MJNA",

    "XCNGF",

    "TXLZF",

    "RSC.PA",

    "RZK.BE",

    "VODPF",

    "VWD.DE",

    "APEUF",

    "KFX",

    "QLTU.TA",

    "SLMBP",

    "TIAOF.PK",

    "CCH.L",

    "MAQC.OB",

    "RGRC",

    "XMY.F",

    "KAOCF.PK",

    "YNGFF.PK",

    "ATRBF",

    "GJS",

    "JOSB",

    "SBFFY",

    "VE1.BE",

    "OKRA.IR",

    "FITBI",

    "YESBANK-IL.NS",

    "OBQI.PK",

    "BSV.L",

    "BCKDF",

    "BBKP.JK",

    "5508.TWO",

    "CREAF",

    "RIGD.IL",

    "AZA.BE",

    "8080.TWO",

    "NIPT.L",

    "NZTCF.PK",

    "XQJ.SG",

    "7084.KL",

    "TTTRF",

    "BV-H.V",

    "GCH",

    "VIZCE",

    "UBPS",

    "INTIF",

    "QNIIF.PK",

    "FFBCW",

    "SLMZF",

    "123410.KQ",

    "WGAT",

    "QBEKMQ-A.A",

    "PMO",

    "VAX.BE",

    "6ZA.SG",

    "NHOLF",

    "ZGM19-C.NYB",

    "1KX.BE",

    "PKO",

    "ASOLF",

    "IFV",

    "VBTC",

    "DVLN",

    "TLRRF",

    "FUD.BE",

    "VCT.BE",

    "BPOSF",

    "CSI",

    "INPRF",

    "09604014.KQ",

    "006390.KS",

    "VALGF.PK",

    "DCRD",

    "MYBF",

    "000687.KS",

    "000390.KS",

    "CNGRY",

    "YACAF.PK",

    "YWU16-C.CBT",

    "DELL.MX",

    "CRUZ3.SA",

    "SURANAVEN.BO",

    "WAV-P.V",

    "PARR",

    "HPF",

    "KATY.PK",

    "SMTAF",

    "OVUNF.PK",

    "YAMHF",

    "ROIA",

    "AVE.V",

    "KYN",

    "GITEF",

    "J&KBANK6.BO",

    "GEGYF.PK",

    "KEOSF.PK",

    "CAZA.L",

    "010050.KS",

    "ORSDF",

    "BTO",

    "GEOKQ",

    "MSD",

    "SOMLF",

    "SGIPF",

    "JCYCF",

    "HKMPF",

    "IBGH",

    "ZIK15-C.NYB",

    "7BF.SG",

    "EURHY",

    "DIOSF",

    "NEUR.CO",

    "QBCRF.PK",

    "OEH",

    "C7P.BE",

    "KZMYF",

    "EUYNF.PK",

    "VLKAF.PK",

    "SDRC",

    "GFCJ",

    "ORSD.IL",

    "E2:ON7.SI",

    "NSANY",

    "WFPI",

    "3005-OL.HK",

    "WSBN.L",

    "004200.KS",

    "GJNSF",

    "OPIX",

    "MDMJ",

    "XVP.SG",

    "XXICL.PK",

    "E2:K17.SI",

    "HMLP",

    "SGDH",

    "SGLB.F",

    "AZBCF",

    "ARTT",

    "BOSSY",

    "BA-C.BA",

    "OW2.SG",

    "SILN15-C.CMX",

    "OAZ.F",

    "025850.KS",

    "ZEGGD.PK",

    "Y0E.SG",

    "SSA.IL",

    "F.BR",

    "BOQKMA-A.A",

    "LAACZ",

    "GOV400.NZ",

    "SPRN",

    "F5V1.F",

    "ZURN.VX",

    "FUR.AS",

    "APA.AX",

    "0B9.SG",

    "NSRGY",

    "XOA1.SG",

    "NSKO.TA",

    "RHM.L",

    "WNT-TR.ST",

    "PWCDF.PK",

    "WATKF",

    "LNCGY",

    "QIW.F",

    "OLMP.TA",

    "YASKY.PK",

    "VV0.F",

    "ZIK16-C.NYB",

    "CNXR",

    "STTX",

    "PEGFF",

    "SHGIF",

    "CANIF.PK",

    "MYK.NZ",

    "RAEWF",

    "MVE-H.V",

    "CTBK",

    "VANTEL.BO",

    "DMCAF",

    "ZZZ",

    "MLYFF.PK",

    "GRR",

    "ZONMY.PK",

    "URU.L",

    "050890.KQ",

    "TVN-H.V",

    "XGTC.PK",

    "KH6.DU",

    "RBS-PG",

    "CTLEE",

    "QACL.MU",

    "DNACF.PK",

    "ZIJMF.PK",

    "2855.TW",

    "CII.TA",

    "GLBCF",

    "VITANAGRO.BO",

    "GFNSL",

    "OROVF.PK",

    "ZMH.SW",

    "JTPY",

    "JLS",

    "RIBTW",

    "ASG",

    "VFFIF.PK",

    "SCHN.SW",

    "XJNGF.PK",

    "GRF",

    "JACO",

    "MMMM",

    "2XU.SG",

    "NNC",

    "TRTLU",

    "YIPCF",

    "6TY1.F",

    "MTW.L",

    "KLYCY",

    "TCPYF",

    "MBGCF",

    "RSRZF",

    "RGSJF",

    "YMTD.IL",

    "RHHBY",

    "MZOR",

    "1466-OL.HK",

    "WIBW.OB",

    "EXETF.PK",

    "JRDN.PK",

    "FMLP",

    "GCMI",

    "WBS.BE",

    "HBPVF",

    "ANEN",

    "DTTLF",

    "YNXG",

    "BVF.MU",

    "RPRXZ",

    "CIBG",

    "JINDALSAW6.BO",

    "MHO-PA",

    "VEGPF.PK",

    "1181.HK",

    "GETI-B.ST",

    "KLKNF",

    "MUE",

    "RANEENGINE.BO",

    "B9I.BE",

    "CFST",

    "5016@BN.KL",

    "ELSRF",

    "CMO-PE",

    "DUROF",

    "6242.TWO",

    "PCGLF",

    "6161.TWO",

    "NBHGF",

    "0425-OL.HK",

    "IPOL.JK",

    "FLC",

    "XVG",

    "HDLV",

    "TFN3.SG",

    "BML-PG",

    "XTN-L4-97-4.AX",

    "PACQF",

    "HCIIP",

    "MIHI",

    "H5B.BE",

    "VALE5F.SA",

    "NIHD",

    "MWG.L",

    "MTSFY.PK",

    "SAC.L",

    "ZGZ16-C.NYB",

    "AED.AX",

    "0187-OL.HK",

    "HERB.PK",

    "SHFL",

    "ADV.TO",

    "LAKSHVILASB.BO",

    "JYSK.CO",

    "ZGU14-C.NYB",

    "CCCXF",

    "MSFZY",

    "REN.AS",

    "8GC.HM",

    "CETG",

    "XLM.V",

    "6742@BN.KL",

    "155650.KQ",

    "NTS.OL",

    "GDV-PA",

    "RAEWF.PK",

    "ZLPSF.PK",

    "YEWTF.PK",

    "MOGLF",

    "CHGI",

    "SHPH11.SA",

    "MMTMF",

    "RCK.V",

    "GEB",

    "IBB.DE",

    "UNLVF",

    "GKIN",

    "ZGOVPOOX.BO",

    "NXTZ.PK",

    "NVTK.ME",

    "T9W.BE",

    "ZGQ.TO",

    "STNUF",

    "VNHLF",

    "RYAAY",

    "JEMINDU.BO",

    "105630.KS",

    "KTP",

    "NTOIF",

    "VNMC",

    "PHCRF",

    "JBSAY",

    "ZAV.BE",

    "NBVENTURESL.BO",

    "VSB",

    "HLBZF",

    "FBOO",

    "CWMCF",

    "QPV.F",

    "BJWTF",

    "RGRYY",

    "BNS.L",

    "ZMULTIPU.BO",

    "PTXKY.PK",

    "2059.TW",

    "YVI-P.V",

    "TTVLF",

    "NVR.SG",

    "JRO",

    "VRZ-H.V",

    "PRIS-B",

    "VRYAF.OB",

    "BAC-PZ",

    "OXLCN",

    "DDDX",

    "MOEX.ME",

    "DUC",

    "TVC",

    "NYVB.MU",

    "FQVLF",

    "55BC.L",

    "MTWF",

    "MWTCY.PK",

    "GBZ.BE",

    "CBYAA",

    "PMDKF",

    "009240.KS",

    "SBNB",

    "AMVGF",

    "Z1S.F",

    "GLOFF",

    "RPMGF.PK",

    "PAUFF",

    "OS1.BE",

    "115160.KQ",

    "8931.KL",

    "DETNF",

    "TEF.L",

    "ASBCW",

    "DSOX",

    "TDI.BE",

    "MNBO",

    "VVEA.PK",

    "TWSI.PK",

    "ISUZF",

    "DFIHY",

    "ZTMUF",

    "NRSCF.PK",

    "VTNC",

    "GBCMF",

    "PFX",

    "KSTBF",

    "RANJY",

    "SKMTF",

    "77499.L",

    "BHV",

    "JCDXF.PK",

    "O1BC.HM",

    "QMRN.BE",

    "NWSGY",

    "XOA1.DU",

    "BOW.MU",

    "ASNB",

    "CTAX11F.SA",

    "XJOWOF-A.A",

    "GEHDF",

    "ASXSF",

    "NTCI",

    "YFGSF.PK",

    "TVLFA",

    "TXRX3.SA",

    "TYOYY.PK",

    "BESIY",

    "DVOP",

    "YKU17-C.CBT",

    "XMY.DU",

    "JOSA.ST",

    "URPLF.PK",

    "XTMXL.MC",

    "8QF.SG",

    "NIOBF",

    "9LO.F",

    "ILHL",

    "OAG.V",

    "BD45.L",

    "BACHY",

    "ALGI",

    "XPCM11.SA",

    "MAYGF",

    "ALBCF.PK",

    "YHMGF.PK",

    "PSCSF",

    "BAJ.TO",

    "NWRZ",

    "KVF.BE",

    "07C.F",

    "MCOR@NG.JK",

    "UNL.MI",

    "YIN17-C.NYB",

    "ISDR.OB",

    "FSNUY.PK",

    "SXMVF",

    "1216.TW",

    "069260.KS",

    "WMSI",

    "KJFI",

    "SXYA.SG",

    "ZS2.F",

    "DAUGF",

    "POLYMAC.BO",

    "5156.KL",

    "YMI.F",

    "SORT",

    "ZOKO-M.TA",

    "IGD",

    "TNGL",

    "ALAS.L",

    "ILED",

    "YNDX.ME",

    "SWWI.PK",

    "VOSSF",

    "TRGNF",

    "XPSSY.PK",

    "ASRI.JK",

    "CEKA.JK",

    "PMOIY",

    "MOKB",

    "PSHR",

    "NOTQF",

    "XPOI",

    "XEL-PB",

    "X9UW.BE",

    "JHS-BE.NS",

    "URBF",

    "RBI.TO",

    "GWIR",

    "288.F",

    "NEUL",

    "CTU",

    "2356.TW",

    "009520.KQ",

    "THEGQ",

    "YGD.SG",

    "HYND",

    "MIDH",

    "ZEELEARN.NS",

    "YB2N.SG",

    "DX-PA",

    "NB.V",

    "VWK.MU",

    "DEQSF",

    "ROYMF",

    "JLMKF.PK",

    "DMNKF",

    "BSSC",

    "000120.KS",

    "NWKHY",

    "7122@BN.KL",

    "DBHSY",

    "KLBN11.SA",

    "JBJ",

    "OBQI",

    "KBHL.CO",

    "CWLDF",

    "ZIF15-C.NYB",

    "VOQP.PK",

    "CSGKF",

    "PRMRF",

    "WFM.HM",

    "FPT",

    "OTV5.L",

    "DHY",

    "NZERF.PK",

    "851546.BE",

    "VSSL.BO",

    "ZGZ14-C.NYB",

    "SWTX",

    "YALR.AX",

    "PFD",

    "QABSY",

    "9261.KL",

    "7KJ.SG",

    "7228.KL",

    "DYAI",

    "000680.KS",

    "AWLCF",

    "4VL.F",

    "ASOG.L",

    "1616.TW",

    "WREFL.PK",

    "INDVF",

    "WGHPY",

    "NSE.HM",

    "6118.TWO",

    "ZETFM6.BO",

    "ZNNC",

    "E2:5UX.SI",

    "5188.KL",

    "PARG.SW",

    "JGFCF",

    "GEYEF",

    "AFT",

    "KWGBF.PK",

    "HADE.JK",

    "LXS.HM",

    "13X.MU",

    "WBCKME-A.A",

    "WDFPF.PK",

    "FDK.MU",

    "XPL.V",

    "N3Q.F",

    "YNKUF.PK",

    "TIG.V",

    "CMGHF.PK",

    "RNK.V",

    "ZLIOF",

    "TGG.AX",

    "DQUEL",

    "DTSRF",

    "SPLX",

    "STZ.L",

    "QMCI.PK",

    "BICK",

    "SDRA.JK",

    "PACQ",

    "8818@OM.KL",

    "SHZNF",

    "RIR-UN.TO",

    "PNPFF",

    "DAYTL",

    "GWSV",

    "CNMXF",

    "GN.CO",

    "JINZ.PK",

    "LBARP",

    "CYNAF",

    "VSST.OB",

    "EXU.MU",

    "KUIRY.PK",

    "ZN.V",

    "PBEGF",

    "FOG.L",

    "AMAOF",

    "DXXSF",

    "076610.KQ",

    "TPRP",

    "MSADF",

    "LAQ",

    "VRTK",

    "SOGH.ST",

    "LMPMY",

    "WLUC",

    "KESARENT.BO",

    "DTZ",

    "WGBSD",

    "SFNL",

    "001340.KS",

    "GRNH",

    "NAT.MC",

    "YIZ16-C.NYB",

    "XXCCH",

    "AORGF",

    "WELCORP6.BO",

    "DRNE",

    "MKL.F",

    "LVRLF",

    "MRAFY",

    "B3SB.DU",

    "E2:D5N.SI",

    "YORK",

    "HNE.L",

    "OXAFX.SW",

    "TO7.SI",

    "SNSY3.SA",

    "OP-H.V",

    "SVRZF",

    "WJAFF",

    "APRYF",

    "VIPV",

    "DTRX.PK",

    "RDVWF",

    "DPV8.L",

    "O-PF",

    "SCPZF.PK",

    "KEFI",

    "GRYN",

    "CAH-UN.TO",

    "VTL.BO",

    "MNE",

    "LDBKY",

    "WPRXF",

    "E1:KT9.SI",

    "GRPEF",

    "CMCI",

    "PNMOF",

    "XKU17-1.CBT",

    "NRGSP",

    "GMVI",

    "L4LA.SG",

    "ZSK17-1.CBT",

    "1661.HK",

    "TRIO.JK",

    "IAF",

    "0610-OL.HK",

    "AZGS",

    "WESLOC-A.A",

    "SLT.HM",

    "HPR.F",

    "QEXXF.PK",

    "0YYA.SG",

    "MLLOO.PA",

    "FTFC.L",

    "THGA",

    "PEU-B.TO",

    "UWBKQ",

    "SGAS",

    "XGTIW",

    "BTV.VI",

    "CRDT",

    "KOPY.ST",

    "VINTAGEC.BO",

    "XGJ.BE",

    "RNDXF.PK",

    "LEXVF",

    "YOU.L",

    "FUAIY",

    "WNMLA",

    "JMSB",

    "OCL.L",

    "EMMLF",

    "AFA",

    "2903.TW",

    "ATTBF",

    "ECTY",

    "MCHT",

    "XNWU.PK",

    "NBO-H.V",

    "JOYOF",

    "SRCGF",

    "SGRCF",

    "LFAP",

    "550001.KS",

    "NAD",

    "ETB",

    "BWVI",

    "000440.KQ",

    "E2:5CB.SI",

    "YKLTF",

    "SHMCF",

    "EPCBF",

    "WDSL.PK",

    "BABWF",

    "HRIBF",

    "WJRYF",

    "WFSC",

    "YBOP.F",

    "XJGTF",

    "HZNFF",

    "COI.V",

    "KTBA",

    "YPAS@NG.JK",

    "CCRO3.SA",

    "YUMM",

    "WILD.PK",

    "3VMB.SG",

    "064550.KQ",

    "CBEX",

    "FEDS.IL",

    "CRESF",

    "RGRI",

    "SAHN",

    "500058.SS",

    "JMHLY",

    "WTM1.F",

    "MKTSQ",

    "TDC.CO",

    "OPTR",

    "FAR.OL",

    "VODJ.BE",

    "ALNPY.PK",

    "YORKEXP.BO",

    "XEBEF.PK",

    "STAR-PI",

    "000270.KS",

    "GGACU",

    "KQIPQ",

    "CHSYF",

    "FOFNE.OB",

    "SKO.V",

    "GA",

    "BOALY",

    "CICHF",

    "NXPSQ",

    "CBKS",

    "MINA",

    "RNBI",

    "NISOF",

    "LCGP.JK",

    "SSMXF.PK",

    "CANSF",

    "MKE.MU",

    "CAOYF",

    "ERIC",

    "FEMOW",

    "VISCN.MX",

    "JPSL.L",

    "DNTUF",

    "WHLX.PK",

    "2891.TW",

    "NATUF",

    "SGGV.PK",

    "2233-OL.HK",

    "PRYMF",

    "AKSO.OL",

    "ARCO",

    "QE2P.F",

    "BNB.V",

    "KHTRF",

    "MULT",

    "SGIOF.PK",

    "E1:5KK.SI",

    "TOM.HM",

    "3816.HK",

    "BLW",

    "VACG.EX",

    "NPSKY",

    "CGOOF",

    "BSYBF",

    "XCAP.L",

    "005380.KS",

    "SDA",

    "YHIIF.PK",

    "SPMA.JK",

    "NRF-PE",

    "WEF-WT.TO",

    "DIY0.BA",

    "HDUGF",

    "8CYN.F",

    "SFTBY",

    "GEGYF",

    "NOXL",

    "MPOHY",

    "MDVT",

    "PATH",

    "GPMCF",

    "KGHA.BE",

    "VETOF.PK",

    "AGFDF",

    "KRMEF",

    "OYPF9.BA",

    "RTKM.ME",

    "GIMC",

    "QINC",

    "AEOJF",

    "001270.KS",

    "GUNN.ST",

    "BVNKF",

    "POOSF",

    "ZEL.MC",

    "ZOO.BE",

    "MNTR",

    "31Y.HM",

    "Z1S.BE",

    "BWPC.OB",

    "VAJRABE.BO",

    "TAHKF",

    "MORE",

    "UATG",

    "SPRWF",

    "AP4B.F",

    "SGMNF",

    "AHOC.SG",

    "DDC.TO",

    "OVCHY",

    "AQBKF",

    "INRLF.PK",

    "SHNVF.PK",

    "SAKH",

    "2365.TW",

    "NWT.V",

    "OXGBF.SW",

    "VALE3.SA",

    "Y3L.MU",

    "WUMSY",

    "KOLR",

    "XE9.MU",

    "LSTS",

    "0QR.F",

    "CTAX11.SA",

    "RITTW",

    "APNHF.PK",

    "CSOL",

    "CER.AX",

    "6963.KL",

    "1266-OL.HK",

    "D3X.F",

    "IU8.MU",

    "CLPI",

    "PRFZ",

    "DXJS",

    "NQS",

    "SBKO",

    "0294-OL.HK",

    "NUVPF",

    "0472-OL.HK",

    "ALGGY",

    "NUV",

    "IAALF",

    "SFGF",

    "VICUF",

    "LGHS",

    "QACL.DU",

    "PNMXO",

    "NPI-PC.TO",

    "IBO",

    "MHY-UN.TO",

    "KUKAY",

    "J6I.BE",

    "XL9A.F",

    "2723.TW",

    "IVFZD",

    "SGAPY",

    "RVLLF",

    "VAPE.PK",

    "QNC1.SG",

    "8429.TW",

    "WANBURY-BE.NS",

    "1252.HK",

    "PLZ-UN.TO",

    "UFGA.MU",

    "M6F.F",

    "ELA",

    "KUN4.MU",

    "WIWTY",

    "VEE.SG",

    "LMBS",

    "OPHI.PK",

    "RNKFF",

    "AMLYY",

    "SKFOF",

    "ZIZ14-C.NYB",

    "233.BE",

    "JMFINANCIL-EQ.NS",

    "PWF-PG.TO",

    "DOLVD.PK",

    "CNOBF",

    "DYER",

    "BITCF",

    "GGIFF",

    "ZBHAVIIN.BO",

    "QUAL.AT",

    "QCOM.SW",

    "YARAF.PK",

    "CPOYF",

    "SWA.HM",

    "MNHVF",

    "XSSI.PK",

    "TIN.V",

    "YCKM.OB",

    "QTMR",

    "V39A.SG",

    "CRQDF",

    "VOR1.F",

    "ZNTH.OB",

    "OGRMF",

    "CUPCF.PK",

    "KYRI.AT",

    "RKH.L",

    "ASMVF",

    "CAHPF",

    "WKRCF",

    "ASRG.OB",

    "WETM",

    "4243.KL",

    "KI4.BE",

    "MULI",

    "YORUF",

    "YU5.SG",

    "EJPRY",

    "PENO.ST",

    "WI-P.V",

    "MIXIF",

    "DANOY",

    "PTNDY",

    "XGD.HM",

    "GII-UN.TO",

    "1155.KL",

    "MGJ",

    "MRKV.ME",

    "3158@BN.KL",

    "023760.KQ",

    "BZTIF",

    "USMO",

    "ZEL020.NZ",

    "OCPNF",

    "ZTR",

    "SGCLF",

    "DUNIY",

    "SMSUF",

    "TCYMY",

    "NRDXF.PK",

    "NIPMF.PK",

    "XTL.TA",

    "RKLFF",

    "NM-PG",

    "FRPZW",

    "REPYF.PK",

    "RAN.PA",

    "GDL-PB",

    "FNHI",

    "DNDNQ",

    "WWFA.BE",

    "CHZHF",

    "MHZ.SG",

    "AWRCF.OB",

    "GRAVE.OB",

    "ISOP-L.TA",

    "A2H.BE",

    "ZEE.F",

    "CEE",

    "SB-PC",

    "NQL1.F",

    "JSWENERGYSL.BO",

    "BPOPP",

    "EVF",

    "PML",

    "YNAJF.PK",

    "KYCCF",

    "WFCO11B.SA",

    "NNY",

    "GTRZF.PK",

    "AUHEF",

    "PC1A.BE",

    "NCCL.L",

    "PSA-PS",

    "JIGC.L",

    "FBMI",

    "PSBG",

    "ECH.V",

    "OSIN",

    "NP6.BE",

    "SVIK.ST",

    "ADRE",

    "GTHKF",

    "XXFFQ",

    "WW8.F",

    "MIN",

    "WARGF.PK",

    "MLNES.PA",

    "LQRCF.PK",

    "ZP8.MU",

    "BLTHF",

    "CYVF",

    "KRC-PH",

    "FUJIF",

    "RQI",

    "2408.TW",

    "IEAG",

    "ZENYF.PK",

    "NVCN",

    "SLMAP",

    "NTRP",

    "QHRTF.PK",

    "GNGBY",

    "128940.KS",

    "QCLSY",

    "LLESF",

    "NNMIF",

    "0009@BN.KL",

    "HHULF",

    "SNR",

    "TUPY3F.SA",

    "STAR-PF",

    "JPIVF",

    "HHY-UN.TO",

    "ORMT.TA",

    "VE8.BE",

    "FLGE",

    "YGRAD",

    "KTRN",

    "TOG.TO",

    "FLU.VI",

    "RELFF",

    "RTWRF",

    "CZA.L",

    "1281.HK",

    "OPM.L",

    "SMANP",

    "DASTY.PK",

    "CROS.L",

    "DVOO",

    "NHVCF",

    "MRGLF",

    "1226.HK",

    "HRELF",

    "HRIBF.PK",

    "PUCCF",

    "HOLN.VX",

    "PSSEF",

    "JPM-PB",

    "CGAQ.PK",

    "VO1.F",

    "OWOO",

    "WF8B.F",

    "RHO.SG",

    "MAKSF",

    "AWWI",

    "NIBE-B.ST",

    "ZCCMF",

    "JGCCY",

    "NAB.AX",

    "EIOF.OL",

    "082210.KQ",

    "2LR.MU",

    "OCTX",

    "PPR",

    "006140.KQ",

    "YUSG",

    "9TA1.F",

    "CU",

    "CTF",

    "CSLG",

    "BHK",

    "BIRD.JK",

    "JMTAUTOLTD-BE.NS",

    "RDLCF",

    "EQUR",

    "LSI",

    "ZIP.AX",

    "RFMK",

    "XJOWOW-A.A",

    "1337.TW",

    "WLWHF",

    "PTXAF.PK",

    "GLYC",

    "YIN18-C.NYB",

    "1314.TW",

    "IIFLFIN-N1.NS",

    "NCA",

    "5096.KL",

    "FUBAF",

    "ZYLOG-BE.NS",

    "KF8.SI",

    "2618.TW",

    "QJYMF.PK",

    "5GQ.F",

    "RMGX",

    "ZOR-P.V",

    "BBV.BA",

    "TEI",

    "TOKTY",

    "IIFLFIN-N2.NS",

    "VPRIF.PK",

    "VIZC.OB",

    "E2:5RK.SI",

    "TRUS.JK",

    "E2:5NH.SI",

    "FCA.MI",

    "WKCMF",

    "PYCN.SG",

    "ETSVF",

    "USB-U.TO",

    "KJWNF",

    "LRCPF",

    "TIME-WI",

    "YESBANKQF.BO",

    "QYLD",

    "QMKR.PK",

    "AMCBF",

    "UOVEF",

    "EJPRF",

    "WRIT",

    "CCOJY",

    "CGYG",

    "SIUMF",

    "0682.HK",

    "SURRY",

    "1203.TW",

    "TCBIW",

    "XJOKMW-A.A",

    "WLFMF.PK",

    "ZXM-D.TO",

    "HUAZ",

    "WSCC",

    "BKY.L",

    "AGNCB",

    "SKIGF",

    "TSL.TO",

    "AMGRF",

    "MTNOY",

    "TRH-UN.TO",

    "MWET4.SA",

    "DWNF.EX",

    "IBDWF",

    "DSG.L",

    "OS1.MU",

    "SLVO",

    "ACWX",

    "UAHC",

    "TAT.IL",

    "GRBMF",

    "NMEHF",

    "XCLL.PK",

    "NAK.L",

    "BGI-UN.TO",

    "MAC.V",

    "PRAN",

    "LONN.VX",

    "WILLARD.BO",

    "WDIS.PK",

    "WEHA@TN.JK",

    "CBJC",

    "ACGFF",

    "GMC.L",

    "WIEIE",

    "ARTC",

    "SEA.NZ",

    "LOVI",

    "UDHI.PK",

    "NFDS",

    "ZB31.SG",

    "DDJHF.PK",

    "YKKA.BE",

    "TVTB.F",

    "10J.F",

    "KJ6.SI",

    "FEWP",

    "ZSL.F",

    "E2:569.SI",

    "PKSGY",

    "KMM",

    "FPL",

    "PSEC",

    "OXBC.PK",

    "CWKNF",

    "THRSF",

    "WIE.VI",

    "WFC-PP",

    "ACOL",

    "CADX",

    "PWTCD.PK",

    "DUSCF",

    "REGT",

    "NEA",

    "0921-OL.HK",

    "XAND",

    "YMMTY",

    "EOGSF",

    "2817-OL.HK",

    "ICAGY",

    "6182.TWO",

    "TRXPF",

    "0577-OL.HK",

    "MHSDF",

    "EIM",

    "WOLWF",

    "PUNB",

    "YXOXF.PK",

    "RJCTF",

    "QUAN",

    "BZDLF",

    "EPWDF",

    "GAFC",

    "HUSKF",

    "TUB.SG",

    "MCHVY",

    "ZLIOY",

    "MPV",

    "MCHHF",

    "8349.TWO",

    "1023.KL",

    "PSMH.OB",

    "WISH",

    "TFSCU",

    "VZRTF.PK",

    "XXJZA",

    "DTGIQ",

    "WLF.L",

    "RLDFF.PK",

    "DUP.HA",

    "XGRA8.BA",

    "VANL",

    "6556@BN.KL",

    "HOX.L",

    "E1:5DM.SI",

    "097950.KS",

    "WR0.BE",

    "1619-OL.HK",

    "COFI",

    "CRT-UN.TO",

    "CORVF",

    "TFSC",

    "ABNAF",

    "NXGPF",

    "7231@BN.KL",

    "WMGIZ",

    "EZH1.SG",

    "WH17-C.CBT",

    "HNDAF",

    "VRQ.BE",

    "OXFCF",

    "TUCA.PK",

    "XGJ.MU",

    "5I0.SI",

    "BLT.BE",

    "SRE.AX",

    "KURRY.PK",

    "VMM",

    "5FX.SI",

    "CBFN.SG",

    "JRIV",

    "GALTW",

    "PHIA.AS",

    "INTLL",

    "1215-OL.HK",

    "ALLZF",

    "NXHD",

    "SCFFF",

    "003495.KS",

    "VNIL-SDB.ST",

    "SLMAF",

    "5840.L",

    "YYEEY",

    "TGDBF",

    "GAMN",

    "40S.SI",

    "1373.HK",

    "043710.KQ",

    "OTP.DU",

    "KTWEF.PK",

    "FOP.OL",

    "TSLF",

    "DHX.TO",

    "PGZ",

    "E7RA.SG",

    "GJO",

    "SNSX",

    "ERC",

    "VRI.F",

    "GWSV.PK",

    "JSCRF",

    "RDFEF",

    "QLCLF",

    "WTSHF",

    "005750.KS",

    "KYN-PE",

    "NKNC.ME",

    "NKG-PE",

    "SKAX",

    "GNMLF",

    "WPC.L",

    "IIPZF",

    "CWHPF",

    "HART",

    "AAF1.BE",

    "0948-OL.HK",

    "GFY",

    "GUZOF",

    "WTLC",

    "TDE",

    "CFRUY",

    "TRGAF",

    "CTY",

    "PLWTY.PK",

    "HXSCL",

    "QUPPD",

    "QTMR.PK",

    "ZGQ15-C.NYB",

    "064800.KQ",

    "UEM.L",

    "2030.HK",

    "0828.HK",

    "XSVT.PK",

    "ODDJ.PK",

    "LUN.CO",

    "RZS.BE",

    "DRYN",

    "PTHLF",

    "VKQ",

    "FKRAF",

    "ARR-PB",

    "CKB.V",

    "KBSTY",

    "6971.KL",

    "1328011.HM",

    "JPM-PE",

    "CESDF",

    "KRAS.JK",

    "VLTHF",

    "FV",

    "NASV.PK",

    "T0567Y.TWO",

    "NPI",

    "ZICX",

    "HKTV",

    "HMTLF.PK",

    "PWTN.SW",

    "ACME",

    "VW1.BE",

    "HFBK.OB",

    "PCJEWELLER.BO",

    "CKGDY.PK",

    "MAJJ",

    "IRAVF.PK",

    "AWSRQ",

    "KELYB",

    "O87.SI",

    "BRRRF",

    "TTYGF.PK",

    "R3L.BE",

    "9MI.F",

    "GCV",

    "6279.TWO",

    "MLLGF",

    "UBEOF.PK",

    "DNY",

    "WEIGF",

    "RTOXF",

    "DSR.V",

    "042670.KS",

    "03039X.TW",

    "NXR",

    "ADMF.JK",

    "NURAF.PK",

    "SEOVF",

    "NHKFF",

    "DETNOR.OL",

    "WILDE",

    "ENTMF",

    "NY4.F",

    "SDXOF",

    "TKECF",

    "VTMLF.PK",

    "DTXMF",

    "9601@BN.KL",

    "NSGDF",

    "KIDE.PK",

    "LIQR",

    "ZENITHINFO.BO",

    "MYP",

    "AONEQ",

    "ICCON.BO",

    "AVAL",

    "QUASAR.BO",

    "VKL.MU",

    "NUCL",

    "QRXPY.PK",

    "SCEDN",

    "SHXWF.PK",

    "SMMCF",

    "DU9.BE",

    "VCNYF",

    "MYF",

    "DBXXF.PK",

    "FDNH",

    "TMK-PB",

    "GARS",

    "CCOJF",

    "VVIT.PK",

    "CNLMU",

    "049550.KQ",

    "LEAF.L",

    "IAXFF",

    "PIEJF",

    "NYRSY",

    "NF04Q.BA",

    "X1X.SG",

    "PHIIK",

    "QCOR",

    "BNGOF",

    "TGEN",

    "CHUFF",

    "BKSHD",

    "LGCLF",

    "NSRPF",

    "ZGG.F",

    "NCU",

    "ZGLDF.PK",

    "CIFHY",

    "IPHAF.PK",

    "XXNCB.PK",

    "0872-OL.HK",

    "POFCF",

    "CFMI",

    "8326.HK",

    "RMISF",

    "DXIN.PK",

    "2524.TW",

    "YCM-PB.TO",

    "UGARSUGAR-BE.NS",

    "WFTBF",

    "SSMXF",

    "SLRA",

    "ZIZ16-C.NYB",

    "3639-OL.HK",

    "PTPKF",

    "YUMM.PK",

    "JDU.TO",

    "VNOD",

    "VTON",

    "JXHGF.PK",

    "SRYS",

    "NDBKF",

    "KOTRF",

    "NPTVF.PK",

    "HZM.L",

    "LCSHF",

    "TY",

    "RNTL",

    "ORFG",

    "TMKOY",

    "ERDCF",

    "PRS.MC",

    "NTDOF",

    "VGM.L",

    "ZGG.BE",

    "FXPT",

    "GETI4.SA",

    "ZCOM.PK",

    "DARE.TA",

    "KATFF.PK",

    "CBR.F",

    "98KI.L",

    "EXCU",

    "TWTC",

    "ZB-PG",

    "IO4.MU",

    "AJGH",

    "WFAFD.PK",

    "HWVI.PK",

    "BK-PC",

    "WELLWININD.BO",

    "TZMI.TA",

    "ACSAF",

    "EDVMF.PK",

    "NOVE.ST",

    "TUB.MC",

    "PPAAF",

    "LGC.TO",

    "VELPA.AX",

    "CPD.AX",

    "GWAXY",

    "AMANF",

    "89VS.L",

    "NNEMF",

    "SBNC",

    "MVF",

    "OTPGF",

    "0239-OL.HK",

    "QHD.F",

    "SCRA.PK",

    "POW-PC.TO",

    "OCGPF.PK",

    "3024-OL.HK",

    "OXD.F",

    "ZMG.BE",

    "SECCY",

    "SLN.V",

    "MYPK-DEB7AB0.SA",

    "EVSNF",

    "WLGC",

    "PFG-PB",

    "N8C.BE",

    "SZEVY",

    "CAOVY",

    "PME.TO",

    "STI.V",

    "QWIKF.PK",

    "094840.KQ",

    "0908-OL.HK",

    "TPNL",

    "USDF",

    "W4F.BE",

    "023890.KQ",

    "ZGN14-C.NYB",

    "Q9ZK.F",

    "096760.KS",

    "FRIVF",

    "EMZ",

    "SHPMY",

    "3939.HK",

    "CVAS",

    "YB2N.F",

    "GFNL.PK",

    "CAUXF",

    "2727.TW",

    "YH2.SG",

    "KICI.JK",

    "ZE1.F",

    "AWRRF",

    "CII",

    "VOLTAMPSL.BO",

    "YARIY",

    "17Q.F",

    "HLBZF.PK",

    "OTCM",

    "MIOI",

    "DPRTF",

    "6219.TWO",

    "4971.TWO",

    "RVV.V",

    "SVCBY",

    "SZSN",

    "TTC.HM",

    "MBC",

    "NWF.BE",

    "SOCI.JK",

    "GUZBY",

    "EC.V",

    "FFK.BE",

    "GKR-H.V",

    "PRCK",

    "TAO.TO",

    "APPL",

    "OREO",

    "PLBID.PK",

    "IIFLFIN-NB.NS",

    "BAY.V",

    "TD5.SG",

    "6139-OL.HK",

    "YGM19-C.NYB",

    "BEGYF",

    "RZS.F",

    "OGDCF",

    "JMM",

    "D7A.SG",

    "FUIZF",

    "GNXP",

    "BRTHF",

    "CTR",

    "XLE1.SG",

    "YELGF",

    "03029X.TW",

    "GMXDF",

    "SOTDF",

    "OXLCP",

    "HXWWF",

    "JUMSF",

    "108790.KQ",

    "7050.KL",

    "UEC.MU",

    "QD4.HM",

    "WAS.L",

    "PPHMP",

    "I1KA.BE",

    "OISL-BE.NS",

    "OTSHF",

    "XD4.HM",

    "ZID.BE",

    "DTK",

    "WGNAP.PK",

    "EC9.BE",

    "VRAO.ME",

    "NESNE.SW",

    "FMCKJ.OB",

    "YUEIY",

    "XT3B.SG",

    "SKHSF.PK",

    "KOIN.JK",

    "VYEY.PK",

    "AEGPD.PK",

    "RWCI",

    "AREEP",

    "SKALF",

    "OILL",

    "AHKSF",

    "8032-OL.HK",

    "DFZ",

    "3017-OL.HK",

    "ENEV1F.SA",

    "PNF",

    "ADZZF",

    "YBRHF",

    "EPH.SW",

    "JAIMI.BO",

    "FTCOF",

    "TAPOF",

    "HCACW",

    "ENT.TO",

    "WARFF.PK",

    "INDF.JK",

    "SCRMF",

    "E1M.DU",

    "CICOF",

    "5264.TW",

    "SROE",

    "6209.TW",

    "MEGA.JK",

    "FFC",

    "PGPEF",

    "WGB.L",

    "KLNDF",

    "UTOLF",

    "QMXGF",

    "CAOJF",

    "WCRS.PK",

    "WTBFA.PK",

    "KTF.SG",

    "UGB.SG",

    "TECUA",

    "OROVY",

    "RXP.L",

    "XXBBR.PK",

    "PFL",

    "YTLCF",

    "BIOV.TA",

    "RFLXF",

    "1875661.BE",

    "USB-PA",

    "ZS3.F",

    "OEZVY",

    "5ZQ.SG",

    "VSTIND.BO",

    "NBBTF",

    "ARDNA",

    "AQQ",

    "SUDCF",

    "OVTZ.PK",

    "CGNI",

    "NUACF",

    "KLTI",

    "YC0.SG",

    "CNRB",

    "AUEEF",

    "AVOL",

    "ZTCOY.PK",

    "CSBB.OB",

    "TSH",

    "YAHOY",

    "TBEV",

    "RUSHA",

    "ITMN",

    "CUQ-DB.TO",

    "AJINF",

    "TNRSF",

    "LMWSL.BO",

    "TSSJF",

    "VSHGD",

    "WIL.V",

    "PTXKY",

    "SOR",

    "DTRK",

    "VKNG",

    "ALSVF",

    "2976.KL",

    "SDRG.OB",

    "ZBZX",

    "YPF.SG",

    "KKV-P.V",

    "BTZ",

    "KKC.F",

    "JNSTF",

    "XTN-L4-95-7.AX",

    "QCV16-C.CMX",

    "ELTP.OB",

    "CHYUE.OB",

    "GCWOF.PK",

    "STGWF",

    "GLADP",

    "ORSTF",

    "XRX.SW",

    "VH1.SG",

    "WALG.L",

    "1681.HK",

    "OARFF",

    "ZEON",

    "FAIRF",

    "SRER",

    "PDE-H.V",

    "RSHG.EX",

    "GAS.MC",

    "GGRM.JK",

    "PRAXC.AT",

    "2577@BN.KL",

    "ZGG16-C.NYB",

    "DTEGY.PK",

    "QCX1.F",

    "VETTF",

    "E2:MN5.SI",

    "KURRF",

    "WESTERNBIO.BO",

    "WSP-R.TO",

    "GLDI",

    "TKAG.EX",

    "CADTW",

    "ORXOF",

    "XCY.MU",

    "NAF-UN.TO",

    "1476.TW",

    "FPEG.EX",

    "YFX.F",

    "9431.KL",

    "BELLY",

    "EC9.F",

    "MUL.PA",

    "MUJ",

    "GAWK.PK",

    "IGCIU",

    "EOPCF.PK",

    "SSNLF",

    "KFI",

    "NSM1.BE",

    "1462.HK",

    "015260.KS",

    "B9I.F",

    "OXI.V",

    "ARSLF",

    "AHODD",

    "NBR.L",

    "WPWR",

    "NRTZF",

    "ELE.MC",

    "SUNZI.BO",

    "E1:E6A.SI",

    "NEVDF",

    "COSWF",

    "MWSWF",

    "BOFKF",

    "VRHD",

    "HUSIF",

    "YPRO",

    "JPAK",

    "HMSVF",

    "KEYUF",

    "KORS.SW",

    "WIX.TO",

    "KBXMF",

    "BRTE",

    "CDEVY",

    "QMIS",

    "NGN.MX",

    "NARRF",

    "ASJT@NG.JK",

    "9679@BN.KL",

    "GVDNY",

    "ROTI.JK",

    "LXRP",

    "VASO.OB",

    "SHMUF",

    "HEII",

    "EXOSF",

    "FOI-B.ST",

    "6124.TWO",

    "PTY",

    "SERNF",

    "VICT",

    "MRH-PA",

    "NHKGF.PK",

    "CGRW",

    "KRC.AX",

    "QTETR",

    "VCAN",

    "KLPEF",

    "AMSC.OL",

    "YUVINTL.BO",

    "TOTDF",

    "JAIBALAJI-BE.NS",

    "MNRLF",

    "8206.KL",

    "YINGY",

    "NOKI-SEK.ST",

    "1VPA.SG",

    "MDPEB",

    "SBOTF",

    "MONIF",

    "EXCL@TN.JK",

    "ZUARIGLOB.NS",

    "FAU.V",

    "SNDH",

    "ELWD.OB",

    "GSCPF",

    "NVAY.MU",

    "GFPMF",

    "PCDVF",

    "WAFRD",

    "JISLBNDVRS.BO",

    "SYMM",

    "XLEFF",

    "WPHM",

    "BGOUF",

    "TRUMY",

    "PV.MX",

    "JGSMY",

    "NGX.AX",

    "4747.TWO",

    "133047.L",

    "ISVLF",

    "VRSEF",

    "PLLAF",

    "KGTTF",

    "SGGH",

    "YATRA.AS",

    "POS.L",

    "NSANF",

    "DSM",

    "MISVF",

    "015.SG",

    "NSRGY.PK",

    "WLHSF",

    "OMCY",

    "TCPN",

    "AITUF",

    "STNN",

    "XLGLF",

    "GBQ.SG",

    "GNT.V",

    "JAMESWARREN.BO",

    "OMCY.PK",

    "ZHIMATMO.BO",

    "TTDKY",

    "JGCCF",

    "Y2WA.BE",

    "ZSC.SG",

    "EREPF",

    "019010.KQ",

    "MMF",

    "ZMSPF.PK",

    "OEL.V",

    "CWS.ST",

    "HOTELEELA6.BO",

    "036170.KQ",

    "GCPEF",

    "KPIFF",

    "IHD",

    "ITCFY",

    "HOWWY",

    "A1OS.BE",

    "FTHI",

    "QS8.BE",

    "E2:QC7.SI",

    "GKO.L",

    "COLLF.PK",

    "EMLAF",

    "VQSLF.PK",

    "AVLY.PK",

    "XAR.BE",

    "PNGY",

    "AJX.TO",

    "EREPF.PK",

    "NVTZF",

    "MKRMF",

    "EUGFF",

    "RIOCF",

    "L5G.SI",

    "BDUUF",

    "TSTIF",

    "JSYSF.PK",

    "AVTO",

    "WFG1.SG",

    "ASRVP",

    "WOOD",

    "DCUA",

    "JSAIY.PK",

    "YPCXO.BA",

    "HOPS",

    "BRRAF.PK",

    "JTNB",

    "WABAG.BO",

    "MSWM",

    "AVTC",

    "JRCC",

    "BKUT",

    "3419.TW",

    "AESAY",

    "ERMAF.PK",

    "VWLTF.PK",

    "YYINE",

    "VLXGF.PK",

    "OLE.MC",

    "AVHNF.PK",

    "KYE.SG",

    "U2U.SI",

    "WB1.F",

    "VRTY",

    "FVPQ11.SA",

    "TORW",

    "VEENATX.BO",

    "ZZ7B.F",

    "4527.TWO",

    "NIPMF",

    "QIN.HM",

    "KGL-BE.NS",

    "WZENY",

    "KMRCF.PK",

    "JCR.BE",

    "SWUT.VI",

    "DSKIF",

    "NAN.V",

    "QPDC",

    "HTHIY",

    "APB",

    "WIRX",

    "KWHIY",

    "STAG-PB",

    "WPSL",

    "ARDC",

    "ORNC",

    "GEDSF",

    "GAINP",

    "MLBI.JK",

    "MASC",

    "VPGDF.PK",

    "PLAY",

    "FGX-WTB.TO",

    "SOLLF",

    "BPKKF",

    "QRNNF.PK",

    "RMGOF",

    "DLTA.JK",

    "ROZ.V",

    "SUN",

    "PERH.EX",

    "MAB",

    "GBLS",

    "QUSA",

    "FOY.AX",

    "O4S.SG",

    "2789-OL.HK",

    "HEROMOTOCO.BO",

    "191420.KQ",

    "TRYIF",

    "KF4B.SG",

    "HPTG",

    "YASH.ME",

    "019540.KQ",

    "QC8.BE",

    "KGFN.MX",

    "NVCIF",

    "SDV.L",

    "AST.L",

    "ISOL",

    "DRRSF",

    "ZMZN.ME",

    "PAMT",

    "RRU.BE",

    "GEQ",

    "GTO.AS",

    "WEBNF.PK",

    "QTMI.PK",

    "BREE.L",

    "VISESHINFO.BO",

    "EHI",

    "USFC",

    "KWGBF",

    "PMULF",

    "ZFSVF",

    "WSTR.PK",

    "TIX.AX",

    "SCI-UN.TO",

    "PMF",

    "XSVTE.OB",

    "SGMGF",

    "NMNZF",

    "TNVMF",

    "XYLTF.PK",

    "SDVKF.PK",

    "WFREF",

    "TDHOF",

    "SWYDF.PK",

    "XX4.BE",

    "SVNDY",

    "5UU.SI",

    "EONC",

    "FSD-UN.TO",

    "4S8.BE",

    "MXTLF",

    "WNDLF",

    "OWOO.PK",

    "SLNLF",

    "035250.KS",

    "ADCSD",

    "WPA.F",

    "GDV",

    "ABCE",

    "PPXF.EX",

    "SSYOD",

    "DPNEF",

    "FEHZY",

    "ZAMBISLK.BO",

    "WELLESLEY.BO",

    "CIWT",

    "GMICF",

    "JCOUF.PK",

    "ELMUY",

    "KAPRIPH.BO",

    "2311.TW",

    "NOBGF.PK",

    "PTNDY.PK",

    "JASNW",

    "STVF.PK",

    "STOHF",

    "MDTKF",

    "1409.TW",

    "SAPR3.SA",

    "JPH.BE",

    "NONOF",

    "SMXMF",

    "USGIF",

    "VNX.MU",

    "H4G.HM",

    "EAB",

    "SQY1.F",

    "ROIQW",

    "XE9.SG",

    "OXA.L",

    "1120-OL.HK",

    "TQ-P.V",

    "5016.KL",

    "8PO.BE",

    "DEX",

    "13X.F",

    "VGGL.PK",

    "STRS.TA",

    "HYHZF.PK",

    "TTOO",

    "FLRE",

    "XMDC.PK",

    "CNVB",

    "MHM",

    "FXER.OB",

    "GATE.SW",

    "GDP.L",

    "3050-OL.HK",

    "RDTX.JK",

    "SFRK",

    "DPD",

    "TYIDF",

    "FNMAP",

    "MUTHOOTFI.NS",

    "MUI",

    "GWO-PP.TO",

    "8050-OL.HK",

    "WPB.VI",

    "005257.KS",

    "WSHLY",

    "OSKFF.PK",

    "YDWAF",

    "ARWJF",

    "006280.KS",

    "NGLDF.PK",

    "YFRMD",

    "FIVE.IL",

    "SIVE.ST",

    "KURRY",

    "K.TO",

    "HYLKF.PK",

    "WZ16-C.CBT",

    "IIREF",

    "RHHVF",

    "REDW.PK",

    "OTT.F",

    "1241.HK",

    "SBUM",

    "PJF.L",

    "QEBR.PK",

    "PTAXF",

    "PAWEF",

    "JAPSY",

    "VTHR",

    "WWEXF",

    "GQMNF.PK",

    "DSFI.JK",

    "GOV390.NZ",

    "ANZBY.PK",

    "ICTG",

    "NOVB",

    "RSEL.TA",

    "PACV",

    "SLNLY",

    "WRTBF",

    "WSBHF",

    "HBNNF",

    "STGN.SW",

    "SKKAF",

    "QPOND",

    "RBS-PS",

    "AREO.L",

    "8390.TWO",

    "BRWC",

    "JACQW",

    "UTLD.L",

    "XTN-L4-97-1.AX",

    "MEME",

    "3669-OL.HK",

    "VIVHY",

    "TYFDL",

    "VST.V",

    "SWIR",

    "2101.TW",

    "ECIG",

    "005940.KS",

    "RNGE",

    "WBRIF",

    "XSPY.OB",

    "TSIHF",

    "TTQ.V",

    "3UJ.BE",

    "MNIGF",

    "RBIZ",

    "SNNUF",

    "XYLEP.AT",

    "OFG-PA",

    "RCKB",

    "ANRGF",

    "SKAKO.CO",

    "MVTG.PK",

    "2966-OL.HK",

    "TFECF",

    "YB2N.BE",

    "EMJ",

    "SHMHF.PK",

    "CAF",

    "XTN-L4-96-4.AX",

    "BOE",

    "DOLLF",

    "ARU",

    "TBOW",

    "FIFS",

    "XVIVO.ST",

    "FUJIY",

    "XBLA.SG",

    "LTON",

    "TEEE",

    "NNDIF",

    "MHZ.F",

    "PEW.L",

    "CANIF",

    "CKNTF",

    "4254.L",

    "APNHF",

    "ODERF",

    "LDP",

    "135317.L",

    "BSH1.BE",

    "TRG.MC",

    "SKSDF",

    "KPCM",

    "CKATF",

    "DPSGY",

    "2012.TW",

    "KMKGF.PK",

    "TVIPF.PK",

    "0866-OL.HK",

    "TAIPF",

    "TLGN",

    "2733.TWO",

    "001040.KS",

    "ZSARACOM.BO",

    "ZEAL.CO",

    "AHICF",

    "BBCA.JK",

    "GAIN",

    "SBRBF.PK",

    "PCCWY.PK",

    "ANZBY",

    "OSK.SG",

    "IDCBF",

    "PIC.BE",

    "041020.KQ",

    "0499-OL.HK",

    "MBUMF",

    "500008.SS",

    "NHAWF",

    "DDEJF",

    "QTN.F",

    "E2:5I0.SI",

    "RWE3.HM",

    "XHFNF.PK",

    "0054@OM.KL",

    "BBRI.JK",

    "SYDB.CO",

    "NAS.L",

    "TIEUF",

    "BKSL.JK",

    "MNSF",

    "XLSA.BE",

    "XTPEF.PK",

    "002240.KS",

    "CXE",

    "N4R.F",

    "MUEL",

    "MXCHY",

    "QGPLF.PK",

    "ENZR",

    "YFGSF",

    "CTJHF",

    "ECDP",

    "PP.V",

    "NBIIP",

    "CXGP.PK",

    "0153.KL",

    "CGO",

    "WOCKHARQF.BO",

    "ZMR1.MU",

    "OSSR.CO",

    "IMAIL-B.CO",

    "ZFPPF.PK",

    "SUEZY",

    "SCEXF",

    "OA2.F",

    "RSOL",

    "JUBLFOOD6.BO",

    "Q2O.F",

    "ZOE.BE",

    "JEMI.L",

    "ETAH",

    "MSTJF",

    "HGRVF",

    "AMZO34F.SA",

    "DAWIF.PK",

    "O5O.BE",

    "E1:BN2.SI",

    "ICCM.TA",

    "ZCHANAIN.BO",

    "NWFAF",

    "KBC.HM",

    "QPOND.OB",

    "BPO.TO",

    "WTCRF",

    "WELLE.OB",

    "JTBK",

    "DDAIF",

    "NVTP",

    "ZVVG.F",

    "EIV",

    "GRLT",

    "DEWA.JK",

    "KIMTF",

    "DTOR",

    "SMET.SW",

    "T0502Y.TWO",

    "KNAMF",

    "BPLD.BA",

    "7BF.BE",

    "BACHF",

    "135374.L",

    "NDCVF",

    "ZCPRF",

    "SWVI.OB",

    "KWGPF",

    "DNAR.JK",

    "HYB",

    "NHS",

    "ODJAF",

    "2844-OL.HK",

    "8380-OL.HK",

    "AFXR.SI",

    "NJV",

    "KR8.F",

    "1738-OL.HK",

    "094970.KQ",

    "JGFCF.PK",

    "SEKZF",

    "ISYRF",

    "WNCH",

    "SDET.ST",

    "GBBFF",

    "KCG1.F",

    "NAWI.TA",

    "Y2I.SG",

    "VNRAP",

    "VIVKD",

    "YIF16-C.NYB",

    "NQM",

    "KBCAF",

    "HGKGF",

    "0240-OL.HK",

    "PCR.V",

    "8072.HK",

    "OCEEE",

    "CRHL.L",

    "ZGM15-C.NYB",

    "MFT",

    "NMT",

    "TROVU",

    "LTXC",

    "GDSI",

    "GEN.CO",

    "TATKF",

    "PFGZP",

    "LGCLF.PK",

    "MSC",

    "PETEF.PK",

    "SFZN.SW",

    "DTRC",

    "HGTX3F.SA",

    "1619.HK",

    "KTF.DE",

    "XP31.SG",

    "KMF",

    "EKKGF",

    "NTMG.PK",

    "ATNVF",

    "NELO.ST",

    "FCS-PB.TO",

    "PUBGY",

    "ZNHL.PK",

    "UETMF",

    "SCIOE",

    "SMFTF",

    "JIAXF",

    "CEF-A.TO",

    "YU4.MU",

    "FVSTA",

    "RDOIF",

    "HNLGY",

    "SWDBY",

    "DPWRF",

    "GCRIF",

    "SAXJF",

    "EAE",

    "8135.HK",

    "JLMC",

    "JEXYY",

    "RLYNF",

    "TA-PJ.TO",

    "DMYD-B.ST",

    "SHCAF.PK",

    "JPINFRASL.BO",

    "YGZ17-C.NYB",

    "2221.TWO",

    "TCLHF",

    "YRSBP.ME",

    "YGR.V",

    "HPI",

    "7066@OM.KL",

    "EAWD",

    "XSNX.PK",

    "KDCXF",

    "0856-OL.HK",

    "ARKCF",

    "RUC.SG",

    "VRTV-WI",

    "VODI.DU",

    "RAFA",

    "VULC.PK",

    "BAEI.EX",

    "INY.MC",

    "AUTO.ST",

    "BWG",

    "VLTR",

    "SIETY",

    "TYOYY",

    "VBLT",

    "ARGEF",

    "CRCX",

    "XTG.TO",

    "LCM",

    "SCGY",

    "AN.V",

    "OSA.PA",

    "TRTL",

    "CMU",

    "ZGV.SG",

    "CURN",

    "SGZA",

    "YORUF.PK",

    "BELFA",

    "VALE-P",

    "FNMAK",

    "WN-PA.TO",

    "2OB.F",

    "NXEYF",

    "QSN.F",

    "YSHLF",

    "NMEDD.OB",

    "G09.F",

    "WCHS",

    "3026-OL.HK",

    "SSUMF",

    "OSGIQ",

    "SCQ",

    "9NG.F",

    "QBCAF.PK",

    "MTA.TO",

    "580002.KS",

    "5ML.SI",

    "WPG-WI",

    "NOVO-B.CO",

    "CAPA",

    "MUS",

    "ACFL",

    "SMGBY.PK",

    "STSA",

    "GBYLF.PK",

    "NSYC.PK",

    "FOL.BE",

    "FLMZF",

    "RYI",

    "DSKYF",

    "OBAF",

    "IIF",

    "HVT-A",

    "ANTP",

    "E2:Z01.SI",

    "ISG.L",

    "TXC2.F",

    "BNY",

    "VBF",

    "NILSY.PK",

    "OECPF",

    "RDM.MC",

    "N4Q1.BE",

    "OVR.V",

    "8386-OL.HK",

    "ZIZ18-C.NYB",

    "ZOX.L",

    "SGG.V",

    "049180.KQ",

    "YPCTO.BA",

    "NLPXF",

    "MSGNF",

    "1115.HK",

    "MBLKF.PK",

    "NTIOF",

    "A02.F",

    "MED.AX",

    "LATX",

    "0095.KL",

    "SG8.F",

    "ZTSTF.PK",

    "SXLP",

    "IXX.HM",

    "1386-OL.HK",

    "WMRSF",

    "0OG.F",

    "ZAOFF.PK",

    "IVH",

    "2839-OL.HK",

    "WOIIF",

    "0020-OL.HK",

    "VLCO",

    "CPWIF",

    "K6Y.SI",

    "VIINT.CO",

    "DPZUF",

    "BLJ",

    "HJN",

    "KAP",

    "SCGLY",

    "O4E.BE",

    "VDNRF",

    "NWIFF",

    "3063-OL.HK",

    "NDBKY",

    "CTXIF",

    "CLFZF.PK",

    "HTD",

    "TMXRF",

    "SIOLF",

    "TWW-SDB-B.ST",

    "RZS.MU",

    "MAB1.L",

    "OSK.TO",

    "MEDC.JK",

    "1JM1.F",

    "VIOSF",

    "GMDTF",

    "AOREF",

    "ZODFY.PK",

    "MXN.SG",

    "2184919.BE",

    "FLNGO.ST",

    "TQW.SG",

    "J4Q.F",

    "HCHC",

    "ZGJ16-C.NYB",

    "3218.TWO",

    "RYGZF",

    "1Q8.BE",

    "ACP",

    "CDC.L",

    "MSFN",

    "FSGB",

    "ZVLO",

    "KDDIF.PK",

    "JZZ-P.V",

    "NSKTF",

    "GFKSY",

    "ZEGG",

    "JMPC",

    "000590.KS",

    "SIOPF",

    "033780.KS",

    "TEZNY",

    "PROTE",

    "GMGLF",

    "MFD",

    "E1:QC7.SI",

    "LXP1.BE",

    "UNVR.JK",

    "WWRAF",

    "2409.TW",

    "HHSE",

    "PFF.F",

    "ZIH15-C.NYB",

    "IDEXY",

    "EOT",

    "KTC.AS",

    "W5XA.BE",

    "AGPPF",

    "XTN-L4-97-6.AX",

    "TANL.ME",

    "HBSI.PK",

    "SGAMF.PK",

    "DNYGP",

    "FCRDF",

    "E1:MC7.SI",

    "ITGC",

    "IGPFF",

    "BJCLF",

    "WFC-PR",

    "NXCP",

    "XBC.TO",

    "ABEV3F.SA",

    "004370.KS",

    "JAGMF.PK",

    "TKURF.PK",

    "MEDI.OL",

    "S53.SG",

    "FEN",

    "8CZ.BE",

    "RNIN",

    "TGV.V",

    "RDEMF",

    "DSNG.JK",

    "THIN.OL",

    "VENGF.PK",

    "NSPR.OB",

    "AMBOY",

    "GST-PB",

    "YUEIY.PK",

    "HELOF",

    "ZEON.PK",

    "ZCRMF.PK",

    "0ZD.F",

    "WIKA@NG.JK",

    "WBRBY.PK",

    "BDMN.JK",

    "2YB.F",

    "NRTLQN.MX",

    "TSGTY",

    "VAI.BE",

    "WEICF",

    "FRDID",

    "EXLLF.PK",

    "038530.KQ",

    "WHRL3.SA",

    "NXQ",

    "SMDM.JK",

    "4502.TWO",

    "LOUIF.PK",

    "KUBTF.PK",

    "KGFHF",

    "TBIRD.AS",

    "SHPHF",

    "GWTR",

    "ZNTR",

    "CUPUF",

    "0246.HK",

    "KLEM.AT",

    "SEMFF",

    "3663.HK",

    "HTSUF",

    "2953.HK",

    "NXGA",

    "32K.F",

    "ECSL",

    "TCS.IL",

    "SJGFF.PK",

    "065180.KQ",

    "CLHI",

    "QRL-P.V",

    "PUODY",

    "ZCP.BE",

    "5306.TWO",

    "SIAF",

    "CSHEF",

    "KTCG.VI",

    "QATAF",

    "8098.HK",

    "BEP-UN.TO",

    "NTGSF.PK",

    "ZIGGY",

    "RSRZY",

    "UTLC.L",

    "HPXRF",

    "GEH",

    "LEO",

    "MARUF",

    "PEDXD",

    "JTPE@TN.JK",

    "JGCP.F",

    "REM.L",

    "SNOIF",

    "WACMF.PK",

    "JERT",

    "OLA.V",

    "GSPN",

    "ADES@TN.JK",

    "ERIC-B.ST",

    "PPFS.PK",

    "MDIA3F.SA",

    "NMI",

    "JEQ",

    "IRIGU",

    "UMEWF",

    "000210.KS",

    "CYVA",

    "EXXAF.PK",

    "K3TD.SI",

    "PVFC",

    "XCO-RI",

    "OTY11.BA",

    "HIO",

    "GOV410.NZ",

    "PML.AX",

    "MOGHF",

    "6201.TW",

    "QSR-WI",

    "DRCSF.PK",

    "NC0.SG",

    "MXTS",

    "JTM.NZ",

    "VNORP",

    "0083.KL",

    "E2:AFC.SI",

    "GQMLF.PK",

    "AKPI.JK",

    "DSVTF",

    "TTDZ",

    "3548.TWO",

    "IRP.SG",

    "8CZ.SG",

    "DRIOD",

    "XCTGF.PK",

    "STMNF.PK",

    "PSALL.PK",

    "TCKRF",

    "TEL.OL",

    "SNSY3F.SA",

    "RUF-UN.V",

    "VHUB",

    "URAGF",

    "SADMF",

    "NTUBF",

    "SXI.AX",

    "AVCVF",

    "FLMJF",

    "RY-PZ.TO",

    "POL.OL",

    "MZTH",

    "ZLIXF",

    "BWW.BE",

    "GOODP",

    "1315.HK",

    "COIVF.PK",

    "NEWCAP.CO",

    "3ZX.BE",

    "BYDDY",

    "REP-H.V",

    "CUGCY",

    "PLXT",

    "JAM1.F",

    "RIF",

    "G4Z.MU",

    "OYP15.BA",

    "OZZ.BE",

    "BRRE",

    "JASN.BE",

    "054040.KQ",

    "BGR",

    "MODVF",

    "ZRVT",

    "PKPZF",

    "EYNOP",

    "XGR1.SG",

    "KRSL",

    "SMNUF",

    "WCFB.PK",

    "QACM.DU",

    "YOU.DU",

    "DLLLF",

    "TCTZF.PK",

    "NBRXF",

    "YBIN.PK",

    "HINKF",

    "YKH17-1.CBT",

    "MTNOF",

    "MMTC.PK",

    "ORA.PA",

    "SFRRF",

    "OPHLF",

    "NSHRF",

    "DANE.TA",

    "KRNNF",

    "PEYA.SG",

    "VDRM",

    "NMB-PC",

    "ZAL.HM",

    "ZCCMF.PK",

    "FDUS",

    "AFX.HM",

    "TRLG",

    "FRBE",

    "ORADS.PA",

    "XJOQMK-A.A",

    "KCDMF",

    "CWPWF",

    "TCNO3F.SA",

    "JSDA.PK",

    "MZA",

    "WDPIF.PK",

    "BO8.F",

    "E1:5F7.SI",

    "MAERSK-B.CO",

    "WTARD.PK",

    "EUCMF",

    "0WP.F",

    "BMJJF",

    "6482.TWO",

    "TRUU",

    "GDYR.JK",

    "TRGO",

    "8030.HK",

    "RGBOQ",

    "NUM",

    "ITX.OL",

    "CGJCF",

    "DVRRF",

    "XNGR",

    "PH2.BE",

    "ETVVF",

    "SUA.MC",

    "VTEPF",

    "BEZ3.HM",

    "UCLQF",

    "OHIPP.PK",

    "GJTL.JK",

    "YRKB.PK",

    "XCHO",

    "2003@BN.KL",

    "HTHIF",

    "PNLTQ",

    "PTABF",

    "ZGQ14-C.NYB",

    "MAUXF",

    "ATKJ",

    "MIY",

    "5KT.SI",

    "ZODFF",

    "CLUGF",

    "SYCRF.PK",

    "XTN-L4-97-5.AX",

    "CELTF",

    "ARMH",

    "MLF-UN.TO",

    "MSP",

    "2229.HK",

    "GRDLF",

    "VLEEY",

    "FBAYF",

    "LUCRF",

    "VML.V",

    "SGKN.SW",

    "ASDR",

    "QOM16-C.CMX",

    "ICGE",

    "XREGE",

    "5KK.SI",

    "EIO",

    "HOL.AT",

    "CRIUF",

    "SZCRF",

    "RDLSF",

    "LINTA",

    "KADR",

    "RFI",

    "0581-OL.HK",

    "RFH1.F",

    "WRI-PF",

    "WINDMACHIN-EQ.NS",

    "VTA.AS",

    "010620.KS",

    "1232.HK",

    "JPM-PA",

    "ALSI",

    "ITUS",

    "DCAQP",

    "YDNCF.PK",

    "M6FA.SG",

    "KDUS.OB",

    "FOSI",

    "O3B.HM",

    "DMF",

    "CLLZF",

    "HSDT",

    "NZYM-B.CO",

    "QVCB",

    "FUWAF",

    "QSURD.PK",

    "YD-T4-97-75.AX",

    "1980.HK",

    "CSYJY",

    "JCLY.PK",

    "WLT.TO",

    "CAPRW",

    "IXA.BE",

    "SFE.L",

    "VVTV",

    "Y8Z.BE",

    "GBAB",

    "VALIF",

    "DHG.SG",

    "CMCSK",

    "KRLTF",

    "NSSMY",

    "TCC",

    "CTKI",

    "STEL.L",

    "MTB.DU",

    "GLRIW.PK",

    "AOD",

    "ICTPU",

    "WX.V",

    "MYM",

    "MYLI",

    "YGG15-C.NYB",

    "JWG1.BE",

    "OPCZF",

    "YARAF",

    "KCO.SW",

    "MPE",

    "MXC.BE",

    "CVPH",

    "KEYP.PK",

    "2S1.F",

    "UNQTYMI.BO",

    "AVV.V",

    "SDOI",

    "HVPA",

    "XTD.TO",

    "SOUG",

    "VONG",

    "QUES.PK",

    "ENSL",

    "XT1.BE",

    "ABSSF.PK",

    "RNER",

    "WILLAMAGOR.BO",

    "WKM.DU",

    "WD-U.TI",

    "NYUKF",

    "ZAZUF.PK",

    "STKS.PK",

    "ASOZY",

    "ZSAMPKTR.BO",

    "VEGYF",

    "TIHC",

    "QGOLDHALF.BO",

    "UTRM",

    "NWCN",

    "JLP.L",

    "KMRAF",

    "083580.KS",

    "TECN.SW",

    "RNE",

    "01181212.KS",

    "1727.TW",

    "8195-OL.HK",

    "TVBCY",

    "VSM.BE",

    "PPERY",

    "8435.TWO",

    "MGMXF.PK",

    "BPFHP",

    "VNAPF",

    "DMEDF",

    "VOPKY",

    "SQZ.L",

    "QR.V",

    "UBK.HM",

    "RAQUF.PK",

    "IND",

    "NI6.BE",

    "TCYMF",

    "TUPY3.SA",

    "QGRSF",

    "HIIDY",

    "ZEGGD",

    "VWLTF",

    "YGV14-C.NYB",

    "ZUMRF",

    "072950.KQ",

    "0733-OL.HK",

    "BRIZF",

    "VNSNE",

    "WRR.V",

    "MLYCF",

    "DBGF",

    "YIS.BE",

    "CROOF",

    "NSJU",

    "HLTOY",

    "1443.HK",

    "OPHI",

    "000155.KS",

    "VIKASGLOB-BE.NS",

    "ATGN",

    "F2K.BE",

    "PSM.HM",

    "WEDXF",

    "JPJQL",

    "ECF",

    "EDF",

    "WFS.MU",

    "MHR-PD",

    "BPO-PL.TO",

    "3386.HK",

    "QUSA.PK",

    "005935.KS",

    "NDBKF.PK",

    "NDSI",

    "NWTR",

    "HUBWF",

    "2449.TW",

    "FOREY",

    "D3X.MU",

    "TASEF.PK",

    "KLM.AT",

    "UNI3.MU",

    "JALC",

    "VRSEF.PK",

    "ASBN",

    "XKE",

    "CTX",

    "PCCRF",

    "8018.HK",

    "SHCAF",

    "PAPQF",

    "SPGZ.PK",

    "CSSOF",

    "J5L1.SG",

    "HENOF",

    "JSGRY.PK",

    "YLWDF",

    "PDBC",

    "OLNCF",

    "CBWP",

    "RCMFF",

    "QUMIE.OB",

    "DVSAF",

    "LBRKR",

    "DDT",

    "KCC",

    "JF6.BE",

    "ZUR-P.V",

    "AXTLF.PK",

    "187790.KQ",

    "0805.HK",

    "Z08.SG",

    "31Z.BE",

    "MTST",

    "OFN.SW",

    "PVAYL.PK",

    "TONJ.PK",

    "JAYSREETEA.BO",

    "CVL.HM",

    "GLRP",

    "BUR",

    "DYN-PA",

    "FPSAFE.CO",

    "VLXC",

    "NVA7.BE",

    "3081-OL.HK",

    "7BF.MU",

    "V33.HM",

    "BFZ",

    "1220-OL.HK",

    "ZENO.OB",

    "YVKAF",

    "NAUG",

    "ACTC",

    "YSR.SG",

    "HETA.SG",

    "TYG-PB",

    "SMCBF",

    "MTZPY",

    "078140.KQ",

    "JVTSF",

    "SRHGF.PK",

    "MNELF.PK",

    "MSUXF",

    "RMQN.SG",

    "ZOE.F",

    "BPS",

    "INB",

    "NSRGF",

    "ZBRA@NG.JK",

    "PHXCF",

    "MLNHF",

    "VISUINTL-EQ.NS",

    "QADB",

    "MEND6.SA",

    "KHOLY",

    "ABE.MC",

    "ISALF",

    "ACG",

    "SSREY",

    "OUY-U.TO",

    "GEOO34F.SA",

    "YGJ16-C.NYB",

    "NABZY.PK",

    "GREATOFFSL.BO",

    "OYIEF.PK",

    "PPTDF",

    "AXTC",

    "SPSY",

    "MCPH",

    "QSCGF.PK",

    "OKUMF",

    "WPCZF",

    "I3A1.F",

    "MOLX",

    "RIEN.SW",

    "YSYB",

    "DIAGF",

    "FZ8.BE",

    "HSEA",

    "MTLFF",

    "RY-PP.TO",

    "VTRB",

    "NFPDF",

    "BTCC",

    "PCCYF",

    "MEITF.PK",

    "SPIR.AT",

    "V72A.SG",

    "SNSY5.SA",

    "0828-OL.HK",

    "QCLSF",

    "KRIS.TA",

    "URHY",

    "SXN.V",

    "8215.HK",

    "RGRA",

    "BKY.MU",

    "0095@OM.KL",

    "DNACF",

    "IDEXF",

    "0302.HK",

    "DWOG",

    "GEER",

    "DYNR",

    "NGCRF",

    "SMACR",

    "TTYP",

    "NBG-PA",

    "ENGGY",

    "RNKLF",

    "XEL-PG",

    "KYE",

    "WHCI.PK",

    "PBR",

    "JLM.F",

    "LVLEF",

    "WEBNF",

    "D3N.F",

    "KOATOOLIN.BO",

    "2384.TW",

    "GFDV",

    "PEB-PA",

    "PGNT",

    "RV9C.BE",

    "GGLXF",

    "MAV",

    "TGILF",

    "FOEAY",

    "SPVEF",

    "TOP.CO",

    "SMU",

    "NHOLF.PK",

    "FMN",

    "XNC1O.BA",

    "EVP",

    "JPG",

    "ZMMDF",

    "VHUB.PK",

    "JNEXF.PK",

    "HVRRY",

    "ERBB",

    "HR1A.L",

    "GER",

    "ZVTKE.OB",

    "APMCF",

    "MGYOY",

    "AGRN",

    "RUNI",

    "AAFA.SG",

    "CFCB",

    "HEDYY",

    "0178.HK",

    "DFN.TO",

    "CRRFY",

    "TOYOF",

    "NXGPY",

    "WARFY.PK",

    "NADL",

    "PGWFF.PK",

    "OROCF",

    "JHI",

    "PRBDF",

    "WBCC.F",

    "ZSATYASL.BO",

    "BDV.L",

    "IRBGY",

    "JOJK.ST",

    "XSDG.SG",

    "PSON",

    "QFSP.SG",

    "TIANF",

    "KRE.CO",

    "TIDEWATER.BO",

    "NGEMF",

    "SGAZF",

    "TA-PD.TO",

    "NINOY",

    "FTS-PK.TO",

    "VIPRO.CO",

    "123700.KS",

    "E2:M35.SI",

    "ZSPEEDCO.BO",

    "ZBK",

    "XPPLF",

    "MORPOL.OL",

    "V4S.DU",

    "NW5.MU",

    "VWS.CO",

    "3307.TWO",

    "ARB.V",

    "AKZOF",

    "004800.KS",

    "NRTLQ",

    "ODHN.SW",

    "0969-OL.HK",

    "9962.TWO",

    "6285.TW",

    "DWIS",

    "JBLU.MX",

    "YCC.BE",

    "ARTA.JK",

    "ALSMY",

    "PPSF",

    "NBPVF",

    "MITI.JK",

    "TSRX",

    "WLWHY.PK",

    "R3V.F",

    "VLXC.PK",

    "ZIH16-C.NYB",

    "HDFF.EX",

    "HFL.NZ",

    "PEYUF",

    "OPUS",

    "TMPI.JK",

    "KIP.NZ",

    "AGRUF",

    "X0M.BE",

    "4306.TW",

    "TPW070.NZ",

    "8115-OL.HK",

    "FXCNY",

    "009070.KS",

    "ZOOM.PK",

    "088390.KQ",

    "8002.HK",

    "SYNG.ME",

    "SOAP",

    "1259-OL.HK",

    "6220.TWO",

    "JDORGOCHEM.BO",

    "RPID.PK",

    "3LQ.SG",

    "LTGHF",

    "QJQ.MU",

    "VTWV",

    "UDMG",

    "CYBK",

    "ASHXF",

    "KTRN.PK",

    "PSSGF",

    "WCP-N.TO",

    "ASTVF",

    "LBHGP",

    "FFCO",

    "NUVSF",

    "STE-R.ST",

    "QEPC",

    "KMPPF.PK",

    "PJL",

    "SGFEF",

    "JCYCF.PK",

    "UOVEY",

    "BLHEY",

    "1VO.BE",

    "WMCB.PK",

    "ONMDQ.PK",

    "QEXXF",

    "002355.KS",

    "FMMFF",

    "PPJE",

    "IOGIF",

    "MIW",

    "KCDMY",

    "FT",

    "NZH",

    "HPDLF",

    "WNS.AX",

    "NXP",

    "VA1.BE",

    "UUGRY",

    "QFC.BE",

    "PSBP",

    "SKHSF",

    "RUBSF",

    "DRCN.TA",

    "SGURF",

    "OMTL",

    "HNGSF",

    "USA",

    "TANN",

    "KYBWF",

    "YATRY.PK",

    "32JN.BE",

    "VODAF.PK",

    "MYMX",

    "BLE",

    "ZKHATAUE.BO",

    "CWGYF.PK",

    "013367.KS",

    "BULM.OB",

    "OPAY",

    "NPKYY",

    "SP",

    "TTD.V",

    "EQTRF",

    "DASTY",

    "E2:5EG.SI",

    "GJH",

    "BFK",

    "JIL.L",

    "STEL",

    "RDDCP",

    "QUPPF.PK",

    "WCQ.V",

    "SOXX",

    "E2:G54.SI",

    "DLZ.SG",

    "CSWGE.OB",

    "JP0.F",

    "MCBG",

    "KEEKF",

    "MGE.F",

    "ZYT.L",

    "VCF",

    "THIXF.PK",

    "SPGYF.PK",

    "XLY.F",

    "VITALCOMM.BO",

    "LION@TN.JK",

    "BHOR",

    "FWLT",

    "NMPNF",

    "VONV",

    "JPB.L",

    "BNJ",

    "4980.TWO",

    "HNCMF",

    "ZDPYD",

    "JMLP",

    "YOSN.PK",

    "5RJ.SI",

    "SKL.AX",

    "MO2.F",

    "NTTN.MX",

    "QBII.PK",

    "ETF",

    "E1:CX5.SI",

    "JFB.HM",

    "WCIC",

    "DYCZF",

    "WHLX",

    "TUWOY",

    "WRT.AX",

    "ROSN.ME",

    "RYKKF",

    "BLVDF",

    "WOPEY",

    "SEDN",

    "VLEEF.PK",

    "OGLDF",

    "REXMY",

    "NZTCY",

    "WY-PA",

    "WHLKF",

    "RGSJF.PK",

    "IMPUF",

    "CCZ",

    "E7RA.F",

    "59JA.F",

    "GDV-PD",

    "NWKHF.PK",

    "AOR.NZ",

    "VAHN.SW",

    "TETHF",

    "ULUR",

    "ENEHF",

    "MLN.V",

    "AWSL.PK",

    "BQY",

    "G8H1.BE",

    "XTN-L4-95-3.AX",

    "JGBB",

    "SITICABLE.NS",

    "JGV",

    "PEXXF",

    "KWHAY",

    "DMMIF.PK",

    "8206@OM.KL",

    "EBIOF",

    "XTLS",

    "PIN.L",

    "TATN.ME",

    "KENZ.L",

    "KHNCF",

    "VTJ1.F",

    "BZT",

    "VTEPF.PK",

    "XMY.BE",

    "NRH.TA",

    "ASNB.PK",

    "BEEN",

    "T7H1.F",

    "0081.KL",

    "XDRC.PK",

    "WWEB.PK",

    "NNND.F",

    "VOP.F",

    "OCQLF",

    "EORBF",

    "ZDLA",

    "AHT.BE",

    "AIB",

    "ZUMRF.PK",

    "7014@BN.KL",

    "EKTAF",

    "3101-OL.HK",

    "MWG",

    "JZCLF",

    "EXIXF.PK",

    "FCHAF",

    "U2V.SI",

    "NCGDF",

    "GPHOF",

    "TKHVY",

    "XYNH",

    "ENMD",

    "YCU.F",

    "WIZD.OB",

    "OCANF.PK",

    "OCPFF",

    "BGKKF",

    "2841-OL.HK",

    "XEL-PC",

    "PHGN.F",

    "UW4.SG",

    "HTCIF",

    "SWZ",

    "DXKW",

    "NGLE",

    "058470.KQ",

    "PIM",

    "ALLE",

    "V7B.SG",

    "GNKWF",

    "7184@OM.KL",

    "OSMIF",

    "ZHINDBRE.BO",

    "BOO.L",

    "YA-U.TI",

    "QPTFF.PK",

    "RRR-UN.V",

    "OTOEL.AT",

    "5049@BN.KL",

    "QJQ.BE",

    "OFCB.ME",

    "BKKPF",

    "2846-OL.HK",

    "W3O.BE",

    "AWTRF.PK",

    "BSDE.JK",

    "NRO",

    "BSEFF",

    "MWIP",

    "LIQRQ.PK",

    "ZAV.SG",

    "KTWIF",

    "ZHULF.PK",

    "XANAF",

    "WBI.V",

    "IGAP",

    "B3SB.HM",

    "2498.TW",

    "XCLK",

    "CIDVF",

    "DO51.MU",

    "TSEM.TA",

    "LGSRD",

    "6289.TW",

    "ENG.MC",

    "9961.TWO",

    "TDGDF",

    "AOA.MU",

    "UGHS.PK",

    "RWEOY",

    "EXPL",

    "AVVC.OB",

    "AE1.BE",

    "QR9.SI",

    "2954-OL.HK",

    "OXLCO",

    "WAA.AX",

    "S3N.SI",

    "CQXFF",

    "WFC-PO",

    "MEOBF.PK",

    "MNL.L",

    "BNII.JK",

    "HOTRW",

    "PKCOF",

    "ZIGO",

    "CSMO11F.SA",

    "NWF.SG",

    "ORYNQ",

    "SLB.SW",

    "9717@OM.KL",

    "LVMUY",

    "0ZD.BE",

    "VVL.OL",

    "DNPUF.PK",

    "ZHINDHSG.BO",

    "C15.F",

    "YB3.F",

    "NWRLY.PK",

    "0419-OL.HK",

    "KLKBF.PK",

    "VPEMY",

    "VPGI.PK",

    "DSGX",

    "ELMTY",

    "132995.L",

    "JBII",

    "XTED11.SA",

    "HAMP",

    "PROS.OL",

    "E2:5OC.SI",

    "HZD.L",

    "XGRA9.BA",

    "5156@OM.KL",

    "0542-OL.HK",

    "YUNW",

    "JUTBK.CO",

    "RO15.BA",

    "SLCO",

    "E2:BS6.SI",

    "EADSF.PK",

    "VABB",

    "ENVE",

    "WLFMF",

    "VELXF",

    "PN.TO",

    "SL0.F",

    "NNGVF",

    "SREN.VX",

    "XQJ.F",

    "PSCC",

    "XTPEF",

    "EVFN",

    "KHAITANLTD-EQ.NS",

    "EMQ",

    "BION",

    "GWLLF",

    "MGFRF",

    "SWTXD.PK",

    "CDKG",

    "PVLY.OB",

    "WPP.V",

    "AY3.MU",

    "LNVGY",

    "SRO.V",

    "RSO-PB",

    "POEFF",

    "SO6N.SG",

    "IDE",

    "JIM.SG",

    "BCCI",

    "AZA.ST",

    "CZFS.OB",

    "TLTFF",

    "CGORF",

    "NYO.L",

    "UUUU",

    "DYNA",

    "BNTGY",

    "XEI.AS",

    "LDRI",

    "O0R.BE",

    "MIXIF.PK",

    "TPEIR.AT",

    "OASM-TR.ST",

    "BTKC.MU",

    "QUINTEGRA-BE.NS",

    "SHLDR",

    "SNYXF.PK",

    "AITVF",

    "YIN15-C.NYB",

    "JECC@TN.JK",

    "WCUI",

    "NGTEF",

    "MNIKF",

    "0177-OL.HK",

    "FAMDF",

    "GPOVF",

    "RAJA.JK",

    "TTNDY",

    "1830.HK",

    "GALP.LS",

    "U1K.SI",

    "2029.TW",

    "1312-OL.HK",

    "ENDTF",

    "VPLM",

    "PFBDY",

    "WNFN.BE",

    "IWKCF",

    "WELPP",

    "CAR.MC",

    "OSBCP",

    "6283.TW",

    "XC01.MU",

    "QEPC.PK",

    "JNY",

    "RYSB.DU",

    "RBS-PM",

    "TIP-H.V",

    "FSTC",

    "QMRN.SG",

    "ZIN14-C.NYB",

    "VUVAF.PK",

    "PRY",

    "GBV.V",

    "K1W.SG",

    "OUTT",

    "NTBR.L",

    "WSBHF.PK",

    "VVDL",

    "ROSYY",

    "TURV.PK",

    "BCLI.OB",

    "OMUB.BE",

    "RREIF",

    "MIL.L",

    "FIF",

    "6259.TWO",

    "AMBCW",

    "APWR",

    "SDRL.OL",

    "ASMLF",

    "S2M.MU",

    "1863.HK",

    "5048@BN.KL",

    "RLBY",

    "NAC",

    "5131.KL",

    "ROL.AX",

    "053000.KS",

    "TCBIP",

    "AXESCPA.MX",

    "PGTK",

    "RYOYF",

    "YIF15-C.NYB",

    "VMART4.BO",

    "IGOI",

    "XFP",

    "49F.SG",

    "QUAN.PK",

    "FMCKI",

    "PRGE",

    "OCY.OL",

    "NXPGF",

    "RFTA",

    "SBNA",

    "BDVSF.PK",

    "KHEXF",

    "WFAFF",

    "VODI.BE",

    "HEIA.AS",

    "WAFM.L",

    "TOPCF",

    "MJDLF",

    "GS-PD",

    "DLGEF",

    "NHKFF.PK",

    "XCTGF",

    "NXZ",

    "OSUKF",

    "NXGEF",

    "YMSCF.PK",

    "UCHC",

    "TCB-PC",

    "ELUXY",

    "XTN-L4-95-8.AX",

    "SNR-WI",

    "E6P.F",

    "VELPL",

    "TAYCP",

    "QRXPY",

    "EXADE",

    "JYU19-C.CME",

    "LON",

    "AJA.HM",

    "QSI.MU",

    "LKT.BE",

    "E1:UM4.SI",

    "NYRSY.PK",

    "WON-H.V",

    "AEGY",

    "WOCKPHARM.NS",

    "PNI",

    "LINN.SW",

    "GW3.BE",

    "MIMZD",

    "DC.L",

    "CTH.TO",

    "JXHGF",

    "AKP",

    "ERVFF",

    "SV5.MU",

    "0381-OL.HK",

    "BCX",

    "JBFCF",

    "VX8A.SG",

    "000060.KS",

    "SCSYF",

    "WRDEF",

    "LGBI",

    "HPPI",

    "CPYCF",

    "KGET",

    "VCVOF",

    "KZ4.SG",

    "NEUN",

    "FCE-B",

    "JPW",

    "SORRF",

    "TEUTF",

    "OXZO1.SW",

    "JARLF",

    "VLSFINANCE.BO",

    "22Z.BE",

    "RSO-PA",

    "ERGZF.PK",

    "EMED.L",

    "KDDIF",

    "6128.HK",

    "VIJAYABANK-EQ.NS",

    "QTETU",

    "XRMWQ",

    "NOMI.ST",

    "ENTMF.PK",

    "2618-OL.HK",

    "UOLGY",

    "E7RA.BE",

    "KHRIF",

    "MOVE",

    "APLN.JK",

    "2330.TW",

    "001130.KS",

    "VT5A.F",

    "POFNF",

    "ZOO6.BE",

    "EMPZ.PK",

    "RAGO",

    "OBYCF.PK",

    "VCOR",

    "MNVND",

    "1C7.BE",

    "NHPEF",

    "ROZ-H.V",

    "JBO",

    "4C1.F",

    "NEWA-B.ST",

    "SAN.MC",

    "MEILZ",

    "1066.KL",

    "MC9K.MU",

    "HTGLF.PK",

    "ZB-PF",

    "JT9.MU",

    "PE.V",

    "MORG.OL",

    "CLRBW",

    "2451.TW",

    "064350.KS",

    "ELED",

    "SVGYF",

    "WFC-PN",

    "JTEKY.PK",

    "WAVVF.PK",

    "BBVA.MC",

    "CPG-W.TO",

    "MSGIE",

    "NEV",

    "ZTCOF.PK",

    "TGMR",

    "PCF.L",

    "HSEB",

    "CTCO",

    "JSNSF",

    "XXNCC.PK",

    "BB90.L",

    "PMMAF.PK",

    "VEOEF",

    "KHRIF.PK",

    "TF2.F",

    "DYYHY.PK",

    "CYUNF",

    "009770.KS",

    "FSM.BE",

    "JOEY",

    "8135-OL.HK",

    "BRRAF",

    "ZCP.DE",

    "ZEEL6.BO",

    "PFOCUS.NS",

    "YLDGY",

    "1589@OM.KL",

    "PTTMF",

    "TGATF.PK",

    "7251@BN.KL",

    "AWP",

    "NOVN.VX",

    "WISH.PK",

    "JAUGD",

    "ZARLF.OB",

    "PSCH",

    "UNLNF",

    "AAIGF",

    "BRAX11.SA",

    "LCAV",

    "3NVN.F",

    "SHYMF",

    "JBDU2F.SA",

    "TRIM.JK",

    "NK5.SG",

    "WPOB.DU",

    "WSTY.OB",

    "YUSG.PK",

    "NUJ",

    "WOCKPHARMA6.BO",

    "UBXN.SW",

    "FNVRF.PK",

    "KF4B.DE",

    "CSHX.PK",

    "QDA.MU",

    "NUX.TO",

    "REE.MC",

    "GMZ",

    "SYRX",

    "1304.TW",

    "133199.L",

    "SQY1.MU",

    "GWP.L",

    "EIA",

    "ONCY",

    "SFQ.HM",

    "SKYRF",

    "SHYAAXPH.BO",

    "SHRAJOI.BO",

    "JPIU.L",

    "PLTEF",

    "FNMAT.OB",

    "GIVN",

    "DSL",

    "KWN",

    "MMAC",

    "ENTWW",

    "YA1.SG",

    "MDLY",

    "TKECY",

    "DRAGF",

    "BST",

    "TBGRF",

    "OMUKF",

    "JIN.AX",

    "OHL.MC",

    "GLCNF",

    "POLY.JK",

    "IPWLN",

    "6838.HK",

    "RKMNF",

    "GUDNF.PK",

    "DALXF",

    "2ZXA.BE",

    "EMBR",

    "SCIXF",

    "GVDI",

    "1ZY.F",

    "BRAX11F.SA",

    "MGMB",

    "WRT",

    "MLONL.PA",

    "CAGC",

    "SIOR",

    "XJOXOC-A.A",

    "TCRD",

    "WRLO.ST",

    "MWI-UN.V",

    "LBTYB",

    "VINS",

    "BONC",

    "BAYN",

    "JFKOF",

    "ZENER.BO",

    "FPTOF.PK",

    "ZCG.BE",

    "OBJE.OB",

    "FTF",

    "MWC.V",

    "BRTX",

    "023770.KQ",

    "LOTE",

    "DHTMF.PK",

    "GCTAF",

    "AGP.L",

    "YPFSF.PK",

    "CG6A.BE",

    "DF.TO",

    "YAHOF",

    "CBAY",

    "AMAVF",

    "DWAHY",

    "KOOYF",

    "RITE",

    "VQA.V",

    "VIL.NZ",

    "WNGRF",

    "B3SB.BE",

    "FIRE",

    "MNGFF",

    "CFWFF",

    "PYC",

    "MJPI",

    "FBNIQ",

    "001420.KS",

    "HGL.L",

    "RNCG",

    "6505.TW",

    "SGRO.JK",

    "MZX.HM",

    "CDOM.PK",

    "INXBW",

    "VUSE",

    "GUFAF",

    "049120.KQ",

    "LMD.V",

    "SWNLF",

    "X0VN.SG",

    "YDVL.PK",

    "PSGTY",

    "SPUP",

    "AAXJ",

    "AMYGF",

    "BNNLF",

    "RSSFF",

    "NEMF.EX",

    "VREYF",

    "SRCP",

    "GSVC",

    "QMRK",

    "EDI",

    "NTOG.L",

    "XYIGY.PK",

    "BYOGF",

    "SKOR",

    "FCUUF",

    "WAND.L",

    "WTBCY",

    "XEPRF.PK",

    "BMRK",

    "QUMI.OB",

    "PSA-PQ",

    "JDWPY",

    "CAFI",

    "VLKPY",

    "JMIM",

    "EUFN",

    "QIC.V",

    "MDIKF",

    "SLF-PI.TO",

    "SPOYF",

    "INCC.PK",

    "PACQW",

    "SNYNF",

    "KGBGF",

    "BZ6.BE",

    "ELU",

    "TPRFF",

    "IVAN",

    "SNWRF",

    "WARFF",

    "ZKAMALAK.BO",

    "036830.KQ",

    "Q7Q.SI",

    "MYJ",

    "ATADF",

    "1201.TW",

    "SKRUF",

    "WELPM",

    "CEBTF",

    "AJIT.L",

    "FKWL.PK",

    "SAN-PB",

    "NVOB",

    "KDKGD.PK",

    "LOMLF",

    "YOOIF",

    "USG.AS",

    "PV1N.SG",

    "SPIZF",

    "PAC.L",

    "RF-H.V",

    "H4M.BE",

    "133046.L",

    "PEIW",

    "DBOXF",

    "OCZTQ",

    "WPRFF.PK",

    "2429.TW",

    "XMC.TO",

    "KIOR",

    "0098.KL",

    "1293-OL.HK",

    "NTX",

    "GSEBF",

    "SVVC",

    "NKOUF.PK",

    "CTQ",

    "WRTKRS-A.A",

    "DYFWF",

    "VCU.BO",

    "GLEX.TA",

    "ZHINUDYP.BO",

    "SUQU",

    "ZL3.F",

    "MO4.F",

    "SMTGF.PK",

    "RYKKY",

    "QABSY.PK",

    "TBK.F",

    "UGHS",

    "FCZAP",

    "TOKUY.PK",

    "BASFY",

    "RDO.MU",

    "AFB",

    "QNTQF",

    "ZSHGY.PK",

    "KNTZF",

    "3010.TW",

    "GWLXF.PK",

    "WEIGY",

    "WMIH",

    "RENFF",

    "THQ",

    "TLKGY",

    "TYU2.F",

    "XZJCF.PK",

    "MSLOY",

    "TWN",

    "PBI-PB",

    "T8F.F",

    "3051-OL.HK",

    "TYI.F",

    "UE7R.SI",

    "CHFFF",

    "WET.F",

    "HISJF",

    "KNBWY",

    "QJQ.SG",

    "FPTOF",

    "MNPP",

    "JETMF",

    "WARM",

    "CCOEY",

    "VVDG.EX",

    "DGNV.PA",

    "CGYV",

    "115390.KS",

    "BEINF",

    "GEPC",

    "1102.HK",

    "X0VN.F",

    "FRCOY",

    "WFC-PT",

    "FBS-PC.TO",

    "XBLA.F",

    "BPM.L",

    "RANF.PK",

    "NV.V",

    "MTRJF",

    "TDA",

    "TISCF",

    "010140.KS",

    "IMLLF",

    "ZLON",

    "UBMPY",

    "SEE.HM",

    "VCANF",

    "IDCBY",

    "PTARF",

    "ETW",

    "RSC5O.BA",

    "MOPLF",

    "ZFIN.HM",

    "YITYY.PK",

    "OLCLF.PK",

    "DQJCF",

    "SCVE",

    "9423.KL",

    "YGJ15-C.NYB",

    "UNICY",

    "1MH.F",

    "NOFO.ST",

    "POLJF",

    "LATF",

    "8DM.SG",

    "POFCY",

    "TURI.JK",

    "BARL",

    "EMDR",

    "ETX",

    "PTLKF.PK",

    "KOI.BE",

    "MDBX",

    "SIICF.PK",

    "KLMR",

    "MSK",

    "YYLRA",

    "PTIX",

    "STKL",

    "QGPLF",

    "YOKEY.PK",

    "JSGRY",

    "KYN-PF",

    "SSEZF",

    "VTKT",

    "6MN.BE",

    "RYUND",

    "XNNH.PK",

    "OSR.HM",

    "VTWO",

    "BIOYF",

    "000050.KS",

    "XJA1.F",

    "2TZ.SG",

    "QRL.MU",

    "HOT-UN.TO",

    "JIGI.L",

    "ASEJF",

    "XCEL",

    "ZPTAF",

    "MNP",

    "RMLFF",

    "QACM.MU",

    "MFO",

    "JCDXF",

    "PSF",

    "D8Z1.SG",

    "HCCA",

    "SASOF.PK",

    "VMRFF.PK",

    "WBCO",

    "TTOBF",

    "NHH.MC",

    "4802.TWO",

    "EXN.F",

    "RHJIF",

    "CORR",

    "KDDIY",

    "7SS.DU",

    "GYB",

    "ZEE.SG",

    "5049.KL",

    "GHLV.OB",

    "DRDGF",

    "DBXXF",

    "31WN.BE",

    "XTP.MU",

    "LY1.SG",

    "LC",

    "UU4.MU",

    "5TF.SI",

    "ALPMF",

    "OIZ.IR",

    "ZSN18-1.CBT",

    "ASMI",

    "MDRN.JK",

    "OAU.V",

    "DWVYF",

    "NHC-PA",

    "ASTX",

    "QNIFTY.NS",

    "UNIMOVR.BO",

    "EMMT",

    "CIDHF",

    "SRCSF",

    "WSPOF",

    "500018.SS",

    "JAM.L",

    "2912-OL.HK",

    "ASHTF",

    "4AS.F",

    "CSGN.VX",

    "SAFRY",

    "7014@OM.KL",

    "4922.TWO",

    "MFC-PF.TO",

    "ASBFY",

    "QCLSY.PK",

    "UNLYF",

    "DCYHF",

    "MRTMF",

    "VCLT",

    "LVNVF",

    "HAHI",

    "BPZZF",

    "WGTB",

    "WEGZY",

    "007980.KS",

    "KRXBF",

    "MZF",

    "FGOVF",

    "CRC-WI",

    "STHC",

    "XNGSF.PK",

    "NJMC.PK",

    "HOWWF",

    "MIUFY",

    "JMBA.MX",

    "KBALB",

    "NEMTF",

    "VNDSL",

    "TZR.V",

    "KIKOF.PK",

    "RSNAY",

    "ZIL2.HM",

    "TECUB",

    "WTFCW",

    "XTR.L",

    "WAMPQ.PK",

    "ZZG.F",

    "SHNUF",

    "KUREF.PK",

    "BCSO",

    "BJBR.JK",

    "PCRFY",

    "RNWR",

    "NCLH",

    "1255.HK",

    "CMRZF",

    "ZLIOF.PK",

    "ECEC",

    "KIDB.PK",

    "WFE.AX",

    "DPNEY",

    "XMY.DE",

    "YKK17-C.CBT",

    "RAIFY",

    "CZNL",

    "SHLDW",

    "IAUFF",

    "FEMB",

    "043290.KQ",

    "WBTMU.PK",

    "VLRDY",

    "BLKPF",

    "STT-PD",

    "WOLV",

    "XC0.F",

    "RWE.TI",

    "WOSSF",

    "SYMSQ",

    "THCZ",

    "FLUG",

    "VICO@TN.JK",

    "8399.HK",

    "METN.SW",

    "SBMRY",

    "SEFN.TA",

    "MJI",

    "H4M.F",

    "EYAPS.AT",

    "WPOB.SG",

    "ZFSTEERING.BO",

    "YSM.MU",

    "RUNI.PK",

    "3158@OM.KL",

    "NHMD",

    "ZKBHF",

    "1360.HK",

    "E2:T14.SI",

    "BSET.L",

    "UETH",

    "BZM.L",

    "LVMHF",

    "ZUARIAGRO.BO",

    "001450.KS",

    "OZZ.F",

    "ESLT",

    "TAISF",

    "PNGAY",

    "MAWHF",

    "GHY",

    "EQS",

    "ESYJY",

    "SSNEF",

    "NTDOY",

    "VCP.L",

    "8096.HK",

    "GQMNF",

    "NVSGF",

    "LGNC",

    "ZGAEKWAR.BO",

    "SULI.JK",

    "TKA.VI",

    "CPPMF",

    "AMBT",

    "VSTI",

    "PFCFD",

    "Z74.SI",

    "AOI.TO",

    "BTG.L",

    "1319.TW",

    "QWIKF",

    "BDVSF",

    "MRVKF",

    "ZRESF",

    "IPKW",

    "057050.KS",

    "DUNDF",

    "BBVJ11.SA",

    "SUN.SW",

    "ZAL.EX",

    "TBDYF",

    "COJPF",

    "WKL.AS",

    "7293OR.KL",

    "HTF",

    "PWBO.PK",

    "YAR.OL",

    "SST.L",

    "MCNSF",

    "LNGRF",

    "CREQF.PK",

    "BANCL",

    "CJREF",

    "GEAGF",

    "WDGJF.PK",

    "OCGPF",

    "7084OR@OM.KL",

    "PAGG",

    "WRES.L",

    "0572-OL.HK",

    "GAPFF",

    "MEWATZI.BO",

    "QGOLDHALF.NS",

    "BGOUF.PK",

    "OIBR3.SA",

    "DITTF",

    "ALIZF",

    "TYOYF.PK",

    "CCOEF.PK",

    "SKREF",

    "SSPC",

    "018700.KQ",

    "ODL.OL",

    "ELEZF",

    "RDEIY",

    "ATVK",

    "ILVOF.PK",

    "WFMRF",

    "RLTR",

    "KC1A.F",

    "ASII.JK",

    "LAXMIMACH.BO",

    "FOX",

    "USLGF",

    "YFRMD.PK",

    "5235SS.KL",

    "DQUEO",

    "1680.HK",

    "TMXN.PK",

    "ETSVF.PK",

    "NWBOW",

    "CELTF.PK",

    "SCVE.PK",

    "SHUNF",

    "1007.HK",

    "ESS.LS",

    "EGRAF",

    "GMC.TO",

    "WASM",

    "3374.TWO",

    "5871.TW",

    "LTLS.JK",

    "LION.JK",

    "IGPZE",

    "XZJBF",

    "DNOW-WI",

    "WELCORP.BO",

    "SBS.CO",

    "BBAS3.SA",

    "1452.TW",

    "TIGY",

    "OU7M.MU",

    "ZZZ.L",

    "VLA.VI",

    "OVXA.IR",

    "STBMF",

    "VNO-PG",

    "MHW",

    "ZMTP.PK",

    "HGOCF",

    "WEWWF",

    "KY5.MU",

    "IRT",

    "GBHPF",

    "0WH.SG",

    "JRC.V",

    "NZF",

    "PDIV.PK",

    "WAFDW",

    "OPP.HM",

    "STADF",

    "BCE-PH.TO",

    "BDGSF",

    "SHN",

    "FLNTD",

    "SLRX",

    "NDEPF",

    "JAWA@TN.JK",

    "YMP3.F",

    "FIGO.PK",

    "WOSYY.PK",

    "AFQMF",

    "NYV",

    "YILD-B.ST",

    "KBRLF",

    "BWINA",

    "XMF-B.OOR",

    "VGLS",

    "TARAJEWELS.BO",

    "P3C.BE",

    "SHWGY",

    "0894-OL.HK",

    "LNGLF",

    "TELK",

    "KBGA.SG",

    "TBNAF",

    "KIMJF",

    "GMETP",

    "MFA-PB",

    "JSMR@TN.JK",

    "BMDPY",

    "QE2P.BE",

    "AKBLF",

    "NXTDW",

    "OGS",

    "3402.TWO",

    "RPC.V",

    "MRVC.PK",

    "HKXCY",

    "5125.KL",

    "CXH",

    "KLRGF",

    "XXL.AX",

    "LYSFF",

    "GLOBALVECT-EQ.NS",

    "NGM.SG",

    "LPUSF",

    "EL8.BE",

    "BADG",

    "VJGZ.ME",

    "WWDI.PK",

    "YVKBY",

    "MRAAF",

    "DAP-U.V",

    "O0M.SG",

    "NMKEF",

    "FIEG",

    "LXMO",

    "BSVN",

    "FSFF",

    "TRARF",

    "LUKOY",

    "SANJF",

    "FPLPF",

    "AXESCPG.MX",

    "SSLYF",

    "065620.KQ",

    "ACRVF",

    "Z1O.MU",

    "FHY",

    "25375574.DU",

    "SLG-PI",

    "O15.SI",

    "PFSCF",

    "HOKUQ",

    "ZEF.HM",

    "CYUFF",

    "WHR-P.V",

    "EXC.V",

    "JPSWY",

    "MDIBF",

    "ADMD",

    "GLADO",

    "SMSOF",

    "QCI.HM",

    "QTRRF.PK",

    "MAORF",

    "REG-PG",

    "5F7.SI",

    "VRNA.JK",

    "1002-OL.HK",

    "BAC-PD",

    "87001.HK",

    "XNGAF.PK",

    "ITAPF",

    "FCNCB",

    "VOPA.OB",

    "CFD",

    "SRRE",

    "WBDG.PK",

    "XYT.F",

    "CHMCF",

    "PTSN.JK",

    "ASCA",

    "OVI.F",

    "DGMLF",

    "HCKG",

    "M1L.F",

    "RMGOF.PK",

    "DPWRF.PK",

    "VISHINV.BO",

    "WMK-H.V",

    "SCHE.L",

    "TMPL.L",

    "KTF.TI",

    "EXHTF",

    "PMTC",

    "YE4.BE",

    "XSWN.F",

    "TOISF",

    "GI0A.F",

    "5027.KL",

    "ZUIKF",

    "LRTR",

    "ZEEMEDIASL.BO",

    "KTRC.OB",

    "DUKH",

    "MET-PB",

    "GRYIY",

    "3441@OM.KL",

    "GGM",

    "XXFFR",

    "DIIEF",

    "ODPV3F.SA",

    "XSH3.BE",

    "HZNOF",

    "FUND",

    "2ZXA.SG",

    "KROTY",

    "3158.KL",

    "SBSP3.SA",

    "MANG.EX",

    "GRYIF",

    "NHYDY",

    "GGAN.MX",

    "NSE.AS",

    "XPPLF.PK",

    "VVIVD.PK",

    "ILUS",

    "NZRFF",

    "VLKAY",

    "BAXS",

    "VAPOD",

    "FROT",

    "QUEZF",

    "NSCT",

    "MACIF",

    "AGND",

    "SXV.F",

    "SZSN.PK",

    "APAM.PA",

    "EXFO",

    "4157.TWO",

    "ECV.L",

    "MAIN.JK",

    "KGBGF.PK",

    "THQIQ",

    "SUGR",

    "VARXY",

    "CBO",

    "RSMDF",

    "GRPFF",

    "TBGNF",

    "1605.TW",

    "YLWDF.PK",

    "PWURF",

    "9423@OM.KL",

    "ZDEXF",

    "WSEYF.PK",

    "7187.KL",

    "NMSCA",

    "AUG.NZ",

    "ORPEF",

    "2818-OL.HK",

    "FRTD",

    "E2:ER0.SI",

    "PRH",

    "TKPPY",

    "EEYUF",

    "CLM",

    "THKUY",

    "DORLN",

    "DEPN",

    "ATE.AT",

    "FNNNF",

    "OPESY",

    "CHN",

    "ADHUYRN.BO",

    "M7C.DU",

    "ETHOF",

    "UEDVF",

    "FSFR",

    "ZBRA@TN.JK",

    "ASOMY",

    "RTG.TO",

    "DOLHF",

    "IT4.MU",

    "YITYF.PK",

    "GTVHF",

    "OPP.L",

    "DUNI.ST",

    "DP2C.L",

    "MB.TO",

    "WOSF.EX",

    "VIVHY.PK",

    "NSPDF",

    "HYT",

    "AINC-WI",

    "ESD",

    "SGTPY",

    "0259-OL.HK",

    "TLAB",

    "DSZ.HM",

    "3376.TW",

    "CPDJF.PK",

    "SLOG.SW",

    "SSFT",

    "AGR3.SG",

    "GIDYL",

    "ZOO.L",

    "RPAI-PA",

    "5388.TW",

    "NISTI.AS",

    "VRCI",

    "ORGN",

    "VGMNF",

    "ZTCOY",

    "NTSA.PK",

    "KOS.BE",

    "IMHDF",

    "MXGRF",

    "YU4.DE",

    "1395.HK",

    "7251.KL",

    "YXOXY.PK",

    "CQUTF",

    "VPGDF",

    "TPA1.MU",

    "OPST",

    "GBO.L",

    "YOU.SG",

    "EARS",

    "8092.TWO",

    "SPPJF.PK",

    "OFSI",

    "0VS.F",

    "JNOS.ME",

    "RIOB.PK",

    "U9M.SI",

    "006125.KS",

    "WSFSL",

    "WLSE.PK",

    "VWAAF.PK",

    "UPMKF",

    "4T1.BE",

    "UNIB",

    "1322-OL.HK",

    "TRF",

    "QCCPO.MX",

    "TYTMF",

    "OD3.MU",

    "DRETF",

    "NCSO",

    "HMTC",

    "MYN",

    "ORE.L",

    "JOEY.PK",

    "PGVI",

    "VVEA",

    "DHF",

    "ABFS",

    "BGS.L",

    "TPC.SG",

    "AOMOY",

    "VOT.F",

    "VI7.F",

    "0123-OL.HK",

    "3335.HK",

    "VEND-B.ST",

    "TSCDF.PK",

    "ZODFY",

    "NTOIY",

    "LZAGF.PK",

    "GEK",

    "ZETA.ST",

    "WHCA",

    "UEC.SG",

    "DULMF",

    "WABCOINDIA6.BO",

    "UIBGF",

    "PAAS",

    "MTVB",

    "VIVE.AS",

    "DTRL",

    "ATHI",

    "YY7A.SG",

    "MCI",

    "GRAUWEIL.BO",

    "KTKSENSEX.BO",

    "KF",

    "AMGY",

    "VRNM",

    "PCGO",

    "GINBF",

    "KMAG",

    "0113.KL",

    "OU7M.F",

    "OXFC",

    "OYIEF",

    "KURRF.PK",

    "CLEO.MC",

    "NTRZ.PK",

    "TWXB34F.SA",

    "ZZMS.F",

    "XT3B.BE",

    "PLZLY",

    "CTAGF",

    "FRTN",

    "TNTE.AS",

    "MEIYF",

    "JPHNF",

    "MUTHOOTFIN-NA.NS",

    "CJPRF",

    "004990.KS",

    "KMGIF.PK",

    "RGXX",

    "5904.TWO",

    "PHJMF",

    "54JN.F",

    "XTGRF",

    "NISTF.PK",

    "KT4.SI",

    "W1L.BE",

    "HQH",

    "NEUKF.PK",

    "HCINF",

    "JFR",

    "SZKBF",

    "FSH.F",

    "DCUB",

    "TYOBY",

    "1400-OL.HK",

    "WTNS-CRI11L1.SA",

    "ZIVO",

    "HBRM",

    "MBCSF",

    "ROICW",

    "03027X.TW",

    "GORV",

    "NPV",

    "ZIMCF",

    "EMMW.SG",

    "MSCA",

    "QXU.BE",

    "DIR-UN.TO",

    "TPND",

    "GWGWF.PK",

    "ZRSCF.PK",

    "FLS.CO",

    "1033-OL.HK",

    "22Z.F",

    "PIC-A.TO",

    "QPMB.F",

    "CWAV",

    "006405.KS",

    "WEGYF",

    "UPZS",

    "QSGI",

    "3778.HK",

    "ASDZF",

    "TMRNF",

    "ZSIMCOTR.BO",

    "NAGAROIL.BO",

    "DJPHF",

    "DRA",

    "RNSGF",

    "WGCCP",

    "XXCDF",

    "MXF",

    "OGXPY",

    "MAKSY",

    "CCGLF",

    "DSECF.PK",

    "MITCF",

    "GLAPY",

    "XYIGY",

    "SSLT.BO",

    "MMU",

    "BOLT",

    "EFGN.SW",

    "MLWN",

    "PUBM.OB",

    "NUO.AS",

    "VLXGF",

    "TKHVF",

    "TDCH",

    "NSCT.PK",

    "5109@OM.KL",

    "HKEPF.PK",

    "DGICA",

    "CYXNE.OB",

    "REMYY",

    "8CD.BE",

    "YNA1.SG",

    "XOM-U.TI",

    "VTEPY.PK",

    "RRSXF",

    "5VX.F",

    "XTRR",

    "GWPC",

    "120115.KS",

    "SCLW.OB",

    "NPEXF",

    "IIREF.PK",

    "WDI.EX",

    "SDNVY",

    "OMTDF",

    "NTRO.PK",

    "KMTUF",

    "VSPT3.SA",

    "AVIX",

    "JDS-U.TI",

    "PARP.BA",

    "KIO",

    "NNAB",

    "VBL.MU",

    "MRU.TO",

    "WHLRW",

    "OCEE",

    "0VS.SG",

    "XTN-L4-95-4.AX",

    "SGPOF",

    "ANCV",

    "CEV",

    "LEVYW",

    "FDCFD.PK",

    "MATAF",

    "OTIC",

    "PGIL-BE.NS",

    "QUAIF.PK",

    "ANY",

    "BNPQF",

    "KSMRF",

    "EPWDF.PK",

    "RIG2.F",

    "RGOZF",

    "DUJOHN.BO",

    "DD.TO",

    "WFEMF.PK",

    "PTGXF.PK",

    "GLWA",

    "3C8.F",

    "MLORC.PA",

    "GLQ",

    "NINE",

    "BLDW",

    "WNO.F",

    "LVISF",

    "7020.KL",

    "AOMD.IL",

    "WBRE",

    "JLMC.PK",

    "FMGGF",

    "SOMMF.PK",

    "YPCRO.BA",

    "KALO",

    "IBNA.BE",

    "KMLXF",

    "CSCGY",

    "TWODY.PK",

    "BW6.DE",

    "ADH.F",

    "TMRAF",

    "0602-OL.HK",

    "WB6B.F",

    "FOHL",

    "1303.TW",

    "CPASF",

    "QOWI.PK",

    "KARW@NG.JK",

    "WGCCP.PK",

    "QU8.F",

    "000860.KS",

    "IFCZF",

    "YKQ17-C.CBT",

    "BLLY",

    "VALX",

    "CHNGQ",

    "054670.KQ",

    "UMD.F",

    "OGXP3.SA",

    "KAY.L",

    "TNMRY",

    "NAP.V",

    "KNDXF.PK",

    "SWU",

    "INF",

    "JFWV.PK",

    "7164@OM.KL",

    "4H1.BE",

    "JSN.SG",

    "NXC",

    "PDT",

    "PNY.F",

    "RPHL",

    "WANSF.PK",

    "BNA-PB.TO",

    "CLYW",

    "SBKK.PK",

    "NHNKY",

    "VZX.V",

    "ENCHANTE.BO",

    "WILN",

    "KDKN.PK",

    "BAR.TO",

    "VAL.L",

    "WLSA",

    "TOWER.CO",

    "NEW-PC.TO",

    "ARN",

    "SWDBF",

    "TNGL.PK",

    "YMAIF",

    "DYFSF",

    "026180.KQ",

    "YAHOY.PK",

    "BACYL",

    "32JN.DU",

    "SJOS3.SA",

    "AINV",

    "SEMUF",

    "CZXMF",

    "2885.TW",

    "LVFHF",

    "SBMFF",

    "JEHLY.PK",

    "CBFN.F",

    "2014.HK",

    "NCT-PC",

    "CCNCF",

    "ACGBF",

    "CSGGF.PK",

    "AXAHY",

    "OGZD.IL",

    "X7F.F",

    "ORNH",

    "GNMT",

    "SWRL",

    "TUWLF",

    "SCRC",

    "5YG.MU",

    "TBP-UN.TO",

    "TLI",

    "AMHPF",

    "MBLTY",

    "RPMGF",

    "TL5.MC",

    "VSYM.OB",

    "NEOEF",

    "CQUTF.PK",

    "ZEX.V",

    "7240.KL",

    "BML-PH",

    "SRUI.PK",

    "KANKF.PK",

    "5131@OM.KL",

    "FSMK",

    "TEAK.VI",

    "PNEF.SG",

    "VIA",

    "0406-OL.HK",

    "MRCC",

    "JSLG3F.SA",

    "DUPONTS.BO",

    "9083.KL",

    "PYS",

    "CNW.V",

    "GITLF",

    "HUTC",

    "ROUGF",

    "BKQNY.PK",

    "NXCLF.PK",

    "GYUAF",

    "QOQ16-C.CMX",

    "BOI",

    "CYSM",

    "FPF",

    "BTAFF",

    "TKPYY",

    "KGFHY",

    "NYH",

    "SIDNF",

    "YIPI",

    "ZARFF.PK",

    "JCO.V",

    "5123.KL",

    "NGEGN.PK",

    "GVSI",

    "3038.TW",

    "HENGF",

    "5701.TWO",

    "KLS.TO",

    "KKWFF.PK",

    "SMBMF",

    "MRO.DE",

    "KISB",

    "BBRD",

    "MHVYF",

    "GRCV",

    "WSTM",

    "1506.TW",

    "MTLHY",

    "QSN.SG",

    "HJV",

    "MPRXF",

    "0546-OL.HK",

    "DJS.AX",

    "VAIAF",

    "JAPAY",

    "SKUNF",

    "SPK.NZ",

    "VRPH.ME",

    "CBRAF",

    "HSCEF",

    "KCKCE.OB",

    "RNECF.PK",

    "YQNP.BE",

    "WMCB",

    "KPELY.PK",

    "LEVY",

    "TAKRF",

    "ZA7.F",

    "BACPY",

    "HOCPF",

    "TONPF",

    "KAST",

    "BTGI",

    "W2P.BE",

    "ERIXF",

    "8110.TW",

    "TOM2.AS",

    "DXGE",

    "SEOJF",

    "MMRTF",

    "EVRTF",

    "2003.KL",

    "XBLFF.PK",

    "TBLMF",

    "HIMR",

    "BVE.V",

    "GLRIW",

    "OHPB",

    "AGD",

    "GWPC.PK",

    "AALI.JK",

    "CHBT",

    "EYMSP",

    "CCPT",

    "EMDF",

    "OPBL.OB",

    "INDY.JK",

    "7033.KL",

    "NAWL.PK",

    "JGBO",

    "OUTFF",

    "MHIFF.PK",

    "VNTH.PK",

    "GDG-UN.TO",

    "MERK.JK",

    "001800.KS",

    "W9C.SG",

    "ENERQ",

    "079960.KQ",

    "BPMLY",

    "CTHZ",

    "FAV",

    "JPFA.JK",

    "VAEV.OB",

    "4253.L",

    "YMDAF.PK",

    "MEN.L",

    "V6MS.BE",

    "AGPPY",

    "RRTL.DE",

    "5013.TWO",

    "WIN.HM",

    "NGLPF",

    "032860.KQ",

    "8C2.F",

    "SKF-B.ST",

    "6117.TW",

    "TSI",

    "E2:Q01.SI",

    "WALM11B.SA",

    "TAJ.V",

    "LFUGF",

    "UWRL",

    "XIM.V",

    "BMQZF",

    "ODEFF",

    "JCL.SG",

    "CXC1.F",

    "CRBBF.PK",

    "2607.KL",

    "SGDBF",

    "VGIT",

    "ZEDIF.PK",

    "SEOTF",

    "ARFXF",

    "SCPXY",

    "SZRRF",

    "VASO.PK",

    "GULF",

    "KIRY",

    "WSZWF.PK",

    "7078OR@OM.KL",

    "WMLLD",

    "KSLA.SG",

    "05290014.KQ",

    "ORXIF",

    "NEIK",

    "ITOCY",

    "AZA.F",

    "MDGEF",

    "11W.F",

    "ZYLOGSL.BO",

    "WFSN.OB",

    "QACM.HA",

    "ANFGY",

    "FKCIF.PK",

    "CEAI",

    "GBXPY",

    "AJISF",

    "NGKIF",

    "ELRMF",

    "ZS3.DU",

    "BIE",

    "PPCMF.PK",

    "CLACU",

    "GMBXF",

    "ITCLF",

    "LKWDF",

    "59M.DU",

    "VOR1.MU",

    "AJIL.BO",

    "VC03B.BA",

    "ZKW.F",

    "SON.LS",

    "QDA.BE",

    "ADHI.JK",

    "IEUS",

    "NMY",

    "7NX.MU",

    "E2:5SR.SI",

    "ZIONO",

    "9955.TW",

    "ZORM.PK",

    "MCV",

    "QXT.L",

    "TOBA.JK",

    "ORN.MX",

    "3UJ.F",

    "GDMRF",

    "PGILF",

    "RHDGF",

    "SKUYF.PK",

    "NAZ",

    "EURI-B.ST",

    "SY1.HM",

    "APTCF",

    "GFWQZ",

    "MMTIF.OB",

    "OFG-PD",

    "AOGC.PK",

    "ZMRK",

    "THKUF",

    "WTBFB.PK",

    "ASNXF.PK",

    "HKHHY",

    "NATU3F.SA",

    "VELT",

    "NAVR",

    "SNMRY",

    "AMFW.L",

    "NHPI",

    "1725.TW",

    "AGIT.L",

    "KBDCF",

    "ZIGGY.PK",

    "QUTIF.PK",

    "GRX-RWI",

    "WLSE",

    "TBGPF",

    "518880.SS",

    "YBOB.SG",

    "STP.AX",

    "03019X.TW",

    "MHR-PE",

    "KDIAF",

    "V7B1.F",

    "CCOHF",

    "V4S.BE",

    "SHO-PD",

    "MURGF",

    "NCB",

    "BOPO",

    "GCWOF",

    "8218.HK",

    "STBJF.PK",

    "NWHUF",

    "MDABF",

    "PTHIF",

    "EHECF",

    "XUP.SG",

    "NTRSP",

    "RRGYF",

    "NAFC",

    "DWNX",

    "NLY-PA",

    "OPVS",

    "HT-PB",

    "KTXRF",

    "PTTGF",

    "MHG.OL",

    "WE7.MU",

    "NVEEU",

    "WHCKRP-A.A",

    "1478-OL.HK",

    "EFM.L",

    "KBK.F",

    "DCYHY",

    "3091-OL.HK",

    "SIVBO",

    "NLMK.IL",

    "NVSRD",

    "AZC",

    "SNSY6F.SA",

    "2747@BN.KL",

    "PHXCF.PK",

    "FER.MC",

    "KARTZ.AT",

    "SPND.PK",

    "FNFV",

    "QPACU",

    "MMSDF",

    "BNGYF",

    "TOMI",

    "YRAIF",

    "SDRNF",

    "YXOXF",

    "ENL.TO",

    "UEPCO",

    "GGN",

    "KPELY",

    "MNCN.JK",

    "XKX18-1.CBT",

    "IAE",

    "GEFI",

    "MGRND.PK",

    "SRLY",

    "001380.KS",

    "KBTK.ME",

    "PNMLF.PK",

    "CARL-B.CO",

    "NTRHF",

    "PACQU",

    "1626.HK",

    "WDKA",

    "WKLDF.PK",

    "JDWPF",

    "3399-OL.HK",

    "MLBEF",

    "AFSLF",

    "PIAIF",

    "OVCHF",

    "QMCQF.PK",

    "MSAH",

    "DPSTF",

    "RRR.L",

    "EVM",

    "MRTI",

    "PSCI",

    "QTEYF",

    "KMKGF",

    "E2:5WR.SI",

    "081000.KS",

    "NSVLD",

    "X0V.F",

    "PCFO",

    "DNIYY",

    "TORXF",

    "SSZZF",

    "OXBR",

    "SIXD",

    "XRSC",

    "CELM.PK",

    "NSN.L",

    "YCZ.F",

    "FCCN",

    "CHMBBRW.BO",

    "0WP.DU",

    "SBRAP",

    "CBEY",

    "JTT.BE",

    "ELJ",

    "YGZ16-C.NYB",

    "REPYF",

    "TR1.SI",

    "PHL-H.V",

    "TGRNF",

    "0OE.F",

    "49F.MU",

    "VUVAF",

    "PZB",

    "SGUJ",

    "LUXGF",

    "NUOT",

    "WDRP.PK",

    "041190.KQ",

    "SCBFF",

    "OIDN",

    "OPEN",

    "078340.KQ",

    "NOBGF",

    "JBK",

    "NOBGY",

    "SNW.HM",

    "ENX",

    "DUFN.SW",

    "EFF",

    "VWDRY.PK",

    "SLSX",

    "ZYXI.PK",

    "CNBX",

    "VLPNF",

    "FIGY",

    "EGDFF",

    "GFNCP",

    "AHR.F",

    "FUPEF",

    "DTLJF",

    "LPKR.JK",

    "WETM.OB",

    "OSTIY",

    "FHNIY",

    "SPRG.EX",

    "REP1.MU",

    "TROXG.PK",

    "RRRI",

    "ZUARI.BO",

    "GALI.BA",

    "RBS-PN",

    "KWPCF",

    "E1:G10.SI",

    "1531.TW",

    "OCBM",

    "AOI.V",

    "ZANDUREALT.BO",

    "VGGLD",

    "SECCF",

    "UWII.PK",

    "QIH16-C.CMX",

    "INFO",

    "NTKSW",

    "XPTD11.SA",

    "YGRO",

    "WCHNF",

    "TLSYY",

    "XBLFF",

    "NMEX",

    "0770.HK",

    "MVM.V",

    "VNLPF",

    "KTF",

    "CTJHY",

    "LNAGF",

    "GCIH",

    "OWDN.PK",

    "URXZF",

    "JPEL.L",

    "EORXF",

    "RYOOF",

    "OREO.OB",

    "EADSF",

    "FGRPF",

    "BPHLF",

    "HKGEF",

    "073010.KQ",

    "MRWSF.PK",

    "SLR.MC",

    "CMUV",

    "WWRSY",

    "MSPD",

    "PBHG",

    "GGABF",

    "VCR-H.V",

    "CGH.L",

    "37230.L",

    "DAX",

    "ZGM17-C.NYB",

    "CFP",

    "JRFIF",

    "WESIRH-A.A",

    "BSD",

    "GARPY",

    "9VD.F",

    "GZITF.PK",

    "OVCT.L",

    "5WJ.F",

    "LRCDF.PK",

    "557.SI",

    "TPNTF.PK",

    "NIHN.SW",

    "TKTDY",

    "FILM",

    "VAKRANGEE-EQ.NS",

    "4227.L",

    "QK9.SI",

    "BCAP.JK",

    "PMM",

    "1707.TW",

    "NFPC",

    "KNYJY",

    "STJPF.PK",

    "VISAGAR.BO",

    "EFFN.ST",

    "WIIMD",

    "ICOTF",

    "ZZ7B.SG",

    "FAY-UN.TO",

    "VIS.AT",

    "QBIEY",

    "A6K.F",

    "ODDJ",

    "MCW.V",

    "YBOB.F",

    "WHLRP",

    "AOBI",

    "NEOMD",

    "NWSZF",

    "VIOSD.OB",

    "3339-OL.HK",

    "CHXF",

    "COF-PC",

    "UZB",

    "0811-OL.HK",

    "2379-OL.HK",

    "FEI",

    "SHCMF",

    "PETV",

    "YTLCF.PK",

    "CUYTF",

    "KNOW.ST",

    "EBCOF.PK",

    "WOWCD.AX",

    "BOR.OL",

    "JTAPARIA.BO",

    "QUOR.OB",

    "RTNTF",

    "KMTUY",

    "SNMCY",

    "E2:5TS.SI",

    "SMG.V",

    "BCAUF",

    "N5W1.BE",

    "2951-OL.HK",

    "JIM.L",

    "MAX.L",

    "QFOR.PK",

    "XMF-A.TO",

    "MBGCF.PK",

    "CZMWY.PK",

    "PAFRF",

    "GNPR.PK",

    "WRB-PB",

    "POHGF.PK",

    "QUEZF.PK",

    "CSF",

    "AWJ.SG",

    "VIVMF",

    "WDFN",

    "1ZY.MU",

    "COLUF",

    "SFRFF",

    "3028.TW",

    "EYNON",

    "OTS.VI",

    "KEOSF",

    "1305.HK",

    "EFT",

    "RUSP.ME",

    "LSG.OL",

    "MGSGF",

    "YPAS.JK",

    "LPDX",

    "HART.CO",

    "VOKS.JK",

    "XDRC",

    "VZAGF",

    "LUCY",

    "MXMSF",

    "SKCBY",

    "SXV.SG",

    "FURX",

    "GSFVF",

    "WSEG",

    "MNIRF",

    "83PN.F",

    "WNDT.OB",

    "WMHI",

    "FASC",

    "BOC.AT",

    "ED-UN.V",

    "GDQMF",

    "PPCH",

    "JSWSTEEL4.BO",

    "ZHULF",

    "CNBI",

    "SMPR",

    "TSSZF",

    "3868.HK",

    "DEUZF",

    "SSG.V",

    "NKWFF.PK",

    "YPFN.MX",

    "5159@OM.KL",

    "ATONY",

    "OCBG",

    "YEL1.F",

    "0182-OL.HK",

    "FJVPF",

    "PPCMF",

    "SNSY5F.SA",

    "VSTI.PK",

    "E1:554.SI",

    "IVSXF",

    "THRD",

    "TWSI",

    "LKYSF",

    "ZHEXF.PK",

    "5I6.SI",

    "SUNS",

    "2LW.F",

    "MTRT",

    "KELTF",

    "UBEOF",

    "QDLC.PK",

    "KLN.L",

    "TPVTY",

    "SMKY.PK",

    "GGT",

    "MQLYF",

    "TUT-UN.TO",

    "138610.KQ",

    "ZEH1.SG",

    "MLYBY",

    "HGBA.SG",

    "WLDVF",

    "5880.TW",

    "PTMEF",

    "AEF.TO",

    "PAR-UN.TO",

    "EGMCF",

    "STB.OL",

    "HOME",

    "SGHIF",

    "MPMX.JK",

    "03030X.TW",

    "1997.HK",

    "4984.TW",

    "JYOTPOL.BO",

    "KREN.JK",

    "0QM.SG",

    "TFOXL",

    "3PON.SG",

    "2178-OL.HK",

    "JINDALSTEQF.BO",

    "CARE",

    "BWOWU",

    "QE2P.MU",

    "RY4B.IR",

    "CHY",

    "EWCLY",

    "Z3E.F",

    "FWE.F",

    "KBCSF.PK",

    "PSH.AX",

    "XJOQMO-A.A",

    "JTEKF",

    "BGY",

    "NAG1.SG",

    "TINLF",

    "BURBY",

    "2976@OM.KL",

    "JDGPF.PK",

    "HARR",

    "XXCDB",

    "AFC",

    "IVPAF",

    "AXVSF",

    "THMMQ",

    "SDRXP",

    "GSJ",

    "XAC.SG",

    "FLRY3.SA",

    "CAZFF.PK",

    "OKCTF",

    "ZDO.BE",

    "XXBNA",

    "PNC-PQ",

    "E1:T14.SI",

    "VEF.TO",

    "HBANP",

    "SMRA.JK",

    "KPCPF.PK",

    "NOCEF",

    "BBNI.JK",

    "YGD.MU",

    "LUKN.SW",

    "XOM.F",

    "WCI-P.V",

    "E1:Y03.SI",

    "LRESF",

    "SMR.SG",

    "SARS.L",

    "MAWHF.PK",

    "4533.TWO",

    "MODLF.PK",

    "VLE.L",

    "VGLT",

    "UHO.BE",

    "SCF.DE",

    "SYMD.OB",

    "MRO-IT.NS",

    "E1:BN4.SI",

    "KHT.V",

    "F9R.MU",

    "OMTK",

    "1293.HK",

    "ONMDQ",

    "GNYPF",

    "SELF",

    "VOQP",

    "OR7.F",

    "5490.TWO",

    "GDFZY",

    "WTBCF",

    "MNTHF",

    "0133OR@OM.KL",

    "5903.TWO",

    "CYPYF",

    "OSTLY",

    "HYMLF",

    "CINT.JK",

    "TRX.L",

    "VCIT",

    "WMV.BE",

    "5294.TWO",

    "BSHF.PK",

    "WAVE",

    "SOACF",

    "NQP",

    "URAYY",

    "RBS",

    "BZIC",

    "SGQRF.PK",

    "BW.V",

    "CV-H.V",

    "8OGB.SG",

    "KRYPY",

    "GPVSY",

    "PCD-UN.TO",

    "KMTUF.PK",

    "ACTCD",

    "BNRDF",

    "HK4.SG",

    "PHXHF",

    "KEN.V",

    "DBVT",

    "BSL",

    "CIHN",

    "KANELIND.BO",

    "BYM",

    "AFYR.SI",

    "ODPV3.SA",

    "KKPNY",

    "FAM",

    "VOWG.EX",

    "MFC-PA.TO",

    "CRMB",

    "VAISHNAVI.BO",

    "Q9N1.SG",

    "NTGSF",

    "IDL-H.V",

    "QFSP.DU",

    "5OI.SI",

    "YOSN",

    "5541.TWO",

    "JFIL.PK",

    "E1:C07.SI",

    "VIDI",

    "OTED",

    "QC3C.F",

    "PHOS",

    "ZWM.SW",

    "WFCL",

    "TORM.CO",

    "VADIDAI.BO",

    "NPSHY",

    "SMLNF",

    "WUYIF",

    "QWTR.PK",

    "ZMRK.PK",

    "AIIFF",

    "JDVB",

    "QTNT",

    "ORKLY",

    "BOVKF",

    "POYYF",

    "HAIPF",

    "RDC5.SG",

    "UULFF",

    "RLGHF",

    "2OC.BE",

    "WFS.TO",

    "FMPI.L",

    "BWO.OL",

    "000830.KS",

    "OPGX.PK",

    "TDI.F",

    "MT.V",

    "10756.L",

    "FOVSY",

    "ZYDUSWELL6.BO",

    "GPE-PA",

    "FMY",

    "QCC4O.BA",

    "EIP",

    "SMACU",

    "QDLC",

    "XBTCE",

    "AXNO",

    "PSCU",

    "KSM",

    "PRBAY",

    "BOLYY",

    "ICB",

    "CJEWY",

    "AORE",

    "WCP.TO",

    "ITXN",

    "STDAF",

    "JBSS3F.SA",

    "WLRMF.PK",

    "NOR.OL",

    "JVC.BE",

    "HIRT",

    "XLENERGY-BE.NS",

    "JA1.MU",

    "FTLF",

    "MFC-PH.TO",

    "GRYEF.PK",

    "BGFD.L",

    "KOGMF",

    "WLV.SG",

    "PXFG",

    "BSKP.SW",

    "STFYF",

    "LEGPF",

    "TRUL",

    "JTLDF",

    "DWAHF",

    "4677@BN.KL",

    "MSIXF",

    "PFN",

    "SZ8.MU",

    "ZAL.OL",

    "GJV",

    "KH6.DE",

    "RHCO",

    "IVGHF",

    "BLERF",

    "OBTAF",

    "EDXC",

    "BTA",

    "LQRCF",

    "1148-OL.HK",

    "1468.TW",

    "ACX.MC",

    "HELKF",

    "WINSOMEDJ.NS",

    "NSUPF",

    "XCKA.F",

    "FWDG",

    "DCHIY",

    "GNSZ",

    "CICZ.L",

    "0096.HK",

    "AMMJ",

    "GOODO",

    "BIB",

    "JZJ",

    "WHIRLPOOL6.BO",

    "RYHTY",

    "WKB.SW",

    "ZNAE.PK",

    "87IP.L",

    "047810.KS",

    "RXK.SG",

    "ZHUZF",

    "CICSD.PK",

    "HYZD",

    "AZEV3F.SA",

    "QC-U.TI",

    "TXRX4F.SA",

    "WN3.BE",

    "IPKSF",

    "ZW5.BE",

    "EL.V",

    "TRCMY.PK",

    "WSSRF",

    "BMO-PL.TO",

    "NWRDF.PK",

    "UTTAMVALUE.BO",

    "TJC.MU",

    "BMTO4.SA",

    "SPE",

    "NNP",

    "LXSN.MU",

    "FEDC",

    "RUH.BE",

    "JRI",

    "ICH",

    "DOWELWE.BO",

    "US3.F",

    "9849.KL",

    "RJD",

    "0KT.F",

    "LZAGF",

    "SMCKF.PK",

    "GWGWF",

    "MCYWF",

    "ASHXD.PK",

    "CSKI",

    "PNR-H.V",

    "HTEC.PK",

    "TEW.F",

    "XREG.OB",

    "WEBELSE.BO",

    "KBRS",

    "AFQMF.PK",

    "LGGNY",

    "NDEV",

    "AUG.L",

    "REZIF.PK",

    "VBBK",

    "DLDG",

    "PTVYF",

    "YKU17-1.CBT",

    "YP2.SG",

    "0048.HK",

    "TRCH",

    "FTLMF.OB",

    "SRX.L",

    "QUAIF",

    "ASOE",

    "MASN.SW",

    "HYF",

    "C8J.BE",

    "NPSGF.PK",

    "GULTU",

    "AGN.AS",

    "OZTCF",

    "OJSCY",

    "RDSA.AS",

    "VYCO",

    "1613.HK",

    "ZMANSOON.BO",

    "DXPS",

    "NEXOF",

    "WBNKW",

    "BACPF",

    "ZEL010.NZ",

    "AMADF",

    "NEWR",

    "AAF1.SG",

    "TCTZF",

    "ZSVARAJT.BO",

    "YRI.SW",

    "FORSU",

    "WFI-U.TO",

    "MORL",

    "WSB.F",

    "NBFJF.PK",

    "ACDU",

    "MCA",

    "3531.TWO",

    "FRC-PA",

    "WHJHQ",

    "VRST",

    "VH.V",

    "ACSYF",

    "ZGV15-C.NYB",

    "TPSL.CO",

    "5009.KL",

    "ESTR5.BA",

    "NNEMF.PK",

    "WA5.F",

    "SPRND",

    "LLPL.L",

    "SRA.V",

    "BME",

    "JPYYL",

    "CUUHF",

    "FARE.OB",

    "VSMD",

    "WSKT.JK",

    "VTZ.BE",

    "XRXH",

    "EQPI.PK",

    "XLEFF.PK",

    "UW4.BE",

    "PFLT",

    "WXMN",

    "NYTEE",

    "CVB",

    "TEM.L",

    "AMBR.L",

    "EEXXF",

    "ZARFF",

    "W2R.MU",

    "E2:ADN.SI",

    "JSPRF.PK",

    "DITTF.PK",

    "KGTFF.PK",

    "DKYOF",

    "TMMI",

    "OPK.MX",

    "JTD",

    "1365.HK",

    "1661-OL.HK",

    "042370.KQ",

    "TTP",

    "AU6.F",

    "VFL",

    "GFS.TO",

    "ADTR",

    "YCN.F",

    "V0M.MU",

    "SGAS4.SA",

    "CAAH",

    "NWFFF",

    "YAMCF.PK",

    "YIDI.PK",

    "NIR.AT",

    "03002X.TW",

    "ZPPB",

    "HGH",

    "ECOP",

    "MJDS",

    "ORG.BE",

    "TRNO-PA",

    "XO2N.F",

    "GBLX",

    "DLCR",

    "JOBNDX.CO",

    "JSSU.L",

    "OSBK",

    "XZJBF.PK",

    "LEN-B",

    "FOF",

    "CAEEF.PK",

    "SZKMF",

    "TDI",

    "XRXB34F.SA",

    "XNGAF",

    "RYSB.F",

    "KDSKF",

    "FJTSF.PK",

    "EQUR.PK",

    "BFY",

    "EBTTF",

    "SINGY",

    "VALLABH.BO",

    "IXOG",

    "CBAF",

    "SFICP",

    "KLRF.BO",

    "YCA2O.BA",

    "KAJMY",

    "0E7.F",

    "SWYDF",

    "BRNE",

    "PAI",

    "OVUNF",

    "NG6A.F",

    "SOCLF",

    "UEEC.PK",

    "MPHD",

    "VMS.BO",

    "STSI",

    "UVIC",

    "FRVZ",

    "CB4.F",

    "ZLUE",

    "KVAER.OL",

    "7293@OM.KL",

    "AAA.TO",

    "2033.HK",

    "HJ6A.SG",

    "RUE",

    "1148.HK",

    "WF4.BE",

    "WOCKHARDTSL.BO",

    "2098-OL.HK",

    "YOKEF",

    "PDNLA",

    "ZYLOG6.BO",

    "RBWNY.PK",

    "KESAF",

    "TIN.HM",

    "ZDEXD.PK",

    "YATRY",

    "0815-OL.HK",

    "RFIVF",

    "MSADY",

    "SMT.L",

    "CEFL",

    "0362-OL.HK",

    "GAMZ",

    "RINIF.PK",

    "BVNRY",

    "VVIVF",

    "HPCCP",

    "FPCO",

    "BAEK.JK",

    "DTCY3.SA",

    "033310.KQ",

    "CWVWF",

    "PPLKY",

    "JAGGF",

    "MNKDW",

    "SHLDV",

    "003490.KS",

    "MONK",

    "MMV",

    "GROV",

    "TAWNF",

    "DSL-UN.TO",

    "WLWHY",

    "RBS-PP",

    "NEE-PJ",

    "FO9A.SG",

    "HYL",

    "YIJ.BE",

    "ZAY.F",

    "Q2O.BE",

    "IRLBF",

    "AERL",

    "ECIFY",

    "XBIO.OB",

    "YAMCF",

    "DLLR",

    "UL.PA",

    "7152@BN.KL",

    "VSTAD",

    "DV1A.MU",

    "TOCOF",

    "STRXF",

    "SREZF",

    "CNIG",

    "RH7.BE",

    "1237-OL.HK",

    "PNOW",

    "BAC.SW",

    "NG6A.BE",

    "DTX.TO",

    "0WPA.MU",

    "RVRCF",

    "NRS.OL",

    "TTW.F",

    "D73.F",

    "QSC.HM",

    "BOUBF",

    "LNVGF.PK",

    "AMOV",

    "RUALF.PK",

    "VSTR.PK",

    "ELRE",

    "LVNTB",

    "PWF-PS.TO",

    "FCRM.L",

    "SVMRF",

    "BNS-PN.TO",

    "SUBCY",

    "SIR",

    "WTF.AX",

    "CARSP.PK",

    "PRMLY",

    "KV6.SI",

    "GLVMF",

    "9601.KL",

    "KWEB",

    "NPF-UN.TO",

    "SMCE",

    "FEV.L",

    "YRKB",

    "0049@BN.KL",

    "KGHPF.PK",

    "DCA",

    "QMX.TO",

    "TNTHF",

    "SHTRF",

    "HYHZF",

    "XFCH.PK",

    "DCRDD.PK",

    "NXJ",

    "LQSIF",

    "DAKP",

    "QIFTF.PK",

    "MEND5.SA",

    "KAKKF.PK",

    "1CY.F",

    "VISESHINFO-BE.NS",

    "GSR.V",

    "LALT",

    "NSVZ.ME",

    "MV-H.V",

    "W6I.F",

    "BMVA.BE",

    "QKFXF",

    "CHOD",

    "JBR",

    "WNDEF.OB",

    "OMAXESL.BO",

    "CJ9.MU",

    "QBEIY.PK",

    "SAMG",

    "EVENF.PK",

    "DEWM",

    "ILVOF",

    "STI-PE",

    "COGLF",

    "TRE.MC",

    "MMIRF",

    "LOR",

    "QX9B.F",

    "PBFI",

    "ZTMUF.PK",

    "RY1B.BE",

    "055550.KS",

    "PHIL",

    "N9VA.SG",

    "CTQPP",

    "7245.KL",

    "HUML",

    "JMF",

    "ZIJMF",

    "HOKCY",

    "EDPFY.PK",

    "SURANAVEL.BO",

    "YGG16-C.NYB",

    "SNAAF",

    "BBEPP",

    "BPK",

    "PLSB",

    "UNJCF",

    "XQC.BE",

    "0095@BN.KL",

    "YAMCY.PK",

    "MMRGF",

    "TPCL.IL",

    "VTSI",

    "OODHA.PK",

    "ILM1.DU",

    "ZFSVF.PK",

    "SMKPF",

    "OAOFY",

    "XTN-L4-97-2.AX",

    "BRGE.L",

    "VOSSY.PK",

    "NINOF",

    "MEN",

    "NOV.MX",

    "FIPP.L",

    "MGAWF",

    "082260.KS",

    "JBULF",

    "GDNEF",

    "KUL.L",

    "VOLARA.MX",

    "WMAC",

    "MDST",

    "NEGI.PK",

    "6880.HK",

    "PSMMF.PK",

    "34Y.BE",

    "BKT",

    "033630.KQ",

    "RTOXY",

    "ACRFF",

    "VCOGF.PK",

    "SVM.L",

    "UUGWF",

    "ARZZ3F.SA",

    "ELPVY",

    "FSC",

    "SOHOM",

    "MHE",

    "WMLLF",

    "6524.L",

    "PRF-UN.TO",

    "ZDPY.PK",

    "WIW",

    "DMTGY",

    "MDCA",

    "0009.KL",

    "M6F.MU",

    "EBCOY",

    "GGTHF",

    "GDF",

    "MMRTY",

    "AFSD",

    "JHP",

    "GPIV33.SA",

    "NRBT",

    "FNMAI.OB",

    "IDG",

    "0475-OL.HK",

    "GAR.V",

    "AFW",

    "IAMTY",

    "METSF",

    "004170.KS",

    "PCCWY",

    "UEB.SG",

    "SRG.V",

    "ICO.BE",

    "PRFN.ME",

    "JBII.PK",

    "EMBVF",

    "N9LU.SI",

    "FJVS.L",

    "BBO-PA.TO",

    "JKPAPER.BO",

    "ZT3A.BE",

    "AGNCP",

    "OXIS.PK",

    "ZWARDENC.BO",

    "9008.KL",

    "REDW",

    "DPV9.L",

    "MDFZF",

    "PSB-PV",

    "KIKOY",

    "NNCHF",

    "WFG1.MU",

    "LBB.L",

    "FCT",

    "TQW.IR",

    "WGNB",

    "JCI-H.V",

    "ATLANTSP.BO",

    "SKHRF",

    "NYE.MC",

    "AHONY",

    "G1L.BE",

    "EXCL.JK",

    "LVGAF.PK",

    "TSPT",

    "ZT2B.SG",

    "ENERGYDEV.BO",

    "089790.KQ",

    "BC9.BE",

    "SP4A.MU",

    "WANSF",

    "SCV-B.ST",

    "MXC.F",

    "IUE.BE",

    "3036.TW",

    "CPFI",

    "BSNRF",

    "TOGOF",

    "SLVA",

    "1699.HK",

    "CMTDF",

    "CRMBQ",

    "XTD-PA.TO",

    "WANBURY.NS",

    "3171.TWO",

    "JAMNAAUTO.NS",

    "FSN.V",

    "ZENITHINFO-BE.NS",

    "CVLL",

    "QTN.SG",

    "THXBY",

    "SMVRD",

    "WLRMD.PK",

    "CAYRF.PK",

    "MNTCF",

    "VNRCP",

    "M6FA.DE",

    "JMPLY.PK",

    "OEC1.L",

    "DWRI",

    "IHCPF",

    "TPNEF",

    "VPV",

    "AKZA.AS",

    "NDP",

    "0098-OL.HK",

    "PFWI",

    "ZNMNF",

    "PTAUY.PK",

    "5072@BN.KL",

    "ROIQU",

    "CIFAF",

    "QBMMF",

    "OCV-UN.TO",

    "CSQ",

    "XENA.TA",

    "AJINF.PK",

    "TKGZY",

    "NPN",

    "VLKPF",

    "MFL",

    "B1:R9JZ.SI",

    "BVLDF.PK",

    "YMI.TO",

    "CVHL",

    "ZMA.F",

    "LEAP",

    "6661@BN.KL",

    "PRE.SG",

    "CYHHZ",

    "VGI",

    "XBOR.PK",

    "TTW.V",

    "WHS010.NZ",

    "FNTSF",

    "BIO-B",

    "0029.KL",

    "TCCA",

    "BKYKL.PK",

    "URCFF",

    "KWERF",

    "G4Z.F",

    "FSCI",

    "AEXAF.PK",

    "QACL.BE",

    "ORC",

    "FNMA.OB",

    "SKLTY",

    "MNHVF.PK",

    "71FH.L",

    "YMTKF.PK",

    "MHN",

    "5206.TWO",

    "0646-OL.HK",

    "SOME.PK",

    "VLRDF",

    "RCILF",

    "6288.HK",

    "E2:KT9.SI",

    "WLRHW",

    "NUBC",

    "JIM.BE",

    "CPRO.JK",

    "HRMJ",

    "FSHOP13.MX",

    "0690.HK",

    "SHVLF",

    "FCMP",

    "THBIY",

    "OA-H.V",

    "ANEWF",

    "PAWS",

    "ASNHF",

    "ICLDW",

    "003550.KS",

    "OISDF",

    "HOYFF",

    "N1O.SG",

    "WSTM.OB",

    "ZIN18-C.NYB",

    "XEBEF",

    "ZZG.BE",

    "O9G.BE",

    "MHNC",

    "SBGSF",

    "SGAS4F.SA",

    "LSA.TO",

    "FSHRF",

    "LNXSF.PK",

    "IFPJF",

    "7167.KL",

    "MAGNF",

    "VVUF.EX",

    "MXE",

    "WDKA.PK",

    "FU",

    "2183.HK",

    "MRFG3F.SA",

    "1235.HK",

    "ZIZ17-C.NYB",

    "TVE",

    "VKI",

    "GLV",

    "EMPZD.PK",

    "MRWSF",

    "1TW.MU",

    "TASEF",

    "QNTQY.PK",

    "VER.VI",

    "MIDLF",

    "QIF.L",

    "APOL.JK",

    "NZRFY",

    "5529.TWO",

    "YIQ14-C.NYB",

    "WMCO",

    "NDVLY.PK",

    "VNTI",

    "JAWA@NG.JK",

    "CYUFF.PK",

    "WGPLF",

    "NHUR",

    "VOLV-B.ST",

    "SVSVF",

    "NNGPF.PK",

    "CTRE",

    "JD8.MU",

    "PNCZL.PK",

    "PHU.L",

    "IQPOF",

    "SCAI",

    "03035X.TW",

    "TRTH",

    "AZURF",

    "TXEMF",

    "XANAF.PK",

    "GWTCF",

    "O3X2.BE",

    "VIFL",

    "XGW.BE",

    "DFY.F",

    "5584@BN.KL",

    "EPCPF",

    "SCNP",

    "CKGDF",

    "CHOLF",

    "NOM",

    "SPYKF",

    "MO4.SG",

    "WABCO.BO",

    "BTHI",

    "WWSG.PK",

    "1171-OL.HK",

    "6238.KL",

    "ZMG.F",

    "SHKARTP.BO",

    "1507.TW",

    "RRTL.HM",

    "6RC.BE",

    "YIK15-C.NYB",

    "PSZKF",

    "CHBAF",

    "BFGIF",

    "MTSFF",

    "0711-OL.HK",

    "AERO.L",

    "BCAR.PK",

    "DXB",

    "H4L1.F",

    "ZLIOY.PK",

    "ACT.L",

    "LYDIF",

    "KDKN",

    "CVSG.L",

    "MHD",

    "SAFRF",

    "UBLXF",

    "VNRTP",

    "RTMNF.PK",

    "CBSTZ",

    "WDAS",

    "OS.ST",

    "JGCCY.PK",

    "YITYF",

    "BUWR.OB",

    "PIEJF.PK",

    "LFRGY",

    "CTKH",

    "CNVB.PK",

    "LPCK.JK",

    "WNBD",

    "ZSNEHCON.BO",

    "XKK17-1.CBT",

    "LSIIF",

    "CLA",

    "RTMVY.PK",

    "CLNH",

    "YP9.MU",

    "URNXF",

    "FMB",

    "NICXF",

    "BSR.V",

    "PVS-PA.TO",

    "HREEF",

    "CHDRY",

    "MRCHF.PK",

    "OLCLY",

    "EGDCY",

    "CFC-PB",

    "CHEUY.PK",

    "CPASF.PK",

    "HTGX",

    "MODLF",

    "SKYH",

    "CFA",

    "YWN17-C.CBT",

    "PM5V.DU",

    "WMFV.F",

    "MBSD",

    "VN3A.SG",

    "BARK.PK",

    "YWK17-C.CBT",

    "1884.HK",

    "SGYPU",

    "NKX-PC",

    "DCNSF.PK",

    "AED",

    "RHUHF",

    "HECCD",

    "XCO-RWI",

    "CHSTF",

    "UKOG.L",

    "5EF.SI",

    "1314-OL.HK",

    "DLGC",

    "AFIMF",

    "WLBPZ",

    "YASTF.BO",

    "RCG",

    "HDVY.PK",

    "SPPJF",

    "WLOL",

    "TCB2O.BA",

    "VCTR.TA",

    "YUGVF.PK",

    "SHMDF",

    "WHLRF.PK",

    "034950.KQ",

    "OTV.VI",

    "XAH.SG",

    "NILSY",

    "8EG.F",

    "VSYME.OB",

    "SIOFFO.ST",

    "MDCR",

    "VIT-B.ST",

    "YEWTF",

    "MBIS",

    "NTGSD",

    "SYCRF",

    "RSERF",

    "910948.TW",

    "ELTZ.L",

    "ATAR.PK",

    "RESS",

    "VLT",

    "JVC.F",

    "SUHJY",

    "ROYHF",

    "DRS.IR",

    "TNTEY",

    "LGOYF",

    "YUGVF",

    "HTEC",

    "CPADF",

    "JSLSL.BO",

    "C-PN",

    "PASUSPG.BO",

    "ZAM.L",

    "8046-OL.HK",

    "RXLSF",

    "MAIL.IL",

    "VDSB.ME",

    "7SA.MU",

    "IRR",

    "LM3.SG",

    "JE3.BE",

    "MEEXF",

    "NPP",

    "AJSCF",

    "T82U.SI",

    "YG4.SG",

    "VSSL-BE.NS",

    "GLOFY",

    "CREQF",

    "KCRPY",

    "GPOVF.PK",

    "AXESCPB.MX",

    "AHONY.PK",

    "CEVE",

    "TVCH.L",

    "AKAVF",

    "YRLLD.PK",

    "P94P.BE",

    "IRET-PB",

    "ENRT",

    "AMFW-WI",

    "VIS.MC",

    "900140.KS",

    "SCA-B.ST",

    "YM1.HM",

    "NEZ15-C.CME",

    "VLLRF",

    "GNRD",

    "USRC",

    "JNMB.PK",

    "NPIFF",

    "AGPYF",

    "VLAP.VI",

    "032940.KQ",

    "VIVA.JK",

    "PHOT.PK",

    "MNTG",

    "FMFP",

    "WLGC.PK",

    "219.F",

    "LBU.F",

    "KFH",

    "HQR.MU",

    "SWSIP.PK",

    "NESN.VX",

    "JODRF.PK",

    "INCI.JK",

    "SCD",

    "AWSL",

    "SGF",

    "0243-OL.HK",

    "VIG.VI",

    "ATQP.MU",

    "TAOEF",

    "VPKF.EX",

    "FGB",

    "MBV.VI",

    "DTNOY",

    "ZUGN.SW",

    "I7O.MU",

    "AMBTQ",

    "C4XD.L",

    "NCLTF",

    "NULTF",

    "CLIRF.PK",

    "TOIPF",

    "NVLX.PK",

    "7TK.F",

    "XEL-PD",

    "DRAGY",

    "PPIZF",

    "OMUB.MU",

    "VELTF",

    "HUSQF",

    "CCNCD",

    "BKSW.JK",

    "4994.TW",

    "KROTP.ME",

    "0058.KL",

    "RTLGF",

    "SICRF",

    "EZTC3.SA",

    "PY1.SG",

    "RWWI.PK",

    "ASAB",

    "1421.HK",

    "MNRUF",

    "VTIFF",

    "DWN.DE",

    "OFEK",

    "1626-OL.HK",

    "LGOYF.PK",

    "RDIB",

    "EARI",

    "NETC3F.SA",

    "MQY",

    "MFMNF.PK",

    "XT3B.F",

    "XER.BE",

    "ZONNF",

    "DVLA.JK",

    "KANP",

    "CTWSP",

    "LKII",

    "NHV.F",

    "SIUIF",

    "CICC",

    "ZIU15-C.NYB",

    "VARNH.AT",

    "SXE.V",

    "CNCT",

    "TRLPF",

    "OCK1P.BA",

    "ECPCY",

    "KLMK",

    "JCLLITD.BO",

    "ZKBPF",

    "5OS.SI",

    "NML",

    "HNC.TO",

    "INBD.PK",

    "HEINY",

    "ILIAF",

    "SIEN",

    "CYHC",

    "BELA.AT",

    "SIBN.ME",

    "WTR.L",

    "KIDB",

    "SPPGF",

    "QPDC.PK",

    "KDCE",

    "HYLKF",

    "010520.KS",

    "GNCGF",

    "RVXCF",

    "6863.HK",

    "YGM17-C.NYB",

    "NBPOF",

    "IRBGY.PK",

    "XRP1.F",

    "EQLMF.PK",

    "FSD",

    "AFRVY",

    "TXHD",

    "WEMUE.OB",

    "XZPN.F",

    "CMAKY",

    "RKGXF",

    "ZVL.HM",

    "MHG",

    "ELAMF",

    "ISGP",

    "TWODY",

    "AEG",

    "VWR",

    "UX2A.SG",

    "RBPAB",

    "OXLC",

    "CSCR",

    "ELEV",

    "SALM.OL",

    "QUBSF.PK",

    "DPO",

    "BBRYF",

    "CHCC",

    "AMNF",

    "RBS-PI",

    "HKBTD",

    "ASZP.PK",

    "PYB",

    "5345.TWO",

    "NISP.JK",

    "YUEXF",

    "INCO@NG.JK",

    "MCRPF",

    "PAOFF.PK",

    "VALPLUS.BO",

    "ZO2.F",

    "NOKPF",

    "DNTUF.PK",

    "0SG.MU",

    "PUMF.EX",

    "ADRD",

    "MLYFF",

    "NPT",

    "AVK",

    "GUT",

    "SOHC.MU",

    "TTF",

    "NOVZ",

    "SOAG.OL",

    "VAC.HM",

    "SDRYF",

    "VWDRY",

    "JRIC.L",

    "4677.KL",

    "KNFI.EX",

    "DH.TO",

    "BTS.VI",

    "PLG.MU",

    "REXHF",

    "3176.TWO",

    "SCP.LS",

    "J.BO",

    "PAIR",

    "ZLC.F",

    "MCLS",

    "GULFOILLUB-EQ.NS",

    "TCEGF",

    "LGRVF",

    "TX9.F",

    "GOLI.SW",

    "BSYBY",

    "KAUSAMBI.BO",

    "RHKJF",

    "ZIONP.PK",

    "ABI",

    "QQXT",

    "RBEIF",

    "CTMQF",

    "BAESY",

    "SMTO3.SA",

    "SKLKF",

    "WICO.JK",

    "QCH19-C.CMX",

    "PCK",

    "PHMZF",

    "HN3N.F",

    "COLTF",

    "PPRO",

    "VGM",

    "SHT.MU",

    "7245@OM.KL",

    "WPPGF.PK",

    "LBLCF",

    "FULLL",

    "QTI1.SG",

    "NVZMY",

    "0332-OL.HK",

    "QB3.F",

    "HGTIF.PK",

    "CTPZY",

    "JKSW.JK",

    "0865.HK",

    "QL0.SI",

    "JPINFRATEC4.BO",

    "Y1CB.BE",

    "CMOOF",

    "VXSYF.PK",

    "CRBJF",

    "OE9.F",

    "SDMHF",

    "WWMDA.AX",

    "PPSI",

    "AY3.F",

    "NKZB.BE",

    "IDGGD",

    "7184.KL",

    "TNHPF",

    "TWDL",

    "008705.KS",

    "053270.KQ",

    "PTOG",

    "PAH3.SW",

    "MARA.TA",

    "INTIY",

    "PIKQF",

    "QTMM.PK",

    "DK8.F",

    "TRCN.ME",

    "GEAGY",

    "XM-H.V",

    "5166.KL",

    "ZKBSF",

    "UK6.F",

    "BES.LS",

    "JASMY",

    "BWEL",

    "FXER",

    "PNC-B.TO",

    "000640.KS",

    "NSR.AX",

    "OCLCF",

    "XC0.MU",

    "DHOXQ",

    "KASBF",

    "O2C.HM",

    "1147.KL",

    "XTN-L4-96.AX",

    "NHHEY",

    "USSUD",

    "DSITY",

    "BAF",

    "IMSC",

    "DMAR",

    "WLMIF",

    "HYKUF",

    "BEAZF",

    "FLAF",

    "GRCO",

    "RTAS.OB",

    "QABA",

    "QBNK.ST",

    "ASDS",

    "EARH",

    "YHMGF",

    "YAAD-L.TA",

    "0280.HK",

    "EOD",

    "6874.KL",

    "ISML",

    "Z1O.F",

    "VISASTEEL-BE.NS",

    "MEOAY",

    "PCU-UN.TO",

    "SRF",

    "XXCDF.PK",

    "DE-P.V",

    "WYNYF.PK",

    "BZZ.V",

    "WDDD.PK",

    "RNDXF",

    "AEY.L",

    "007820.KQ",

    "ZMA.SG",

    "M6F.DE",

    "ZURVY",

    "WRSPQ",

    "TTFNF",

    "BCKIF",

    "ISUZF.PK",

    "LNGLY",

    "8260-OL.HK",

    "PTAUF",

    "A1OS.SG",

    "EXG",

    "SRSR",

    "VICO.IL",

    "FIATY",

    "MGORF",

    "AZNVF",

    "EGTK",

    "NAUBF",

    "PBCBF",

    "QCKSF",

    "NRGT",

    "MITUY",

    "PVAYL",

    "QPON.OB",

    "NPH.V",

    "AFQ",

    "KBWA.DE",

    "FRPC",

    "GJNSY",

    "3313.HK",

    "RSSS.PK",

    "WWEB",

    "MAGNUM-EQ.NS",

    "1538.TW",

    "NIO.F",

    "RYOTF",

    "1633.HK",

    "RBS-PQ",

    "PPT",

    "SYMD",

    "SNHFF.PK",

    "AEH",

    "IFNNY",

    "RRENF",

    "SGYPW",

    "YUM.F",

    "1096.HK",

    "BMEN.MX",

    "MTUAF",

    "E1:K29.SI",

    "BAMXF",

    "MCRS",

    "MZDAY",

    "PGO.BE",

    "NOS.LS",

    "029780.KS",

    "ON4.MU",

    "C3I.SG",

    "2011.HK",

    "033790.KQ",

    "MOLS.CO",

    "FAIR.L",

    "ENCTF",

    "BNS-PK.TO",

    "OUS-UN.TO",

    "HOCL.BO",

    "QTS.F",

    "X0V.SG",

    "TPXXF",

    "RXHKF.PK",

    "OHA-UN.TO",

    "REFG",

    "SGLOF",

    "VLOWY",

    "NSANY.PK",

    "PMEHF",

    "MNOD.IL",

    "NEVC",

    "QILFF.PK",

    "FINMF",

    "D6F.BE",

    "BRG",

    "065270.KQ",

    "NUQA.MU",

    "YOU.BE",

    "HTGLF",

    "IAG-PE.TO",

    "WCFB",

    "TLOFF",

    "GWLIF.PK",

    "BKW.MX",

    "H9O1.DE",

    "JBSS3.SA",

    "OAKS-PA",

    "ECC",

    "0162@OM.KL",

    "LSBI",

    "RAIDF",

    "E2:MS7.SI",

    "KIJA@NG.JK",

    "0405-OL.HK",

    "CYMD.PK",

    "PFK",

    "IMCB",

    "PEFDF",

    "VVA.V",

    "HAWKB",

    "WUMSF",

    "JYM19-C.CME",

    "XXFFQ.PK",

    "YAMNINV.BO",

    "1521.TW",

    "1608.TW",

    "BFIN.JK",

    "FGETF.PK",

    "KWPWF",

    "YTE.SG",

    "PEN.OL",

    "PEN.V",

    "TOSBF",

    "1240.HK",

    "YYSSM.PK",

    "SNLC",

    "ZMILGFIN.BO",

    "DVHI",

    "TKYVY",

    "HBNRF",

    "NCZ",

    "IDND",

    "7X3.F",

    "SEOAY",

    "NAKODA.BO",

    "STWGD",

    "SKRV",

    "FLXNF",

    "UVRBF",

    "XTEPY.PK",

    "PAO.V",

    "OVIT.PK",

    "NZEOF",

    "HYMLF.PK",

    "096530.KQ",

    "PVS-PB.TO",

    "MLFT3F.SA",

    "HGKGY",

    "KMPA",

    "SOLH.TA",

    "SW1.HM",

    "116748.L",

    "REVI",

    "CODYY",

    "044490.KQ",

    "135375.L",

    "STKXF",

    "XNG.F",

    "INOW",

    "NDVLF",

    "JDWPF.PK",

    "WPC.BE",

    "KLTI.PK",

    "IID",

    "SQQQ",

    "XPROINDIA-BE.NS",

    "MRRTY.PK",

    "5149.KL",

    "TYG",

    "UAE",

    "HZY.TO",

    "MFV",

    "2KE.F",

    "NTX-PC",

    "FDVF",

    "V3N.BE",

    "CBFN.BE",

    "CHI",

    "ADDDF.PK",

    "2033.TW",

    "FDK.F",

    "QPP.L",

    "OMVN",

    "VODN.MX",

    "JMNXF",

    "HAYPF",

    "OCCAF",

    "ZKBPF.PK",

    "GBRRF",

    "RNP",

    "COBR",

    "CPXVF",

    "CSEI",

    "HDIUF",

    "SAB.MC",

    "XXGGD.PK",

    "XTLBY.PK",

    "VWS.SW",

    "ZEH1.BE",

    "LVMHF.PK",

    "3786.KL",

    "VMBS",

    "MHNA",

    "BAER.VX",

    "BIS",

    "VSSL.NS",

    "FSNR",

    "CYIG",

    "72S.F",

    "RPCGF",

    "ICHIF",

    "ADVN.SW",

    "MBAIF",

    "BUMI.JK",

    "BRDT",

    "TTEXF",

    "TPA.SG",

    "KLKBY.PK",

    "130960.KQ",

    "HLNFF",

    "BMO-PM.TO",

    "ENDO",

    "COENF",

    "P7VU.SI",

    "INPT",

    "TSE1.HM",

    "XXNCB",

    "CHUME",

    "TPTJF",

    "AKA.OL",

    "XO2N.BE",

    "TIL.NZ",

    "OPPXF",

    "BDCV",

    "NH7.SG",

    "XXAAC",

    "EMFN",

    "RUSMF",

    "LX2N.MU",

    "RAEW",

    "XTN-L4-95-6.AX",

    "ZEEMEDIA-EQ.NS",

    "CEQ.OL",

    "117930.KS",

    "8046.TW",

    "J1W1.SG",

    "VS6.MU",

    "RUSHIL.BO",

    "XXJZA.PK",

    "VM2.BE",

    "NXN",

    "2WBA.MU",

    "GUE.F",

    "PSAU",

    "WACMF",

    "JCQ.PA",

    "ZJEETMAC.BO",

    "F.MI",

    "O3X2.SG",

    "RCKXF",

    "JDD",

    "MHLG",

    "7051.KL",

    "SOMD.PK",

    "1378.HK",

    "0840-OL.HK",

    "MPA",

    "GMP-PB.TO",

    "MTSAF",

    "BXYA.BE",

    "ZCL1.F",

    "03011X.TW",

    "INOH",

    "VNRFY",

    "ASZP",

    "JLF.L",

    "EIHI",

    "GARWF",

    "PJL-CL",

    "BSPB",

    "CVNZF.PK",

    "EMAKQ",

    "UNA.AS",

    "FFBH",

    "VCYE",

    "ISCB",

    "SOMLF.PK",

    "VLOV",

    "PEWZ.L",

    "HMSP.JK",

    "RNSFF",

    "NRTNF",

    "PTQMF.OB",

    "PBMRY",

    "OPRX",

    "KYT.F",

    "HPR.SG",

    "YESBANK4.BO",

    "PBIO.PK",

    "CELGZ",

    "DSEEY",

    "RHDGF.PK",

    "TKPHF",

    "MFM",

    "ZNNMF",

    "FABU",

    "O2R1.F",

    "005090.KS",

    "1628-OL.HK",

    "ENJ",

    "WIIM.PK",

    "BLJZY.PK",

    "UKW.L",

    "DRTY.L",

    "SOHVF.PK",

    "DTHRF",

    "BPOPM",

    "QACL.DE",

    "ZIPL",

    "1XM.F",

    "EDD",

    "CSCN16-C.CME",

    "WWIO",

    "ATAD.IL",

    "SNEJF",

    "TEVA.TA",

    "GIM",

    "03017X.TW",

    "JW-B",

    "NWXA.F",

    "OUTKY",

    "KED",

    "NSL",

    "4722.TW",

    "VTCB.MU",

    "USATP",

    "BUI",

    "NHHEF.PK",

    "VRSI.PK",

    "001020.KS",

    "XNH.F",

    "JNES.PK",

    "YIM14-C.NYB",

    "INCAF",

    "AVJ.BE",

    "ESALF.PK",

    "NTDTY",

    "Y8I.MU",

    "O3B.SG",

    "BCJ.SW",

    "CFG",

    "MPSYF",

    "EXPI",

    "0599-OL.HK",

    "TU.V",

    "900949.SS",

    "NCMGY",

    "NTFY",

    "WYGPY",

    "R00N.MU",

    "VET.SW",

    "RVSDF",

    "SGNRF",

    "JOJMF",

    "KAEPY",

    "CWSRF",

    "OISHF",

    "WMV.SG",

    "QRM.L",

    "JWNG.L",

    "EEP.MC",

    "WWNTF",

    "ZSOUTGAS.BO",

    "ODEFF.PK",

    "SLRC",

    "ASGLF",

    "XP31.F",

    "ANZFF",

    "SIV14-C.CMX",

    "CSLVF",

    "MFC-PL.TO",

    "NCBDF",

    "SKPJY.PK",

    "GQMLF",

    "ADFS.PK",

    "Z4R.F",

    "MTGEP",

    "23116963.SG",

    "ORDDA.AX",

    "XHFNY.PK",

    "ASWRF",

    "MALJF",

    "VAGR1.SA",

    "PSAKF.PK",

    "VALECHAENG.BO",

    "1PF.BE",

    "WDGJF",

    "YNKUF",

    "QSCGF",

    "5481.TWO",

    "PPTKF",

    "RRTKF",

    "AUTO.JK",

    "PHTCF",

    "MMD",

    "T7W.BE",

    "SBHO.PK",

    "MTXS",

    "QACL.HM",

    "IUC1.F",

    "FIED",

    "TTOBF.PK",

    "BUHPF",

    "UELMO",

    "AXS.AS",

    "3DW.HM",

    "120110.KS",

    "KVCPF.PK",

    "MLGGY",

    "SBEPF",

    "BWPCE.OB",

    "CIZ",

    "XBLA.MU",

    "7084OR.KL",

    "NTG",

    "JMT1.MU",

    "POAHY",

    "VOLAF",

    "KC1A.BE",

    "JVTSF.PK",

    "TEMPF.PK",

    "EAA",

    "GOW.MC",

    "0952-OL.HK",

    "SGHIY.PK",

    "158310.KQ",

    "F4M.F",

    "HIIDF",

    "ZNBR",

    "MYD",

    "VGZZF",

    "JENSONICOL-EQ.NS",

    "GUDNF",

    "BLAP.PK",

    "RTMVY",

    "YUMA-PA",

    "WDE1.SG",

    "CWSAF",

    "BNDSY",

    "VTN.TO",

    "CZGDF",

    "J7Z.BE",

    "VBL.F",

    "FURCF",

    "LFEX",

    "VITROCPO.MX",

    "CMXI",

    "SSC.OL",

    "WOF.V",

    "TRITF",

    "TCISF.PK",

    "006800.KS",

    "RRL.L",

    "CENTA",

    "KIJA.JK",

    "WIWTF.PK",

    "PLFF",

    "CHNUF",

    "RTXBQ",

    "LPKGF",

    "SOHFF",

    "000325.KS",

    "BPE.V",

    "AMN-P.V",

    "WFWL",

    "ZOYA.ME",

    "LUC.TO",

    "0WP.BE",

    "1XM.BE",

    "NBO",

    "TKMR",

    "ATMI",

    "117580.KS",

    "SPHXF",

    "7544.KL",

    "0086@OM.KL",

    "EEF.MU",

    "OYP16.BA",

    "XGRA7.BA",

    "SOGAF",

    "MBFIP",

    "YACRF",

    "CGSXF",

    "GLYYF",

    "NPKAF",

    "USNZY",

    "OJU1.SG",

    "ZIGGF",

    "TIR.L",

    "3040.TW",

    "NXEN.SG",

    "WCMK.SG",

    "4989.TWO",

    "PKSVF.PK",

    "NRF-UN.TO",

    "WENEF",

    "S4LA.BE",

    "UX2A.F",

    "JQC",

    "GXSC.SG",

    "SND.V",

    "GBOOF",

    "IBIBF",

    "7003@OM.KL",

    "VVV.V",

    "JS3.F",

    "WKG.V",

    "MRQRF",

    "TEF.MC",

    "JRS",

    "VTM-H.V",

    "IDPPF",

    "431965.VI",

    "006400.KS",

    "RPLF.EX",

    "VT9.HM",

    "SLFPY",

    "EKO.TO",

    "COSWF.PK",

    "LMLP",

    "SHPR",

    "NWU1.F",

    "BYVVF.PK",

    "XXMFF",

    "GWMGF",

    "SYNN.VX",

    "MTHRF",

    "JPOLYINVST-EQ.NS",

    "AWNE",

    "O1F.BE",

    "WIHL.ST",

    "VDL.F",

    "QGJ.F",

    "DYNIQ",

    "SCU",

    "YIN16-C.NYB",

    "DDF",

    "HEWA",

    "NMNB",

    "59O.BE",

    "0053@OM.KL",

    "XAARF.PK",

    "RAND.AS",

    "7084@OM.KL",

    "VTEQ",

    "ILISF",

    "MCR",

    "EAD.MC",

    "WSV2.HM",

    "PFO",

    "XFMY",

    "SHZUY",

    "SWL.SG",

    "FMFC",

    "PKSGF",

    "IBY.SG",

    "AMWW",

    "DSV.CO",

    "CCA",

    "RSA-P.V",

    "VAKRANGEE6.BO",

    "MEJHF",

    "MHNB",

    "WAGEND.BO",

    "CWFNF",

    "MOHF.EX",

    "JVCZF.PK",

    "YGD.BE",

    "VTN",

    "DSU",

    "MXTRF",

    "EQC",

    "DPBSF",

    "QBCAF",

    "HDM.HM",

    "JETAIRWAYS4.BO",

    "31WN.F",

    "QE2P.SG",

    "3046-OL.HK",

    "IGF.SG",

    "SGTB",

    "MRCBF",

    "SRCF",

    "CRCUF",

    "NHNKF.PK",

    "SMBMY",

    "HBTPF",

    "PNCOF",

    "GNLAF",

    "JSM",

    "SPBC",

    "4723@OM.KL",

    "AZGSD.PK",

    "SMEBF",

    "DISCK",

    "FXENP",

    "BAYRY",

    "VVR",

    "TROXW.PK",

    "GS-PK",

    "NTCIND.BO",

    "WTHVF",

    "CRRWF",

    "KMRCF",

    "TRTLW",

    "HINOF",

    "2827-OL.HK",

    "DDCC",

    "1061.HK",

    "PRRFY",

    "LKEN",

    "OMV.SW",

    "2809.TW",

    "YYSSM",

    "MONKD",

    "MNAP",

    "ZDPYD.PK",

    "NICH",

    "SWSKF",

    "FANDF",

    "CLPHY",

    "8309-OL.HK",

    "VWOB",

    "2888.TW",

    "GRRMF",

    "ZDOLPINV.BO",

    "PRGAF",

    "GBDC",

    "LNEGY",

    "QFU.SG",

    "PGN-WI",

    "EOS",

    "RSPRF",

    "AEYIF",

    "WEGOF",

    "VM.L",

    "OTY1.BE",

    "WATG",

    "FKJ1.MU",

    "ECWO.L",

    "KDEEF",

    "VPRT",

    "ATHOF",

    "EOI",

    "MQG.AX",

    "DNNC",

    "NGEN",

    "0329.HK",

    "FJTCY",

    "PROW",

    "EFS3.MU",

    "PCQ",

    "MONT",

    "ZCP.F",

    "SESMF",

    "OROXF",

    "XXCDO",

    "ZEL030.NZ",

    "TEALF.PK",

    "7020@OM.KL",

    "OTHMD",

    "VYEY",

    "KMFI",

    "MAXY",

    "ZCILY.PK",

    "OEX.L",

    "VLYWW",

    "KYKOF.PK",

    "065940.KQ",

    "HGTX3.SA",

    "013A.DE",

    "KRYT.TA",

    "VTWG",

    "MHSA.F",

    "YNGA.L",

    "XTN-L4-96-7.AX",

    "UKCLF",

    "ZAV.MU",

    "XKF17-1.CBT",

    "RSLBF",

    "URXZF.PK",

    "54A.F",

    "VKSPL.NS",

    "8326-OL.HK",

    "GLRKF",

    "KGRZF.PK",

    "CVVUF",

    "NDENF",

    "004965.KS",

    "HLCSQ",

    "EFN-PE.TO",

    "8379.HK",

    "YYEQF",

    "PLN2.F",

    "MTWF.PK",

    "TID.TO",

    "147830.KQ",

    "EKKGF.PK",

    "ORA.MI",

    "TINO",

    "MGDDF",

    "KONN.F",

    "MALDF",

    "VNWI",

    "ZNILKENG.BO",

    "EOXFF",

    "KCKSF",

    "2615.KL",

    "JAV.BE",

    "ZIMFF",

    "1269.HK",

    "T9W.SG",

    "QSGA.SG",

    "UZA",

    "CSY.TO",

    "OMAB",

    "UNS1.SG",

    "WPSHF.PK",

    "VAPI",

    "CJTF",

    "CSSXF",

    "DSKBF",

    "ISG",

    "NFK.V",

    "WNYN.PK",

    "XUP.F",

    "LHHMQ",

    "YIZ18-C.NYB",

    "NASGF",

    "2879.KL",

    "FSFL.L",

    "034220.KS",

    "LRDC",

    "FVEN.F",

    "CHOLY",

    "STZ-B",

    "OOA.L",

    "KEF",

    "TELDF",

    "XXUP",

    "JTPE.JK",

    "2520.TW",

    "SMTOY",

    "BSWAF",

    "8031.HK",

    "AYN",

    "RKHNF",

    "KGI.L",

    "KSKGY",

    "1345.HK",

    "QCE.HM",

    "RYDAF",

    "OCNB",

    "L02L4.BA",

    "MMHTF",

    "DPTRQ.PK",

    "TNP-PB",

    "REPYY",

    "CSRGF",

    "T2R.DU",

    "MOG.L",

    "PNWRF",

    "RBMNF",

    "NXPC.PK",

    "BKQNF",

    "ZFRONTLE.BO",

    "WKM3.BE",

    "KST",

    "DVN1.F",

    "NHBTF2023-N6.NS",

    "NIR.V",

    "KWPCY",

    "BVGIF",

    "VGGGF.PK",

    "VIRA",

    "004020.KS",

    "SUTNY",

    "VTST",

    "MXA",

    "LIHC",

    "FITX",

    "HTR",

    "YPCUO.BA",

    "SCP.L",

    "GXSBY",

    "MLXDA.AX",

    "0189.HK",

    "KBSINDIA.BO",

    "SJKI.PK",

    "IGXT",

    "UNKL.ME",

    "VITFF",

    "SKTP",

    "JOF",

    "BVF.SG",

    "F8Q.BE",

    "FTDL",

    "O3B.BE",

    "VX8A.DE",

    "MHI",

    "SS.V",

    "VODI.SG",

    "MCHU",

    "NPKLY",

    "GVDI.PK",

    "DROP",

    "GMLP",

    "INNHF",

    "EUYNF",

    "WELA.BE",

    "HQL",

    "DTEX3F.SA",

    "RYSB.SG",

    "KALINDEE.BO",

    "KIDEQ",

    "WDMD.TA",

    "IHICF",

    "ATUSF",

    "CRTP",

    "0WC.BE",

    "TNCGF",

    "3662.TWO",

    "S1KB.F",

    "DUGLF",

    "CZICF",

    "BALMF",

    "CRWV.PK",

    "MOGA.F",

    "ALBKY",

    "NCXS",

    "6217.TWO",

    "SMTOF.PK",

    "SZEVF",

    "BVLDF",

    "WIKA.JK",

    "DDR-PK",

    "CPIN.JK",

    "0862-OL.HK",

    "CVNZF",

    "CR3B.L",

    "JDUCF",

    "1JYA.F",

    "HBLN.SW",

    "AFM",

    "IHRT",

    "SAE.V",

    "SIMA",

    "CMGHF",

    "DDSU",

    "7113.KL",

    "PMX",

    "FUFW",

    "NSFDF",

    "LWHS.PK",

    "LDKYQ",

    "JLA",

    "IMPUY",

    "XNWU",

    "NXTI",

    "QQQX",

    "CHM.TO",

    "KRT.BE",

    "2VS.F",

    "NUTCF",

    "UDHI",

    "2423.TW",

    "EMCG",

    "AIPUY",

    "MIMZF",

    "SGGV",

    "LBTYK",

    "IBIDF",

    "BELLF.PK",

    "KSKGF",

    "3633.HK",

    "ITYBY",

    "RGT",

    "YONGY.PK",

    "3416.TWO",

    "CAMJF",

    "FCO",

    "MCXN15-C.CBT",

    "EXPGY",

    "ZGN-P.V",

    "QIK16-C.CMX",

    "TD-PZ.TO",

    "GUKYF",

    "ZODIACVEN.BO",

    "LNAFF",

    "WFGCF.PK",

    "MIX.L",

    "TTENY",

    "HVGDF",

    "TSUA.BE",

    "XRXB11B.SA",

    "QFSP.MU",

    "KPLUY",

    "HDP",

    "NWXJ",

    "KNCAF",

    "TV8.F",

    "RKMD.IL",

    "AGZD",

    "2603.TW",

    "058860.KS",

    "E2:5BA.SI",

    "WLRHU",

    "E1:5NH.SI",

    "FKR.MU",

    "VTIP",

    "03016X.TW",

    "SAQ",

    "NNN-PE",

    "0024@BN.KL",

    "MWR",

    "KCRPY.PK",

    "VKIN",

    "EMDY.PK",

    "BUKRF",

    "TSRYF",

    "ILADF.PK",

    "BYVVF",

    "WTTA.DU",

    "FEO",

    "042510.KQ",

    "GGBR4.SA",

    "IDKOY",

    "ZRAH-L.TA",

    "SBARF",

    "WIS.IL",

    "WBRBY",

    "PSPRF.PK",

    "PAQWF",

    "N2R.SG",

    "GREZF",

    "MOH.AT",

    "12287014.KQ",

    "MUH",

    "LIFZF",

    "GSF",

    "031440.KS",

    "NS7.SG",

    "XYNH.PK",

    "2011-OL.HK",

    "WLC.TO",

    "CTIG.PK",

    "DUNIF",

    "SEPJF",

    "HLDCY",

    "HTCTF",

    "SHXWF",

    "MPPA.JK",

    "KYSEF",

    "QUCCF",

    "8421.TWO",

    "BSMAF",

    "GLLOF",

    "MER-PF",

    "PCI",

    "FUBC",

    "RDO.BE",

    "TVOOD.PK",

    "033240.KS",

    "8336.HK",

    "DHXMF",

    "BECVY",

    "JEN-H.V",

    "RMDFD",

    "UNBLF",

    "ADEN.VX",

    "HAWPY",

    "COPRF",

    "SDVZ.L",

    "RANJF.PK",

    "PTGEF",

    "XGTU.L",

    "LNXWD",

    "UR.TO",

    "SCHYY",

    "4741.TWO",

    "YKX18-1.CBT",

    "NE6.BE",

    "LC9.F",

    "NNLX.PK",

    "QUEST.BO",

    "GDOCF",

    "B6E.SG",

    "SHFK",

    "BBF",

    "STI-PA",

    "JCC1O.BA",

    "SJKI",

    "NAI.AS",

    "PACR",

    "JSHGE.OB",

    "GZ3.F",

    "TCL.NZ",

    "HVYB",

    "NOATF",

    "GRAMN.MX",

    "NPSNY",

    "QCQ16-C.CMX",

    "FRA",

    "LANZ.PK",

    "PDMT",

    "NUW",

    "VNARF",

    "CNLA",

    "YURANUS.BO",

    "EAPH",

    "VMO",

    "YNGFF",

    "QTET",

    "XNGSF",

    "VODJ.DU",

    "ABCW.PK",

    "AKER",

    "0564-OL.HK",

    "PPX",

    "ISDSF",

    "WFC-PJ",

    "EFTB",

    "PDER",

    "OMBP.OB",

    "CIG-C",

    "CIHKY",

    "HGN19-C.CMX",

    "VMR1.DU",

    "BOMBWIR.BO",

    "ISBH",

    "LSDC",

    "VDPH.PK",

    "VOLGAAIR.BO",

    "JABA",

    "CSNRF",

    "8064.TWO",

    "DIBA.CO",

    "NXK",

    "TCOR.PK",

    "E1:D5N.SI",

    "ADH1.F",

    "430590.VI",

    "DBLEP",

    "AHKSY",

    "WILYY",

    "IBE.MC",

    "PTBI",

    "TRRXF",

    "ETO",

    "NVNT",

    "045100.KQ",

    "PGO.F",

    "OPYGY",

    "GHC-UN.TO",

    "GBYLY",

    "ZE1.SG",

    "KDST.TA",

    "JINDALPHOT-BE.NS",

    "E1:I9T.SI",

    "GI0A.BE",

    "GF",

    "GCRLF.PK",

    "MRSKF.PK",

    "8931@OM.KL",

    "QXP.V",

    "ZDEXD",

    "ZMMDF.PK",

    "SAXPY",

    "0830-OL.HK",

    "YUNW.PK",

    "LQNGF",

    "GBYLY.PK",

    "FNLPF",

    "OCZ",

    "LKFLF",

    "GALTU",

    "AVOI.PK",

    "JNMB",

    "ZWS.F",

    "MVTG",

    "OCINF",

    "KREKA.AT",

    "RTEXF.PK",

    "CURRF.PK",

    "JET.V",

    "5215.TW",

    "YA1.F",

    "DTEX3.SA",

    "JPRS@TN.JK",

    "VNC.F",

    "VH1.F",

    "EFLVF",

    "MJXFF",

    "BKCC",

    "YYSSL",

    "DDOO",

    "NOXGF",

    "XXCDA.PK",

    "KRYAY.PK",

    "VASTN.AS",

    "VAEV",

    "SKLEF",

    "NOSOF",

    "MTF.MC",

    "AOXYD",

    "KLBN4.SA",

    "DLTA",

    "BWMTF",

    "NWGC",

    "FRSSF",

    "TISCF.PK",

    "WAFR",

    "TCEL",

    "043650.KQ",

    "XLY.MU",

    "PRBZF",

    "CRPNF.PK",

    "ZCOM",

    "WSI-BE.NS",

    "XYQ.SG",

    "TRKX",

    "EKRNF",

    "IFINSEC.BO",

    "EO7.F",

    "EEA",

    "CWLO",

    "BOLYY.PK",

    "HLTEF",

    "TXWHF",

    "DGRE",

    "UBP",

    "CITZ",

    "RLDFF",

    "AZTEF",

    "E2:552.SI",

    "1589@BN.KL",

    "NSLSF",

    "NATIONSTD.BO",

    "QACM.BE",

    "QSLRF",

    "AMH-PC",

    "SUME",

    "WRD",

    "OCTI",

    "OTS.V",

    "FSCFL",

    "IRBZF",

    "PXYN",

    "TFCILTD-BE.NS",

    "8213.TW",

    "ATCV",

    "CBA",

    "BBTN.JK",

    "P04.BE",

    "MQBKY",

    "YSYB.PK",

    "NAG1.F",

    "03007X.TW",

    "SWDHF.PK",

    "NPEGF.PK",

    "PUNK",

    "WHK.MU",

    "NMFC",

    "1369.HK",

    "CPYYY",

    "VSHGD.OB",

    "CGECF.PK",

    "TRBAA",

    "WGLD",

    "1302.HK",

    "KNPRF",

    "FROZ",

    "META.JK",

    "TZHGF.PK",

    "YPCZO.BA",

    "FCEN",

    "JECFD.PK",

    "NTC",

    "GTRQ",

    "TROIF",

    "4723@BN.KL",

    "VTSI.PK",

    "JUB.SG",

    "AMKBY",

    "TGPN.BE",

    "TSSI",

    "NBH",

    "VOLVY.PK",

    "WLLHY",

    "THYCF",

    "078930.KS",

    "YGDCD",

    "QIC-H.V",

    "JDSHF.PK",

    "IDR.AX",

    "QCLN",

    "TSCDF",

    "WEL.AX",

    "GAB",

    "AXPLF",

    "PSCF",

    "WOW-P.V",

    "O6Z.SI",

    "MVIB.L",

    "SLCE3.SA",

    "GLIVF",

    "WWBP",

    "MLAMA.PA",

    "OBC.F",

    "0YYA.DE",

    "E2:O10.SI",

    "PWSV",

    "SRGHY",

    "H5E.HM",

    "KGTO",

    "TXRX3F.SA",

    "SFTBF.PK",

    "ONEQ",

    "5007@OM.KL",

    "ZYL.AX",

    "PCIB.OL",

    "VGRCONSTRLR.BO",

    "TAUG",

    "PTORF",

    "SOBI",

    "QX9F.F",

    "SWJ",

    "EQLMF",

    "AHOG.EX",

    "WGMI",

    "SU3.SG",

    "VGRDF",

    "WIS-P",

    "ISSJY",

    "NWKHF",

    "KTYB.PK",

    "NS9B.BE",

    "YOKEF.PK",

    "MBCFF.PK",

    "SGHIY",

    "095340.KQ",

    "8FV.F",

    "QADMF",

    "JIN.OL",

    "VVAR3F.SA",

    "XNGSY",

    "RMETF",

    "3018.KL",

    "SFNS",

    "BEKSF",

    "YGM18-C.NYB",

    "MAGOF",

    "VATKF.PK",

    "FNCTF",

    "TRCMY",

    "EGFEY",

    "LPPF.JK",

    "ZF",

    "GWSO",

    "OPO.F",

    "CPFID",

    "QPSF",

    "ISNPY",

    "OSGSF",

    "MTT",

    "TTDKF",

    "HETA.F",

    "PFDHF",

    "ISF",

    "CADTU",

    "5515.TW",

    "FORBI.AS",

    "KEYUF.PK",

    "FSIC",

    "FPRUY",

    "WHA.AS",

    "GDRZF",

    "MVD-H.V",

    "GXP-PE",

    "SNYFY",

    "RLD.SW",

    "ZLDPF",

    "5098.KL",

    "Y0E.MU",

    "LRLCF",

    "OXBT",

    "AHDT",

    "RZS.SG",

    "QGLHF.PK",

    "PGXPF",

    "WIMHY",

    "HKEPF",

    "NXTTF",

    "LMCKV",

    "SOLH.OB",

    "ROMA",

    "2385.TW",

    "YUEIF",

    "BPY-UN.TO",

    "8CZ.F",

    "PDTRF",

    "M6F.SG",

    "E2:E6A.SI",

    "LGSR",

    "VLE.TO",

    "1WF.F",

    "UTARY",

    "8299.HK",

    "ZSUBWAYF.BO",

    "2445.KL",

    "NYVH.MU",

    "SARHY",

    "XXMUT.PK",

    "KIRLOSBROS.BO",

    "XXNCD.PK",

    "VH1.MU",

    "KPITSL.BO",

    "QUANTBUILD.BO",

    "USB-PN",

    "PTEK",

    "WDAS.PK",

    "FCTOA",

    "DLCA.HM",

    "UNIA.AS",

    "GETH",

    "4102.TWO",

    "EBS.VI",

    "ULTJ@TN.JK",

    "TVE-R.V",

    "CIG",

    "NSARO",

    "KRM-P.V",

    "OBL.AS",

    "NPRO.OL",

    "KEC-RT.V",

    "HTGZ",

    "WGLCP",

    "VXLINSTR.BO",

    "OBTEF",

    "STKSU.PK",

    "LIFNF",

    "VISF.EX",

    "HAST",

    "K1M.F",

    "CFR.VX",

    "2133.HK",

    "PUPKF",

    "MPSFF",

    "6399.KL",

    "NSATF.OB",

    "NEBUF",

    "ENC.MC",

    "KPS.SG",

    "QGLDD",

    "IMJS@NG.JK",

    "MUC",

    "BBCZ",

    "WSTR",

    "GPOFF",

    "XGH.F",

    "CAPE",

    "AEND.DE",

    "SFSHF",

    "SNHFF",

    "AJG.L",

    "TCEPY",

    "066700.KQ",

    "JPM-PC",

    "SHEGF.PK",

    "HSL.L",

    "DRTX",

    "SGTZY",

    "XSRAF.PK",

    "CLSZF",

    "LLEX",

    "ERGN",

    "KTWIF.PK",

    "KKPNF",

    "1623.HK",

    "WSPBP",

    "MTD.AX",

    "WTARD",

    "OGXPF",

    "AIMH",

    "EMAS.OL",

    "NPF",

    "CTREV",

    "OIA",

    "QRXPF",

    "NRVTF.PK",

    "GGNDF",

    "7544@BN.KL",

    "JHD.L",

    "AGTK",

    "WFCZL.PK",

    "PRRUF",

    "KHI",

    "CATWF",

    "QUTDF",

    "XCA.HM",

    "2017.TW",

    "MEAS",

    "CFB.TO",

    "7017@BN.KL",

    "DISCB",

    "VODI.DE",

    "OCLG",

    "FMBJ",

    "NELY.JK",

    "VNRBP",

    "HYFXF",

    "MURSF.PK",

    "WALL-B.ST",

    "PFFVF",

    "XXI.BE",

    "CBMG",

    "SMGBY",

    "HITK",

    "FDP.L",

    "0OG.MU",

    "BMIN",

    "CPTA",

    "JAEN.OB",

    "NFEI",

    "MWATF",

    "GFDCF",

    "LMW.F",

    "GFIOF.PK",

    "TXRX4.SA",

    "IVRO",

    "MRMZF",

    "LDF",

    "ZURN-U.TI",

    "WPE.F",

    "CQC1.BE",

    "RYLHY",

    "D5S.BE",

    "ACTLF",

    "PVTBP",

    "ZCILY",

    "OLYRF",

    "P40U.SI",

    "KVPHQ",

    "QUDRF.PK",

    "WGP.L",

    "ATPAQ",

    "7014.KL",

    "WK",

    "ZAOFF",

    "TTCS.PK",

    "COTQF",

    "OYP19.BA",

    "ETUB",

    "5098@OM.KL",

    "NSBK",

    "ACJJF",

    "PDESF",

    "ACS.MC",

    "LIBC",

    "HAVSF.PK",

    "TNGMF",

    "BOTRF",

    "PPRUF.PK",

    "DEVOY",

    "LEK.L",

    "CTW",

    "ALNXF.PK",

    "VRTX.MX",

    "KHNGY",

    "AMFW",

    "ICL",

    "PSORF",

    "HHV.L",

    "WJXFF.PK",

    "NYMTP",

    "RDUS",

    "VOIL.OB",

    "ZIF16-C.NYB",

    "CIO",

    "WRN",

    "A60.F",

    "ROWKF",

    "Q-A.V",

    "LEGIF",

    "VRYAF",

    "APF",

    "MNARF",

    "FCAU",

    "WTER.PK",

    "NATDF",

    "CBPJ",

    "7277.KL",

    "LOGP.L",

    "FQVLF.PK",

    "OSWALEA.BO",

    "SMNPF",

    "MRPZF.PK",

    "AH.AS",

    "NIQ",

    "TDF",

    "PMMTF",

    "CACGW",

    "AXTLF",

    "ZOT-D.MC",

    "PWIT",

    "WPPGY",

    "WCSY.PK",

    "GPIW",

    "TTRKF",

    "JFC",

    "DQJCY",

    "JADA",

    "CNYV15-C.CME",

    "KBLV.JK",

    "KIMTF.PK",

    "BKEPP",

    "DGDH",

    "BSRAF",

    "JAMGF",

    "SCPI.JK",

    "QPX.F",

    "414921.VI",

    "ATRA",

    "MURGY",

    "LUPE.ST",

    "5053.KL",

    "RVRCD",

    "NWSKF",

    "PFOH",

    "DP3A.L",

    "TZWLF.PK",

    "XSTLF.PK",

    "JVLAGRO.NS",

    "041510.KQ",

    "3504.TW",

    "POWR.L",

    "9849@BN.KL",

    "TROVW",

    "Z08.F",

    "CAOVF.PK",

    "YPCWO.BA",

    "PDRDY",

    "1680-OL.HK",

    "ZOX-H.V",

    "CQRLF",

    "OKIEY",

    "SHWGY.PK",

    "TKGBF",

    "RY-PW.TO",

    "OCQ.HM",

    "ZGV.F",

    "BVTLF",

    "GWRU",

    "JCTEL.BO",

    "JACQU",

    "KSN.AX",

    "JINM",

    "BAJA.JK",

    "5474.TWO",

    "UDHCF",

    "KNDXY",

    "FWJ.BE",

    "HKKIY",

    "XTRG",

    "FDI",

    "MDF.MC",

    "1465.TW",

    "CTY.L",

    "WCH.HM",

    "FIXX11.SA",

    "0968-OL.HK",

    "TAN.V",

    "GFPOF",

    "MTCZF",

    "RDA",

    "RBS-PE",

    "PUSH",

    "VCISF",

    "WWDA",

    "E1:5FX.SI",

    "WEICY",

    "KRSB.ME",

    "GRDNF",

    "6414.TW",

    "ALEV",

    "VOW3.HM",

    "8179.HK",

    "IOUFF",

    "0096-OL.HK",

    "RTMNF",

    "CMWAY",

    "FUSAF",

    "YXEN.F",

    "BSE",

    "PPOTF",

    "8200-OL.HK",

    "ISP",

    "CSBI",

    "GJR",

    "FDH.BE",

    "AVH",

    "GNF.V",

    "RPBIF",

    "SNWV.OB",

    "TKOMF",

    "005490.KS",

    "MNLDF",

    "COLV",

    "080470.KQ",

    "EORIF",

    "DJS.BE",

    "TNIB",

    "AGPDY",

    "X0M.DU",

    "RBTK",

    "WNXDY.PK",

    "VLBI",

    "0287-OL.HK",

    "5080.KL",

    "MTLHF",

    "2282.HK",

    "LMGT.PK",

    "GPAB.F",

    "ZCLCF.PK",

    "VNL.L",

    "AFRVF",

    "GOOG-U.TI",

    "RYCEY",

    "SKUYF",

    "DRLDF",

    "BIT",

    "RPRXW",

    "IS.SW",

    "RGT-T.OL",

    "HEPI",

    "006490.KS",

    "TEFN.TA",

    "J3L.BE",

    "LWSOF",

    "FSX.MU",

    "10V.F",

    "AEC.L",

    "LGDRF",

    "RIOB.OB",

    "LRCF.EX",

    "SPSN.VX",

    "0408-OL.HK",

    "QFI.L",

    "ZTWN.F",

    "ALQGC.PA",

    "KMSWF",

    "CNRFF",

    "PHD",

    "LAMI.JK",

    "6889.HK",

    "HKTU",

    "QUNI",

    "LKHLY",

    "KLKBF",

    "BEPTF",

    "PURA",

    "1908.HK",

    "TODAF",

    "BJBR@NG.JK",

    "CHCGD.PK",

    "039860.KQ",

    "2608.HK",

    "5245.TWO",

    "ZDVN.PK",

    "HNNMY",

    "PHGFF",

    "IGOV",

    "KAEF.JK",

    "O4V2.F",

    "DOLPF",

    "083930.KQ",

    "SGSOF",

    "JTA",

    "JBMA-EQ.NS",

    "CIK",

    "MEAD",

    "0YYA.MU",

    "ENEV3F.SA",

    "NNCHY",

    "TBCN.F",

    "BORUF",

    "SBOK.ST",

    "CBKW.PK",

    "HFCO",

    "MTNB",

    "GAEND.OB",

    "HRUM.JK",

    "STVAF",

    "XEA.SG",

    "OUTF.EX",

    "GDL",

    "WFRSF.PK",

    "1726.TW",

    "1733-OL.HK",

    "MOKO",

    "WDASD.PK",

    "J9B.BE",

    "MNILF",

    "QUTDF.PK",

    "IQI",

    "2886.TW",

    "XE0.F",

    "3071-OL.HK",

    "NKAFF",

    "UURAF",

    "PREMKUT.BO",

    "VPCO.PK",

    "RUF-U.V",

    "CRRB",

    "03018X.TW",

    "YAD.SG",

    "GNPR",

    "BRVRF",

    "BME.MC",

    "6423.TWO",

    "MCDMF",

    "SPGH.L",

    "XONA.HM",

    "0884.HK",

    "5156@BN.KL",

    "EW8.BE",

    "URKZ.ME",

    "CAUXF.PK",

    "JBARF",

    "LX2N.F",

    "MRAT.JK",

    "CKISF",

    "EMMSP",

    "GYPHQ",

    "STMZF",

    "TGC5O.BA",

    "0638-OL.HK",

    "1998.HK",

    "RGUS",

    "003545.KS",

    "DEIX",

    "SLM.V",

    "8893.KL",

    "INDX.JK",

    "JPZ.BE",

    "ARTM",

    "MGF",

    "SCBD.JK",

    "SEEEF",

    "RGT.OL",

    "XPLT",

    "AGQ.L",

    "521971.SS",

    "ROMVL",

    "SOUL.OB",

    "TGI-H.V",

    "DVNGF",

    "WNXXF.PK",

    "TIBN.SW",

    "SO7.SI",

    "LMCK",

    "JMCPROJECT-BE.NS",

    "NYVH.BE",

    "HTCO",

    "JMSNE.OB",

    "0075-OL.HK",

    "MSJ",

    "NPM",

    "QING.PK",

    "BWMXF",

    "PFM.V",

    "CRPNF",

    "Q9Z.BE",

    "HICTF",

    "GRPAF",

    "FFK.SG",

    "DSECF",

    "SHLAF",

    "1116.HK",

    "0SG.BE",

    "IPB",

    "QIA.V",

    "VEMLF",

    "MDNDF",

    "VIDEOIND4.BO",

    "0GT1.F",

    "WGTB.PK",

    "KARD.AS",

    "ROS-H.V",

    "NVAR.SG",

    "JPI",

    "SNHN",

    "JOJMF.PK",

    "SYGCF",

    "GTHKF.PK",

    "BWPT.JK",

    "JZZI",

    "JALA",

    "03021X.TW",

    "IMTEF",

    "198440.KQ",

    "ETG",

    "MBUU",

    "QACM.SG",

    "FKR.F",

    "VSM.HA",

    "DSCR",

    "ARY.V",

    "RAMO",

    "NVGC",

    "GOG.ST",

    "MSF",

    "NMA",

    "KBRS.PK",

    "ZPFK.HM",

    "QBEIF",

    "TMNG",

    "YXOXY",

    "NMS",

    "VPOR",

    "NZP010.NZ",

    "JSEJF",

    "KMNFF.PK",

    "CMDI.PK",

    "MHF",

    "8019-OL.HK",

    "MZI.V",

    "PIHN",

    "NKOKF",

    "SUVPF",

    "EQLB",

    "YNSKF.PK",

    "VAPR",

    "GOF",

    "7226@BN.KL",

    "KIRIINDUS-BE.NS",

    "FLMNF",

    "OMAX.SG",

    "1278.HK",

    "CPHN.SW",

    "PDLDF",

    "MG.TO",

    "ORIENTBELL.BO",

    "MBIT",

    "3633-OL.HK",

    "CISAU",

    "BMTO.L",

    "N0Z.SI",

    "WIF.V",

    "IOB4.BO",

    "TMEB",

    "5255@DB.KL",

    "XMEX.PK",

    "WELCORP-BE.NS",

    "FMCKJ",

    "SLMVV",

    "6505@BN.KL",

    "FPWM",

    "SUCEF",

    "ASNXF",

    "CYN-PD",

    "OLFC",

    "RMT",

    "MBHC",

    "NFJ",

    "SCPAF",

    "E2:E94.SI",

    "RDSB.AS",

    "MORG",

    "GCE",

    "VTTH.PK",

    "NMEX.PK",

    "SHREEASHTA6.BO",

    "SWYAF",

    "KUREF",

    "WFI.TO",

    "REPCF",

    "XIC.SG",

    "1089.HK",

    "HAE.DE",

    "HTCMY",

    "3778-OL.HK",

    "JSYSF",

    "QALBD.PK",

    "WCL.MU",

    "079430.KS",

    "GWGH",

    "MFCSF",

    "RPMG3.SA",

    "FCCQ11.SA",

    "E38.F",

    "XXII.OB",

    "IGPZE.OB",

    "CIF",

    "FMBRF",

    "QTRRF",

    "SPKTF",

    "VEH.HM",

    "5584.KL",

    "MDNL.PK",

    "QGLHF",

    "BKSW@NG.JK",

    "SMT",

    "ZMSPF",

    "XNGR.PK",

    "ACCL",

    "ZS3.SG",

    "GLLOF.PK",

    "TOFC",

    "WLRGP",

    "NA-PM.TO",

    "YES-P.V",

    "GEBEY",

    "WYN.L",

    "SEFL",

    "NXES",

    "OMWDF",

    "GS-PJ",

    "FJKNF.PK",

    "VNSN.OB",

    "NDDG",

    "ZCP.SG",

    "WACLY",

    "SHGXY",

    "SSEZY",

    "TELLF",

    "CDZ.HM",

    "WMN.SW",

    "SIEGY",

    "ENMHF",

    "7084@BN.KL",

    "BHL",

    "1013-OL.HK",

    "EAD",

    "1603.TW",

    "NVIGF.PK",

    "TAXI.JK",

    "MRKA.SG",

    "VSVLF",

    "PLHNF",

    "KVC-P.V",

    "XVO.BE",

    "FMCCS",

    "HWKDF",

    "HRPK.F",

    "SREDY",

    "XLS-WI",

    "IVRVF",

    "Q-B.V",

    "J9B.F",

    "JMPLF.PK",

    "NISA.HM",

    "TRGD.PK",

    "93MV.BE",

    "USB-PO",

    "MTCN",

    "TCEHY",

    "ELEK4F.SA",

    "GAIFD",

    "ABEV",

    "JPTXF.PK",

    "SEBNF",

    "520001.KS",

    "WN-PD.TO",

    "4711.TWO",

    "2VS.SG",

    "NCLIP",

    "SBMRF",

    "FDIV",

    "PSA-PR",

    "ADDC",

    "013570.KS",

    "QING",

    "VIIN.PK",

    "NHLD.OB",

    "1333-OL.HK",

    "NTIHF",

    "2227.TW",

    "WOSCF",

    "IOF.AX",

    "WRAP.PK",

    "VIIC",

    "ZHYLF",

    "ACUN.SW",

    "PBKX",

    "QZMRF",

    "AGIZ.L",

    "SWDAF",

    "SPID.AT",

    "SPRHY",

    "BKNML.PK",

    "5WR.SI",

    "CJT-A.TO",

    "YB3.MU",

    "MGIC.TA",

    "ENLAY",

    "03033X.TW",

    "2577@OM.KL",

    "VREYF.PK",

    "WCL.AX",

    "SLGRF",

    "SUWCF",

    "FDVA.PK",

    "AHREF",

    "B3SB.SG",

    "UF1.SI",

    "XEL.L",

    "E2:5KK.SI",

    "5062.KL",

    "LGCUF",

    "2178.HK",

    "SWGAY",

    "JREIF.PK",

    "JRCCQ",

    "HOIL.L",

    "USB-PH",

    "014160.KS",

    "BANJ",

    "ZURN.EX",

    "MAV4.L",

    "CWAY",

    "TRJTF",

    "MICTW",

    "SRF.BE",

    "SMUUF",

    "BTCS",

    "LXV.V",

    "TKNK",

    "FSCGF",

    "SASOF",

    "FNDM",

    "OCAP@TN.JK",

    "1303.HK",

    "VIVAF",

    "GTD-H.V",

    "TLSNF.PK",

    "008770.KS",

    "QTHE.PK",

    "FCC.MC",

    "WLAN",

    "AVSC",

    "CEGMF",

    "DSYG.EX",

    "SFBI",

    "WHGPF",

    "OPHLF.PK",

    "XPWR",

    "HENOY",

    "UNC.TO",

    "ATXDY",

    "MCC",

    "MMMKF",

    "SOLG.L",

    "CEHD",

    "EENR",

    "NVA3.MU",

    "5OR.SI",

    "QAT",

    "GALQ.MC",

    "000220.KS",

    "JHIUF.PK",

    "MAVC.L",

    "ZMPLF",

    "AULGF.PK",

    "LEOM",

    "A59.F",

    "FLIDF",

    "XYLTF",

    "SNHLF",

    "VOPKF",

    "TO91.BE",

    "IMLFF",

    "SRCSF.PK",

    "LSIP.JK",

    "FCRGF",

    "BKN",

    "KLOV-B.ST",

    "5IF.SI",

    "KREVF",

    "GRID",

    "RNEW1F.SA",

    "JDN.TO",

    "STCA",

    "WOI-H.V",

    "DIN.MC",

    "DRIFF",

    "ISL",

    "JKDG",

    "PTKFF",

    "MFDB.OB",

    "JYOTHYLABSL.BO",

    "BRIV3F.SA",

    "WESTLIFE.BO",

    "VCBC.PK",

    "LGCYO",

    "TLPY",

    "KIM-PH",

    "033230.KQ",

    "KTHGF",

    "WFP.F",

    "TRIT",

    "SMVR",

    "DUETF",

    "TFSCW",

    "ABGB",

    "RHB.BE",

    "RDTMF",

    "SOLV.OL",

    "JVA.V",

    "SSAA.L",

    "ZE1A.SG",

    "XHFNF",

    "WARFY",

    "FVT.TA",

    "BZZZF",

    "BFCF",

    "ALZM.OB",

    "59M.BE",

    "RENT3.SA",

    "Z77.SI",

    "KPCUF",

    "TWY.V",

    "URALL",

    "JKSW@TN.JK",

    "051900.KS",

    "STPFQ",

    "RBGLY",

    "DCNSF",

    "ULTJ@NG.JK",

    "1WF.BE",

    "NTY.V",

    "STTFF",

    "XEL-PE",

    "2816-OL.HK",

    "31Z.MU",

    "WEBELSOLAR.BO",

    "JZC",

    "HNFSB",

    "TLG.DE",

    "BTEBY",

    "FNM.BE",

    "CAPV",

    "QTN-H.V",

    "FULL",

    "SKP.BO",

    "WDF.SG",

    "TDC.F",

    "LVGI",

    "WILLF",

    "ZRAVINTR.BO",

    "NXSL",

    "BW7.MU",

    "I3J.BE",

    "NSS",

    "UBSFY",

    "AMMCF",

    "TACBY",

    "GRKZF.PK",

    "PTAUY",

    "NXTN",

    "YSC-P.V",

    "SYIEY",

    "SPGUF",

    "HIGOF",

    "1929.HK",

    "OMIMY",

    "YSF.SG",

    "ABGPF",

    "SNVFF",

    "DRHC",

    "EXGYF",

    "MBND",

    "VUOC.PK",

    "BDPT",

    "SPCO",

    "SLW.HM",

    "COMT",

    "NCYF.L",

    "AGOE.PK",

    "QEGY.PK",

    "TORVF",

    "2200.HK",

    "AOI.ST",

    "NGHCP",

    "GRYIF.PK",

    "TX9.SG",

    "TMKXY",

    "MT.AS",

    "CLV",

    "MUA",

    "DTF",

    "NIOCF",

    "JAG.V",

    "ZNZ.AX",

    "XTN-L4-96-1.AX",

    "TNSAY",

    "DBXSF",

    "HP0.F",

    "ROTGY",

    "JSN",

    "4197.KL",

    "HSSHF",

    "EVOMY",

    "NGPC",

    "TKRKF",

    "WSPD",

    "EMMW.BE",

    "WSSH.PK",

    "PIPAVAVDO.NS",

    "VLKAY.PK",

    "SDURF",

    "MSHS",

    "SHMDF.PK",

    "CTTC",

    "SHPG",

    "YST.BE",

    "ACRT",

    "ETY",

    "E1:5I3.SI",

    "E1:Q0W.SI",

    "CLACW",

    "PCOM",

    "066110.KQ",

    "RSH.MX",

    "MSLI",

    "MXGIF",

    "FTLB",

    "CVTPF",

    "8130-OL.HK",

    "GOVAI.BO",

    "JCA.SG",

    "SDRXP.PK",

    "ZZHJB.PK",

    "JBDU9.SA",

    "COSM",

    "ADTM",

    "IMLP",

    "WONDERLA-EQ.NS",

    "CDGXF",

    "SFDMY",

    "AEOJF.PK",

    "TEL.AX",

    "3009-OL.HK",

    "RIL-UN.TO",

    "EYMSN",

    "WECFF",

    "QDA.SG",

    "VRB.V",

    "RPKIF",

    "JSNSF.PK",

    "W-PJ.TO",

    "NCL.F",

    "NDVLY",

    "XLGLF.PK",

    "NXPS",

    "EWX.F",

    "VBSN.SW",

    "TLG.MU",

    "AHCHY",

    "XTEX",

    "VISHWAST.BO",

    "KBAGF",

    "EMOR",

    "IALS",

    "SFO.HM",

    "NABZY",

    "1729.TW",

    "MTS",

    "DCGCF",

    "CLAYF.PK",

    "J7Z.SG",

    "MRVNY",

    "2468.HK",

    "JBFCY",

    "ZKERARUB.BO",

    "ZONN.BE",

    "WAHUQ",

    "MMT",

    "MDLNF",

    "HKWO",

    "NWRF.L",

    "EGRNF.PK",

    "ORIENTHOT.NS",

    "134180.L",

    "OPGX",

    "WINSOME.BO",

    "SNGSF",

    "BNPQY",

    "PVWIF",

    "RIVVF",

    "VYDR",

    "PEIW.PK",

    "CDCS",

    "CHGCF",

    "MOOIF",

    "CSRE",

    "ASOMF",

    "RVREF",

    "VC01A.BA",

    "AXS.L",

    "WON1.F",

    "CDOC",

    "JNEXF",

    "LTONY",

    "HPHTF",

    "CYMD",

    "MNIEF",

    "MEILW",

    "NCV",

    "123840.KQ",

    "HIBLF",

    "MSHI",

    "DASTF",

    "EXIXF",

    "MITSF",

    "YIK16-C.NYB",

    "NZTCY.PK",

    "XTRM",

    "CTRP.JK",

    "TSOR",

    "FTFTF12CDV-MF.NS",

    "GQM.F",

    "WRCKF",

    "EQ2.BE",

    "VCT070.NZ",

    "NCKLF",

    "EZT",

    "WMRSF.PK",

    "VS51.SG",

    "APFC",

    "WESC-BTA.ST",

    "SEVAN.OL",

    "AVHNF",

    "PKRLY",

    "VXSYF",

    "VISN.TA",

    "KRANQ",

    "VAFK.LS",

    "WGLLF",

    "AY03.SG",

    "WIA",

    "ZOSN",

    "DUERF",

    "BL4M4.BA",

    "THLEF",

    "XLRM",

    "EXQNF",

    "VRCC",

    "TAIRF",

    "STOR",

    "WESCD.AX",

    "TFLG",

    "SONVF",

    "WSOK.F",

    "ORG.MU",

    "KHSHF",

    "MNCWF",

    "VZA",

    "CLIQ.SG",

    "ZENYF",

    "ZSOMAIYO.BO",

    "HCAP",

    "OEL.HM",

    "ZGZ15-C.NYB",

    "H2K1.SG",

    "CRGP",

    "PSB-PT",

    "SIOCF",

    "MLPKF",

    "KBRI.JK",

    "TCRRF",

    "XSH3.F",

    "YGN14-C.NYB",

    "ACES.JK",

    "MITSY",

    "OMAX.DU",

    "ZPRBHSTE.BO",

    "TY2.SG",

    "NEPT",

    "ONEXF",

    "LGDMF",

    "CHOB",

    "RICOF",

    "VSTFF",

    "9957.TWO",

    "HDHL.OB",

    "BCMXY",

    "VNLPF.PK",

    "LNMIY",

    "CERPQ",

    "ABBN.VX",

    "WXX-P.V",

    "EDP.LS",

    "SEC.L",

    "0272-OL.HK",

    "VNGRF",

    "HUAZ.PK",

    "FLMJF.PK",

    "VORACON.BO",

    "ELGSF",

    "IFNNF",

    "VRNGW",

    "GNRV",

    "STK",

    "JACKSON.BO",

    "CRESW",

    "20144370.AS",

    "OMVKY.PK",

    "YCZ.BE",

    "SKPO",

    "GPM",

    "NE1.BE",

    "TKRFF",

    "SSNLF.PK",

    "TTRKF.PK",

    "OY3.F",

    "NPR-UN.TO",

    "OSCUF",

    "BTSDF",

    "CEVT",

    "OXBRW",

    "FEFN",

    "SKIS",

    "TCBIL",

    "GPGJY",

    "JKXOY",

    "DWMNF",

    "NQI",

    "CKSNF",

    "FG.V",

    "ALALF",

    "ZINC.MX",

    "PSG",

    "ARCC",

    "XVIPF.PK",

    "UNIEF",

    "AIY",

    "WBS-WT",

    "EMSHF",

    "QGLDF",

    "HEQ",

    "EAGLU",

    "CZICF.OB",

    "PNNT",

    "YRSB.ME",

    "GCVRZ",

    "QACM.HM",

    "0V3.SG",

    "CCNMF",

    "BBN",

    "066310.KQ",

    "XNGIF.PK",

    "SPTJF",

    "SKSUF",

    "3522.KL",

    "6198-OL.HK",

    "BTF",

    "IGLU",

    "EVY",

    "NWRDF",

    "MKMLF.PK",

    "ZEL.NZ",

    "KPELF",

    "MYC.F",

    "YQNP.SG",

    "PSCE",

    "EINF",

    "JUVF.OB",

    "GWO-PQ.TO",

    "JRVR",

    "CDHPF",

    "WITD.OB",

    "LBF",

    "ISM",

    "S4C.F",

    "HLLXF",

    "JFROF",

    "MGDL.TA",

    "OSL-UN.TO",

    "1438.TW",

    "ALCS",

    "MWE.L",

    "JAGDAMD.BO",

    "ROG.VX",

    "EXXAF",

    "VTKLF",

    "VISAKAIND.BO",

    "OTV4.L",

    "JFBI",

    "AJLGF",

    "KUNUF",

    "BTB-UN.TO",

    "1322.HK",

    "DXBGF",

    "CJPRY",

    "WTFS.PK",

    "VSYS",

    "COMPUDYN.BO",

    "RSHYY",

    "SBT6.BO",

    "OPEI",

    "RPTZF",

    "NXCR",

    "TKF",

    "STKS",

    "BURNF",

    "SVO.L",

    "CHFR",

    "CDDRF",

    "OCBN.OB",

    "YGEN.MX",

    "HGBA.F",

    "COP.L",

    "SHARIABEES.BO",

    "VRSI",

    "GKNGY",

    "MAOTF",

    "SAMB",

    "CBSHP",

    "XRXH.PK",

    "AIF",

    "PRDGF",

    "MARUF.PK",

    "HSVLF",

    "WOPEF",

    "ACGBY",

    "E1:UQ1R.SI",

    "6992.L",

    "RTMAF.PK",

    "KTH",

    "WJRYY",

    "2201.TW",

    "NML.TO",

    "E1:I04.SI",

    "BALOF",

    "NVX",

    "HYEG",

    "FUJ1.HM",

    "JO3.HM",

    "RIMG",

    "BBRY",

    "QSGA.F",

    "MOHCY",

    "UMDI",

    "QEDND",

    "NRDVY",

    "SCGGF",

    "EKK3.BE",

    "AIPUF",

    "001390.KS",

    "AHY-UN.TO",

    "T5I.SG",

    "SMSEY",

    "NDEKY",

    "MMAB.PK",

    "QINO.VI",

    "CRWVD.PK",

    "M04.BE",

    "ZBB1.BE",

    "ZONC.OL",

    "MGR",

    "1431-OL.HK",

    "GNMAF.PK",

    "TREVF",

    "EOPCF",

    "YGQ14-C.NYB",

    "HOVNP",

    "03032X.TW",

    "ZBO.L",

    "GTAT",

    "YXEN.SG",

    "NMO",

    "ERTX.JK",

    "R8B.F",

    "ASIA.JK",

    "BSPOF",

    "JURIF",

    "NVPA.MU",

    "LLXL3.SA",

    "MIZUF",

    "SPPRP",

    "WCIG.PK",

    "S77.F",

    "WOCKPHARMA.BO",

    "YRLLF",

    "KSANF.PK",

    "WEIZMANIND-EQ.NS",

    "RDVA",

    "03037X.TW",

    "JNDOF",

    "BIOFR",

    "KEYW.BR",

    "PPTV.PK",

    "ANEWF.PK",

    "ULT.V",

    "ITMSF",

    "NPSKF",

    "MEGGF",

    "GULFOIL6.BO",

    "RAV.DU",

    "MEJHY",

    "LSFG",

    "PUODY.PK",

    "KLYG",

    "WFIFF.PK",

    "QIW.MU",

    "FCHS",

    "XXNCC",

    "E1:5WR.SI",

    "DYU16-C.CME",

    "PIY",

    "QIU16-C.CMX",

    "WRG.TO",

    "WFCNO",

    "HVRRF",

    "WPKS",

    "SCAN.OL",

    "WTIFF",

    "GRL.L",

    "NRR.L",

    "052670.KQ",

    "BSD-UN.TO",

    "BKSW@TN.JK",

    "PYT",

    "TGLSW",

    "XTERF.PK",

    "XKQ17-1.CBT",

    "BCXQL.PK",

    "7X3.BE",

    "CUBIL",

    "PSA-PX",

    "BNCM",

    "CCOEF",

    "PLPM",

    "HMCTF",

    "EVG",

    "BOGSF",

    "ZKBSF.PK",

    "WKM3.DU",

    "OMAM",

    "MOMO",

    "RVT",

    "0881-OL.HK",

    "MWO",

    "TDGCF.PK",

    "PVEG",

    "AKEJF",

    "PFM.AX",

    "ATERF",

    "WGHGF",

    "3VA1.BE",

    "FFMH",

    "L&TFINANCE-N3.NS",

    "FHY.SG",

    "MZTAQ",

    "VARUN-EQ.NS",

    "ROCM",

    "RYAOF",

    "TRNFP.ME",

    "TMOAY",

    "NSYC",

    "ZNKL.TA",

    "D73.BE",

    "IDWAF",

    "MDD.AX",

    "MUK",

    "VIJAYABNKSL.BO",

    "NFTA.TA",

    "FMBRF.PK",

    "KONG",

    "PHGUF",

    "MVPI",

    "3437.TW",

    "TDPAY",

    "039030.KQ",

    "IFL-UN.TO",

    "VONHF",

    "MHIFF",

    "RCKTF",

    "ZHAOF.PK",

    "MNBEY",

    "XGD.SG",

    "HHHEF",

    "ARCHITORG.BO",

    "RVDM",

    "GLVNF",

    "Y01A.MU",

    "BOIVF",

    "KMB.BE",

    "SSNOF",

    "KOTHARIPET-EQ.NS",

    "024950.KQ",

    "WMMVF",

    "ZNTRE.PK",

    "QU71.BE",

    "JIM.F",

    "SBGOF",

    "MPSYY",

    "SYNNF",

    "SKDTF",

    "GOOXF.PK",

    "BMZ.MU",

    "PMOIF",

    "ONAVQ",

    "TLW.DU",

    "ZA0.BE",

    "CACGU",

    "ELAMF.PK",

    "MMLF.BO",

    "JSGCF.PK",

    "YBRANTDIGI.BO",

    "SGRWF",

    "XTP.SG",

    "GDP-PC",

    "BGT",

    "WELINV.NS",

    "WPH.SG",

    "HROLF",

    "ROBOF",

    "BIOF",

    "MMMBE",

    "GRNBF",

    "AVIFY",

    "NHURD",

    "ITX.MC",

    "WBU.SG",

    "CBY.TO",

    "CAPR",

    "DEIWY",

    "OIGLF",

    "5065@BN.KL",

    "0651-OL.HK",

    "E2:554.SI",

    "CGW.L",

    "TOO-PA",

    "TNGLD",

    "WYNMY"

    ]
});