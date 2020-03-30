// go
protoc src/proto/*.proto --go_out=plugins=grpc:./../items/src/model/
// js
protoc src/proto/*.proto --js_out=import_style=commonJS,binary:./src/model/.

//ts
PROTOC_GEN_TS_PATH="../node_modules/.bin/protoc-gen-ts"
protoc --plugin=protoc-gen-ts=../node_modules/.bin/protoc-gen-ts src/proto/*.proto --ts_out=import_style=commonJS,binary:./../items/src/model/