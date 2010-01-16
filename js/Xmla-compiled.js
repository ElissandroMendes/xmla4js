(function(){var v="http://schemas.xmlsoap.org/soap/",w=v+"envelope/",n="SOAP-ENV",F="xmlns:"+n+'="'+w+'"',x=n+':encodingStyle="'+v+'encoding/"',y="urn:schemas-microsoft-com:",z=y+"xml-analysis",G='xmlns="'+z+'"',H="sql",I=y+"xml-sql",A="http://www.w3.org/2001/XMLSchema",B="xsd",J="http://www.w3.org/2001/XMLSchema-instance",K="xsi",r=z+":rowset",L=window.ActiveXObject?true:false;function M(a){var b;b=L?new ActiveXObject("MSXML2.XMLHTTP.3.0"):new XMLHttpRequest;b.open("POST",a.url,a.async);var d=false;
function c(){d=true;switch(b.readyState){case 0:a.aborted(b);break;case 4:b.status===200?a.complete(b):a.error(Xmla.Exception._newError("HTTP_ERROR","_ajax",a));break}}b.onreadystatechange=c;b.setRequestHeader("Content-Type","text/xml");b.send(a.data);!a.async&&!d&&c.call(b);return b}function j(a){return typeof a==="undefined"}function t(a){return typeof a==="function"}function N(a){return typeof a==="string"}function O(a){return typeof a==="number"}function P(a){return typeof a==="object"}function C(a){return a.replace(/\&/g,
"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function m(a,b,d,c){return t(a.getElementsByTagNameNS)?a.getElementsByTagNameNS(b,c):d?a.getElementsByTagName(d+":"+c):a.getElementsByTagName(c)}function D(a,b,d,c){return t(a.getAttributeNS)?a.getAttributeNS(b,c):d?a.getAttribute(d+":"+c):a.getAttribute(c)}function u(a,b,d,c){c||(c="");var e="\n"+c+"<"+a+">";if(d){var f;e+="\n"+c+" <"+b+">";for(var g in d)if(d.hasOwnProperty(g)){f=d[g];e+="\n"+c+"  <"+g+">";if(typeof f==="array")for(var i,o=0,s=
f.length;o<s;o++){i=f[o];e+="<Value>"+C(i)+"</Value>"}else e+=C(f);e+="</"+g+">"}e+="\n"+c+" </"+b+">"}e+="\n"+c+"</"+a+">";return e}var E="RequestType";function Q(a){var b="",d=a.method;b+="\n<"+n+":Envelope "+F+" "+x+">\n <"+n+":Body>\n  <"+d+" "+G+" "+x+">";var c=null;switch(d){case Xmla.METHOD_DISCOVER:if(j(a.requestType))c=Xmla.Exception._newError("MISSING_REQUEST_TYPE","Xmla._getXmlaSoapMessage",a);else b+="\n   <"+E+">"+a.requestType+"</"+E+">"+u("Restrictions","RestrictionList",a.restrictions,
"   ")+u("Properties","PropertyList",a.properties,"   ");break;case Xmla.METHOD_EXECUTE:if(j(a.statement))c=Xmla.Exception._newError("MISSING_REQUEST_TYPE","Xmla._getXmlaSoapMessage",a);else b+="\n   <Command>\n    <Statement>"+a.statement+"</Statement>\n   </Command>"+u("Properties","PropertyList",a.properties,"   ");break;default:}c!==null&&c._throw();b+="\n  </"+d+">\n </"+n+":Body>\n</"+n+":Envelope>";return b}function h(a,b,d){if(b&&!a)a={};for(var c in b)if(b.hasOwnProperty(c))if(d||j(a[c]))a[c]=
b[c];return a}Xmla=function(a){this.listeners={};this.listeners[Xmla.EVENT_REQUEST]=[];this.listeners[Xmla.EVENT_SUCCESS]=[];this.listeners[Xmla.EVENT_ERROR]=[];this.listeners[Xmla.EVENT_DISCOVER]=[];this.listeners[Xmla.EVENT_DISCOVER_SUCCESS]=[];this.listeners[Xmla.EVENT_DISCOVER_ERROR]=[];this.listeners[Xmla.EVENT_EXECUTE]=[];this.listeners[Xmla.EVENT_EXECUTE_SUCCESS]=[];this.listeners[Xmla.EVENT_EXECUTE_ERROR]=[];this.options=h(h({},Xmla.defaultOptions,true),a,true);return this};Xmla.defaultOptions=
{requestTimeout:30000,async:false};Xmla.METHOD_DISCOVER="Discover";Xmla.METHOD_EXECUTE="Execute";var p="DISCOVER_",k="MDSCHEMA_",q="DBSCHEMA_";Xmla.DISCOVER_DATASOURCES=p+"DATASOURCES";Xmla.DISCOVER_PROPERTIES=p+"PROPERTIES";Xmla.DISCOVER_SCHEMA_ROWSETS=p+"SCHEMA_ROWSETS";Xmla.DISCOVER_ENUMERATORS=p+"ENUMERATORS";Xmla.DISCOVER_KEYWORDS=p+"KEYWORDS";Xmla.DISCOVER_LITERALS=p+"LITERALS";Xmla.DBSCHEMA_CATALOGS=q+"CATALOGS";Xmla.DBSCHEMA_COLUMNS=q+"COLUMNS";Xmla.DBSCHEMA_PROVIDER_TYPES=q+"PROVIDER_TYPES";
Xmla.DBSCHEMA_SCHEMATA=q+"SCHEMATA";Xmla.DBSCHEMA_TABLES=q+"TABLES";Xmla.DBSCHEMA_TABLES_INFO=q+"TABLES_INFO";Xmla.MDSCHEMA_ACTIONS=k+"ACTIONS";Xmla.MDSCHEMA_CUBES=k+"CUBES";Xmla.MDSCHEMA_DIMENSIONS=k+"DIMENSIONS";Xmla.MDSCHEMA_FUNCTIONS=k+"FUNCTIONS";Xmla.MDSCHEMA_HIERARCHIES=k+"HIERARCHIES";Xmla.MDSCHEMA_LEVELS=k+"LEVELS";Xmla.MDSCHEMA_MEASURES=k+"MEASURES";Xmla.MDSCHEMA_MEMBERS=k+"MEMBERS";Xmla.MDSCHEMA_PROPERTIES=k+"PROPERTIES";Xmla.MDSCHEMA_SETS=k+"SETS";Xmla.EVENT_REQUEST="request";Xmla.EVENT_SUCCESS=
"success";Xmla.EVENT_ERROR="error";Xmla.EVENT_EXECUTE="execute";Xmla.EVENT_EXECUTE_SUCCESS="executesuccess";Xmla.EVENT_EXECUTE_ERROR="executeerror";Xmla.EVENT_DISCOVER="discover";Xmla.EVENT_DISCOVER_SUCCESS="discoversuccess";Xmla.EVENT_DISCOVER_ERROR="discovererror";Xmla.EVENT_GENERAL=[Xmla.EVENT_REQUEST,Xmla.EVENT_SUCCESS,Xmla.EVENT_ERROR];Xmla.EVENT_DISCOVER_ALL=[Xmla.EVENT_DISCOVER,Xmla.EVENT_DISCOVER_SUCCESS,Xmla.EVENT_DISCOVER_ERROR];Xmla.EVENT_EXECUTE_ALL=[Xmla.EVENT_EXECUTE,Xmla.EVENT_EXECUTE_SUCCESS,
Xmla.EVENT_EXECUTE_ERROR];Xmla.EVENT_ALL=[].concat(Xmla.EVENT_GENERAL,Xmla.EVENT_DISCOVER_ALL,Xmla.EVENT_EXECUTE_ALL);Xmla.PROP_DATASOURCEINFO="DataSourceInfo";Xmla.PROP_CATALOG="Catalog";Xmla.PROP_CUBE="Cube";Xmla.PROP_FORMAT="Format";Xmla.PROP_FORMAT_TABULAR="Tabular";Xmla.PROP_FORMAT_MULTIDIMENSIONAL="Multidimensional";Xmla.PROP_AXISFORMAT="AxisFormat";Xmla.PROP_AXISFORMAT_TUPLE="TupleFormat";Xmla.PROP_AXISFORMAT_CLUSTER="ClusterFormat";Xmla.PROP_AXISFORMAT_CUSTOM="CustomFormat";Xmla.PROP_CONTENT=
"Content";Xmla.PROP_CONTENT_DATA="Data";Xmla.PROP_CONTENT_NONE="None";Xmla.PROP_CONTENT_SCHEMA="Schema";Xmla.PROP_CONTENT_SCHEMADATA="SchemaData";Xmla.prototype={listeners:null,soapMessage:null,response:null,responseText:null,responseXml:null,setOptions:function(a){h(this.options,a,true)},addListener:function(a){var b=a.events;j(b)&&Xmla.Exception._newError("NO_EVENTS_SPECIFIED","Xmla.addListener",a)._throw();if(N(b))b=b==="all"?Xmla.EVENT_ALL:b.split(",");b instanceof Array||Xmla.Exception._newError("WRONG_EVENTS_FORMAT",
"Xmla.addListener",a)._throw();for(var d=b.length,c,e=0;e<d;e++){c=b[e].replace(/\s+/g,"");(c=this.listeners[c])||Xmla.Exception._newError("UNKNOWN_EVENT","Xmla.addListener",a)._throw();if(t(a.handler)){if(!P(a.scope))a.scope=window;c.push(a)}else Xmla.Exception._newError("INVALID_EVENT_HANDLER","Xmla.addListener",a)._throw()}},_fireEvent:function(a,b,d){var c=this.listeners[a];c||Xmla.Exception._newError("UNKNOWN_EVENT","Xmla._fireEvent",a)._throw();var e=c.length,f=true;if(e)for(var g,i=0;i<e;i++){g=
c[i];g=g.handler.call(g.scope,a,b,this);if(d&&g===false){f=false;break}}else a==="error"&&b.exception._throw();return f},request:function(a){var b=this;this.response&&this.response.close();this.responseXml=this.responseText=this.response=null;a.url=j(a.url)?this.options.url:a.url;if(j(a.url)){ex=Xmla.Exception._newError("MISSING_URL","Xmla.request",a);ex._throw()}a.properties=h(a.properties,this.options.properties,false);a.restrictions=h(a.restrictions,this.options.restrictions,false);a.async=j(a.async)?
this.options.async:a.async;a.requestTimeout=j(a.requestTimeout)?this.options.requestTimeout:a.requestTimeout;var d=Q(a);this.soapMessage=d;d={async:a.async,timeout:a.requestTimeout,data:d,error:function(){a.exception=exeception;b._requestError(a)},complete:function(c){a.xhr=c;b._requestSuccess(a)},url:a.url};if(a.username)d.username=a.username;if(a.password)d.password=a.password;if(this._fireEvent(Xmla.EVENT_REQUEST,a,true)&&(a.method==Xmla.METHOD_DISCOVER&&this._fireEvent(Xmla.EVENT_DISCOVER,a)||
a.method==Xmla.METHOD_EXECUTE&&this._fireEvent(Xmla.EVENT_EXECUTE,a)))d=M(d);return this.response},_requestError:function(a){this._fireEvent("error",a)},_requestSuccess:function(a){var b=a.xhr;this.responseXML=b.responseXML;this.responseText=b.responseText;b=a.method;var d=m(this.responseXML,w,n,"Fault");if(d.length){d=d.item(0);a.exception=new Xmla.Exception(Xmla.Exception.TYPE_ERROR,d.getElementsByTagName("faultcode").item(0).childNodes.item(0).data,d.getElementsByTagName("faultstring").item(0).childNodes.item(0).data,
null,"_requestSuccess",a);switch(b){case Xmla.METHOD_DISCOVER:this._fireEvent(Xmla.EVENT_DISCOVER_ERROR,a);break;case Xmla.METHOD_EXECUTE:this._fireEvent(Xmla.EVENT_EXECUTE_ERROR,a);break}this._fireEvent(Xmla.EVENT_ERROR,a)}else{switch(b){case Xmla.METHOD_DISCOVER:var c=new Xmla.Rowset(this.responseXML,a.requestType);this.response=a.rowset=c;this._fireEvent(Xmla.EVENT_DISCOVER_SUCCESS,a);break;case Xmla.METHOD_EXECUTE:b=a.properties[Xmla.PROP_FORMAT];switch(b){case Xmla.PROP_FORMAT_TABULAR:c=new Xmla.Rowset(this.responseXML);
break;case Xmla.PROP_FORMAT_MULTIDIMENSIONAL:break}this.response=a.resultset=c;this._fireEvent(Xmla.EVENT_EXECUTE_SUCCESS,a);break}this._fireEvent(Xmla.EVENT_SUCCESS,a)}},execute:function(a){var b=a.properties;if(j(b)){b={};a.properties=b}if(j(b[Xmla.PROP_CONTENT]))b[Xmla.PROP_CONTENT]=Xmla.PROP_CONTENT_SCHEMADATA;if(j(b[Xmla.PROP_FORMAT]))a.properties[Xmla.PROP_FORMAT]=Xmla.PROP_FORMAT_MULTIDIMENSIONAL;a=h(a,{method:Xmla.METHOD_EXECUTE},true);return this.request(a)},executeTabular:function(a){if(!a.properties)a.properties=
{};a.properties[Xmla.PROP_FORMAT]=Xmla.PROP_FORMAT_TABULAR;return this.execute(a)},executeMultiDimensional:function(a){if(!a.properties)a.properties={};a.properties[Xmla.PROP_FORMAT]=Xmla.PROP_FORMAT_MULTIDIMENSIONAL;return this.execute(a)},discover:function(a){a=h(a,{method:Xmla.METHOD_DISCOVER},true);return this.request(a)},discoverDataSources:function(a){a=h(a,{requestType:Xmla.DISCOVER_DATASOURCES},true);return this.discover(a)},discoverProperties:function(a){a=h(a,{requestType:Xmla.DISCOVER_PROPERTIES},
true);return this.discover(a)},discoverSchemaRowsets:function(a){a=h(a,{requestType:Xmla.DISCOVER_SCHEMA_ROWSETS},true);return this.discover(a)},discoverEnumerators:function(a){a=h(a,{requestType:Xmla.DISCOVER_ENUMERATORS},true);return this.discover(a)},discoverKeywords:function(a){a=h(a,{requestType:Xmla.DISCOVER_KEYWORDS},true);return this.discover(a)},discoverLiterals:function(a){a=h(a,{requestType:Xmla.DISCOVER_LITERALS},true);return this.discover(a)},discoverDBCatalogs:function(a){a=h(a,{requestType:Xmla.DBSCHEMA_CATALOGS},
true);return this.discover(a)},discoverDBColumns:function(a){a=h(a,{requestType:Xmla.DBSCHEMA_COLUMNS},true);return this.discover(a)},discoverDBProviderTypes:function(a){a=h(a,{requestType:Xmla.DBSCHEMA_PROVIDER_TYPES},true);return this.discover(a)},discoverDBSchemata:function(a){a=h(a,{requestType:Xmla.DBSCHEMA_SCHEMATA},true);return this.discover(a)},discoverDBTables:function(a){a=h(a,{requestType:Xmla.DBSCHEMA_TABLES},true);return this.discover(a)},discoverDBTablesInfo:function(a){a=h(a,{requestType:Xmla.DBSCHEMA_TABLES_INFO},
true);return this.discover(a)},discoverMDActions:function(a){a=h(a,{requestType:Xmla.MDSCHEMA_ACTIONS},true);return this.discover(a)},discoverMDCubes:function(a){a=h(a,{requestType:Xmla.MDSCHEMA_CUBES},true);return this.discover(a)},discoverMDDimensions:function(a){a=h(a,{requestType:Xmla.MDSCHEMA_DIMENSIONS},true);return this.discover(a)},discoverMDFunctions:function(a){a=h(a,{requestType:Xmla.MDSCHEMA_FUNCTIONS},true);return this.discover(a)},discoverMDHierarchies:function(a){a=h(a,{requestType:Xmla.MDSCHEMA_HIERARCHIES},
true);return this.discover(a)},discoverMDLevels:function(a){a=h(a,{requestType:Xmla.MDSCHEMA_LEVELS},true);return this.discover(a)},discoverMDMeasures:function(a){a=h(a,{requestType:Xmla.MDSCHEMA_MEASURES},true);return this.discover(a)},discoverMDMembers:function(a){a=h(a,{requestType:Xmla.MDSCHEMA_MEMBERS},true);return this.discover(a)},discoverMDProperties:function(a){a=h(a,{requestType:Xmla.MDSCHEMA_PROPERTIES},true);return this.discover(a)},discoverMDSets:function(a){a=h(a,{requestType:Xmla.MDSCHEMA_SETS},
true);return this.discover(a)}};function R(a){a=m(a,A,B,"complexType");var b=a.length,d,c;for(c=0;c<b;c++){d=a.item(c);if(d.getAttribute("name")==="row")return d}return null}Xmla.Rowset=function(a,b){this._initData(a,b);return this};Xmla.Rowset.MD_DIMTYPE_UNKNOWN=0;Xmla.Rowset.MD_DIMTYPE_TIME=1;Xmla.Rowset.MD_DIMTYPE_MEASURE=2;Xmla.Rowset.MD_DIMTYPE_OTHER=3;Xmla.Rowset.MD_DIMTYPE_QUANTITATIVE=5;Xmla.Rowset.MD_DIMTYPE_ACCOUNTS=6;Xmla.Rowset.MD_DIMTYPE_CUSTOMERS=7;Xmla.Rowset.MD_DIMTYPE_PRODUCTS=8;
Xmla.Rowset.MD_DIMTYPE_SCENARIO=9;Xmla.Rowset.MD_DIMTYPE_UTILIY=10;Xmla.Rowset.MD_DIMTYPE_CURRENCY=11;Xmla.Rowset.MD_DIMTYPE_RATES=12;Xmla.Rowset.MD_DIMTYPE_CHANNEL=13;Xmla.Rowset.MD_DIMTYPE_PROMOTION=14;Xmla.Rowset.MD_DIMTYPE_ORGANIZATION=15;Xmla.Rowset.MD_DIMTYPE_BILL_OF_MATERIALS=16;Xmla.Rowset.MD_DIMTYPE_GEOGRAPHY=17;Xmla.Rowset.KEYS={};Xmla.Rowset.KEYS[Xmla.DBSCHEMA_CATALOGS]=["CATALOG_NAME"];Xmla.Rowset.KEYS[Xmla.DBSCHEMA_COLUMNS]=[];Xmla.Rowset.KEYS[Xmla.DBSCHEMA_PROVIDER_TYPES]=[];Xmla.Rowset.KEYS[Xmla.DBSCHEMA_SCHEMATA]=
[];Xmla.Rowset.KEYS[Xmla.DBSCHEMA_TABLES]=[];Xmla.Rowset.KEYS[Xmla.DBSCHEMA_TABLES_INFO]=[];Xmla.Rowset.KEYS[Xmla.DISCOVER_DATASOURCES]=["DataSourceName"];Xmla.Rowset.KEYS[Xmla.DISCOVER_ENUMERATORS]=["EnumName","ElementName"];Xmla.Rowset.KEYS[Xmla.DISCOVER_KEYWORDS]=["Keyword"];Xmla.Rowset.KEYS[Xmla.DISCOVER_LITERALS]=["LiteralName"];Xmla.Rowset.KEYS[Xmla.DISCOVER_PROPERTIES]=["PropertyName"];Xmla.Rowset.KEYS[Xmla.DISCOVER_SCHEMA_ROWSETS]=["SchemaName"];Xmla.Rowset.KEYS[Xmla.MDSCHEMA_ACTIONS]=[];
Xmla.Rowset.KEYS[Xmla.MDSCHEMA_CUBES]=["CATALOG_NAME","SCHEMA_NAME","CUBE_NAME"];Xmla.Rowset.KEYS[Xmla.MDSCHEMA_DIMENSIONS]=["CATALOG_NAME","SCHEMA_NAME","CUBE_NAME","DIMENSION_NAME"];Xmla.Rowset.KEYS[Xmla.MDSCHEMA_FUNCTIONS]=[];Xmla.Rowset.KEYS[Xmla.MDSCHEMA_HIERARCHIES]=["CATALOG_NAME","SCHEMA_NAME","CUBE_NAME","HIERARCHY_NAME"];Xmla.Rowset.KEYS[Xmla.MDSCHEMA_LEVELS]=[];Xmla.Rowset.KEYS[Xmla.MDSCHEMA_MEASURES]=["CATALOG_NAME","SCHEMA_NAME","CUBE_NAME","MEASURE_NAME"];Xmla.Rowset.KEYS[Xmla.MDSCHEMA_MEMBERS]=
[];Xmla.Rowset.KEYS[Xmla.MDSCHEMA_PROPERTIES]=[];Xmla.Rowset.KEYS[Xmla.MDSCHEMA_SETS]=[];Xmla.Rowset.prototype={_type:null,rows:null,numRows:null,fieldOrder:null,fields:null,_fieldCount:null,_initData:function(a,b){this._type=b;this.numRows=(this.rows=m(a,r,null,"row"))?this.rows.length:0;this.reset();this.fieldOrder=[];this.fields={};this._fieldCount=0;var d=R(a);if(d){a=m(d,A,B,"sequence").item(0);a=a.childNodes;d=a.length;for(var c,e,f,g,i,o,s=0;s<d;s++){c=a.item(s);if(c.nodeType==1){e=D(c,I,H,
"field");f=c.getAttribute("name");i=c.getAttribute("type");if(i==null&&this.row){g=this.row.getElementsByTagName(f);if(g.length)i=D(g.item(0),J,K,"type")}if(!i&&b==Xmla.DISCOVER_SCHEMA_ROWSETS&&f=="Restrictions")i="Restrictions";g=c.getAttribute("minOccurs");c=c.getAttribute("maxOccurs");o=this._getValueConverter(i);this.fields[e]={name:f,label:e,index:this._fieldCount++,type:i,jsType:o.jsType,minOccurs:j(g)?1:g,maxOccurs:j(c)?1:c==="unbounded"?Infinity:c,getter:this._createFieldGetter(f,o.func,g,
c)};this.fieldOrder.push(e)}}}else Xmla.Exception._newError("ERROR_PARSING_RESPONSE","Xmla.Rowset",a)._throw()},_boolConverter:function(a){return a==="true"?true:false},_intConverter:function(a){return parseInt(a,10)},_floatConverter:function(a){return parseFloat(a,10)},_textConverter:function(a){return a},_restrictionsConverter:function(a){return a},_arrayConverter:function(a,b){for(var d=[],c=a.length,e,f=0;f<c;f++){e=a.item(f);d.push(b(this._elementText(e)))}return d},_elementText:function(a){if(a.innerText)return a.innerText;
else if(a.textContent)return a.textContent;else{var b="";a=a.childNodes;for(var d=a.length,c=0;c<d;c++)b+=a.item(c).data;return b}},_getValueConverter:function(a){var b={};switch(a){case "xsd:boolean":b.func=this._boolConverter;b.jsType="boolean";break;case "xsd:decimal":case "xsd:double":case "xsd:float":b.func=this._floatConverter;b.jsType="number";break;case "xsd:int":case "xsd:integer":case "xsd:nonPositiveInteger":case "xsd:negativeInteger":case "xsd:nonNegativeInteger":case "xsd:positiveInteger":case "xsd:short":case "xsd:byte":case "xsd:long":case "xsd:unsignedLong":case "xsd:unsignedInt":case "xsd:unsignedShort":case "xsd:unsignedByte":b.func=
this._intConverter;b.jsType="number";break;case "xsd:string":b.func=this._textConverter;b.jsType="string";break;case "Restrictions":b.func=this._restrictionsConverter;b.jsType="object";break;default:b.func=this._textConverter;b.jsType="object";break}return b},_createFieldGetter:function(a,b,d,c){if(d===null)d="1";if(c===null)c="1";var e=this,f;if(c==="1")if(d==="1")f=function(){var g=m(this.row,r,null,a);return b(e._elementText(g.item(0)))};else{if(d==="0")f=function(){var g=m(this.row,r,null,a);
return g.length?b(e._elementText(g.item(0))):null}}else if(d==="1")f=function(){var g=m(this.row,r,null,a);return e._arrayConverter(g,b)};else if(d==="0")f=function(){var g=m(this.row,r,null,a);return g.length?e._arrayConverter(g,b):null};return f},getType:function(){return this._type},getFields:function(){for(var a=[],b=this._fieldCount,d=this.fieldOrder,c=0;c<b;c++)a[c]=this.fieldDef(d[c]);return a},getFieldNames:function(){for(var a=[],b=0,d=this.fieldCount();b<d;b++)a[b]=this.fieldOrder[b];return a},
hasMoreRows:function(){return this.numRows>this.rowIndex},next:function(){this.row=this.rows.item(++this.rowIndex)},curr:function(){return this.rowIndex},rowCount:function(){return this.numRows},reset:function(){this.rowIndex=0;this.row=this.hasMoreRows()?this.rows.item(this.rowIndex):null},fieldDef:function(a){var b=this.fields[a];j(b)&&Xmla.Exception._newError("INVALID_FIELD","Xmla.Rowset.fieldDef",a)._throw();return b},fieldIndex:function(a){a=this.fieldDef(a);return a.index},fieldName:function(a){var b=
this.fieldOrder[a];j(b)&&Xmla.Exception._newError("INVALID_FIELD","Xmla.Rowset.fieldDef",a)._throw();return b},fieldVal:function(a){if(O(a))a=this.fieldName(a);a=this.fieldDef(a);return a.getter.call(this)},fieldCount:function(){return this._fieldCount},close:function(){this.rows=this.row=null},readAsArray:function(){var a=[],b=this.fields,d,c;for(d in b)if(b.hasOwnProperty(d)){c=b[d];a[c.index]=c.getter.call(this)}return a},fetchAsArray:function(){var a;if(this.hasMoreRows()){a=this.readAsArray();
this.next()}else a=false;return a},readAsObject:function(){var a={},b=this.fields,d,c;for(d in b)if(b.hasOwnProperty(d)){c=b[d];a[d]=c.getter.call(this)}return a},fetchAsObject:function(){var a;if(this.hasMoreRows()){a=this.readAsObject();this.next()}else a=false;return a},fetchCustom:function(a){if(this.hasMoreRows()){a=a.call(this);this.next()}else a=false;return a},fetchAllAsArray:function(a){var b;for(a||(a=[]);b=this.fetchAsArray();)a.push(b);return a},fetchAllAsObject:function(a){var b;for(a||
(a=[]);b=this.fetchAsObject();)a.push(b);return a},fetchAllCustom:function(a,b){var d;for(a||(a=[]);d=this.fetchCustom(b);)a.push(d);return a},mapAsObject:function(a,b,d){var c,e;a=a;for(var f=0,g=b.length,i=g-1;f<g;f++){c=b[f];c=d[c];if(e=a[c])if(f===i)if(e instanceof Array)e.push(d);else a[c]=[e,d];else a=e;else if(f===i)a[c]=d;else a=a[c]={}}},mapAllAsObject:function(a,b){b||(b={});a||(a=this.getKey());for(var d;d=this.fetchAsObject();)this.mapAsObject(b,a,d);return b},getKey:function(){var a;
return a=this._type?Xmla.Rowset.KEYS[this._type]:this.getFieldNames()}};Xmla.Exception=function(a,b,d,c,e,f){this.type=a;this.code=b;this.message=d;this.source=e;this.helpfile=c;this.data=f;return this};Xmla.Exception.TYPE_WARNING="warning";Xmla.Exception.TYPE_ERROR="error";var l="http://code.google.com/p/xmla4js/wiki/ExceptionCodes";Xmla.Exception.MISSING_REQUEST_TYPE_CDE=-1;Xmla.Exception.MISSING_REQUEST_TYPE_MSG="Missing_Request_Type";Xmla.Exception.MISSING_REQUEST_TYPE_HLP=l+"#"+Xmla.Exception.MISSING_REQUEST_TYPE_CDE+
"_"+Xmla.Exception.MISSING_REQUEST_TYPE_MSG;Xmla.Exception.MISSING_STATEMENT_CDE=-2;Xmla.Exception.MISSING_STATEMENT_MSG="Missing_Statement";Xmla.Exception.MISSING_STATEMENT_HLP=l+"#"+Xmla.Exception.MISSING_STATEMENT_CDE+"_"+Xmla.Exception.MISSING_STATEMENT_MSG;Xmla.Exception.MISSING_URL_CDE=-3;Xmla.Exception.MISSING_URL_MSG="Missing_URL";Xmla.Exception.MISSING_URL_HLP=l+"#"+Xmla.Exception.MISSING_URL_CDE+"_"+Xmla.Exception.MISSING_URL_MSG;Xmla.Exception.NO_EVENTS_SPECIFIED_CDE=-4;Xmla.Exception.NO_EVENTS_SPECIFIED_MSG=
"No_Events_Specified";Xmla.Exception.NO_EVENTS_SPECIFIED_HLP=l+"#"+Xmla.Exception.NO_EVENTS_SPECIFIED_CDE+"_"+Xmla.Exception.NO_EVENTS_SPECIFIED_MSG;Xmla.Exception.WRONG_EVENTS_FORMAT_CDE=-5;Xmla.Exception.WRONG_EVENTS_FORMAT_MSG="Wrong_Events_Format";Xmla.Exception.WRONG_EVENTS_FORMAT_HLP=l+"#"+Xmla.Exception.NO_EVENTS_SPECIFIED_CDE+"_"+Xmla.Exception.NO_EVENTS_SPECIFIED_MSG;Xmla.Exception.UNKNOWN_EVENT_CDE=-6;Xmla.Exception.UNKNOWN_EVENT_MSG="Unknown_Event";Xmla.Exception.UNKNOWN_EVENT_HLP=l+"#"+
Xmla.Exception.UNKNOWN_EVENT_CDE+"_"+Xmla.Exception.UNKNOWN_EVENT_MSG;Xmla.Exception.INVALID_EVENT_HANDLER_CDE=-7;Xmla.Exception.INVALID_EVENT_HANDLER_MSG="Invalid_Events_Handler";Xmla.Exception.INVALID_EVENT_HANDLER_HLP=l+"#"+Xmla.Exception.INVALID_EVENT_HANDLER_CDE+"_"+Xmla.Exception.INVALID_EVENT_HANDLER_MSG;Xmla.Exception.ERROR_PARSING_RESPONSE_CDE=-8;Xmla.Exception.ERROR_PARSING_RESPONSE_MSG="Error_Parsing_Response";Xmla.Exception.ERROR_PARSING_RESPONSE_HLP=l+"#"+Xmla.Exception.ERROR_PARSING_RESPONSE_CDE+
"_"+Xmla.Exception.ERROR_PARSING_RESPONSE_MSG;Xmla.Exception.INVALID_FIELD_CDE=-9;Xmla.Exception.INVALID_FIELD_MSG="Invalid_Field";Xmla.Exception.INVALID_FIELD_HLP=l+"#"+Xmla.Exception.INVALID_FIELD_CDE+"_"+Xmla.Exception.INVALID_FIELD_MSG;Xmla.Exception.HTTP_ERROR_CDE=-10;Xmla.Exception.HTTP_ERROR_MSG="HTTP Error";Xmla.Exception.HTTP_ERROR_HLP=l+"#"+Xmla.Exception.INVALID_FIELD_CDE+"_"+Xmla.Exception.INVALID_FIELD_MSG;Xmla.Exception._newError=function(a,b,d){return new Xmla.Exception(Xmla.Exception.TYPE_ERROR,
Xmla.Exception[a+"_CDE"],Xmla.Exception[a+"_MSG"],Xmla.Exception[a+"_HLP"],b,d)};Xmla.Exception.prototype={type:null,code:null,message:null,source:null,helpfile:null,data:null,_throw:function(){throw this;}}})();
