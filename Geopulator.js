const story = PYRAMIDE_ENTKORREKTOR.RUN3(x);
const data = PYRAMIDE.RUN3(x);

return {
  story,
  data,
  tempo: story.reorg / data.reorg,
  axis: "ORG-REORG-NC",
  mode: "NARRATIV"
};
