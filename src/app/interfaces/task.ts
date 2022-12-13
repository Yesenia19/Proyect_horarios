export interface Task {
    nombre_carrera: String,
    coordinador_carrera: String
  }
export interface cicloescolar{
  periodo:string,
  anio:number,
  registro_grupos_inicio:Date,
  registro_grupos_termino:Date,
  registro_disponibilidad_inicio:Date,
  registro_disponibilidad_termino:Date,
  registro_contrataciones_inicio:Date,
  registro_contrataciones_termino:Date,
  registro_horarios_secretaria_inicio:Date,
  registro_horarios_secretaria_termino:Date,
  registro_aprobacion_coordi_docente_inicio:Date,
  registro_aprobacion_coordi_docente_termino:Date
}

export interface grupos{
      cuatrimestre: number,
      no_grupo: number,
      hora_entrada_minima: string,
      hora_salida_maxima: string,
      ciclo_escolar: number,
      carrera: number,
}
export interface coordinador{
  id_usuario: number,
  nombre_usuario: string,
  apellido_paterno: string,
  apellido_materno: string,
  email: string,
  tipo_usuario: string
}

export interface carrera{
  id_carrera: number,
  nombre_carrera: string,
  id_usuario: number,
  nombre_usuario: string,
  apellido_paterno: string,
  apellido_materno: string
}

export interface ciclo{
  id_ciclo_escolar: number,
  periodo: string,
  anio: number,
  registro_grupos_inicio: string,
  registro_grupos_termino: string,
  registro_disponibilidad_inicio: string,
  registro_disponibilidad_termino: string,
  registro_contrataciones_inicio: string,
  registro_contrataciones_termino:string,
  registro_horarios_secretaria_inicio: string,
  registro_horarios_secretaria_termino: string,
  registro_aprobacion_coordi_docente_inicio: string,
  registro_aprobacion_coordi_docente_termino: string
}
export interface planestudios{
    id_materia: number,
    nombre_materia: string,
    cuatrimestre: number,
    total_horas: number,
    total_horas_semana: number,
    carrera: number
}

export interface disponibilidad{
      id_usuario: number,
      id_ciclo_escolar: number,
      lunesEntrada: string,
      lunesSalida: string,
      martesEntrada: string,
      martesSalida: string,
      miercolesEntrada: string,
      miercolesSalida: string,
      juevesEntrada: string,
      juevesSalida: string,
      viernesEntrada: string,
      viernesSalida: string,
      sabadoEntrada: string,
      sabadoSalida: string
}
export interface usuario{
  nombre_usuario: string,
  apellido_paterno: string,
  apellido_materno: string,
  email: string,
  tipo_usuario: string
}
export interface docente{
  nombre_usuario: string,
  apellido_paterno: string,
  apellido_materno: string,
  email: string,
  tipo_usuario: string
}