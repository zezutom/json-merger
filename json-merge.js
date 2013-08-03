/**
 * @author Tomas Zezula
 */
Core.init();
Core.register("menu", Menu);
Core.register("userInputContainer", UserInputContainer);
Core.register("mergeOutputContainer", MergeOutputContainer);
Core.register("prettyPrinter", PrettyPrinter);
Core.register("jsonMerger", JsonMerger);
Core.startAll();
