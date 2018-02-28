'use strict';

export const AccountCompany = {
    'companyId': {
        'type': String,
        'required': true
    },
    'companyCode': {
        'type': String,
        'required': true
    },
    'companyName': String
};

export const EntityType = {
    'type': String,
    'enum': [
        'business',
        'individual',
        'federalGovernment',
        'stateGovernment',
        'cityGovernment',
        'foreign'
    ]
};

export const FederalTaxRegime = {
    'type': String,
    'enum': [
        'realProfit',
        'estimatedProfit',
        'simplified',
        'simplifiedOverGrossthreshold',
        'simplifiedEntrepreneur',
        'notApplicable',
        'individual'
    ]
};

export const Company = {
    'code': {
        'type': String,
        'required': true
    },
    'officialName': {
        'type': String,
        'required': true
    },
    'name': {
        'type': String,
        'required': true
    },
    'entityType': EntityType,
    'subjectToSRF1234': Boolean,
    'federalTaxRegime': FederalTaxRegime,
    'pisSubjectTo': {
        'type': String
    },
    'cofinsSubjectTo': {
        'type': String
    },
    'csllSubjectTo': {
        'type': String
    },
    'receiptsAreFullNoCumulativePisCofins': Boolean,
    'inssWithholdSubjectTo': Boolean,
    'issWithholdSubjectTo': Boolean,
    'irrfWithholdSubjectTo': Boolean,
    'icmsRateForSimplestaxregime': Number,
    'isExemptByGrossRevenueForSimplestaxregime': Boolean,
    'subjectToPayrollTaxRelief': Boolean,
    'configuration': {
        'certificate': String,
        'certificatepwd': String,
        'certificateexpiration': String,
        'logo': String,
        'logoExtension': {
            'type': String,
            'enum': [
                'jpg',
                'jpeg',
                'gif',
                'png'
            ]
        },
        'tpImpNFe': {
            'type': String
        },
        'tpImpNFCe': {
            'type': String
        }
    },
    'mailServer': {
        'user': String,
        'password': String,
        'smtpAddress': String,
        'port': Number,
        'emailFrom': String,
        'protocol': {
            'type': String,
            'enum': [
                'ssl',
                'tls'
            ]
        },
        'templatemessageToEmail': String
    },
    'authorizedToDownloadNFe': [
        {
            'federalTaxId': String
        }
    ]
};

export const Error = {
    'code': Number,
    'message': {
        'type': String,
        'required': true
    },
    'field': String,
    'value': String,
    'in': {
        'type': String,
        'enum': [
            'params',
            'body',
            'query'
        ]
    }
};

export const ValidationError = {
    'message': String,
    'errors': [
        Error
    ]
};

export const Message = {
    'message': String
};

export const AgastServiceOperations_Item = {
    'serviceCode': String,
    'cityCode': Number,
    'agastCode': String,
    'hsCode': String,
    'description': String,
    'issWhOriginUnregSeller': Boolean,
    'issDueatDestination': Boolean,
    'subjectPayrollTaxRelief': Boolean,
    'subjectToINSS': Boolean,
    'customCompany': Boolean
};

export const AgastServiceOperations = [
    AgastServiceOperations_Item
];

export const LegalReason = {
    'id': String,
    'referenceCode': String,
    'companyId': String,
    'scope': {
        'type': String,
        'enum': [
            'general',
            'linkedTo'
        ],
        'required': true
    },
    'disable': Boolean,
    'description': {
        'type': String,
        'required': true
    },
    'name': {
        'type': String,
        'required': true
    },
    'showInInvoice': {
        'type': String,
        'enum': [
            'complementaryInfoMessage',
            'fiscalInfoMessage',
            'itemInfoMessage',
            'no show'
        ]
    },
    'referencedProcesses': [
        {
            'nProc': String,
            'indProc': {
                'type': String,
                'enum': [
                    '0',
                    '1',
                    '2',
                    '3',
                    '9'
                ]
            }
        }
    ],
    'taxConstraint': {
        'taxType': {
            'type': String,
            'enum': [
                'NONE',
                'INSS',
                'IRRF',
                'IRPJ',
                'PIS',
                'COFINS',
                'CSLL',
                'IPI',
                'ICMS',
                'II',
                'IOF',
                'ISS',
                'APROXTOTALTAX'
            ]
        },
        'specializedTaxType': {
            'type': String,
            'enum': [
                'icms',
                'icmsSt',
                'icmsStSd',
                'icmsPartOwn',
                'icmsPartDest',
                'icmsDifaFCP',
                'icmsDifaDest',
                'icmsDifaRemet',
                'icmsRf',
                'icmsDeson',
                'icmsCredsn',
                'pis',
                'pisSt',
                'cofins',
                'cofinsSt',
                'ipi',
                'ipiReturned',
                'ii',
                'iof'
            ]
        },
        'jurisdictionType': {
            'type': String,
            'enum': [
                'NONE',
                'City',
                'State',
                'Country'
            ]
        },
        'jurisdictionCode': String,
        'precondition': String
    }
};

export const Entity = {
    'name': String,
    'role': {
        'type': String,
        'enum': [
            'transporter',
            'sender',
            'dispatcher',
            'receiver',
            'addressee',
            'other'
        ]
    },
    'type': EntityType,
    'federalTaxId': String,
    'cityTaxId': String,
    'stateTaxId': String,
    'suframa': String,
    'phone': String,
    'taxRegime': {
        'type': String,
        'enum': [
            'realProfit',
            'estimatedProfit',
            'simplified',
            'simplifiedOverGrossthreshold',
            'simplifiedEntrepreneur',
            'notApplicable',
            'individual'
        ]
    },
    'email': String,
    'subjectToSRF1234': Boolean,
    'subjectToPayrollTaxRelief': Boolean
};

export const EntityForGoods = Object.assign({}, Entity, {
    'icmsTaxPayer': Boolean
});

export const AdditionalInformation = {
    'fiscalInfo': String,
    'complementaryInfo': String,
    'procRef': [
        {
            'nProc': String,
            'indProc': {
                'type': String,
                'enum': [
                    '0',
                    '1',
                    '2',
                    '3',
                    '9'
                ]
            }
        }
    ]
};

export const StateEnum = {
    'type': String,
    'enum': [
        'AC',
        'AL',
        'AP',
        'AM',
        'BA',
        'CE',
        'DF',
        'ES',
        'GO',
        'MA',
        'MT',
        'MS',
        'MG',
        'PA',
        'PB',
        'PR',
        'PE',
        'PI',
        'RJ',
        'RN',
        'RS',
        'RO',
        'RR',
        'SC',
        'SP',
        'SE',
        'TO'
    ]
};

export const VehicleID = {
    'licensePlate': {
        'type': String,
        'required': true
    },
    'stateCode': StateEnum,
    'rtnc': String
};

export const VehicleTransp = {
    'type': {
        'type': String,
        'enum': [
            'automobile',
            'wagon',
            'ferry',
            'trailer'
        ]
    },
    'automobile': VehicleID,
    'trailer': [
        VehicleID
    ],
    'wagon': String,
    'ferry': String
};

export const Transport = {
    'modFreight': {
        'type': String,
        'enum': [
            'CIF',
            'FOB',
            'Thridparty',
            'FreeShipping'
        ],
        'required': true
    },
    'withholdICMSTransport': Boolean,
    'volumes': [
        {
            'qVol': String,
            'specie': String,
            'brand': String,
            'volumeNumeration': String,
            'netWeight': Number,
            'grossWeight': Number,
            'seal': [
                String
            ]
        }
    ],
    'vehicle': VehicleTransp
};

export const Payment = {
    'installmentsTerms': {
        'type': String,
        'enum': [
            0,
            1,
            2
        ]
    },
    'bill': {
        'nFat': String,
        'vOrig': Number,
        'vDiscount': Number,
        'vNet': Number
    },
    'installment': [
        {
            'documentNumber': String,
            'date': String,
            'grossValue': {
                'type': Number,
                'required': true
            }
        }
    ],
    'paymentMode': [
        {
            'mode': {
                'type': String,
                'enum': [
                    '01',
                    '02',
                    '03',
                    '04',
                    '05',
                    '10',
                    '11',
                    '12',
                    '13',
                    '99'
                ],
                'required': true
            },
            'value': {
                'type': Number,
                'required': true
            },
            'cardTpIntegration': {
                'type': String,
                'enum': [
                    '1',
                    '2'
                ]
            },
            'cardCNPJ': String,
            'cardBrand': {
                'type': String,
                'enum': [
                    '01',
                    '02',
                    '03',
                    '04',
                    '99'
                ]
            },
            'cardAuthorization': String
        }
    ]
};

export const PurchaseInfo = {
    'governmentOrder': String,
    'orderNumber': String,
    'contractNumber': String
};

export const ExportInfo = {
    'shippingState': StateEnum,
    'place': {
        'type': String,
        'required': true
    },
    'placeDescription': String
};

export const EntityLocation = {
    'street': String,
    'neighborhood': String,
    'zipcode': {
        'type': String,
        'required': true
    },
    'cityCode': String,
    'cityName': String,
    'state': String,
    'countryCode': String,
    'country': String,
    'number': String,
    'complement': String,
    'phone': String
};

export const DefaultLocations = {
    'entity': EntityLocation,
    'company': EntityLocation,
    'transporter': EntityLocation,
    'deliveryLocation': EntityLocation,
    'pickupLocation': EntityLocation
};

export const NRef = {
    'type': {
        'type': String,
        'enum': [
            'refNFe',
            'refCTE',
            'refECF',
            'refNF',
            'refFarmerNF'
        ]
    },
    'refNFe': String,
    'refCTe': String,
    'refECF': {
        'nECF': {
            'type': String,
            'required': true
        },
        'nCOO': {
            'type': String,
            'required': true
        },
        'modECF': {
            'type': String,
            'enum': [
                '2B',
                '2C',
                '2D'
            ],
            'required': true
        }
    },
    'refNF': {
        'stateCd': StateEnum,
        'yymm': {
            'type': String,
            'required': true
        },
        'federalTaxId': {
            'type': String,
            'required': true
        },
        'serie': {
            'type': String,
            'required': true
        },
        'number': {
            'type': String,
            'required': true
        }
    },
    'refFarmerNF': {
        'stateCd': StateEnum,
        'yymm': {
            'type': String,
            'required': true
        },
        'federalTaxId': {
            'type': String,
            'required': true
        },
        'stateTaxId': {
            'type': String,
            'required': true
        },
        'model': {
            'type': String,
            'enum': [
                '04',
                '01'
            ],
            'required': true
        },
        'serie': {
            'type': String,
            'required': true
        },
        'number': {
            'type': String,
            'required': true
        }
    }
};

export const HeaderForGoodsBase = {
    'participants': {
        'entity': EntityForGoods,
        'transporter': EntityForGoods
    },
    'eDocCreatorType': {
        'type': String,
        'enum': [
            'self',
            'other'
        ],
        'required': true
    },
    'eDocCreatorPerspective': Boolean,
    'companyLocation': {
        'type': String,
        'required': true
    },
    'transactionDate': String,
    'defaultLocations': DefaultLocations,
    'nfRef': [
        NRef
    ]
};

export const HeaderForGoods = Object.assign({}, HeaderForGoodsBase, {
    'messageType': {
        'type': String,
        'enum': [
            'goods'
        ]
    },
    'documentCode': String,
    'participants': {
        'entity': EntityForGoods,
        'transporter': EntityForGoods
    },
    'nfAccessKey': String,
    'nfceQrCode': String,
    'transactionType': {
        'type': String,
        'enum': [
            'Sale',
            'Purchase',
            'SalesReturn',
            'PurchaseReturn',
            'TransferReturn',
            'Shipping',
            'ShippingReturn',
            'Transfer',
            'ReceiptAdjustment',
            'TransferAdjustment'
        ]
    },
    'transactionModel': {
        'type': String,
        'enum': [
            '01',
            '1B',
            '02',
            '2D',
            '2E',
            '04',
            '06',
            '07',
            '08',
            '8B',
            '09',
            '10',
            '11',
            '13',
            '14',
            '15',
            '16',
            '18',
            '21',
            '22',
            '26',
            '27',
            '28',
            '29',
            '55',
            '57',
            '59',
            '60',
            '65'
        ]
    },
    'transactionClass': String,
    'currency': String,
    'shippingDate': String,
    'additionalInfo': AdditionalInformation,
    'tpImp': {
        'type': String,
        'enum': [
            '0',
            '1',
            '2',
            '3',
            '4',
            '5'
        ]
    },
    'idDest': {
        'type': String,
        'enum': [
            0,
            1,
            2,
            3
        ]
    },
    'indPres': {
        'type': String,
        'enum': [
            '0',
            '1',
            '2',
            '3',
            '4',
            '9'
        ]
    },
    'invoiceNumber': Number,
    'invoiceSerial': Number,
    'transport': Transport,
    'payment': Payment,
    'purchaseInfo': PurchaseInfo,
    'export': ExportInfo
});

export const Vehicle = {
    'tpOp': {
        'type': String,
        'enum': [
            1,
            2,
            3,
            0
        ],
        'required': true
    },
    'chassisNumber': {
        'type': String,
        'required': true
    },
    'colorCode': {
        'type': String,
        'required': true
    },
    'colorName': {
        'type': String,
        'required': true
    },
    'cvPower': {
        'type': String,
        'required': true
    },
    'cylinderVolumCC': {
        'type': String,
        'required': true
    },
    'netWeight': {
        'type': String,
        'required': true
    },
    'grossWeight': {
        'type': String,
        'required': true
    },
    'serialNumber': {
        'type': String,
        'required': true
    },
    'fuelType': {
        'type': String,
        'enum': [
            '01',
            '02',
            '03',
            '16',
            '17',
            '18'
        ],
        'required': true
    },
    'engineNumber': {
        'type': String,
        'required': true
    },
    'cmt': {
        'type': String,
        'required': true
    },
    'lengthBetweenAxis': {
        'type': String,
        'required': true
    },
    'modelYear': {
        'type': String,
        'required': true
    },
    'manufactoryYear': {
        'type': String,
        'required': true
    },
    'paintType': {
        'type': String,
        'required': true
    },
    'vehicleRENAVAMType': {
        'type': String,
        'required': true
    },
    'specieRENAVAMType': {
        'type': String,
        'required': true
    },
    'modelRENAVAMCode': {
        'type': String,
        'required': true
    },
    'colorDENATRANCode': {
        'type': String,
        'enum': [
            '01',
            '02',
            '03',
            '04',
            '05',
            '06',
            '07',
            '08',
            '09',
            '10',
            '11',
            '12',
            '13',
            '14',
            '15',
            '16'
        ],
        'required': true
    },
    'vin': {
        'type': String,
        'enum': [
            'R',
            'N'
        ],
        'required': true
    },
    'vehicleManufactoryStatus': {
        'type': String,
        'enum': [
            '1',
            '2',
            '3'
        ],
        'required': true
    },
    'maxOccupantsQuantity': {
        'type': String,
        'required': true
    },
    'restrictionType': {
        'type': String,
        'enum': [
            '0',
            '1',
            '2',
            '3',
            '4',
            '9'
        ],
        'required': true
    }
};

export const Medicine = {
    'loteNumber': {
        'type': String,
        'required': true
    },
    'loteQuantity': {
        'type': Number,
        'required': true
    },
    'manufactotyDate': {
        'type': String,
        'required': true
    },
    'expirationDate': {
        'type': String,
        'required': true
    },
    'maxValueToEndUser': {
        'type': Number,
        'required': true
    }
};

export const Weapon = {
    'weaponRestrictionType': {
        'type': String,
        'enum': [
            '0',
            '1'
        ],
        'required': true
    },
    'serieNumber': {
        'type': String,
        'required': true
    },
    'gunBarrelSerieNumber': {
        'type': String,
        'required': true
    },
    'weaponDescription': {
        'type': String,
        'required': true
    }
};

export const Fuel = {
    'prodANPCode': {
        'type': String,
        'required': true
    },
    'perMixGN': Number,
    'authorizationCodeCODIF': String,
    'quantityOnRoomTemperature': Number,
    'stateCodeOfUndUser': StateEnum,
    'cide': {
        'baseCalcCIDE': {
            'type': Number,
            'required': true
        },
        'rateCIDE': {
            'type': Number,
            'required': true
        },
        'valueCIDE': {
            'type': Number,
            'required': true
        }
    },
    'pumpNumber': {
        'nozzleNumberFuelSupply': {
            'type': String,
            'required': true
        },
        'fuelPumpNumber': {
            'type': String,
            'required': true
        },
        'fuelTankNumber': {
            'type': String,
            'required': true
        },
        'startValueOfPumpNumber': {
            'type': Number,
            'required': true
        },
        'endValueOfPumpNumber': {
            'type': Number,
            'required': true
        }
    }
};

export const TaxByTypeTax = {
    'tax': {
        'type': Number,
        'required': true
    }
};

export const CSTTableAEnum = {
    'type': String,
    'enum': [
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8'
    ]
};

export const CSTTableBEnum = {
    'type': String,
    'enum': [
        '00',
        '10',
        '20',
        '30',
        '40',
        '41',
        '50',
        '51',
        '60',
        '70',
        '90',
        '101',
        '102',
        '103',
        '201',
        '202',
        '203',
        '300',
        '400',
        '500',
        '900'
    ]
};

export const CalcModelEnum = {
    'type': String,
    'enum': [
        'rate',
        'quantity'
    ]
};

export const ICMSSesonReason = {
    'type': String,
    'enum': [
        '0',
        '1',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11'
    ]
};

export const DetailsTaxImpactEnum = {
    'type': String,
    'enum': [
        'Add',
        'Included',
        'Subtracted',
        'Informative'
    ]
};

export const DetailsTaxAccountingEnum = {
    'type': String,
    'enum': [
        'liability',
        'asset',
        'none'
    ]
};

export const DetailsCalculatedTaxImpact = {
    'impactOnFinalPrice': DetailsTaxImpactEnum,
    'impactOnNetAmount': DetailsTaxImpactEnum,
    'accounting': DetailsTaxAccountingEnum
};

export const DetailsCalculatedTaxGoods = {
    'locationType': String,
    'jurisdictionName': String,
    'jurisdictionType': {
        'type': String,
        'enum': [
            'City',
            'State',
            'Country'
        ]
    },
    'taxImpact': DetailsCalculatedTaxImpact,
    'taxType': {
        'type': String,
        'enum': [
            'icms',
            'icmsSt',
            'icmsStSd',
            'icmsPartOwn',
            'icmsPartDest',
            'icmsDifaFCP',
            'icmsDifaDest',
            'icmsDifaRemet',
            'icmsRf',
            'icmsDeson',
            'icmsCredsn',
            'pis',
            'pisSt',
            'cofins',
            'cofinsSt',
            'ipi',
            'ipiReturned',
            'ii',
            'iof',
            'aproxtribCity',
            'aproxtribState',
            'aproxtribFed',
            'aproxtrib'
        ]
    },
    'rateType': String,
    'scenario': String,
    'subtotalTaxable': Number,
    'rate': Number,
    'tax': Number,
    'legalReason': {
        'id': String,
        'name': String
    },
    'significantLocations': [
        String
    ],
    'taxRuleType': {
        'type': String,
        'enum': [
            'SELLER',
            'BUYER',
            'TRANSACTION',
            'ITEM',
            'TAX'
        ]
    }
};

export const DetailsCalculatedTaxGoods_Item = Object.assign({}, DetailsCalculatedTaxGoods, {
    'source': CSTTableAEnum,
    'cstB': CSTTableBEnum,
    'cst': String,
    'modBC': String,
    'pMVA': Number,
    'pRedBC': Number,
    'pBCOp': Number,
    'ufst': StateEnum,
    'calcMode': CalcModelEnum,
    'legalTaxClass': Number,
    'legalTaxClassDC': Number,
    'cnpjProd': String,
    'sealCode': String,
    'sealQuantity': String,
    'icmsInterPartRate': Number,
    'icmsSesonReason': ICMSSesonReason,
    'perQuantityReturned': Number
});

export const LineForGoodsBase = {
    'lineCode': {
        'type': Number,
        'required': true
    },
    'itemCode': {
        'type': String,
        'required': true
    },
    'numberOfItems': {
        'type': Number,
        'required': true
    },
    'lineUnitPrice': Number,
    'lineAmount': {
        'type': Number,
        'required': true
    },
    'lineTaxedDiscount': Number,
    'lineUntaxedDiscount': Number,
    'useType': {
        'type': String,
        'enum': [
            'use or consumption',
            'resale',
            'agricultural production',
            'production',
            'use or consumption on business establishment',
            'use or consumption on transporter service establishment',
            'use or consumption on communication service establishment',
            'use or consumption on demand by contract',
            'use or consumption on energy supplier establishment',
            'use or consumption of fuel transaction type exportation',
            'use or consumption on services subject to iss',
            'use or consumption on services subject to icms',
            'fixed assets',
            'resale export',
            'resale icms exempt',
            'resale buyer under the same icmsSt tax rule',
            'transport of goods that don\'t need invoice (nf)'
        ],
        'required': true
    },
    'processScenario': String,
    'operationTypeReceiptMap': String,
    'freightAmount': Number,
    'insuranceAmount': Number,
    'otherCostAmount': Number,
    'entityIsIcmsSubstitute': Boolean,
    'isTransportIcmsWithheld': Boolean,
    'taxableQtUnit': Number,
    'icmsTaxRelief': {
        'reasonCode': {
            'type': String,
            'enum': [
                '1',
                '3',
                '4',
                '5',
                '6',
                '7',
                '8',
                '9',
                '10',
                '11',
                '12',
                '16'
            ],
            'required': true
        },
        'taxBaseDiscount': Number,
        'taxAmount': Number
    }
};

export const LineForGoods = Object.assign({}, TaxByTypeTax, LineForGoodsBase, {
    'avalaraGoodsAndServicesType': String,
    'returnedPercentageAmount': Number,
    'itemDescription': String,
    'cfop': Number,
    'overwrite': {
        'type': String,
        'enum': [
            'all',
            'cfop',
            'proportional',
            'no'
        ]
    },
    'hasStockImpact': Boolean,
    'hasFinantialImpact': Boolean,
    'indTotType': Boolean,
    'referencedItem': {
        'refNFe': String,
        'lineCode': Number
    },
    'orderNumber': String,
    'orderItemNumber': String,
    'fciNumber': String,
    'recopiNumber': String,
    'infAdProd': String,
    'vehicle': Vehicle,
    'medicine': Medicine,
    'weapon': Weapon,
    'fuel': Fuel,
    'export': [
        {
            'drawbackNumber': String,
            'indExport': {
                'registerNumber': {
                    'type': String,
                    'required': true
                },
                'accessKey': {
                    'type': String,
                    'required': true
                },
                'quantity': {
                    'type': Number,
                    'required': true
                }
            }
        }
    ],
    'di': [
        {
            'customsValue': Number,
            'diNumber': {
                'type': String,
                'required': true
            },
            'registerDateDI': {
                'type': String,
                'required': true
            },
            'clearanceSite': {
                'type': String,
                'required': true
            },
            'clearanceState': StateEnum,
            'clearanceDate': String,
            'transportDIType': {
                'type': String,
                'enum': [
                    '1',
                    '2',
                    '3',
                    '4',
                    '5',
                    '6',
                    '7',
                    '8',
                    '9',
                    '10'
                ],
                'required': true
            },
            'afrmmValue': Number,
            'intermediateType': {
                'type': String,
                'enum': [
                    '1',
                    '2',
                    '3'
                ],
                'required': true
            },
            'buyerFederalTaxID': String,
            'buyerState': StateEnum,
            'exporterCode': String,
            'adi': [
                {
                    'addNumber': {
                        'type': Number,
                        'required': true
                    },
                    'sequentialNumber': {
                        'type': Number,
                        'required': true
                    },
                    'manufacturerCode': {
                        'type': String,
                        'required': true
                    },
                    'adiDiscount': Number,
                    'drawbackNumber': String
                }
            ]
        }
    ],
    'calculatedTax': {
        'taxByType': {
            'icms': TaxByTypeTax,
            'icmsSt': TaxByTypeTax,
            'icmsStSd': TaxByTypeTax,
            'icmsPartOwn': TaxByTypeTax,
            'icmsPartDest': TaxByTypeTax,
            'icmsDifaFCP': TaxByTypeTax,
            'icmsDifaDest': TaxByTypeTax,
            'icmsDifaRemet': TaxByTypeTax,
            'icmsRf': TaxByTypeTax,
            'icmsDeson': TaxByTypeTax,
            'icmsCredsn': TaxByTypeTax,
            'pis': TaxByTypeTax,
            'pisSt': TaxByTypeTax,
            'cofins': TaxByTypeTax,
            'cofinsSt': TaxByTypeTax,
            'ipi': TaxByTypeTax,
            'ipiReturned': {
                'calcBase': Number
            },
            'ii': TaxByTypeTax,
            'iof': TaxByTypeTax,
            'aproxtribState': TaxByTypeTax,
            'aproxtribFed': TaxByTypeTax
        },
        'tax': Number,
        'details': [
            DetailsCalculatedTaxGoods_Item
        ]
    }
});

export const TransactionForGoodsIn = {
    'header': HeaderForGoods,
    'lines': [
        LineForGoods
    ]
};

export const TaxByTypeSummaryJurisdictionForGoods = {
    'jurisdictionName': String,
    'jurisdictionType': {
        'type': String,
        'enum': [
            'City',
            'State',
            'Country'
        ]
    },
    'tax': Number
};

export const TaxByTypeSummaryForGoods = {
    'calcBase': Number,
    'tax': Number,
    'jurisdictions': [
        TaxByTypeSummaryJurisdictionForGoods
    ]
};

export const CalculatedTaxSummaryForGoods = {
    'numberOfLines': Number,
    'taxedDiscount': Number,
    'untaxedDiscount': Number,
    'subtotal': Number,
    'totalTax': Number,
    'grandTotal': Number,
    'taxByType': {
        'icms': TaxByTypeSummaryForGoods,
        'icmsSt': TaxByTypeSummaryForGoods,
        'icmsStSd': TaxByTypeSummaryForGoods,
        'icmsPartOwn': TaxByTypeSummaryForGoods,
        'icmsPartDest': TaxByTypeSummaryForGoods,
        'icmsDifaFCP': TaxByTypeSummaryForGoods,
        'icmsDifaDest': TaxByTypeSummaryForGoods,
        'icmsDifaRemet': TaxByTypeSummaryForGoods,
        'icmsRf': TaxByTypeSummaryForGoods,
        'icmsDeson': TaxByTypeSummaryForGoods,
        'icmsCredsn': TaxByTypeSummaryForGoods,
        'pis': TaxByTypeSummaryForGoods,
        'pisSt': TaxByTypeSummaryForGoods,
        'cofins': TaxByTypeSummaryForGoods,
        'cofinsSt': TaxByTypeSummaryForGoods,
        'ipi': TaxByTypeSummaryForGoods,
        'ipiReturned': TaxByTypeSummaryForGoods,
        'ii': TaxByTypeSummaryForGoods,
        'iof': TaxByTypeSummaryForGoods,
        'aproxtribState': TaxByTypeSummaryForGoods,
        'aproxtribFed': TaxByTypeSummaryForGoods
    }
};

export const ProcessingInfo = {
    'versionId': String,
    'duration': Number
};

export const TransactionForGoodsOut = {
    'header': HeaderForGoods,
    'lines': [
        LineForGoods
    ],
    'calculatedTaxSummary': CalculatedTaxSummaryForGoods,
    'processingInfo': ProcessingInfo
};

export const TransactionSimulationForGoodsIn = {
    'header': HeaderForGoods,
    'lines': [
        LineForGoods
    ]
};

export const PaymentTerms = {
    'type': String,
    'enum': [
        0,
        1
    ]
};

export const WithholdingMode = {
    'type': String,
    'enum': [
        'xxx',
        'PCC',
        'PCx',
        'PxC',
        'Pxx',
        'xCC',
        'xxC',
        'xCx'
    ]
};

export const InstallmentComplete = {
    'documentNumber': {
        'type': String,
        'required': true
    },
    'date': {
        'type': String,
        'required': true
    },
    'grossValue': {
        'type': Number,
        'required': true
    },
    'netValue': Number,
    'withholdingMode': WithholdingMode,
    'withholdingPIS': Number,
    'withholdingCOFINS': Number,
    'withholdingCSLL': Number
};

export const SalesEntity = {
    'name': String,
    'type': EntityType,
    'email': String,
    'cnpjcpf': String,
    'cityTaxId': String,
    'stateTaxId': String,
    'suframa': String,
    'phone': String,
    'taxRegime': FederalTaxRegime,
    'specialTaxRegime': {
        'type': String,
        'enum': [
            'MEM',
            'EST',
            'SPR',
            'COP',
            'MEI',
            'MPP'
        ]
    },
    'subjectToSRF1234': Boolean,
    'requiredWithholdingISS': Boolean,
    'adminProcess': String,
    'build': {
        'code': String,
        'art': String,
        'cei': String,
        'number': String
    }
};

export const SalesInstallmentIn = {
    'documentNumber': {
        'type': String,
        'required': true
    },
    'date': {
        'type': String,
        'required': true
    },
    'grossValue': {
        'type': Number,
        'required': true
    }
};

export const SalesTaxesConfig = {
    'accruableCOFINSTaxation': {
        'type': String,
        'enum': [
            'T',
            'N',
            'Z',
            'E',
            'H',
            'S'
        ]
    },
    'accruableCSLLTaxation': {
        'type': String,
        'enum': [
            'T',
            'E'
        ]
    },
    'accruablePISTaxation': {
        'type': String,
        'enum': [
            'T',
            'N',
            'Z',
            'E',
            'H',
            'S'
        ]
    },
    'accruableCOFINSExempCodeTaxation': String,
    'accruablePISExempCodeTaxation': String,
    'withholdingCOFINS': Boolean,
    'withholdingCSLL': Boolean,
    'withholdingIRRF': Boolean,
    'withholdingPIS': Boolean,
    'withholdIRRFExemptReasonTaxation': String
};

export const SimpleCityAddress = {
    'line1': {
        'type': String,
        'required': true
    },
    'line2': {
        'type': String,
        'required': true
    },
    'line3': {
        'type': String,
        'required': true
    },
    'city': String,
    'zipcode': {
        'type': String,
        'required': true
    },
    'state': String,
    'country': {
        'type': String,
        'required': true
    },
    'cityCode': String
};

export const ServiceRendered = {
    'address': SimpleCityAddress
};

export const ServiceTaker = {
    'address': SimpleCityAddress
};

export const SalesDefaultLocations = {
    'serviceRendered': ServiceRendered,
    'serviceTaker': ServiceTaker
};

export const HeaderBaseInfo = {
    'transactionType': {
        'type': String,
        'enum': [
            'Sale',
            'Purchase',
            'Payment',
            'Receipt'
        ],
        'required': true
    },
    'documentCode': String,
    'currency': String,
    'transactionDate': {
        'type': String,
        'required': true
    },
    'taxCalculationDate': String,
    'companyLocation': {
        'type': String,
        'required': true
    }
};

export const SalesHeaderIn = Object.assign({}, HeaderBaseInfo, {
    'purchaseOrderNumber': String,
    'rpsNumber': Number,
    'rpsSerie': String,
    'discriminationIn': String,
    'entity': SalesEntity,
    'payment': {
        'terms': PaymentTerms,
        'installments': [
            SalesInstallmentIn
        ]
    },
    'taxesConfig': SalesTaxesConfig,
    'defaultLocations': SalesDefaultLocations
});

export const SalesHeaderOut = Object.assign({}, SalesHeaderIn, {
    'discriminationOut': String,
    'xml': String,
    'ediSyncState': {
        'type': String,
        'enum': [
            'STORED',
            'WAITING APPROVAL',
            'AUTHORIZED',
            'AUTHORIZED with NOTE',
            'ERROR',
            'CANCELED REPLACED',
            'CANCELED',
            'CANCELLATION REQUESTED'
        ]
    },
    'payment': {
        'terms': PaymentTerms,
        'withholdingMode': WithholdingMode,
        'installments': [
            InstallmentComplete
        ]
    }
});

export const SalesTaxByType = {
    'pisRf': TaxByTypeTax,
    'cofinsRf': TaxByTypeTax,
    'csllRf': TaxByTypeTax,
    'irrf': TaxByTypeTax,
    'inssRf': TaxByTypeTax,
    'pis': TaxByTypeTax,
    'cofins': TaxByTypeTax,
    'csll': TaxByTypeTax,
    'issRf': TaxByTypeTax,
    'iss': TaxByTypeTax,
    'aproxtribCity': TaxByTypeTax,
    'aproxtribFed': TaxByTypeTax,
    'irpj': TaxByTypeTax,
    'inss': TaxByTypeTax
};

export const DetailsCalculatedTaxServiceSales = {
    'locationType': String,
    'jurisdictionName': String,
    'jurisdictionType': {
        'type': String,
        'enum': [
            'City',
            'State',
            'Country'
        ]
    },
    'taxImpact': DetailsCalculatedTaxImpact,
    'taxType': {
        'type': String,
        'enum': [
            'aproxtribCity',
            'aproxtribFed',
            'pis',
            'pisRf',
            'cofins',
            'cofinsRf',
            'csll',
            'csllRf',
            'irrf',
            'inss',
            'inssRf',
            'iss',
            'issRf',
            'irpj'
        ]
    },
    'rateType': String,
    'scenario': String,
    'subtotalTaxable': Number,
    'rate': Number,
    'tax': Number,
    'exemptionCode': String,
    'significantLocations': [
        String
    ],
    'taxRuleType': {
        'type': String,
        'enum': [
            'SELLER',
            'BUYER',
            'TRANSACTION',
            'ITEM',
            'TAX',
            'NO_EXEMPTION'
        ]
    }
};

export const SalesCalculatedTax = {
    'taxByType': SalesTaxByType,
    'tax': Number,
    'details': [
        DetailsCalculatedTaxServiceSales
    ]
};

export const SalesLinesIn = {
    'lineCode': Number,
    'itemCode': {
        'type': String,
        'required': true
    },
    'numberOfItems': Number,
    'lineAmount': Number,
    'itemDescription': String,
    'lineTaxedDiscount': Number,
    'lineUntaxedDiscount': Number,
    'withLaborAssignment': Boolean,
    'taxDeductions': {
        'iss': Number
    }
};

export const SalesLinesOut = Object.assign({}, SalesLinesIn, {
    'avalaraGoodsAndServicesType': String,
    'lineNetValue': Number,
    'cst': {
        'type': String,
        'enum': [
            '01',
            '02',
            '03',
            '04',
            '05',
            '21',
            '22',
            '23',
            '24',
            '25',
            '40'
        ]
    },
    'cstRf': {
        'type': String,
        'enum': [
            '61',
            '62',
            '63',
            '64',
            '65',
            '66',
            '67',
            '68',
            '69',
            '70',
            '71',
            '72',
            '90'
        ]
    },
    'taxDeductions': {
        'iss': Number
    },
    'calculatedTax': SalesCalculatedTax
});

export const TaxByTypeSummaryJurisdiction = {
    'jurisdictionName': String,
    'jurisdictionType': {
        'type': String,
        'enum': [
            'City',
            'State',
            'Country'
        ]
    },
    'tax': Number
};

export const TaxByTypeSummaryForService = {
    'tax': Number,
    'jurisdictions': [
        TaxByTypeSummaryJurisdiction
    ]
};

export const SalesCalculatedTaxSummaryForService = {
    'numberOfLines': Number,
    'subtotal': Number,
    'totalTax': Number,
    'grandTotal': Number,
    'taxByType': {
        'pisRf': TaxByTypeSummaryForService,
        'cofinsRf': TaxByTypeSummaryForService,
        'csllRf': TaxByTypeSummaryForService,
        'irrf': TaxByTypeSummaryForService,
        'inssRf': TaxByTypeSummaryForService,
        'pis': TaxByTypeSummaryForService,
        'cofins': TaxByTypeSummaryForService,
        'csll': TaxByTypeSummaryForService,
        'issRf': TaxByTypeSummaryForService,
        'iss': TaxByTypeSummaryForService,
        'aproxtribCity': TaxByTypeSummaryForService,
        'aproxtribFed': TaxByTypeSummaryForService,
        'irpj': TaxByTypeSummaryForService,
        'inss': TaxByTypeSummaryForService,
        'required': true
    }
};

export const SalesTransactionOut = {
    'header': SalesHeaderOut,
    'lines': [
        SalesLinesOut
    ],
    'calculatedTaxSummary': SalesCalculatedTaxSummaryForService,
    'processingInfo': ProcessingInfo
};

export const SalesTransactionIn = {
    'header': SalesHeaderIn,
    'lines': [
        SalesLinesIn
    ]
};

export const PurchaseEntity = {
    'name': String,
    'type': EntityType,
    'email': String,
    'cnpjcpf': String,
    'cityTaxId': String,
    'stateTaxId': String,
    'suframa': String,
    'phone': String,
    'taxRegime': FederalTaxRegime,
    'hasCpom': Boolean,
    'subjectWithholdingIrrf': Boolean,
    'inssPreviousContrib': Number,
    'inssBasisDiscount': Number,
    'issRfRate': Number
};

export const PurchaseInstallmentIn = {
    'documentNumber': {
        'type': String,
        'required': true
    },
    'date': {
        'type': String,
        'required': true
    },
    'grossValue': {
        'type': Number,
        'required': true
    }
};

export const PurchaseTaxesConfig = {
    'entityAccruableCOFINSTaxation': {
        'type': String,
        'enum': [
            'T',
            'N',
            'Z',
            'E',
            'H',
            'S'
        ]
    },
    'entityAccruableCSLLTaxation': {
        'type': String,
        'enum': [
            'T',
            'E'
        ]
    },
    'entityAccruablePISTaxation': {
        'type': String,
        'enum': [
            'T',
            'N',
            'Z',
            'E',
            'H',
            'S'
        ]
    },
    'accruableCOFINSExempCodeTaxation': String,
    'accruablePISExempCodeTaxation': String,
    'accruablePISExemptReasonTaxation': String,
    'accruableCOFINSExemptReasonTaxation': String,
    'accruableCSLLExemptReasonTaxation': String,
    'withholdingPIS': Boolean,
    'withholdingCOFINS': Boolean,
    'withholdingCSLL': Boolean,
    'withholdingIRRF': Boolean,
    'withholdCOFINSExemptReasonTaxation': String,
    'withholdCSLLExemptReasonTaxation': String,
    'withholdPISExemptReasonTaxation': String
};

export const PointOfOrderOrigin = {
    'address': SimpleCityAddress
};

export const PurchaseDefaultLocations = {
    'serviceRendered': ServiceRendered,
    'PointOfOrderOrigin': PointOfOrderOrigin
};

export const PurchaseHeaderIn = Object.assign({}, HeaderBaseInfo, {
    'purchaseOrderNumber': String,
    'entity': PurchaseEntity,
    'payment': {
        'terms': PaymentTerms,
        'installments': [
            PurchaseInstallmentIn
        ]
    },
    'taxesConfig': PurchaseTaxesConfig,
    'defaultLocations': PurchaseDefaultLocations
});

export const PurchaseHeaderOut = Object.assign({}, PurchaseHeaderIn, {
    'payment': {
        'terms': PaymentTerms,
        'withholdingMode': WithholdingMode,
        'installments': [
            InstallmentComplete
        ]
    }
});

export const PurchaseTaxByType = {
    'issRf': TaxByTypeTax,
    'pisRf': TaxByTypeTax,
    'cofinsRf': TaxByTypeTax,
    'csllRf': TaxByTypeTax,
    'irrf': TaxByTypeTax,
    'inssRf': TaxByTypeTax,
    'inssAr': TaxByTypeTax,
    'pis': TaxByTypeTax,
    'cofins': TaxByTypeTax
};

export const DetailsCalculatedTaxServicePurchase = {
    'locationType': String,
    'jurisdictionName': String,
    'jurisdictionType': {
        'type': String,
        'enum': [
            'City',
            'State',
            'Country'
        ]
    },
    'taxImpact': DetailsCalculatedTaxImpact,
    'taxType': {
        'type': String,
        'enum': [
            'pis',
            'pisRf',
            'cofins',
            'cofinsRf',
            'csll',
            'csllRf',
            'irrf',
            'inssAr',
            'inssRf',
            'issRf'
        ]
    },
    'rateType': String,
    'scenario': String,
    'subtotalTaxable': Number,
    'rate': Number,
    'tax': Number,
    'exemptionCode': String,
    'significantLocations': [
        String
    ],
    'taxRuleType': {
        'type': String,
        'enum': [
            'SELLER',
            'BUYER',
            'TRANSACTION',
            'ITEM',
            'TAX'
        ]
    }
};

export const PurchaseCalculatedTax = {
    'taxByType': PurchaseTaxByType,
    'tax': Number,
    'details': [
        DetailsCalculatedTaxServicePurchase
    ]
};

export const PurchaseLinesIn = {
    'lineCode': Number,
    'itemCode': String,
    'taxForItem': {
        'agastCode': {
            'type': String,
            'required': true
        },
        'serviceCode': String
    },
    'numberOfItems': Number,
    'lineAmount': Number,
    'itemDescription': String,
    'lineTaxedDiscount': Number,
    'lineUntaxedDiscount': Number,
    'withLaborAssignment': Boolean,
    'useType': {
        'type': String,
        'enum': [
            'resale',
            'production',
            'use or consumption',
            'fixed assets'
        ]
    },
    'taxDeductions': {
        'iss': Number
    }
};

export const PurchaseLinesOut = Object.assign({}, PurchaseLinesIn, {
    'avalaraGoodsAndServicesType': String,
    'lineNetValue': Number,
    'calculatedTax': PurchaseCalculatedTax
});

export const PurchaseCalculatedTaxSummaryForService = {
    'numberOfLines': Number,
    'subtotal': Number,
    'totalTax': Number,
    'grandTotal': Number,
    'taxByType': {
        'issRf': TaxByTypeSummaryForService,
        'pisRf': TaxByTypeSummaryForService,
        'cofinsRf': TaxByTypeSummaryForService,
        'csllRf': TaxByTypeSummaryForService,
        'irrf': TaxByTypeSummaryForService,
        'inssRf': TaxByTypeSummaryForService,
        'inssAr': TaxByTypeSummaryForService,
        'pis': TaxByTypeSummaryForService,
        'cofins': TaxByTypeSummaryForService
    }
};

export const PurchaseTransactionOut = {
    'header': PurchaseHeaderOut,
    'lines': [
        PurchaseLinesOut
    ],
    'calculatedTaxSummary': PurchaseCalculatedTaxSummaryForService,
    'processingInfo': ProcessingInfo
};

export const PurchaseTransactionIn = {
    'header': PurchaseHeaderIn,
    'lines': [
        PurchaseLinesIn
    ]
};

export const PayRecHeader = {
    'transactionType': {
        'type': String,
        'enum': [
            'Sale',
            'Purchase',
            'Payment',
            'Receipt'
        ],
        'required': true
    },
    'documentCode': String,
    'currency': String,
    'transactionDate': {
        'type': String,
        'required': true
    },
    'taxCalculationDate': String,
    'paymentMode': {
        'type': String,
        'enum': [
            'CALCULATE',
            'ASIS'
        ],
        'required': true
    }
};

export const PaymentTaxByType = {
    'irrf': TaxByTypeTax,
    'inssRf': TaxByTypeTax,
    'issRf': TaxByTypeTax,
    'pisRf': TaxByTypeTax,
    'cofinsRf': TaxByTypeTax,
    'csllRf': TaxByTypeTax
};

export const PaymentCalculatedTax = {
    'taxByType': PaymentTaxByType,
    'tax': Number
};

export const PayRecLinesIn = {
    'lineCode': Number,
    'lineType': {
        'type': String,
        'enum': [
            'installment'
        ]
    },
    'itemCode': {
        'type': String,
        'required': true
    },
    'itemDescription': String,
    'itemDocNumber': String,
    'lineUntaxedPenality': Number,
    'lineUntaxedDiscount': Number
};

export const PayRecLinesOut = Object.assign({}, PayRecLinesIn, {
    'lineAmount': Number,
    'lineNetValue': Number,
    'withholdingMode': WithholdingMode,
    'calculatedTax': PaymentCalculatedTax
});

export const PccWithholdingMode = {
    'type': {
        'type': String,
        'enum': [
            'CSRF',
            'individual'
        ]
    },
    'totalTax': Number,
    'pisRf': TaxByTypeTax,
    'cofinsRf': TaxByTypeTax,
    'csllRf': TaxByTypeTax
};

export const PayRecCalculatedTaxSummaryForService = {
    'numberOfLines': Number,
    'subtotal': Number,
    'totalTax': Number,
    'grandTotal': Number,
    'pccWithholdingModes': [
        PccWithholdingMode
    ],
    'taxByType': {
        'issRf': TaxByTypeSummaryForService,
        'pisRf': TaxByTypeSummaryForService,
        'cofinsRf': TaxByTypeSummaryForService,
        'csllRf': TaxByTypeSummaryForService,
        'irrf': TaxByTypeSummaryForService,
        'inssRf': TaxByTypeSummaryForService
    }
};

export const PaymentTransactionOut = {
    'header': PayRecHeader,
    'lines': [
        PayRecLinesOut
    ],
    'calculatedTaxSummary': PayRecCalculatedTaxSummaryForService,
    'processingInfo': ProcessingInfo
};

export const PaymentLinesIn = Object.assign({}, PayRecLinesIn, {
    'lineNetValue': Number
});

export const PaymentTransactionIn = {
    'header': PayRecHeader,
    'lines': [
        PaymentLinesIn
    ]
};

export const ReceiptTransactionOut = {
    'header': PayRecHeader,
    'lines': [
        PayRecLinesOut
    ],
    'calculatedTaxSummary': PayRecCalculatedTaxSummaryForService,
    'processingInfo': ProcessingInfo
};

export const ReceiptTransactionIn = {
    'header': PayRecHeader,
    'lines': [
        PaymentLinesIn
    ]
};

export const CSTPistCofinsEnum = {
    'type': String,
    'enum': [
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '49',
        '50',
        '51',
        '52',
        '53',
        '54',
        '55',
        '56',
        '60',
        '61',
        '62',
        '63',
        '64',
        '65',
        '66',
        '67',
        '70',
        '71',
        '72',
        '73',
        '74',
        '75',
        '98',
        '99'
    ]
};

export const SimpleAddress = {
    'line1': {
        'type': String,
        'required': true
    },
    'line2': {
        'type': String,
        'required': true
    },
    'line3': {
        'type': String,
        'required': true
    },
    'city': String,
    'zipcode': {
        'type': String,
        'required': true
    },
    'state': String,
    'country': {
        'type': String,
        'required': true
    },
    'cityCode': String
};

export const AgastGoods_IcmsConf = {
    'code': String,
    'state': StateEnum
};

export const TaxType = {
    'type': String,
    'enum': [
        'INSS',
        'INSS_RF',
        'INSS_AR',
        'IRRF',
        'IRRF_GOVERNMENT',
        'PIS',
        'PIS_RF',
        'PIS_RP',
        'PIS_PP',
        'PIS_IMP',
        'PIS_EXP',
        'COFINS',
        'COFINS_RF',
        'COFINS_RP',
        'COFINS_PP',
        'COFINS_IMP',
        'COFINS_EXP',
        'CSLL',
        'CSLL_RF',
        'CSLL_PP',
        'CSLL_RP',
        'IRPJ',
        'ISS',
        'ISS_RF',
        'IPI',
        'IPI_EXP',
        'II'
    ]
};

export const TaxTypeRate = {
    'taxType': TaxType,
    'taxModel': {
        'type': String,
        'enum': [
            'rate',
            'srf'
        ],
        'required': true
    },
    'rate': Number,
    'srvAmount': Number,
    'quantityUnidBase': String,
    'specializationType': {
        'type': String,
        'enum': [
            'basic',
            'monophase',
            'taxSubstitution'
        ]
    }
};

export const Agast = {
    'code': {
        'type': String,
        'required': true
    },
    'description': String,
    'lifeTimeStart': String,
    'lifeTimeEnd': String,
    'inactive': Boolean,
    'hsCode': String,
    'codeType': {
        'type': String,
        'required': true
    },
    'accruablePISTaxation': {
        'type': String
    },
    'pisExemptLegalReasonCode': String,
    'pisExemptLegalReason': String,
    'accruableCOFINSTaxation': {
        'type': String
    },
    'cofinsExemptLegalReasonCode': String,
    'cofinsExemptLegalReason': String,
    'pisCofinsCreditNotAllowed': Boolean,
    'federalTaxRate': [
        TaxTypeRate
    ],
    'notes': String,
    'taxAdviserCode': String
};

export const AgastGoods = Object.assign({}, Agast, {
    'ex': Number,
    'cest': String,
    'cean': String,
    'cstIPI': {
        'type': String,
        'enum': [
            'T',
            'Z',
            'E',
            'N',
            'I'
        ]
    },
    'ipiLegalTaxClass': String,
    'ipiLegalReason': String,
    'cstIPIExp': {
        'type': String,
        'enum': [
            'T',
            'Z',
            'E',
            'N',
            'I'
        ]
    },
    'ipiExpLegalTaxClass': String,
    'ipiExpLegalReason': String,
    'accruableCOFINSExpTaxation': {
        'type': String,
        'enum': [
            'T',
            'Z',
            'E',
            'H',
            'N'
        ]
    },
    'accruablePISExpTaxation': {
        'type': String,
        'enum': [
            'T',
            'Z',
            'E',
            'H',
            'N'
        ]
    },
    'cofinsExpExemptLegalReasonCode': String,
    'pisExpExemptLegalReasonCode': String,
    'accruableCOFINSImpTaxation': {
        'type': String,
        'enum': [
            'T',
            'Z',
            'E',
            'H',
            'N'
        ]
    },
    'accruablePISImpTaxation': {
        'type': String,
        'enum': [
            'T',
            'Z',
            'E',
            'H',
            'N'
        ]
    },
    'cofinsImpExemptLegalReasonCode': String,
    'pisImpExemptLegalReasonCode': String,
    'cstII': {
        'type': String,
        'enum': [
            'T',
            'Z',
            'E',
            'N',
            'I'
        ]
    },
    'iiLegalReason': String,
    'specialProductClass': {
        'type': String,
        'enum': [
            'OTHERS',
            'COMMUNICATION',
            'ENERGY',
            'TRANSPORT',
            'FUEL AND LUBRICANT',
            'VEHICLE',
            'ALCOHOLIC BEVERAGES',
            'WEAPONS',
            'AMMO',
            'PERFUME',
            'TOBACCO'
        ]
    },
    'icmsConf': [
        AgastGoods_IcmsConf
    ]
});

export const CompanyAgastGoods = Object.assign({}, AgastGoods, {
    'companyId': String
});

export const AgastService_WithholdIRRF = {
    'business': Boolean,
    'businessLegalReason': String,
    'government': Boolean,
    'governmentLegalReason': String
};

export const AgastService_WithholdPCC = {
    'business': Boolean,
    'businessLegalReason': String,
    'federalGovernment': Boolean,
    'federalGovernmentLegalReason': String,
    'stateGovernment': Boolean,
    'stateGovernmentLegalReason': String,
    'cityGovernment': Boolean,
    'cityGovernmentLegalReason': String
};

export const AgastService_Withhold = {
    'IRRF': AgastService_WithholdIRRF,
    'INSSSubjectPayrollTaxRelief': Boolean,
    'INSS': Boolean,
    'INSSLegalReason': String,
    'INSSForSimples': Boolean,
    'INSSForSimplesLegalReason': String,
    'INSSLiabilityForSimplifiedEntrepreneur': Boolean,
    'INSSLiabilityForSimplifiedEntrepreneurLegalReason': String,
    'PIS': AgastService_WithholdPCC,
    'COFINS': AgastService_WithholdPCC,
    'CSLL': AgastService_WithholdPCC
};

export const AgastService = Object.assign({}, Agast, {
    'pisCofinsTaxReporting': {
        'type': String,
        'enum': [
            'cumulative',
            'noCumulative'
        ]
    },
    'accruableCSLLTaxation': {
        'type': String,
        'enum': [
            'T',
            'E'
        ]
    },
    'csllExemptLegalReason': String,
    'csllExemptLegalReasonCode': String,
    'withholding': AgastService_Withhold,
    'issDueatDestination': Boolean,
    'supplementaryDescription': String
});

export const CompanyAgastService = Object.assign({}, AgastService, {
    'companyId': String
});

export const IcmsConfInterState = {
    'state': StateEnum,
    'icmsCSTInterstate': {
        'type': String,
        'enum': [
            'T',
            'E',
            'H',
            'D',
            'N',
            'O',
            'OZ'
        ]
    },
    'icmsCST': {
        'type': String,
        'enum': [
            'T',
            'E',
            'H',
            'D',
            'N',
            'O',
            'OZ'
        ]
    },
    'calcMode': {
        'type': String,
        'enum': [
            'BYMVARATE',
            'SRP',
            'MMSRP',
            'OPERATIONAMOUNT'
        ]
    },
    'discountRateForMonoPhase': Number,
    'rate': Number,
    'fcpRate': Number,
    'icmsBaseDiscount': Number,
    'icmsBaseDiscountInterState': Number,
    'icmsBaseDiscountInterStateForImported': Number,
    'msrp': Number,
    'mvaRate': Number,
    'msrpUnit': String,
    'icmsLegalReason': String,
    'icmsSTConf': {
        'protocolType': {
            'type': String,
            'enum': [
                'COVENANT',
                'PROTOCOL',
                'NOTHING'
            ]
        },
        'icmsStLegalReason': String,
        'hasReductionOfMVAForSimples': Boolean,
        'reductionOfMVAForSimples': Number,
        'reductionOfMVAForSimplesLegalReason': String,
        'calcMode': {
            'type': String,
            'enum': [
                'BYMVARATE',
                'SRP',
                'MSRP'
            ]
        },
        'icmsStBaseDiscount': Number,
        'mvaRate': Number,
        'srp': Number,
        'srpUnit': String
    }
};

export const IcmsConfByState = {
    'code': {
        'type': String,
        'required': true
    },
    'state': StateEnum,
    'name': String,
    'startDate': String,
    'expirationDate': String,
    'subjectToST': Boolean,
    'inactive': Boolean,
    'icmsCST': {
        'type': String,
        'enum': [
            'T',
            'E',
            'H',
            'D',
            'N',
            'O',
            'OZ'
        ]
    },
    'icmsCSTImp': {
        'type': String,
        'enum': [
            'T',
            'E',
            'H',
            'D',
            'N',
            'O',
            'OZ'
        ]
    },
    'icmsCSTExp': {
        'type': String,
        'enum': [
            'T',
            'E',
            'H',
            'D',
            'N',
            'O',
            'OZ'
        ]
    },
    'calcMode': {
        'type': String,
        'enum': [
            'BYMVARATE',
            'SRP',
            'MMSRP',
            'OPERATIONAMOUNT'
        ]
    },
    'calcModeImp': {
        'type': String,
        'enum': [
            'OPERATIONAMOUNT'
        ]
    },
    'calcModeExp': {
        'type': String,
        'enum': [
            'OPERATIONAMOUNT'
        ]
    },
    'rate': Number,
    'rateImp': Number,
    'rateExp': Number,
    'discountRateForMonoPhase': Number,
    'icmsBaseDiscount': Number,
    'icmsBaseDiscountImp': Number,
    'icmsBaseDiscountExp': Number,
    'msrp': Number,
    'mvaRate': Number,
    'msrpUnit': String,
    'icmsLegalReason': String,
    'icmsLegalReasonImp': String,
    'icmsLegalReasonExp': String,
    'fcpRate': Number,
    'icmsSTConf': {
        'icmsStLegalReason': String,
        'hasReductionOfMVAForSimples': Boolean,
        'reductionOfMVAForSimples': Number,
        'reductionOfMVAForSimplesLegalReason': String,
        'calcMode': {
            'type': String,
            'enum': [
                'BYMVARATE',
                'SRP',
                'MSRP'
            ]
        },
        'mvaRate': Number,
        'icmsStBaseDiscount': Number,
        'srp': Number,
        'srpUnit': String
    },
    'icmsInterStateConf': [
        IcmsConfInterState
    ]
};

export const CompanyIcmsConfByState = Object.assign({}, IcmsConfByState, {
    'companyId': String
});

export const IcmsTaxConfBase = {
    'state': StateEnum,
    'icmsCSOSN': {
        'type': String,
        'enum': [
            'T',
            'E',
            'N',
            'O',
            'OZ'
        ]
    },
    'icmsCST': {
        'type': String,
        'enum': [
            'T',
            'E',
            'H',
            'D',
            'N',
            'O',
            'OZ'
        ]
    },
    'deferralrate': Number,
    'messageCode': String
};

export const IcmsTaxConf = Object.assign({}, IcmsTaxConfBase, {
    'sameforAllDestination': Boolean,
    'relationShip': [
        IcmsTaxConfBase
    ]
});

export const TaxConf = {
    'code': {
        'type': String,
        'required': true
    },
    'class': String,
    'stockImpact': Boolean,
    'financialImpact': Boolean,
    'cstIPI': {
        'type': String,
        'enum': [
            'T',
            'Z',
            'E',
            'H',
            'N',
            'I',
            'O',
            'OZ',
            'R'
        ]
    },
    'ipiLegalTaxClass': String,
    'lookupIPIFromReferredTransaction': Boolean,
    'accruablePISTaxation': {
        'type': String,
        'enum': [
            'T',
            'Z',
            'E',
            'H',
            'N',
            'O',
            'OZ'
        ]
    },
    'pisExemptLegalReasonCode': String,
    'pisExemptLegalReason': String,
    'accruableCOFINSTaxation': {
        'type': String,
        'enum': [
            'T',
            'Z',
            'E',
            'H',
            'N',
            'O',
            'OZ'
        ]
    },
    'cofinsExemptLegalReasonCode': String,
    'cofinsExemptLegalReason': String,
    'allowIPIcreditWhenInGoing': Boolean,
    'icmsConf': [
        IcmsTaxConf
    ]
};

export const CfopConf = Object.assign({}, TaxConf, {
    'name': String,
    'class': String,
    'description': String,
    'wayType': {
        'type': String,
        'enum': [
            'in',
            'out'
        ]
    },
    'codInState': Number,
    'codOtherState': Number,
    'codOtherCountry': Number,
    'productType': {
        'type': String,
        'enum': [
            'FOR PRODUCT',
            'FOR MERCHANDISE',
            'NO RESTRICTION'
        ]
    },
    'operationToTaxPayerOtherState': Boolean,
    'operationWithST': Boolean,
    'operationToFreeZone': Boolean,
    'specificForProductClass': {
        'type': String,
        'enum': [
            'OTHERS',
            'COMMUNICATION',
            'ENERGY',
            'TRANSPORT',
            'FUEL AND LUBRICANT',
            'VEHICLE',
            'ALCOHOLIC BEVERAGES',
            'WEAPONS',
            'AMMO',
            'PERFUME',
            'TOBACCO'
        ]
    }
});

export const ProcessScenario = Object.assign({}, TaxConf, {
    'name': String,
    'description': String,
    'class': String,
    'type': {
        'type': String,
        'enum': [
            'SALES',
            'PURCHASE',
            'SALES_RETURN',
            'PURCHASE_RETURN',
            'TRANSFER_RETURN',
            'SHIPPING',
            'SHIPPING_RETURN',
            'TRANSFER',
            'RECEIPT_AJUSTE',
            'TRANSFER_AJUSTE'
        ]
    },
    'wayType': {
        'type': String,
        'enum': [
            'in',
            'out'
        ]
    },
    'goal': {
        'type': String,
        'enum': [
            'Normal',
            'Complementary',
            'Voided',
            'Replacement',
            'Return',
            'Adjustment'
        ]
    },
    'overWriteCFOP': Boolean,
    'eDocCreatorReference': Boolean,
    'cfops': [
        CfopConf
    ]
});

export const CompanyProcessScenario = Object.assign({}, ProcessScenario, {
    'companyId': String
});

export const CompanyTaxTypeRate = Object.assign({}, TaxTypeRate, {
    'companyId': String
});

export const ItemSimple = {
    'companyId': String,
    'code': {
        'type': String,
        'required': true
    },
    'agast': {
        'type': String,
        'required': true
    },
    'description': String
};

export const ItemGoods = Object.assign({}, ItemSimple, {
    'sealCode': String,
    'nFCI': String,
    'isIcmsStSubstitute': Boolean,
    'source': {
        'type': String,
        'enum': [
            '0',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8'
        ]
    },
    'productType': {
        'type': String,
        'enum': [
            'FOR PRODUCT',
            'FOR MERCHANDISE',
            'NO RESTRICTION',
            'SERVICE',
            'FEEDSTOCK',
            'FIXED ASSETS',
            'PACKAGING',
            'PRODUCT IN PROCESS',
            'SUBPRODUCT',
            'INTERMEDIATE PRODUCT',
            'MATERIAL FOR USAGE AND CONSUMPTION',
            'OTHER INPUTS'
        ]
    },
    'manufacturerEquivalent': Boolean,
    'appropriateIPIcreditWhenInGoing': Boolean,
    'appropriateICMScreditWhenInGoing': Boolean,
    'usuallyAppropriatePISCOFINSCredit': Boolean,
    'isPisCofinsEstimatedCredit': Boolean,
    'piscofinsRevenueType': {
        'type': String,
        'enum': [
            '01',
            '02',
            '03',
            '04',
            '05',
            '06',
            '07'
        ]
    },
    'icmsBaseDiscountForMonoPhaseSocialContr': Number,
    'cean': String,
    'nve': String,
    'salesUnit': String,
    'salesUnitIPIfactor': Number,
    'salesUnitIcmsfactor': Number,
    'salesUnitIcmsStfactor': Number,
    'salesUnitPisCofinsfactor': Number,
    'purchaseUnit': String,
    'purchaseUnitIPIfactor': Number,
    'purchaseUnitIcmsfactor': Number,
    'purchaseUnitIcmsStfactor': Number,
    'purchaseUnitPisCofinsfactor': Number,
    'firstUse': Boolean,
    'ceanTax': String,
    'comexTaxUnitFactorOutGoing': Number,
    'comexTaxUnitOutGoing': String,
    'comexTaxUnitFactorInComming': Number,
    'comexTaxUnitInComming': String,
    'iiExTaxCode': String,
    'iiExTaxCodeLegalReason': String
});

export const ItemService_CityTaxConf = {
    'hasCPOM': Boolean,
    'cityCode': {
        'type': String,
        'required': true
    },
    'serviceCode': {
        'type': String,
        'required': true
    },
    'isCustom': Boolean
};

export const ItemService = Object.assign({}, ItemSimple, {
    'withLaborAssignment': Boolean,
    'cityTaxConf': [
        ItemService_CityTaxConf
    ]
});

export const Address = {
    'street': String,
    'neighborhood': String,
    'zipcode': {
        'type': String,
        'required': true
    },
    'cityCode': String,
    'cityName': String,
    'state': String,
    'countryCode': String,
    'country': String,
    'number': String,
    'complement': String,
    'phone': String
};

export const Location = Object.assign({}, Address, {
    'companyId': String,
    'code': String,
    'type': {
        'type': String,
        'enum': [
            'ShipFrom',
            'ShipTo',
            'ServiceRendered'
        ]
    },
    'email': String,
    'federalTaxId': String,
    'stateTaxId': String,
    'secondaryStateTaxId': [
        {
            'stateTaxId': String,
            'state': StateEnum
        }
    ],
    'cityTaxId': String,
    'suframa': String,
    'mainActivity': {
        'type': String,
        'enum': [
            'commerce',
            'industry',
            'service'
        ]
    },
    'nfseProcessModel': {
        'type': String,
        'enum': [
            'edi',
            'xml',
            'rps'
        ]
    }
});

export const CompanyEntity = Object.assign({}, Entity, EntityLocation, {});

export const EntityEntry = {
    'name': String,
    'federalTaxId': String
};

export const EntityEntryList = [
    EntityEntry
];

export const eInvoiceReturn_Status = {
    'desc': String,
    'code': String
};

export const eInvoiceReturn_Obj = {
    'base64': String,
    'link': String
};

export const eInvoiceReturn_PDF = {
    'status': eInvoiceReturn_Status,
    'pdf': eInvoiceReturn_Obj
};

export const eInvoiceReturn = {
    'status': eInvoiceReturn_Status,
    'pdf': eInvoiceReturn_Obj,
    'xml': eInvoiceReturn_Obj
};

export const SefazDisablementIn = {
    'model': {
        'type': String,
        'enum': [
            'NFe',
            'NFCe'
        ]
    },
    'serie': {
        'type': Number,
        'required': true
    },
    'message': String,
    'init': {
        'type': Number,
        'required': true
    },
    'end': Number
};

export const SefazItPutIn = {
    'seq': Number,
    'message': String,
    'timeZone': String
};

export const SefazItDeleteIn = {
    'message': String,
    'timeZone': String
};

export const SefazItManifestIn = {
    'code': {
        'type': String,
        'enum': [
            '210200',
            '210210',
            '210220',
            '210240'
        ]
    },
    'message': String,
    'timeZone': String
};

export const HeaderForSefazGoods = {
    'documentCode': String,
    'participants': {
        'entity': EntityForGoods,
        'transporter': EntityForGoods,
        'required': true
    },
    'nfAccessKey': String,
    'nfceQrCode': String,
    'transactionModel': {
        'type': String,
        'enum': [
            '01',
            '1B',
            '02',
            '2D',
            '2E',
            '04',
            '06',
            '07',
            '08',
            '8B',
            '09',
            '10',
            '11',
            '13',
            '14',
            '15',
            '16',
            '18',
            '21',
            '22',
            '26',
            '27',
            '28',
            '29',
            '55',
            '57',
            '59',
            '60',
            '65'
        ]
    },
    'transactionClass': String,
    'currency': String,
    'companyLocation': {
        'type': String,
        'required': true
    },
    'transactionDate': String,
    'shippingDate': String,
    'additionalInfo': AdditionalInformation,
    'tpImp': {
        'type': String,
        'enum': [
            '0',
            '1',
            '2',
            '3',
            '4',
            '5'
        ]
    },
    'idDest': {
        'type': String,
        'enum': [
            0,
            1,
            2,
            3
        ]
    },
    'indPres': {
        'type': String,
        'enum': [
            '0',
            '1',
            '2',
            '3',
            '4',
            '9'
        ]
    },
    'invoiceNumber': Number,
    'invoiceSerial': Number,
    'defaultLocations': DefaultLocations,
    'transport': Transport,
    'nfRef': [
        NRef
    ],
    'payment': Payment,
    'purchaseInfo': PurchaseInfo,
    'export': ExportInfo
};

export const TaxDetailForSefaz = {
    'taxType': {
        'type': String,
        'enum': [
            'icms',
            'icmsSt',
            'icmsStSd',
            'icmsPartOwn',
            'icmsPartDest',
            'icmsDifaFCP',
            'icmsDifaDest',
            'icmsDifaRemet',
            'icmsRf',
            'icmsDeson',
            'icmsCredsn',
            'pis',
            'pisSt',
            'cofins',
            'cofinsSt',
            'ipi',
            'ipiReturned',
            'ii',
            'iof',
            'aproxtribCity',
            'aproxtribState',
            'aproxtribFed',
            'aproxtrib'
        ]
    },
    'calcBase': Number,
    'rate': Number,
    'tax': Number,
    'legalReason': String,
    'source': CSTTableAEnum,
    'cstB': CSTTableBEnum,
    'cst': String,
    'modBC': String,
    'pMVA': Number,
    'pRedBC': Number,
    'pBCOp': Number,
    'ufst': StateEnum,
    'calcMode': CalcModelEnum,
    'legalTaxClass': Number,
    'legalTaxClassDC': Number,
    'cnpjProd': String,
    'sealCode': String,
    'sealQuantity': String,
    'icmsInterPartRate': Number,
    'icmsSesonReason': ICMSSesonReason,
    'perQuantityReturned': Number
};

export const AgastExtendForSefaz = {
    'hsCode': String,
    'ex': Number,
    'cest': String,
    'cean': String,
    'nve': String,
    'unit': String,
    'unitTaxable': String,
    'nFCI': String,
    'goal': {
        'type': String,
        'enum': [
            'Normal',
            'Complementary',
            'Voided',
            'Replacement',
            'Return',
            'Adjustment'
        ]
    },
    'icmsSt': Number,
    'ipi': Number
};

export const LineForSefazGoods = {
    'lineCode': {
        'type': Number,
        'required': true
    },
    'itemCode': {
        'type': String,
        'required': true
    },
    'avalaraGoodsAndServicesType': String,
    'numberOfItems': {
        'type': Number,
        'required': true
    },
    'returnedPercentageAmount': Number,
    'lineUnitPrice': Number,
    'lineAmount': {
        'type': Number,
        'required': true
    },
    'itemDescription': {
        'type': String,
        'required': true
    },
    'lineTaxedDiscount': Number,
    'lineUntaxedDiscount': Number,
    'operationTypeReceiptMap': String,
    'cfop': Number,
    'hasStockImpact': Boolean,
    'hasFinantialImpact': Boolean,
    'freightAmount': Number,
    'insuranceAmount': Number,
    'otherCostAmount': Number,
    'indTotType': Boolean,
    'referencedItem': {
        'refNFe': String,
        'lineCode': Number
    },
    'orderNumber': String,
    'orderItemNumber': String,
    'fciNumber': String,
    'recopiNumber': String,
    'infAdProd': String,
    'vehicle': Vehicle,
    'medicine': Medicine,
    'weapon': Weapon,
    'fuel': Fuel,
    'entityIsIcmsSubstitute': Boolean,
    'isTransportIcmsWithheld': Boolean,
    'taxableQtUnit': Number,
    'icmsTaxRelief': {
        'reasonCode': {
            'type': String,
            'enum': [
                '1',
                '3',
                '4',
                '5',
                '6',
                '7',
                '8',
                '9',
                '10',
                '11',
                '12',
                '16'
            ],
            'required': true
        },
        'taxBaseDiscount': Number,
        'taxAmount': Number
    },
    'export': [
        {
            'drawbackNumber': String,
            'indExport': {
                'registerNumber': {
                    'type': String,
                    'required': true
                },
                'accessKey': {
                    'type': String,
                    'required': true
                },
                'quantity': {
                    'type': Number,
                    'required': true
                }
            }
        }
    ],
    'di': [
        {
            'customsValue': Number,
            'diNumber': {
                'type': String,
                'required': true
            },
            'registerDateDI': {
                'type': String,
                'required': true
            },
            'clearanceSite': {
                'type': String,
                'required': true
            },
            'clearanceState': StateEnum,
            'clearanceDate': String,
            'transportDIType': {
                'type': String,
                'enum': [
                    '1',
                    '2',
                    '3',
                    '4',
                    '5',
                    '6',
                    '7',
                    '8',
                    '9',
                    '10'
                ],
                'required': true
            },
            'afrmmValue': Number,
            'intermediateType': {
                'type': String,
                'enum': [
                    '1',
                    '2',
                    '3'
                ],
                'required': true
            },
            'buyerFederalTaxID': String,
            'buyerState': StateEnum,
            'exporterCode': String,
            'adi': [
                {
                    'addNumber': {
                        'type': Number,
                        'required': true
                    },
                    'sequentialNumber': {
                        'type': Number,
                        'required': true
                    },
                    'manufacturerCode': {
                        'type': String,
                        'required': true
                    },
                    'adiDiscount': Number,
                    'drawbackNumber': String
                }
            ]
        }
    ],
    'taxDetails': [
        TaxDetailForSefaz
    ],
    'extend': AgastExtendForSefaz
};

export const TaxByTypeSummaryForSefazGoods = {
    'calcBase': Number,
    'tax': {
        'type': Number,
        'required': true
    }
};

export const CalculatedTaxSummaryForSefazGoods = {
    'numberOfLines': Number,
    'taxedDiscount': Number,
    'untaxedDiscount': Number,
    'subtotal': {
        'type': Number,
        'required': true
    },
    'totalTax': Number,
    'grandTotal': Number,
    'totalInvoice': Number,
    'taxByType': {
        'icms': TaxByTypeSummaryForSefazGoods,
        'icmsSt': TaxByTypeSummaryForSefazGoods,
        'icmsStSd': TaxByTypeSummaryForSefazGoods,
        'icmsPartOwn': TaxByTypeSummaryForSefazGoods,
        'icmsPartDest': TaxByTypeSummaryForSefazGoods,
        'icmsDifaFCP': TaxByTypeSummaryForSefazGoods,
        'icmsDifaDest': TaxByTypeSummaryForSefazGoods,
        'icmsDifaRemet': TaxByTypeSummaryForSefazGoods,
        'icmsRf': TaxByTypeSummaryForSefazGoods,
        'icmsDeson': TaxByTypeSummaryForSefazGoods,
        'icmsCredsn': TaxByTypeSummaryForSefazGoods,
        'pis': TaxByTypeSummaryForSefazGoods,
        'pisSt': TaxByTypeSummaryForSefazGoods,
        'cofins': TaxByTypeSummaryForSefazGoods,
        'cofinsSt': TaxByTypeSummaryForSefazGoods,
        'ipi': TaxByTypeSummaryForSefazGoods,
        'ipiReturned': TaxByTypeSummaryForSefazGoods,
        'ii': TaxByTypeSummaryForSefazGoods,
        'iof': TaxByTypeSummaryForSefazGoods,
        'aproxtribState': TaxByTypeSummaryForSefazGoods,
        'aproxtribFed': TaxByTypeSummaryForSefazGoods,
        'required': true
    }
};

export const TransactionForSefazGoods = {
    'header': HeaderForSefazGoods,
    'lines': [
        LineForSefazGoods
    ],
    'calculatedTaxSummary': CalculatedTaxSummaryForSefazGoods
};

export const EntityForNfse = {
    'name': String,
    'email': String,
    'cnpjcpf': String,
    'cityTaxId': String,
    'stateTaxId': String,
    'suframa': String,
    'phone': String,
    'adminProcess': String,
    'build': {
        'code': String,
        'art': String,
        'cei': String,
        'number': String
    }
};

export const EntityLocationForNfse = {
    'street': String,
    'neighborhood': String,
    'zipcode': {
        'type': String,
        'required': true
    },
    'cityCode': String,
    'cityName': String,
    'state': String,
    'countryCode': String,
    'country': String,
    'number': String,
    'complement': String
};

export const InstallmentCompleteForNfse = {
    'date': String,
    'netAmount': Number
};

export const HeaderForNfse = {
    'documentCode': String,
    'companyLocation': String,
    'rpsNumber': Number,
    'rpsSerie': String,
    'discriminationIn': String,
    'entity': EntityForNfse,
    'defaultLocations': EntityLocationForNfse,
    'serviceRendered': ServiceRendered,
    'payment': {
        'terms': PaymentTerms,
        'installments': [
            InstallmentCompleteForNfse
        ]
    }
};

export const TaxDetailForNfse = {
    'taxType': {
        'type': String,
        'enum': [
            'aproxtribCity',
            'aproxtribFed',
            'pis',
            'pisRf',
            'cofins',
            'cofinsRf',
            'csll',
            'csllRf',
            'irrf',
            'inss',
            'inssRf',
            'iss',
            'issRf',
            'irpj'
        ]
    },
    'calcBase': Number,
    'rate': Number,
    'tax': Number
};

export const AgastExtendForNfse = {
    'hsCode': String,
    'codTribMun': String,
    'issDueatDestination': Boolean,
    'cnaeCode': String
};

export const LineForNfse = {
    'lineCode': Number,
    'itemCode': {
        'type': String,
        'required': true
    },
    'numberOfItems': Number,
    'lineAmount': Number,
    'itemDescription': String,
    'lineTaxedDiscount': Number,
    'lineUntaxedDiscount': Number,
    'withLaborAssignment': Boolean,
    'taxDeductions': {
        'iss': Number
    },
    'lineNetValue': Number,
    'cst': {
        'type': String,
        'enum': [
            '01',
            '02',
            '03',
            '04',
            '05',
            '21',
            '22',
            '23',
            '24',
            '25',
            '40',
            '90'
        ]
    },
    'cstRf': {
        'type': String,
        'enum': [
            '61',
            '62',
            '63',
            '64',
            '65',
            '66',
            '67',
            '68',
            '69',
            '70',
            '71',
            '72',
            '90'
        ]
    },
    'taxDetails': [
        TaxDetailForNfse
    ],
    'extend': AgastExtendForNfse
};

export const TransactionForNfse = {
    'header': HeaderForNfse,
    'line': LineForNfse
};

export const IssConfByCity = {
    'cityCode': {
        'type': Number,
        'required': true
    },
    'name': String,
    'state': StateEnum
};

export const IssConfService_TaxRateItem = {
    'taxType': String,
    'rateType': String,
    'rate': Number,
    'isExempt': Boolean,
    'discount': Number,
    'zone1': Number,
    'zone2': Number,
    'period': {
        'startDate': String,
        'expirationDate': String
    },
    'reason': String,
    'message': String
};

export const IssConfService_TaxRate = {
    'ISS': IssConfService_TaxRateItem,
    'ISS_RF': IssConfService_TaxRateItem,
    'ISS_CPOM': IssConfService_TaxRateItem
};

export const IssConfService = {
    'companyId': String,
    'inheritedFrom': String,
    'cityCode': {
        'type': Number,
        'required': true
    },
    'serviceCode': {
        'type': String,
        'required': true
    },
    'description': String,
    'serviceAgasts': [
        String
    ],
    'issTaxation': {
        'type': String,
        'enum': [
            'T',
            'E',
            'F',
            'A',
            'L',
            'I'
        ]
    },
    'issWhDestOtherCities': Boolean,
    'issWhDestSameCity': Boolean,
    'issWhOriginUnregSeller': Boolean,
    'taxRate': IssConfService_TaxRate
};

export const IpbtConfItem = {
    'state': StateEnum,
    'federalTax': Number,
    'importTax': Number,
    'stateTax': Number,
    'cityTax': Number,
    'source': String
};

export const IbptConf = {
    'code': String,
    'description': String,
    'list': [
        IpbtConfItem
    ]
};

export const CsvIbptList = [
    [
        String
    ]
];