//
// Autogenerated by Thrift Compiler (1.0.0-dev)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var Thrift = require('thrift').Thrift;
var ttypes = module.exports = {};
TCell = module.exports.TCell = function(args) {
  this.value = null;
  this.timestamp = null;
  if (args) {
    if (args.value !== undefined) {
      this.value = args.value;
    }
    if (args.timestamp !== undefined) {
      this.timestamp = args.timestamp;
    }
  }
};
TCell.prototype = {};
TCell.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.value = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I64) {
        this.timestamp = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

TCell.prototype.write = function(output) {
  output.writeStructBegin('TCell');
  if (this.value !== null && this.value !== undefined) {
    output.writeFieldBegin('value', Thrift.Type.STRING, 1);
    output.writeString(this.value);
    output.writeFieldEnd();
  }
  if (this.timestamp !== null && this.timestamp !== undefined) {
    output.writeFieldBegin('timestamp', Thrift.Type.I64, 2);
    output.writeI64(this.timestamp);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

ColumnDescriptor = module.exports.ColumnDescriptor = function(args) {
  this.name = null;
  this.maxVersions = 3;
  this.compression = 'NONE';
  this.inMemory = false;
  this.bloomFilterType = 'NONE';
  this.bloomFilterVectorSize = 0;
  this.bloomFilterNbHashes = 0;
  this.blockCacheEnabled = false;
  this.timeToLive = -1;
  if (args) {
    if (args.name !== undefined) {
      this.name = args.name;
    }
    if (args.maxVersions !== undefined) {
      this.maxVersions = args.maxVersions;
    }
    if (args.compression !== undefined) {
      this.compression = args.compression;
    }
    if (args.inMemory !== undefined) {
      this.inMemory = args.inMemory;
    }
    if (args.bloomFilterType !== undefined) {
      this.bloomFilterType = args.bloomFilterType;
    }
    if (args.bloomFilterVectorSize !== undefined) {
      this.bloomFilterVectorSize = args.bloomFilterVectorSize;
    }
    if (args.bloomFilterNbHashes !== undefined) {
      this.bloomFilterNbHashes = args.bloomFilterNbHashes;
    }
    if (args.blockCacheEnabled !== undefined) {
      this.blockCacheEnabled = args.blockCacheEnabled;
    }
    if (args.timeToLive !== undefined) {
      this.timeToLive = args.timeToLive;
    }
  }
};
ColumnDescriptor.prototype = {};
ColumnDescriptor.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.name = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.maxVersions = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.compression = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.BOOL) {
        this.inMemory = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.bloomFilterType = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.I32) {
        this.bloomFilterVectorSize = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.I32) {
        this.bloomFilterNbHashes = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 8:
      if (ftype == Thrift.Type.BOOL) {
        this.blockCacheEnabled = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 9:
      if (ftype == Thrift.Type.I32) {
        this.timeToLive = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ColumnDescriptor.prototype.write = function(output) {
  output.writeStructBegin('ColumnDescriptor');
  if (this.name !== null && this.name !== undefined) {
    output.writeFieldBegin('name', Thrift.Type.STRING, 1);
    output.writeString(this.name);
    output.writeFieldEnd();
  }
  if (this.maxVersions !== null && this.maxVersions !== undefined) {
    output.writeFieldBegin('maxVersions', Thrift.Type.I32, 2);
    output.writeI32(this.maxVersions);
    output.writeFieldEnd();
  }
  if (this.compression !== null && this.compression !== undefined) {
    output.writeFieldBegin('compression', Thrift.Type.STRING, 3);
    output.writeString(this.compression);
    output.writeFieldEnd();
  }
  if (this.inMemory !== null && this.inMemory !== undefined) {
    output.writeFieldBegin('inMemory', Thrift.Type.BOOL, 4);
    output.writeBool(this.inMemory);
    output.writeFieldEnd();
  }
  if (this.bloomFilterType !== null && this.bloomFilterType !== undefined) {
    output.writeFieldBegin('bloomFilterType', Thrift.Type.STRING, 5);
    output.writeString(this.bloomFilterType);
    output.writeFieldEnd();
  }
  if (this.bloomFilterVectorSize !== null && this.bloomFilterVectorSize !== undefined) {
    output.writeFieldBegin('bloomFilterVectorSize', Thrift.Type.I32, 6);
    output.writeI32(this.bloomFilterVectorSize);
    output.writeFieldEnd();
  }
  if (this.bloomFilterNbHashes !== null && this.bloomFilterNbHashes !== undefined) {
    output.writeFieldBegin('bloomFilterNbHashes', Thrift.Type.I32, 7);
    output.writeI32(this.bloomFilterNbHashes);
    output.writeFieldEnd();
  }
  if (this.blockCacheEnabled !== null && this.blockCacheEnabled !== undefined) {
    output.writeFieldBegin('blockCacheEnabled', Thrift.Type.BOOL, 8);
    output.writeBool(this.blockCacheEnabled);
    output.writeFieldEnd();
  }
  if (this.timeToLive !== null && this.timeToLive !== undefined) {
    output.writeFieldBegin('timeToLive', Thrift.Type.I32, 9);
    output.writeI32(this.timeToLive);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

TRegionInfo = module.exports.TRegionInfo = function(args) {
  this.startKey = null;
  this.endKey = null;
  this.id = null;
  this.name = null;
  this.version = null;
  this.serverName = null;
  this.port = null;
  if (args) {
    if (args.startKey !== undefined) {
      this.startKey = args.startKey;
    }
    if (args.endKey !== undefined) {
      this.endKey = args.endKey;
    }
    if (args.id !== undefined) {
      this.id = args.id;
    }
    if (args.name !== undefined) {
      this.name = args.name;
    }
    if (args.version !== undefined) {
      this.version = args.version;
    }
    if (args.serverName !== undefined) {
      this.serverName = args.serverName;
    }
    if (args.port !== undefined) {
      this.port = args.port;
    }
  }
};
TRegionInfo.prototype = {};
TRegionInfo.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.startKey = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.endKey = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I64) {
        this.id = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.name = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.BYTE) {
        this.version = input.readByte();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.STRING) {
        this.serverName = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.I32) {
        this.port = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

TRegionInfo.prototype.write = function(output) {
  output.writeStructBegin('TRegionInfo');
  if (this.startKey !== null && this.startKey !== undefined) {
    output.writeFieldBegin('startKey', Thrift.Type.STRING, 1);
    output.writeString(this.startKey);
    output.writeFieldEnd();
  }
  if (this.endKey !== null && this.endKey !== undefined) {
    output.writeFieldBegin('endKey', Thrift.Type.STRING, 2);
    output.writeString(this.endKey);
    output.writeFieldEnd();
  }
  if (this.id !== null && this.id !== undefined) {
    output.writeFieldBegin('id', Thrift.Type.I64, 3);
    output.writeI64(this.id);
    output.writeFieldEnd();
  }
  if (this.name !== null && this.name !== undefined) {
    output.writeFieldBegin('name', Thrift.Type.STRING, 4);
    output.writeString(this.name);
    output.writeFieldEnd();
  }
  if (this.version !== null && this.version !== undefined) {
    output.writeFieldBegin('version', Thrift.Type.BYTE, 5);
    output.writeByte(this.version);
    output.writeFieldEnd();
  }
  if (this.serverName !== null && this.serverName !== undefined) {
    output.writeFieldBegin('serverName', Thrift.Type.STRING, 6);
    output.writeString(this.serverName);
    output.writeFieldEnd();
  }
  if (this.port !== null && this.port !== undefined) {
    output.writeFieldBegin('port', Thrift.Type.I32, 7);
    output.writeI32(this.port);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

Mutation = module.exports.Mutation = function(args) {
  this.isDelete = false;
  this.column = null;
  this.value = null;
  this.writeToWAL = true;
  if (args) {
    if (args.isDelete !== undefined) {
      this.isDelete = args.isDelete;
    }
    if (args.column !== undefined) {
      this.column = args.column;
    }
    if (args.value !== undefined) {
      this.value = args.value;
    }
    if (args.writeToWAL !== undefined) {
      this.writeToWAL = args.writeToWAL;
    }
  }
};
Mutation.prototype = {};
Mutation.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.BOOL) {
        this.isDelete = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.column = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.value = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.BOOL) {
        this.writeToWAL = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Mutation.prototype.write = function(output) {
  output.writeStructBegin('Mutation');
  if (this.isDelete !== null && this.isDelete !== undefined) {
    output.writeFieldBegin('isDelete', Thrift.Type.BOOL, 1);
    output.writeBool(this.isDelete);
    output.writeFieldEnd();
  }
  if (this.column !== null && this.column !== undefined) {
    output.writeFieldBegin('column', Thrift.Type.STRING, 2);
    output.writeString(this.column);
    output.writeFieldEnd();
  }
  if (this.value !== null && this.value !== undefined) {
    output.writeFieldBegin('value', Thrift.Type.STRING, 3);
    output.writeString(this.value);
    output.writeFieldEnd();
  }
  if (this.writeToWAL !== null && this.writeToWAL !== undefined) {
    output.writeFieldBegin('writeToWAL', Thrift.Type.BOOL, 4);
    output.writeBool(this.writeToWAL);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

BatchMutation = module.exports.BatchMutation = function(args) {
  this.row = null;
  this.mutations = null;
  if (args) {
    if (args.row !== undefined) {
      this.row = args.row;
    }
    if (args.mutations !== undefined) {
      this.mutations = args.mutations;
    }
  }
};
BatchMutation.prototype = {};
BatchMutation.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.row = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.LIST) {
        var _size0 = 0;
        var _rtmp34;
        this.mutations = [];
        var _etype3 = 0;
        _rtmp34 = input.readListBegin();
        _etype3 = _rtmp34.etype;
        _size0 = _rtmp34.size;
        for (var _i5 = 0; _i5 < _size0; ++_i5)
        {
          var elem6 = null;
          elem6 = new ttypes.Mutation();
          elem6.read(input);
          this.mutations.push(elem6);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

BatchMutation.prototype.write = function(output) {
  output.writeStructBegin('BatchMutation');
  if (this.row !== null && this.row !== undefined) {
    output.writeFieldBegin('row', Thrift.Type.STRING, 1);
    output.writeString(this.row);
    output.writeFieldEnd();
  }
  if (this.mutations !== null && this.mutations !== undefined) {
    output.writeFieldBegin('mutations', Thrift.Type.LIST, 2);
    output.writeListBegin(Thrift.Type.STRUCT, this.mutations.length);
    for (var iter7 in this.mutations)
    {
      if (this.mutations.hasOwnProperty(iter7))
      {
        iter7 = this.mutations[iter7];
        iter7.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

TIncrement = module.exports.TIncrement = function(args) {
  this.table = null;
  this.row = null;
  this.column = null;
  this.ammount = null;
  if (args) {
    if (args.table !== undefined) {
      this.table = args.table;
    }
    if (args.row !== undefined) {
      this.row = args.row;
    }
    if (args.column !== undefined) {
      this.column = args.column;
    }
    if (args.ammount !== undefined) {
      this.ammount = args.ammount;
    }
  }
};
TIncrement.prototype = {};
TIncrement.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.table = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.row = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.column = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.I64) {
        this.ammount = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

TIncrement.prototype.write = function(output) {
  output.writeStructBegin('TIncrement');
  if (this.table !== null && this.table !== undefined) {
    output.writeFieldBegin('table', Thrift.Type.STRING, 1);
    output.writeString(this.table);
    output.writeFieldEnd();
  }
  if (this.row !== null && this.row !== undefined) {
    output.writeFieldBegin('row', Thrift.Type.STRING, 2);
    output.writeString(this.row);
    output.writeFieldEnd();
  }
  if (this.column !== null && this.column !== undefined) {
    output.writeFieldBegin('column', Thrift.Type.STRING, 3);
    output.writeString(this.column);
    output.writeFieldEnd();
  }
  if (this.ammount !== null && this.ammount !== undefined) {
    output.writeFieldBegin('ammount', Thrift.Type.I64, 4);
    output.writeI64(this.ammount);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

TRowResult = module.exports.TRowResult = function(args) {
  this.row = null;
  this.columns = null;
  if (args) {
    if (args.row !== undefined) {
      this.row = args.row;
    }
    if (args.columns !== undefined) {
      this.columns = args.columns;
    }
  }
};
TRowResult.prototype = {};
TRowResult.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.row = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.MAP) {
        var _size8 = 0;
        var _rtmp312;
        this.columns = {};
        var _ktype9 = 0;
        var _vtype10 = 0;
        _rtmp312 = input.readMapBegin();
        _ktype9 = _rtmp312.ktype;
        _vtype10 = _rtmp312.vtype;
        _size8 = _rtmp312.size;
        for (var _i13 = 0; _i13 < _size8; ++_i13)
        {
          var key14 = null;
          var val15 = null;
          key14 = input.readString();
          val15 = new ttypes.TCell();
          val15.read(input);
          this.columns[key14] = val15;
        }
        input.readMapEnd();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

TRowResult.prototype.write = function(output) {
  output.writeStructBegin('TRowResult');
  if (this.row !== null && this.row !== undefined) {
    output.writeFieldBegin('row', Thrift.Type.STRING, 1);
    output.writeString(this.row);
    output.writeFieldEnd();
  }
  if (this.columns !== null && this.columns !== undefined) {
    output.writeFieldBegin('columns', Thrift.Type.MAP, 2);
    output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.STRUCT, Thrift.objectLength(this.columns));
    for (var kiter16 in this.columns)
    {
      if (this.columns.hasOwnProperty(kiter16))
      {
        var viter17 = this.columns[kiter16];
        output.writeString(kiter16);
        viter17.write(output);
      }
    }
    output.writeMapEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

TScan = module.exports.TScan = function(args) {
  this.startRow = null;
  this.stopRow = null;
  this.timestamp = null;
  this.columns = null;
  this.caching = null;
  this.filterString = null;
  if (args) {
    if (args.startRow !== undefined) {
      this.startRow = args.startRow;
    }
    if (args.stopRow !== undefined) {
      this.stopRow = args.stopRow;
    }
    if (args.timestamp !== undefined) {
      this.timestamp = args.timestamp;
    }
    if (args.columns !== undefined) {
      this.columns = args.columns;
    }
    if (args.caching !== undefined) {
      this.caching = args.caching;
    }
    if (args.filterString !== undefined) {
      this.filterString = args.filterString;
    }
  }
};
TScan.prototype = {};
TScan.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.startRow = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.stopRow = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I64) {
        this.timestamp = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.LIST) {
        var _size18 = 0;
        var _rtmp322;
        this.columns = [];
        var _etype21 = 0;
        _rtmp322 = input.readListBegin();
        _etype21 = _rtmp322.etype;
        _size18 = _rtmp322.size;
        for (var _i23 = 0; _i23 < _size18; ++_i23)
        {
          var elem24 = null;
          elem24 = input.readString();
          this.columns.push(elem24);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.I32) {
        this.caching = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.STRING) {
        this.filterString = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

TScan.prototype.write = function(output) {
  output.writeStructBegin('TScan');
  if (this.startRow !== null && this.startRow !== undefined) {
    output.writeFieldBegin('startRow', Thrift.Type.STRING, 1);
    output.writeString(this.startRow);
    output.writeFieldEnd();
  }
  if (this.stopRow !== null && this.stopRow !== undefined) {
    output.writeFieldBegin('stopRow', Thrift.Type.STRING, 2);
    output.writeString(this.stopRow);
    output.writeFieldEnd();
  }
  if (this.timestamp !== null && this.timestamp !== undefined) {
    output.writeFieldBegin('timestamp', Thrift.Type.I64, 3);
    output.writeI64(this.timestamp);
    output.writeFieldEnd();
  }
  if (this.columns !== null && this.columns !== undefined) {
    output.writeFieldBegin('columns', Thrift.Type.LIST, 4);
    output.writeListBegin(Thrift.Type.STRING, this.columns.length);
    for (var iter25 in this.columns)
    {
      if (this.columns.hasOwnProperty(iter25))
      {
        iter25 = this.columns[iter25];
        output.writeString(iter25);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.caching !== null && this.caching !== undefined) {
    output.writeFieldBegin('caching', Thrift.Type.I32, 5);
    output.writeI32(this.caching);
    output.writeFieldEnd();
  }
  if (this.filterString !== null && this.filterString !== undefined) {
    output.writeFieldBegin('filterString', Thrift.Type.STRING, 6);
    output.writeString(this.filterString);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

IOError = module.exports.IOError = function(args) {
  Thrift.TException.call(this, "IOError")
  this.name = "IOError"
  this.message = null;
  if (args) {
    if (args.message !== undefined) {
      this.message = args.message;
    }
  }
};
Thrift.inherits(IOError, Thrift.TException);
IOError.prototype.name = 'IOError';
IOError.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.message = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

IOError.prototype.write = function(output) {
  output.writeStructBegin('IOError');
  if (this.message !== null && this.message !== undefined) {
    output.writeFieldBegin('message', Thrift.Type.STRING, 1);
    output.writeString(this.message);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

IllegalArgument = module.exports.IllegalArgument = function(args) {
  Thrift.TException.call(this, "IllegalArgument")
  this.name = "IllegalArgument"
  this.message = null;
  if (args) {
    if (args.message !== undefined) {
      this.message = args.message;
    }
  }
};
Thrift.inherits(IllegalArgument, Thrift.TException);
IllegalArgument.prototype.name = 'IllegalArgument';
IllegalArgument.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.message = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

IllegalArgument.prototype.write = function(output) {
  output.writeStructBegin('IllegalArgument');
  if (this.message !== null && this.message !== undefined) {
    output.writeFieldBegin('message', Thrift.Type.STRING, 1);
    output.writeString(this.message);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

AlreadyExists = module.exports.AlreadyExists = function(args) {
  Thrift.TException.call(this, "AlreadyExists")
  this.name = "AlreadyExists"
  this.message = null;
  if (args) {
    if (args.message !== undefined) {
      this.message = args.message;
    }
  }
};
Thrift.inherits(AlreadyExists, Thrift.TException);
AlreadyExists.prototype.name = 'AlreadyExists';
AlreadyExists.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.message = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

AlreadyExists.prototype.write = function(output) {
  output.writeStructBegin('AlreadyExists');
  if (this.message !== null && this.message !== undefined) {
    output.writeFieldBegin('message', Thrift.Type.STRING, 1);
    output.writeString(this.message);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

