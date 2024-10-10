
-- CREACION DE USUARIOS

INSERT INTO usuarios (usuario_id, nombre,apellido,usuario,contrasena,role) VALUES (1,'catrielll','escobarrrr','catrieloski','asda1234','ADMINISTRADOR');
INSERT INTO usuarios (usuario_id, nombre,apellido,usuario,contrasena,role) VALUES (2,'gustavo','baranda','gustavitojs','gustaveli','ADMINISTRADOR');
INSERT INTO usuarios (usuario_id, nombre,apellido,usuario,contrasena,role) VALUES (3,'M Eugenia','Baba','meugenia','meuge','ADMINISTRADOR');
INSERT INTO usuarios (usuario_id, nombre,apellido,usuario,contrasena,role) VALUES (4,'Marcelo','Galimberti','mgalim','pelakiller','ADMINISTRADOR');
INSERT INTO usuarios (usuario_id, nombre,apellido,usuario,contrasena,role) VALUES (5,'Alejandro','Abadi','alecuadrado','aleback','ADMINISTRADOR');
INSERT INTO usuarios (usuario_id, nombre,apellido,usuario,contrasena,role) VALUES (6,'Juan','Perez','juancito','medico','MEDICO');
INSERT INTO usuarios (usuario_id, nombre,apellido,usuario,contrasena,role) VALUES (7,'Carlos','Rojas','carlos','medico','MEDICO');
INSERT INTO usuarios (usuario_id, nombre,apellido,usuario,contrasena,role) VALUES (8,'Robertita','Gomez','robertita','medico','MEDICO');
INSERT INTO usuarios (usuario_id, nombre,apellido,usuario,contrasena,role) VALUES (9,'Juancita','Perez','juancita','medico','MEDICO');


-- ESPECIALIDADES

INSERT INTO especialidades (especialidad_id,nomenclador,precio,tiempo_consulta,nombre_especialidad) VALUES (1,2000,3500,25,'fisio_kinesiologia');
INSERT INTO especialidades (especialidad_id,nomenclador,precio,tiempo_consulta,nombre_especialidad) VALUES (2,2200,4000,30,'salud_mental');
INSERT INTO especialidades (especialidad_id,nomenclador,precio,tiempo_consulta,nombre_especialidad) VALUES (3,2000,3500,15,'traumatologia');
INSERT INTO especialidades (especialidad_id,nomenclador,precio,tiempo_consulta,nombre_especialidad) VALUES (4,2000,3500,15,'consulta_random');


-- MEDICOS


INSERT INTO medicos (medico_id,usuario_id,especialidad_id) VALUES(1,6,1);
INSERT INTO medicos (medico_id,usuario_id,especialidad_id) VALUES(2,7,2);
INSERT INTO medicos (medico_id,usuario_id,especialidad_id) VALUES(3,8,3);
INSERT INTO medicos (medico_id,usuario_id,especialidad_id) VALUES(4,9,4);


