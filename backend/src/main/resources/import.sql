
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


INSERT INTO pacientes(paciente_id, obra_social, apellido, nombre, dni, tipo_sangre, fecha_nac, sexo) VALUES (1, TRUE, 'González', 'Lucía', '30548961', 'A+', '1990-07-14', 'F');

INSERT INTO pacientes(paciente_id, obra_social, apellido, nombre, dni, tipo_sangre, fecha_nac, sexo) VALUES (2, FALSE, 'Rodríguez', 'Marcos', '28412345', 'O-', '1985-12-22', 'M');

INSERT INTO pacientes(paciente_id, obra_social, apellido, nombre, dni, tipo_sangre, fecha_nac, sexo) VALUES (3, TRUE, 'Fernández', 'Sofía', '33456987', 'B+', '1993-03-09', 'F');

INSERT INTO pacientes(paciente_id, obra_social, apellido, nombre, dni, tipo_sangre, fecha_nac, sexo) VALUES (4, FALSE, 'López', 'Martín', '29345678', 'AB-', '1988-05-30', 'M');

INSERT INTO pacientes(paciente_id, obra_social, apellido, nombre, dni, tipo_sangre, fecha_nac, sexo) VALUES (5, TRUE, 'Pérez', 'Carla', '34561234', 'O+', '1995-11-11', 'F');

INSERT INTO turnos (turno_id,paciente_id,medico_id,fecha,acreditado) VALUES (1,1,1,'2024-10-14 08:00:00',false);
INSERT INTO turnos (turno_id,paciente_id,medico_id,fecha,acreditado) VALUES (2,2,2,'2024-10-18 18:00:00',false);
INSERT INTO turnos (turno_id,paciente_id,medico_id,fecha,acreditado) VALUES (3,3,3,'2024-10-16 10:00:00',false);
INSERT INTO turnos (turno_id,paciente_id,medico_id,fecha,acreditado) VALUES (4,4,1,'2024-10-15 09:00:00',false);
INSERT INTO turnos (turno_id,paciente_id,medico_id,fecha,acreditado) VALUES (5,5,2,'2024-10-14 15:00:00',false);
INSERT INTO turnos (turno_id,paciente_id,medico_id,fecha,acreditado) VALUES (6,2,4,'2024-10-14 14:00:00',false);