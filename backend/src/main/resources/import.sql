
-- CREACION DE USUARIOS

INSERT INTO usuarios (usuario_id, nombre_apellido,usuario,contrasena,role) VALUES (1,'catrielll escobarrrr','catrieloski','asda1234','ADMINISTRADOR');
INSERT INTO usuarios (usuario_id, nombre_apellido,usuario,contrasena,role) VALUES (2,'gustavo baranda','gustavitojs','gustaveli','ADMINISTRADOR');
INSERT INTO usuarios (usuario_id, nombre_apellido,usuario,contrasena,role) VALUES (3,'M Eugenia Baba','meugenia','meuge','ADMINISTRADOR');
INSERT INTO usuarios (usuario_id, nombre_apellido,usuario,contrasena,role) VALUES (4,'Marcelo Galimberti','mgalim','pelakiller','ADMINISTRADOR');
INSERT INTO usuarios (usuario_id, nombre_apellido,usuario,contrasena,role) VALUES (5,'Alejandro Abadi','alecuadrado','aleback','ADMINISTRADOR');
INSERT INTO usuarios (usuario_id, nombre_apellido,usuario,contrasena,role) VALUES (6,'Juan Perez','juancito','medico','MEDICO');
INSERT INTO usuarios (usuario_id, nombre_apellido,usuario,contrasena,role) VALUES (7,'Carlo Rojas','carlos','medico','MEDICO');
INSERT INTO usuarios (usuario_id, nombre_apellido,usuario,contrasena,role) VALUES (8,'Robertita Gomez','robertita','medico','MEDICO');
INSERT INTO usuarios (usuario_id, nombre_apellido,usuario,contrasena,role) VALUES (9,'Juancita Perez','juancita','medico','MEDICO');


-- ESPECIALIDADES

INSERT INTO especialidades (especialidad_id,nomenclador,precio,tiempo_consulta,nombre_especialidad) VALUES (1,2000,3500,25,'fisio_kinesiologia');
INSERT INTO especialidades (especialidad_id,nomenclador,precio,tiempo_consulta,nombre_especialidad) VALUES (2,2200,4000,30,'salud_mental');
INSERT INTO especialidades (especialidad_id,nomenclador,precio,tiempo_consulta,nombre_especialidad) VALUES (3,2000,3500,15,'traumatologia');


-- MEDICOS


INSERT INTO medicos (usuario_id,especialidad_id) VALUES(6,1);
INSERT INTO medicos (usuario_id,especialidad_id) VALUES(7,2);
INSERT INTO medicos (usuario_id,especialidad_id) VALUES(8,3);
INSERT INTO medicos (usuario_id,especialidad_id) VALUES(9,3);


INSERT INTO pacientes( obra_social, apellido, nombre, dni, tipo_sangre, fecha_nac, sexo) VALUES ( TRUE, 'González', 'Lucía', '30548961', 'A+', '1990-07-14', 'F');
INSERT INTO pacientes( obra_social, apellido, nombre, dni, tipo_sangre, fecha_nac, sexo) VALUES ( FALSE, 'Rodríguez', 'Marcos', '28412345', 'O-', '1985-12-22', 'M');
INSERT INTO pacientes( obra_social, apellido, nombre, dni, tipo_sangre, fecha_nac, sexo) VALUES ( TRUE, 'Fernández', 'Sofía', '33456987', 'B+', '1993-03-09', 'F');
INSERT INTO pacientes( obra_social, apellido, nombre, dni, tipo_sangre, fecha_nac, sexo) VALUES ( FALSE, 'López', 'Martín', '29345678', 'AB-', '1988-05-30', 'M');
INSERT INTO pacientes( obra_social, apellido, nombre, dni, tipo_sangre, fecha_nac, sexo) VALUES ( TRUE, 'Pérez', 'Carla', '34561234', 'O+', '1995-11-11', 'F');


INSERT INTO registros_clinicos(paciente_id,medico_id,fecha,informe,motivo) VALUES(1,1,'2024-09-14','Reposo por 24 hs. Cualquier cosa acudir de emergencia.','Fiebre alta');
INSERT INTO registros_clinicos(paciente_id,medico_id,fecha,informe,motivo) VALUES(2,2,'2024-05-25','Siempre le duele la cabeza','Dolor de cabeza');
INSERT INTO registros_clinicos(paciente_id,medico_id,fecha,informe,motivo) VALUES(4,3,'2024-09-21','El paciente presenta vómitos desde hace dos días\nSe le indica un antiemético y bebidas isotónicas\nSe lo volverá a controlar en tres días','Dolor de cabeza');
INSERT INTO registros_clinicos(paciente_id,medico_id,fecha,informe,motivo) VALUES(1,4,'2024-08-11','El paciente presenta dolores persistentes de cabeza, punzantes. De larga duración y molestia a la luz.\nSe le indica analgécico de 1gr cada 8hs. \nSe indica tomografía computada y resonancia magnética de cabeza','Jaqueca');
INSERT INTO registros_clinicos(paciente_id,medico_id,fecha,informe,motivo) VALUES(2,2,'2024-09-28','El paciente presenta sintomas de alta presión','Alta presión');
INSERT INTO registros_clinicos(paciente_id,medico_id,fecha,informe,motivo) VALUES(3,2,'2024-09-28','La paciente presenta vómitos desde hace 36 horas. Se indica un antiemético','Vomitos');

INSERT INTO turnos (paciente_id,medico_id,fecha,hora,acreditado,es_sobre_turno) VALUES (1,1,'2024-10-14','08:00:00',false,false);
INSERT INTO turnos (paciente_id,medico_id,fecha,hora,acreditado,es_sobre_turno) VALUES (2,2,'2024-10-18','18:00:00',false,false);
INSERT INTO turnos (paciente_id,medico_id,fecha,hora,acreditado,es_sobre_turno) VALUES (3,3,'2024-10-16','10:00:00',false,false);
INSERT INTO turnos (paciente_id,medico_id,fecha,hora,acreditado,es_sobre_turno) VALUES (4,1,'2024-10-15','09:00:00',false,false);
INSERT INTO turnos (paciente_id,medico_id,fecha,hora,acreditado,es_sobre_turno) VALUES (5,2,'2024-10-14','15:00:00',false,false);
INSERT INTO turnos (paciente_id,medico_id,fecha,hora,acreditado,es_sobre_turno) VALUES (2,4,'2024-10-14','14:00:00',false,false);