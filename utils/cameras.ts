import type { Option } from "~/components/atoms/Select.vue";

export const camerasOptions: Option[] = [
  {
    label: "EDL_RUCAM",
    value: "EDL_RUCAM",
    description: "Rover Up-Look Camera",
  },
  {
    label: "EDL_RDCAM",
    value: "EDL_RDCAM",
    description: "Rover Down-Look Camera",
  },
  {
    label: "EDL_DDCAM",
    value: "EDL_DDCAM",
    description: "Descent Stage Down-Look Camera",
  },
  {
    label: "EDL_PUCAM1",
    value: "EDL_PUCAM1",
    description: "Parachute Up-Look Camera A",
  },
  {
    label: "EDL_PUCAM2",
    value: "EDL_PUCAM2",
    description: "Parachute Up-Look Camera B",
  },
  {
    label: "NAVCAM_LEFT",
    value: "NAVCAM_LEFT",
    description: "Navigation Camera - Left",
  },
  {
    label: "NAVCAM_RIGHT",
    value: "NAVCAM_RIGHT",
    description: "Navigation Camera - Right",
  },
  {
    label: "MCZ_RIGHT",
    value: "MCZ_RIGHT",
    description: "Mast Camera Zoom - Right",
  },
  {
    label: "MCZ_LEFT",
    value: "MCZ_LEFT",
    description: "Mast Camera Zoom - Left",
  },
  {
    label: "FRONT_HAZCAM_LEFT_A",
    value: "FRONT_HAZCAM_LEFT_A",
    description: "Front Hazard Avoidance Camera - Left",
  },
  {
    label: "FRONT_HAZCAM_RIGHT_A",
    value: "FRONT_HAZCAM_RIGHT_A",
    description: "Front Hazard Avoidance Camera - Right",
  },
  {
    label: "REAR_HAZCAM_LEFT",
    value: "REAR_HAZCAM_LEFT",
    description: "Rear Hazard Avoidance Camera - Left",
  },
  {
    label: "REAR_HAZCAM_RIGHT",
    value: "REAR_HAZCAM_RIGHT",
    description: "Rear Hazard Avoidance Camera - Right",
  },
  { label: "SKYCAM", value: "SKYCAM", description: "MEDA Skycam" },
  {
    label: "SHERLOC_WATSON",
    value: "SHERLOC_WATSON",
    description: "SHERLOC WATSON Camera",
  },
];
