// Code generated by protoc-gen-go. DO NOT EDIT.
// source: src/proto/Addons.proto

package proto

import (
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
	math "math"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion3 // please upgrade the proto package

type Type int32

const (
	Type_CHECKBOX     Type = 0
	Type_RADIO_BUTTON Type = 1
	Type_SLIDER       Type = 2
)

var Type_name = map[int32]string{
	0: "CHECKBOX",
	1: "RADIO_BUTTON",
	2: "SLIDER",
}

var Type_value = map[string]int32{
	"CHECKBOX":     0,
	"RADIO_BUTTON": 1,
	"SLIDER":       2,
}

func (x Type) String() string {
	return proto.EnumName(Type_name, int32(x))
}

func (Type) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_ad0e83bb8807fd1a, []int{0}
}

type AddonItem struct {
	// TODO: add multiple language to name & description
	XId                  string   `protobuf:"bytes,1,opt,name=_id,json=Id,proto3" json:"_id,omitempty"`
	Name                 string   `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	Price                float32  `protobuf:"fixed32,3,opt,name=price,proto3" json:"price,omitempty"`
	Available            bool     `protobuf:"varint,4,opt,name=available,proto3" json:"available,omitempty"`
	Description          string   `protobuf:"bytes,5,opt,name=description,proto3" json:"description,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *AddonItem) Reset()         { *m = AddonItem{} }
func (m *AddonItem) String() string { return proto.CompactTextString(m) }
func (*AddonItem) ProtoMessage()    {}
func (*AddonItem) Descriptor() ([]byte, []int) {
	return fileDescriptor_ad0e83bb8807fd1a, []int{0}
}

func (m *AddonItem) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_AddonItem.Unmarshal(m, b)
}
func (m *AddonItem) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_AddonItem.Marshal(b, m, deterministic)
}
func (m *AddonItem) XXX_Merge(src proto.Message) {
	xxx_messageInfo_AddonItem.Merge(m, src)
}
func (m *AddonItem) XXX_Size() int {
	return xxx_messageInfo_AddonItem.Size(m)
}
func (m *AddonItem) XXX_DiscardUnknown() {
	xxx_messageInfo_AddonItem.DiscardUnknown(m)
}

var xxx_messageInfo_AddonItem proto.InternalMessageInfo

func (m *AddonItem) GetXId() string {
	if m != nil {
		return m.XId
	}
	return ""
}

func (m *AddonItem) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *AddonItem) GetPrice() float32 {
	if m != nil {
		return m.Price
	}
	return 0
}

func (m *AddonItem) GetAvailable() bool {
	if m != nil {
		return m.Available
	}
	return false
}

func (m *AddonItem) GetDescription() string {
	if m != nil {
		return m.Description
	}
	return ""
}

type Addon struct {
	// TODO: add multiple language to name & description
	XId                  string       `protobuf:"bytes,1,opt,name=_id,json=Id,proto3" json:"_id,omitempty"`
	Name                 string       `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	Description          string       `protobuf:"bytes,3,opt,name=description,proto3" json:"description,omitempty"`
	RestId               string       `protobuf:"bytes,4,opt,name=rest_id,json=restId,proto3" json:"rest_id,omitempty"`
	AddonItems           []*AddonItem `protobuf:"bytes,5,rep,name=addon_items,json=addonItems,proto3" json:"addon_items,omitempty"`
	XType                Type         `protobuf:"varint,6,opt,name=__type,json=Type,proto3,enum=items.Type" json:"__type,omitempty"`
	XXX_NoUnkeyedLiteral struct{}     `json:"-"`
	XXX_unrecognized     []byte       `json:"-"`
	XXX_sizecache        int32        `json:"-"`
}

func (m *Addon) Reset()         { *m = Addon{} }
func (m *Addon) String() string { return proto.CompactTextString(m) }
func (*Addon) ProtoMessage()    {}
func (*Addon) Descriptor() ([]byte, []int) {
	return fileDescriptor_ad0e83bb8807fd1a, []int{1}
}

func (m *Addon) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Addon.Unmarshal(m, b)
}
func (m *Addon) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Addon.Marshal(b, m, deterministic)
}
func (m *Addon) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Addon.Merge(m, src)
}
func (m *Addon) XXX_Size() int {
	return xxx_messageInfo_Addon.Size(m)
}
func (m *Addon) XXX_DiscardUnknown() {
	xxx_messageInfo_Addon.DiscardUnknown(m)
}

var xxx_messageInfo_Addon proto.InternalMessageInfo

func (m *Addon) GetXId() string {
	if m != nil {
		return m.XId
	}
	return ""
}

func (m *Addon) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *Addon) GetDescription() string {
	if m != nil {
		return m.Description
	}
	return ""
}

func (m *Addon) GetRestId() string {
	if m != nil {
		return m.RestId
	}
	return ""
}

func (m *Addon) GetAddonItems() []*AddonItem {
	if m != nil {
		return m.AddonItems
	}
	return nil
}

func (m *Addon) GetXType() Type {
	if m != nil {
		return m.XType
	}
	return Type_CHECKBOX
}

func init() {
	proto.RegisterEnum("items.Type", Type_name, Type_value)
	proto.RegisterType((*AddonItem)(nil), "items.AddonItem")
	proto.RegisterType((*Addon)(nil), "items.Addon")
}

func init() { proto.RegisterFile("src/proto/Addons.proto", fileDescriptor_ad0e83bb8807fd1a) }

var fileDescriptor_ad0e83bb8807fd1a = []byte{
	// 296 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x8c, 0x91, 0xcd, 0x4a, 0x03, 0x31,
	0x10, 0xc7, 0xcd, 0x7e, 0xb5, 0x9d, 0x2d, 0xba, 0x0c, 0xa2, 0x39, 0x78, 0x58, 0x7b, 0x5a, 0x3c,
	0xb4, 0x58, 0x9f, 0xa0, 0x5f, 0xe0, 0xa2, 0x58, 0x88, 0x15, 0xc4, 0xcb, 0x92, 0x36, 0x39, 0x04,
	0xda, 0xdd, 0x65, 0x13, 0x84, 0xbe, 0x80, 0x6f, 0xe5, 0xbb, 0xc9, 0x8e, 0x9f, 0xe8, 0xc5, 0x4b,
	0x66, 0xfe, 0xff, 0x84, 0x5f, 0x86, 0xff, 0xc0, 0x89, 0x6d, 0x36, 0xa3, 0xba, 0xa9, 0x5c, 0x35,
	0x9a, 0x28, 0x55, 0x95, 0x76, 0x48, 0x02, 0x43, 0xe3, 0xf4, 0xce, 0x0e, 0x5e, 0x18, 0xf4, 0xc8,
	0xcf, 0x9d, 0xde, 0xe1, 0x11, 0xf8, 0x85, 0x51, 0x9c, 0xa5, 0x2c, 0xeb, 0x09, 0x2f, 0x57, 0x88,
	0x10, 0x94, 0x72, 0xa7, 0xb9, 0x47, 0x0e, 0xf5, 0x78, 0x0c, 0x61, 0xdd, 0x98, 0x8d, 0xe6, 0x7e,
	0xca, 0x32, 0x4f, 0xbc, 0x0b, 0x3c, 0x83, 0x9e, 0x7c, 0x96, 0x66, 0x2b, 0xd7, 0x5b, 0xcd, 0x83,
	0x94, 0x65, 0x5d, 0xf1, 0x6d, 0x60, 0x0a, 0xb1, 0xd2, 0x76, 0xd3, 0x98, 0xda, 0x99, 0xaa, 0xe4,
	0x21, 0xe1, 0x7e, 0x5a, 0x83, 0x57, 0x06, 0x21, 0x0d, 0xf2, 0xbf, 0x21, 0x7e, 0x01, 0xfd, 0x3f,
	0x40, 0x3c, 0x85, 0x4e, 0xa3, 0xad, 0x6b, 0x51, 0x01, 0xdd, 0x46, 0xad, 0xcc, 0x15, 0x5e, 0x42,
	0x2c, 0xdb, 0x8f, 0x0a, 0x4a, 0x80, 0x87, 0xa9, 0x9f, 0xc5, 0xe3, 0x64, 0x48, 0x6a, 0xf8, 0x95,
	0x85, 0x00, 0xf9, 0xd9, 0x5a, 0x3c, 0x87, 0xa8, 0x28, 0xdc, 0xbe, 0xd6, 0x3c, 0x4a, 0x59, 0x76,
	0x38, 0x8e, 0x3f, 0x5e, 0xaf, 0xf6, 0xb5, 0x16, 0x41, 0x7b, 0x5e, 0x8c, 0x81, 0x2a, 0xf6, 0xa1,
	0x3b, 0xbb, 0x5e, 0xcc, 0x6e, 0xa6, 0xcb, 0xc7, 0xe4, 0x00, 0x13, 0xe8, 0x8b, 0xc9, 0x3c, 0x5f,
	0x16, 0xd3, 0x87, 0xd5, 0x6a, 0x79, 0x97, 0x30, 0x04, 0x88, 0xee, 0x6f, 0xf3, 0xf9, 0x42, 0x24,
	0xde, 0xb4, 0xf3, 0x14, 0xd2, 0x32, 0xd6, 0x11, 0x95, 0xab, 0xb7, 0x00, 0x00, 0x00, 0xff, 0xff,
	0x48, 0x61, 0xa1, 0x28, 0xad, 0x01, 0x00, 0x00,
}
