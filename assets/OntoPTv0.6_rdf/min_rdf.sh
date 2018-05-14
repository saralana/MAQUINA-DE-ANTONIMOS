#!/bin/bash

grep -v "\(\
OntoPT:accaoNaoDaManeira\|\
OntoPT:accaoQueCausa\|\
OntoPT:causadorDe\|\
OntoPT:contidoEm\|\
OntoPT:devidoA\|\
OntoPT:dizSeDoQue\|\
OntoPT:dizSeSobre\|\
OntoPT:estadoD\|\
OntoPT:fazSeCom\|\
OntoPT:feitoDe\|\
OntoPT:feitoPeloQue\|\
OntoPT:finalidadeDe\|\
OntoPT:hiperonimoDe\|\
OntoPT:hiponimoDe\|\
OntoPT:inclui\|\
OntoPT:maneiraComPropriedade\|\
OntoPT:maneiraPorMeioDe\|\
OntoPT:meioParaManeira\|\
OntoPT:membroDe\|\
OntoPT:naoHaNaManeira\|\
OntoPT:originarioDe\|\
OntoPT:parteDe\|\
OntoPT:produtorDe\|\
OntoPT:produzidoPor\|\
OntoPT:propriedadeDaManeira\|\
OntoPT:propriedadeDeAlgo\|\
OntoPT:qualidadeD\|\
OntoPT:referidoPeloQue\|\
OntoPT:resultadoD\|\
OntoPT:servePara\|\
OntoPT:temComoParteAlgoComPropriedade\|\
OntoPT:temParte\|\
OntoPT:temQualidade\
\)" OntoPTv0.6.rdfs | tee OntoPTv0.6.min.rdfs
