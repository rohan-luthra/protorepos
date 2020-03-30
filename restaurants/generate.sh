// go
protoc src/proto/*.proto --go_out=plugins=grpc:.
// js
protoc src/proto/*.proto --js_out=import_style=commonJS,binary:./src/model/.

//ts
protoc --plugin=protoc-gen-ts=../node_modules/.bin/protoc-gen-ts src/proto/*.proto --ts_out=import_style=commonJS,binary:.